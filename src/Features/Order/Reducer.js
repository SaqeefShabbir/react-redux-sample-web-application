import Environment from "../../Environment/Environment";

const initialState = {
    orderItems: [],
    totalItems: 0,
    isLoading: false,
    errors: [],
    hasError: false
}

export default function OrderReducer(state = initialState, action) {
    switch (action.type) {
        case 'orderItems/orderItemsAdded': {
            return {
                ...state,
                isLoading: false,
                orderItems: [
                    ...state.orderItems,
                    action.payload
                ],
                totalItems: state.totalItems + 1
            }
        }
        case 'orderItems/orderItemsLoaded': {
            return {
                ...state,
                isLoading: false,
                orderItems: action.payload,
                totalItems: action.payload.length
            }
        }
        case 'orderItems/orderItemsLoading': {
            return {
                ...state,
                isLoading: action.payload
            }
        }
        case 'orderItems/orderItemsDeleted': {
            return {
                ...state,
                isLoading: false,
                orderItems: [],
                totalItems: 0
            }
        }
        case 'orderItems/orderItemsDeleteById': {
            let orderItem = state.orderItems.find(orderItem => orderItem.id === action.payload);
            let index = state.orderItems.indexOf(orderItem);
            if (index > -1) {
                state.orderItems.splice(index, 1);
            }
            state.totalItems = state.totalItems - 1;
            return { ...state, isLoading: false, orderItems: state.orderItems, totalItems: state.totalItems };
        }
        case 'orderItems/orderItemsError': {
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

export async function addItemToCartAsync(dispatch, orderItem) {
    loadingAsync(dispatch);

    fetch(Environment.apiUrl + '/orderItem/post', {
        mode: 'cors',    
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Origin': 'http://localhost:3000'
        },
        cache: 'no-cache',
        credentials: 'same-origin',
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(orderItem)
    }).then((response) => {
        response.text().then(function (text) {
            dispatch({ type: 'orderItems/orderItemsAdded', payload: JSON.parse(text) })
        });
    }).catch((error) => {
        dispatch({ type: 'orderItems/orderItemsError', payload: error })
    });
}

export async function removeItemFromCartAsync(dispatch, id) {
    loadingAsync(dispatch);

    fetch(Environment.apiUrl + '/orderItem/deleteById/' + id, {
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
    }).then(
        dispatch({ type: 'orderItems/orderItemsDeleteById', payload: id })
    ).catch((error) => {
        dispatch({ type: 'orderItems/orderItemsError', payload: error })
    });
}

export async function getOrderItemsAsync(dispatch) {
    loadingAsync(dispatch);
    
    fetch(Environment.apiUrl + '/orderItem/all', {
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
            dispatch({ type: 'orderItems/orderItemsLoaded', payload: JSON.parse(text) })
        });
    }).catch((error) => {
        dispatch({ type: 'orderItems/orderItemsError', payload: error })
    });
}

export async function removeOrderItemsAsync(dispatch) {
    loadingAsync(dispatch);

    fetch(Environment.apiUrl + '/orderItem/deleteAll', {
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
    }).then(
        dispatch({ type: 'orderItems/orderItemsDeleted' })
    ).catch((error) => {
        dispatch({ type: 'orderItems/orderItemsError', payload: error })
    });
}