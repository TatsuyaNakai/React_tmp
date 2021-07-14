import React, { memo } from "react";

const ClickCounter2 = ({ count, incrementCount }) => {
	return (
		<>
			<button onClick={incrementCount}>Count</button>
			<p>{count}</p>
		</>
	);
};

export default memo(ClickCounter2);
