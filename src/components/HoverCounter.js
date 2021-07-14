import React from "react";
import higherOrderComponent from "./HigherOrderComponent";

const HoverCounter = (props) => {
	return (
		<>
			<button onMouseOver={props.incrementCount}>Count</button>
			<p>{props.count}</p>
		</>
	);
};

export default higherOrderComponent(HoverCounter);
