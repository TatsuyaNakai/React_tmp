import ClickCounter_2 from "./CickCounter_2";
import HoverCounter_2 from "./HoverCounter_2";
import React, { useState } from "react";

const Collection = () => {
	const [count, setCount] = useState(0);
	const [count2, setCount2] = useState(0);

	const incrementCount = () => {
		setCount((prevState) => prevState + 1);
	};
	const incrementCount2 = () => {
		setCount2((prevState) => prevState + 1);
	};
	return (
		<>
			<ClickCounter_2 count={count} incrementCount={incrementCount} />
			<HoverCounter_2 count2={count2} incrementCount2={incrementCount2} />
		</>
	);
};

export default Collection;
