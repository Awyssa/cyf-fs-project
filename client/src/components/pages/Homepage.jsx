import React, { useState, useEffect } from "react";
import { Input } from "../atoms";
import { VideoCell, SearchBar } from "../molecules";
import { AddVideo } from "../organisms";

const Homepage = () =>
{
	const [videoData, setVideoData] = useState([]);
	const [filter, setFilter] = useState("");
	const [filterArray, setFilterArray] = useState([]);
	const [showNav, setNav] = useState(false);

	useEffect(() =>
	{
		getVideoData();
	}, []);

	const getVideoData = async() =>
	{
		const res = await fetch("/api/videoData");
		const data = await res.json();

		setVideoData(data);
	};

	const handleDelete = async(id) =>
	{
		const res = await fetch(
			`/api/video/${id}`,
			{ method: "DELETE" }
		);

		const data = await res.json();

		setVideoData(data);
	};

	const handleSearch = (search) =>
	{
		console.log("search ===", search);
		setFilter(search);
		const filteredArray = videoData.filter(val => val.title.toLowerCase().includes(search.toLowerCase()));

		setFilterArray(filteredArray);
	};

	const videos = filter.length ? filterArray : videoData;


	return (
		<div style={{
			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
			padding: "10px"
		}}>
			<div style={{ display: "flex", flexDirection:"column",  justifyContent: "center" }}>
				<h1>Michael's videos</h1>
				<Input
					value={filter || ""}
					handleChange={(event) => handleSearch(event.target.value)}
				/>
				<AddVideo />
				<div style={{
				display: "flex",
				flexWrap: "wrap",
				alignItems: "center",
				justifyContent: "center"
				}}>
					{videos.map((video, index) => (
						<VideoCell
							key={index}
							id={video.id}
							title={video.title}
							url={video.url}
							rating={video.rating}
							onDelete={handleDelete}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Homepage;