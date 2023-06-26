import React, { useEffect, useState } from "react";
import bcrypt from "bcryptjs";

interface LoginFormState {
	email: string;
	password: string;
}

interface SessionToken {
	token: string;
	expirationTime: number;
}

const LoginPage = () => {
	const [loginCred, setLoginCred] = useState<LoginFormState>({
		email: "",
		password: "",
	});

	function generateSessionToken(cred: LoginFormState) {
		const saltRounds = 10;

		// Generate a hash of the email and password
		const hashedData = bcrypt.hashSync(cred.email + cred.password, saltRounds);

		// Include the expiration time in the token
		const expirationTime = Date.now() + 60 * 60 * 1000; // Setting Expiration to 1 hour

		return {
			token: hashedData,
			expirationTime: expirationTime,
		};
	}

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		console.log(loginCred);
		const sessionToken = generateSessionToken(loginCred);
		localStorage.setItem("sessionToken", JSON.stringify(sessionToken));
		window.location.href = "/dashboard";
		console.log(sessionToken.token);
		console.log(sessionToken.expirationTime);
	}

	return (
		<div className="flex justify-center items-center h-screen">
			<div className="max-w-md mx-auto">
				<form onSubmit={handleSubmit}>
					<div className="mb-4">
						<label
							htmlFor="email"
							className="block text-gray-700 font-bold mb-2"
						>
							Email
						</label>
						<input
							type="email"
							id="email"
							value={loginCred.email}
							onChange={(e) => {
								setLoginCred({
									...loginCred,
									email: e.target.value,
								});
							}}
							className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
							placeholder="Enter your email"
						/>
					</div>
					<div className="mb-6">
						<label
							htmlFor="password"
							className="block text-gray-700 font-bold mb-2"
						>
							Password
						</label>
						<input
							type="password"
							id="password"
							value={loginCred.password}
							onChange={(e) => {
								setLoginCred({
									...loginCred,
									password: e.target.value,
								});
							}}
							className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
							placeholder="Enter your password"
						/>
					</div>
					<div className="flex items-center justify-center">
						<button
							type="submit"
							className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:bg-blue-600"
						>
							Login
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default LoginPage;
