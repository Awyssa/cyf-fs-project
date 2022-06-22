import React, { useState } from "react";
import { Input } from "../atoms";

const Form = ({ formData, setFormData, handleSubmit, style }) =>
{
	const handleChange = (key, value) =>
	{
		setFormData({ ...formData, [key]: event.target.value });
	};

	return (
		<div style={{
			display: "flex",
			flexDirection: "column",
			...style
		}}>
			{Object.entries(formData).map((fromField, index) => (
				<Input
					key={index}
					placeholder={fromField[0]}
					value={fromField[1]}
					handleChange={(event) => handleChange(fromField[0], event.target.value)}
				/>
			))}
		</div>
	);
};

export default Form;