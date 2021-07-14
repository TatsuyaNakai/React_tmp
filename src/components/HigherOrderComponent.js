import React, { useState } from "react";

const higherOrderComponent = (OriginalComponent) => {
	const NewComponent = () => {
		const [count, setCount] = useState(0);

		const incrementCount = () => {
			setCount((prevState) => prevState + 1);
		};
		return <OriginalComponent count={count} incrementCount={incrementCount} />;
	};
	return NewComponent;
};
export default higherOrderComponent;
