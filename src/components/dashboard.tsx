import React from "react";
import styled from "styled-components";
// import { LineChart, Line, XAxis, CartesianGrid } from "recharts";
import { Line, Bar, Doughnut } from "react-chartjs-2";
import LineChart from "./lineChart";
import {
	Chart as ChartJS,
	LineElement,
	CategoryScale,
	LinearScale,
	PointElement,
	registerables,
} from "chart.js";
import Countries from "./Countries";
import ActiveUsersStats from "./ActiveUsersStats";

ChartJS.register(
	LineElement,
	CategoryScale,
	LinearScale,
	PointElement,
	...registerables
);

const DashboardPage = () => {
	const Title = styled.h1<{ $success?: boolean }>`
		font-size: 0.8em;
		text-align: center;
		color: ${(props) => (props.$success ? "#9bc9ab" : "#E79C8E")};
	`;

	// Create a Wrapper component that'll render a <section> tag with some styles
	const Wrapper = styled.section<{ $success?: boolean }>`
		padding: 0.2em;
		background: ${(props) => (props.$success ? "#dbf8e8" : "#F9EBE8")};
	`;
	const barData = {
		labels: ["27 Nov", "28 Nov", "29 Nov", "30 Nov", "1 Dec", "2 Dec", "3 Dec"],
		datasets: [
			{
				label: "",
				data: [65, 59, 80, 81, 56, 55, 40],
				backgroundColor: [
					"rgba(255, 99, 132, 0.2)",
					"rgba(255, 159, 64, 0.2)",
					"rgba(255, 205, 86, 0.2)",
					"rgba(75, 192, 192, 0.2)",
					"rgba(54, 162, 235, 0.2)",
					"rgba(153, 102, 255, 0.2)",
					"rgba(201, 203, 207, 0.2)",
				],
				borderColor: [
					"rgb(255, 99, 132)",
					"rgb(255, 159, 64)",
					"rgb(255, 205, 86)",
					"rgb(75, 192, 192)",
					"rgb(54, 162, 235)",
					"rgb(153, 102, 255)",
					"rgb(201, 203, 207)",
				],
				borderWidth: 1,
			},
		],
	};

	const pieData = {
		labels: ["Red", "Blue", "Yellow"],
		datasets: [
			{
				label: "My First Dataset",
				data: [300, 50, 100],
				backgroundColor: [
					"rgb(255, 99, 132)",
					"rgb(54, 162, 235)",
					"rgb(255, 205, 86)",
				],
				hoverOffset: 4,
			},
		],
	};

	const data = {
		labels: [
			"27 Nov",
			"28 Nov",
			"29 Nov",
			"30 Nov",
			"1 Dec",
			"2 Dec",
			"3 Dec",
			"4 Dec",
		],
		datasets: [
			{
				// label: "# of Votes",
				data: [5, 5.4, 5, 4.8, 5, 5.2, 5.4, 5],
				backgroundColor: "rgb(255, 99, 132)",
				fill: false,
				borderColor: "rgba(255, 99, 132, 0.2)",
				pointBorderColor: "transparent",
				pointBorderWidth: 4,
				tension: 0.5,
			},
		],
	};

	const options = {
		scales: {
			x: {
				grid: {
					display: false,
				},
			},
			y: {},
		},
	};

	const Button = styled.button<{ $primary?: boolean }>`
		/* Adapt the colors based on primary prop */
		background: ${(props) => (props.$primary ? "#BF4F74" : "white")};
		color: ${(props) => (props.$primary ? "white" : "#BF4F74")};

		font-size: 1em;
		margin: 1em;
		padding: 0.25em 1em;
		border: 2px solid #bf4f74;
		border-radius: 3px;
	`;

	return (
		<>
			<div className="h-screen flex flex-col">
				<div className="w-full text-right">
					<Button
						$primary
						onClick={() => {
							localStorage.clear();
							window.location.href = "/login";
						}}
					>
						Logout
					</Button>
				</div>
				<div className="h-1/4">
					<div className="flex p-5">
						<div className="flex-auto">
							<div className="bg-white rounded-lg shadow-md m-2 p-3">
								<div className="flex flex-row justify-between items-center">
									<div className="flex items-center gap-2">
										<h4 className="text-lg font-semibold">Total Revenue</h4>
										<Wrapper $success>
											<Title $success>+15%</Title>
										</Wrapper>
									</div>
									<div className="mr-2">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
											className="w-6 h-6 text-gray-600"
										>
											<circle cx="12" cy="12" r="1"></circle>
											<circle cx="12" cy="5" r="1"></circle>
											<circle cx="12" cy="19" r="1"></circle>
										</svg>
									</div>
								</div>
								<div className="flex flex-row justify-between items-center">
									<div>
										<div className="mt-4 text-4xl font-bold">$10,000</div>
										<div className="mt-2 text-lg text-gray-400">480 orders</div>
									</div>
									<div className="h-24">
										{/* <Line data={data} options={options} /> */}
										<LineChart
											graphData={[5, 5.4, 5, 4, 5, 5.4, 4]}
											backgroundColor={"#9bc9ab"}
											color={"#9bc9ab"}
										/>
									</div>
								</div>
							</div>
						</div>
						<div className="flex-auto">
							<div className="bg-white rounded-lg shadow-md m-2 p-3">
								<div className="flex flex-row justify-between items-center">
									<div className="flex items-center gap-2">
										<h4 className="text-lg font-semibold">Conversations</h4>
										<Wrapper>
											<Title>-0.72%</Title>
										</Wrapper>
									</div>
									<div className="mr-2">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
											className="w-6 h-6 text-gray-600"
										>
											<circle cx="12" cy="12" r="1"></circle>
											<circle cx="12" cy="5" r="1"></circle>
											<circle cx="12" cy="19" r="1"></circle>
										</svg>
									</div>
								</div>
								<div className="flex flex-row justify-between items-center">
									<div>
										<div className="mt-4 text-4xl font-bold">372</div>
										<div className="mt-2 text-lg text-gray-400">214 Clicks</div>
									</div>
									<div className="h-24">
										<LineChart
											graphData={[5, 5.4, 5, 4, 5, 5.4, 4]}
											backgroundColor={"rgb(255, 99, 132)"}
											color={"rgba(255, 99, 132)"}
										/>
									</div>
								</div>
							</div>
						</div>
						<div className="flex-auto">
							<div className="bg-white rounded-lg shadow-md m-2 p-3">
								<div className="flex flex-row justify-between items-center">
									<div className="flex items-center gap-2">
										<h4 className="text-lg font-semibold">Total Revenue</h4>
										<Wrapper $success>
											<Title $success>+15%</Title>
										</Wrapper>
									</div>
									<div className="mr-2">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
											className="w-6 h-6 text-gray-600"
										>
											<circle cx="12" cy="12" r="1"></circle>
											<circle cx="12" cy="5" r="1"></circle>
											<circle cx="12" cy="19" r="1"></circle>
										</svg>
									</div>
								</div>
								<div className="flex flex-row justify-between items-center">
									<div>
										<div className="mt-4 text-4xl font-bold">$2,873</div>
										<div className="mt-2 text-lg text-gray-400">
											$62 Lifetime Value
										</div>
									</div>
									<div className="h-24">
										<LineChart
											graphData={[5, 5.4, 5, 4, 5, 5.4, 4]}
											backgroundColor={"#9bc9ab"}
											color={"#9bc9ab"}
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="h-2/4">
					<div className="flex p-5">
						<div className="w-2/3">
							<div className="flex-1">
								<div className="bg-white h-96 rounded-lg shadow-md m-2 p-3">
									<div className="flex flex-row justify-between items-center">
										<h1 className="text-3xl font-semibold">
											Sessions Overview
										</h1>
										<div className="flex flex-row items-center">
											<div className="relative inline-block">
												<button className="flex items-center border-2 border-gray-400 px-4 py-2 bg-transparent text-gray-400 rounded-md">
													7 Days
													<svg
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 20 20"
														fill="currentColor"
														className="w-4 h-4 ml-2"
													>
														<path
															fill-rule="evenodd"
															d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
															clip-rule="evenodd"
														/>
													</svg>
												</button>
											</div>
											<div className="mr-2">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 24 24"
													fill="none"
													stroke="currentColor"
													stroke-width="2"
													stroke-linecap="round"
													stroke-linejoin="round"
													className="w-6 h-6 text-gray-600"
												>
													<circle cx="12" cy="12" r="1"></circle>
													<circle cx="12" cy="5" r="1"></circle>
													<circle cx="12" cy="19" r="1"></circle>
												</svg>
											</div>
										</div>
									</div>
									<div className="h-72 m-3">
										<Line options={options} data={data} />
									</div>
								</div>
							</div>
						</div>
						<div className="w-1/3">
							<div className="bg-white h-96 rounded-lg shadow-md m-2 p-3">
								<div className="flex flex-row justify-between items-center">
									<h4 className="text-3xl font-semibold">Most Active Users</h4>
									<div className="mr-2">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
											className="w-6 h-6 text-gray-600"
										>
											<circle cx="12" cy="12" r="1"></circle>
											<circle cx="12" cy="5" r="1"></circle>
											<circle cx="12" cy="19" r="1"></circle>
										</svg>
									</div>
								</div>
								<div className="mt-2 flex flex-row items-center justify-between">
									<div className="flex flex-row gap-2 items-center">
										<div className="text-4xl font-bold">$10,000</div>
										<div>
											<Wrapper $success>
												<Title $success>+15%</Title>
											</Wrapper>
										</div>
									</div>
									<div className="text-xl text-gray-500 font-light">
										Last 3 years
									</div>
								</div>
								<Bar options={options} data={barData} />
							</div>
						</div>
					</div>
				</div>
				<div className="h-1/4">
					<div className="flex p-5">
						<div className="w-2/4">
							<div className="flex-1">
								<div className="bg-white rounded-lg shadow-md m-2 p-3">
									<div className="flex flex-row justify-between items-center">
										<h1 className="text-3xl font-semibold">
											Sessions Overview
										</h1>
										<div className="flex flex-row items-center">
											<div className="relative inline-block">
												<button className="flex items-center border-2 border-gray-400 px-4 py-2 bg-transparent text-gray-400 rounded-md">
													Top Country
													<svg
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 20 20"
														fill="currentColor"
														className="w-4 h-4 ml-2"
													>
														<path
															fill-rule="evenodd"
															d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
															clip-rule="evenodd"
														/>
													</svg>
												</button>
											</div>
											<div className="mr-2">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 24 24"
													fill="none"
													stroke="currentColor"
													stroke-width="2"
													stroke-linecap="round"
													stroke-linejoin="round"
													className="w-6 h-6 text-gray-600"
												>
													<circle cx="12" cy="12" r="1"></circle>
													<circle cx="12" cy="5" r="1"></circle>
													<circle cx="12" cy="19" r="1"></circle>
												</svg>
											</div>
										</div>
									</div>
									<div className="flex h-64">
										<div className="flex w-2/3">
											Map Goes Here could not find a library
										</div>
										<div className="flex-1 mt-8">
											<Countries
												countryCode={"US"}
												country={"United States"}
												color={"green"}
												percentage={54}
											/>
											<Countries
												countryCode={"UK"}
												country={"United Kingdom"}
												color={"blue"}
												percentage={36}
											/>
											<Countries
												countryCode={"IN"}
												country={"India"}
												color={"indigo"}
												percentage={15}
											/>
											<Countries
												countryCode={"ID"}
												country={"Indonesia"}
												color={"red"}
												percentage={15}
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="w-2/4">
							<div className="bg-white rounded-lg shadow-md m-2 p-3">
								<div className="flex flex-row justify-between items-center">
									<h4 className="text-3xl font-semibold">Most Active Users</h4>
									<div className="flex flex-row items-center">
										<div className="relative inline-block">
											<button className="flex items-center border-2 border-gray-400 px-4 py-2 bg-transparent text-gray-400 rounded-md">
												Last 7 Days
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													className="w-4 h-4 ml-2"
												>
													<path
														fill-rule="evenodd"
														d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
														clip-rule="evenodd"
													/>
												</svg>
											</button>
										</div>
										<div className="mr-2">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												stroke-width="2"
												stroke-linecap="round"
												stroke-linejoin="round"
												className="w-6 h-6 text-gray-600"
											>
												<circle cx="12" cy="12" r="1"></circle>
												<circle cx="12" cy="5" r="1"></circle>
												<circle cx="12" cy="19" r="1"></circle>
											</svg>
										</div>
									</div>
								</div>
								<div className="flex flex-row">
									<div className="h-64 w-2/3">
										<Doughnut data={pieData} />
									</div>
									<div className="mt-4">
										<ActiveUsersStats
											source="Desktop"
											stats="4,089 / 76%"
											color="blue"
										/>
										<ActiveUsersStats
											source="Mobile"
											stats="1,149 / 21%"
											color="red"
										/>
										<ActiveUsersStats
											source="Desktop"
											stats="150 / 3%"
											color="green"
										/>
										<div className="text-gray-400 text-sm">
											Your session had increased in the <br /> last 7 days
											especially on desktop and mobile
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default DashboardPage;
