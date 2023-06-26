import React from "react";

const ActiveUsersStats = (props: any) => {
	return (
		<div className="flex flex-row items-center gap-5">
			<div className="flex flex-col gap-2">
				<div className="flex flex-row justify-between">
					<div>{props.source}</div>
					<div>{props.stats}</div>
				</div>
				{/* <div className="mb-1 text-base font-medium text-green-700 dark:text-green-500"></div> */}
				<div className="w-60 bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-300">
					<div
						className={`bg-${props.color}-600 h-2.5 rounded-full dark:bg-${props.color}-500`}
						style={{ width: props.stats.split("/")[1] }}
					></div>
				</div>
			</div>
		</div>
	);
};

export default ActiveUsersStats;
