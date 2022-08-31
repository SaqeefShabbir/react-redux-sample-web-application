import View from './View';
import { useDispatch } from 'react-redux';
import {
    setAuthUser,
} from './Reducer';

const Login = () => {
    const dispatch = useDispatch();

    const submitCredentials = (loginCredentials) => {
        dispatch(setAuthUser(loginCredentials));
    }

    return (
        <View submitCredentials={submitCredentials}></View>
    );
}

export default Login;