import React, { useState } from "react";

const Input = ({ placeholder, label, value, handleChange, style }) => (
	<>
		{label ? <p>{label}</p> : null}
		<input
			style={style}
			placeholder={placeholder}
			value={value}
			onChange={handleChange}
		/>
	</>
);

export default Input;