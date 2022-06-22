const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const videoData = require("./exampleresponse.json")
const _ = require("lowdash")

let videos = videoData

app.use(express.json())

app.use((req, _res, next) => 
{
	console.log(`🚨 Incoming request: ${req.method} - ${req.url}`)
	next()
})

app.get("/", (req, res) => 
{
  res.send({ express: "I'm alive!!!" });
})
.get("/api/videoData", (req, res) => 
{
	res.status(200)
	res.send(videos)
})
.delete("/api/video/:id", (req, res) => 
{
	videos = videos.filter(video => video.id != req.params.id)
	res.status(200)
	res.send(videos) 
})
.post("/api/addVideo", (req, res) => 
{
	const videoBody = req.body

	try
	{
		videos.push({
			id: videos[videos.length - 1].id + 1,
			title: videoBody.title,
			url: videoBody.url,
			rating: 0
		})
	}
	catch(error)
	{
		res.status(400)
		res.send(`video wasn't added. Error: ${err}`)
	}

	res.status(200)
	res.send("video added!")
})

app.listen(port, () => console.log(`Listening on port ${port}`));