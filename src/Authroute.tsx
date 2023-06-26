import React, { ReactComponentElement, ReactElement } from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";

interface AuthRouteProps extends RouteProps {
	component: React.ComponentType<any>;
	isAuthenticated: boolean;
}

const AuthRoute: React.FC<AuthRouteProps> = ({
	component: Component,
	isAuthenticated,
	...rest
}) => {
	console.log("AuthRoute", isAuthenticated);
	return (
		<Route
			{...rest}
			render={(props) =>
				isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
			}
		/>
	);
};

export default AuthRoute;
