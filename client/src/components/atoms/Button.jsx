import React from "react";

const Button = ({ text, handleClick, danger }) =>
{
	return (
		<button
			style={{
			backgroundColor: !danger ? "green" : "red",
			color: "white",
			border: "1px solid gray",
			borderRadius: "10px",
			fontWeight: "700",
			width: "150px"
			}}
			onClick={handleClick}
		>
			{text}
		</button>
	);
};

export default Button;