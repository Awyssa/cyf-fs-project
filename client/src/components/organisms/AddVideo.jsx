import React, { useState } from "react";
import { Button } from "../atoms";
import { Form } from "../molecules";

const AddVideo = () =>
{
	const [error, setError] = useState(null);
	const [form, setForm] = useState({
    title: "",
    url: "",
	});

	const handleSubmit = async(event) =>
	{
		event.preventDefault();
		setError(null);

		try
		{
			const res = await fetch("/api/addVideo",
				{
					method: "POST",
					headers: {"Content-Type": "application/json"},
					body: JSON.stringify(form)
				});
		}
		catch (error)
		{
			console.log("Error", error);
			setError(error);
		}
	};

	return (
		<div style={{ marginTop: "20px", textAlign: "center" }}>
			<div>Add a new video</div>
			<Form
				formData={form}
				setFormData={setForm}
			/>
			<Button
				disabled={form.title?.length < 3 || form.url?.length < 3}
				handleClick={handleSubmit}
				text="Add Video" />
			{ error ? <p>{error}</p> : null }
		</div>
	);
};

export default AddVideo;
