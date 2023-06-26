import React from "react";

import { Line } from "react-chartjs-2";
import {
	Chart as ChartJS,
	LineElement,
	CategoryScale,
	LinearScale,
	PointElement,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const LineChart = (props: any) => {
	const data = {
		labels: ["", "", "", "", "", "", ""],
		datasets: [
			{
				// label: "# of Votes",
				data: [5, 5.4, 5, 4, 5, 5.4, 4],
				// backgroundColor: "rgb(255, 99, 132)",
				// borderColor: "rgba(255, 99, 132, 0.2)",
				backgroundColor: props.backgroundColor,
				borderColor: props.color,
				pointBorderColor: "transparent",
				pointBorderWidth: 4,
				tension: 0.5,
			},
		],
	};

	// min: 2,
	// 			max: 10,
	// 			ticks: {
	// 				stepSize: 2,
	// 				callback: (value: string): string => value + "K",
	// 			},

	const options = {
		elements: {
			point: {
				radius: 0,
			},
		},
		scales: {
			x: {
				display: false,
				grid: {
					display: false,
				},
			},
			y: {
				display: false,
				grid: {
					borderDash: [10],
					display: false,
				},
			},
		},
	};
	return <Line data={data} options={options} />;
};

export default LineChart;
