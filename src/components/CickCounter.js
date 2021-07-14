import React from "react";
import higherOrderComponent from "./HigherOrderComponent";

const ClickCounter = (props) => {
	return (
		<>
			<button onClick={props.incrementCount}>Count</button>
			<p>{props.count}</p>
		</>
	);
};

export default higherOrderComponent(ClickCounter);
