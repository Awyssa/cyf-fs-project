import React, { useState } from "react";

const Input = ({ placeholder, label, value, handleChange, style }) => (
	<div>
		{label ? <p>{label}</p> : null}
		<input
			placeholder={placeholder}
			value={value}
			onChange={handleChange}
			style={{
				padding: "6px",
				margin: "5px",
				borderRadius: "10px",
				border: "1px solid black",
				width: "300px",
				...style
			}}
		/>
	</div>
);

export default Input;