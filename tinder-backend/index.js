const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cardRouter = require("./routes/cardRouter");
const cors = require("cors");
dotenv.config({path:"./config.env"});
const app = express();

const PORT = process.env.PORT || 8008;
const DB = process.env.DATABASE.replace("<PASSWORD>",process.env.DATABASE_PASSWORD);


// Connect the database and listening server
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use('/tinder/card', cardRouter);


app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

mongoose.connect(DB,{
	useNewUrlParser:true,
	useCreateIndex:true,
	useFindAndModify:true,
	useUnifiedTopology:true
}).then(() => {
	console.log("DB connection successful");
	app.listen(PORT,() => {

		console.log("App is lisening on Port -> ",PORT);
	})
});



