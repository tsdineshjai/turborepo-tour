import express from "express";

const app = express();

app.get("/", (req: any, res: any) => {
	res.json({
		message: "welcome to the hello world",
	});
});

app.listen(3500, () => {
	console.log(`app is up and running`);
});
