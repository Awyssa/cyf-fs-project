import React, { useState } from "react";
import { Button } from "../atoms";

const VideoCell = ({ id, title, url, rating, onDelete }) =>
{
	const [votes, setVotes] = useState(rating);

	return (
		<div style={{ padding: "50px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
			<h3 style={{ maxWidth: "500px", overflow: "hidden", whiteSpace: "noWrap", textOverflow: "ellipsis" }}>{title}</h3>
			<div style={{ display: "flex" }}>
				<Button text="Up Vote" handleClick={() => setVotes(votes + 1)}/>
				<div style={{ padding: "15px" }}>{votes}</div>
				<Button danger text="Down Vote" handleClick={() => setVotes(votes - 1)}/>
			</div>
			<iframe
				width="500"
				height="300"
				src={url}
				title="YouTube video player"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			></iframe>
			<Button danger text="Delete" handleClick={() => onDelete(id)}/>
		</div>
	);
};

export default VideoCell;
