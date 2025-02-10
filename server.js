const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5002;

app.use(cors({
origin: "*",
methods: ["GET"],
allowedHeaders: ["Content-Type"]
}));

const riddles = [
{ question: "I speak without a mouth and hear without ears. I have nobody, but I come alive with the wind. What am I?", answer: "An Echo" },
{ question: "The more you take, the more you leave behind. What am I", answer: "Footsteps"},
{ question: "What has to be broken before you can use it?", answer: "An Egg"},
{ question: "I'm tall when I'm young, and I'm short when I'm old. What am I?", answer: "A Candle"},
{ question: "What is full of holes but still holds water?", answer: "A Sponge"}
];

// API to get a random riddle
app.get("/riddle", (req, res) => {
const randomIndex = Math.floor(Math.random() * riddles.length);
res.json(riddles[randomIndex]);
});

app.listen(PORT,"0.0.0.0",() => {
console.log(`Riddle API running on port ${PORT}`);
});
