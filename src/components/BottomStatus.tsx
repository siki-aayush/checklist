import React from "react";
import { statusOpt } from "../App";
interface bottomStatusProps {
	statusHandler: (stat: statusOpt) => void;
}
export default function BottomStatus(props: bottomStatusProps) {
	return (
		<>
			<p
				className="lowest__all"
				onClick={() => props.statusHandler(statusOpt.all)}
			>
				All
			</p>
			<p
				className="lowest__active"
				onClick={() => props.statusHandler(statusOpt.active)}
			>
				Active
			</p>
			<p
				className="lowest__completed"
				onClick={() => props.statusHandler(statusOpt.completed)}
			>
				Completed
			</p>
		</>
	);
}
