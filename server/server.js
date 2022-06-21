const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const videoData = require("./exampleresponse.json")

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

	console.log("got got a req body", videoBody)

	res.end()
})

app.listen(port, () => console.log(`Listening on port ${port}`));