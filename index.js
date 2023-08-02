import express from 'express';
const app = express();

app.use(express.json())

app.use(express.static('public'));

const word_game = {
  longestWord : 8,
  shortestWord : 'the',
  sum : 23
 }

app.get("/api/word_game", function(req, res){
  res.json({
    longestWord : 8,
    shortestWord : 'the',
    sum : 23
   });
});

let PORT = process.env.PORT || 5000;

app.listen(PORT, function(){
  console.log('App starting on port', PORT);
});

