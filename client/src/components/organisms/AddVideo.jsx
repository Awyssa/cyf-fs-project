import React, { useState } from "react";
import { Form } from "../molecules";

const AddVideo = () =>
{
	const [form, setForm] = useState({
    id: "",
    title: "",
    url: "",
    rating: ""
	});

	const handleSubmit = (event) =>
	{
		event.preventDefault();
		// post form here
	};

	return (
		<div>
			<div>Add Video</div>
			<Form
				formData={form}
				setFormData={setForm}
				style={{
					width: "200px",
					display: "flex",
					justifyContent: "center",
					alignItems: "center"
				}}
			/>
		</div>
	);
};

export default AddVideo;
