import { useState, useEffect } from "react";
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from "react-router-dom";
import AuthRoute from "./Authroute";
import LoginPage from "./components/loginPage";
import DashboardPage from "./components/dashboard";
import ProfilePage from "./components/profilePage";
import AboutPage from "./components/aboutPage";
import ContactPage from "./components/contactPage";

interface SessionToken {
	token: string;
	expirationTime: number;
}

function App() {
	const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	function isTokenExpired(tokenData: SessionToken) {
		console.log("isTokenExpired", tokenData);
		const currentTimestamp = Date.now();

		// Check if the current timestamp is greater than the token's expiration time
		return currentTimestamp > tokenData.expirationTime;
	}

	useEffect(() => {
		// Check if there is a token in localStorage
		const sessionToken: string | null = localStorage.getItem("sessionToken");

		if (sessionToken) {
			const sessionTokenData = JSON.parse(sessionToken);

			console.log("sessionTokenData", isTokenExpired(sessionTokenData));
			if (!isTokenExpired(sessionTokenData)) {
				// Token is valid
				console.log("ladjkflakdf");
				setIsAuthenticated(true);
				setIsLoading(false);
			} else {
				// Token has expired
				setIsAuthenticated(false);
				setIsLoading(false);
				localStorage.removeItem("sessionToken");
			}
		} else {
			// No token found
			setIsAuthenticated(false);
			setIsLoading(false);
		}
	}, [isAuthenticated]);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	return (
		<Router>
			<Switch>
				<AuthRoute
					exact
					path="/dashboard"
					component={DashboardPage}
					isAuthenticated={isAuthenticated}
				/>
				<AuthRoute
					path="/profile"
					component={ProfilePage}
					isAuthenticated={isAuthenticated}
				/>
				{!isAuthenticated ? (
					<Route path="/login" component={LoginPage} />
				) : (
					<Redirect to="/dashboard" />
				)}
				{!isAuthenticated ? (
					<Route path="/login" component={LoginPage} />
				) : (
					<Redirect to="/profile" />
				)}
				<Route path="/about" component={AboutPage} />
				<Route path="/contact" component={ContactPage} />
			</Switch>
		</Router>
	);
}

export default App;
