import React from "react";

const Countries = (props: any) => {
	return (
		<div className="flex flex-row items-center gap-5">
			<div className="p-3 bg-red-600 rounded-full">{props.countryCode}</div>
			<div className="flex flex-col">
				<div className="">{props.country}</div>
				{/* <div className="mb-1 text-base font-medium text-green-700 dark:text-green-500"></div> */}
				<div className="w-32 bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-300">
					<div
						className={`bg-${
							props.color || "green"
						}-600 h-2.5 rounded-full dark:bg-${props.color || "green"}-500`}
						style={{ width: props.percentage }}
					></div>
				</div>
			</div>
			<div className="">{props.percentage}%</div>
		</div>
	);
};

export default Countries;
