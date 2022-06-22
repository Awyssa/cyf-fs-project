import React from "react";

const Button = ({ text, handleClick, danger, disabled }) => (
	<button
		style={{
			backgroundColor: !danger ? "green" : "red",
			color: "white",
			border: "transparent",
			borderRadius: "5px",
			height: "30px",
			width: "120px",
			opacity: disabled ? "0.2" : "1"
		}}
		disabled={disabled}
		onClick={handleClick}
	>
		{text}
	</button>
);

export default Button;