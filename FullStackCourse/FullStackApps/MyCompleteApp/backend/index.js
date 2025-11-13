import express from 'express';
import dotenv from 'dotenv';
const app = express();
const port = process.env.PORT || 3000;
const jokes = [
  {
    id: 1,
    title: "FAT32",
    joke: "Your mama’s so FAT she can’t save files bigger than 4GB!"
  },
  {
    id: 2,
    title: "Developer Life",
    joke: "Why do programmers prefer dark mode? Because light attracts bugs!"
  },
  {
    id: 3,
    title: "Database Joke",
    joke: "A SQL query walks into a bar, walks up to two tables and asks: 'Can I join you?'"
  },
  {
    id: 4,
    title: "Binary Pun",
    joke: "There are only 10 kinds of people in this world: those who understand binary and those who don’t."
  },
  {
    id: 5,
    title: "Async Humor",
    joke: "I told my computer I needed a break, and it said: 'You seem stressed — wanna crash?'"
  }
];
app.get('/',(req,res)=>{
    res.send("<h1>hello i am here</h1>");
})
app.get('/api/jokes',(req,res)=>{
    res.json(jokes);
});
app.listen(port,()=>{
    console.log(`server is running at port http://localhost:${port}`);
});