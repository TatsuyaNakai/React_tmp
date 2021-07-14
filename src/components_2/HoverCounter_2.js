import React, { memo } from "react";

const HoverCounter2 = ({ incrementCount2, count2 }) => {
	return (
		<>
			<button onMouseOver={incrementCount2}>Count</button>
			<p>{count2}</p>
		</>
	);
};

export default memo(HoverCounter2);
