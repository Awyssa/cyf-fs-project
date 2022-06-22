import React, { useState } from "react";
import { Button } from "../atoms";

const VideoCell = ({ id, title, url, rating, onDelete }) =>
{
	const [votes, setVotes] = useState(rating);

	return (
		<div style={{
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			maxWidth: "300px",
			margin: "10px"
		}}>

			<p style={{
				overflow:"hidden",
				whiteSpace:"noWrap",
				textOverflow:"ellipsis",
				width: "80%",
				textAlign: "center"
			}}>{title}</p>

			<div style={{
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
				width: "100%"
			}}>
				<Button text="Up Vote" handleClick={() => setVotes(votes + 1)} />
				<p>{votes}</p>
				<Button danger text="Down Vote" handleClick={() => setVotes(votes - 1)} />
			</div>

			<iframe
				width="300"
				height="150"
				src={url}
				title="YouTube video player"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			></iframe>

			<Button danger text="Delete" handleClick={() => onDelete(id)} width="300px" />
		</div>
	);
};

export default VideoCell;
