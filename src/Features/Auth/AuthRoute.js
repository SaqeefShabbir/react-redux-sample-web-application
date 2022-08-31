import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";

import {
  selectAuthUser
} from '../Login/Reducer';

const AuthRoute = props => {
  const isAuthUser = useSelector(selectAuthUser);
  const { type } = props;
  if (type === "guest" && isAuthUser) return <Redirect to="/Main" />;
  else if (type === "private" && !isAuthUser) return <Redirect to="/" />;

  return <Route {...props} />;
};

export default AuthRoute;