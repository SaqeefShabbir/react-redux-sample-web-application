import Environment from "../../Environment/Environment";

const initialState = {
    items: [],
    isLoading: false,
    errors: [],
    hasError: false
}

export default function MenuReducer(state = initialState, action) {
    switch (action.type) {
        case 'items/itemsLoaded': {
            return {
                ...state,
                isLoading: false,
                items: action.payload
            }
        }
        case 'items/itemsLoading': {
            return {
                ...state,
                isLoading: action.payload
            }
        }
        case 'items/itemsError': {
            return {
                ...state,
                isLoading: false,
                hasError: true,
                errors: [
                    ...state.errors,
                    action.payload
                ]
            }
        }
        default:
            return state
    }
}

export async function loadingAsync(dispatch) {
    dispatch({ type: 'orderItems/orderItemsLoading', payload: true })
}

export async function getItemsAsync(dispatch) {
    loadingAsync(dispatch);

    fetch(Environment.apiUrl + '/item/all', {
        mode: 'cors',    
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Origin': 'http://localhost:3000'
        },
        cache: 'no-cache',
        credentials: 'same-origin',
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
    }).then((response) => {
        response.text().then(function (text) {
            dispatch({ type: 'items/itemsLoaded', payload: JSON.parse(text) })
        });
    }).catch((error) => {
        dispatch({ type: 'items/itemsError', payload: error })
    });
}