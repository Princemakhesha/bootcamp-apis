import express from 'express';

import longestWord from './bootcam_funcs/longestWord.js'
import shortestWord from './bootcam_funcs/shortestWord.js'
import wordLengths from './bootcam_funcs/wordLengths.js'
import totalPhoneBill from './bootcam_funcs/totalPhoneBill.js'
import enoughAirtime from './bootcam_funcs/enoughAirtime.js';
const app = express();
app.use(express.static('public'));
app.use(express.json());

//word game
app.get('/api/word_game', function (req, res) {
  const sentence = req.query.sentence;
  if (!sentence) {
    res.json({
      error: 'Please Add A Sentence'
    })
  }
  res.json({
    "longestWord": longestWord(sentence),
    "shortestWord": shortestWord(sentence),
    "sum": wordLengths(sentence)
    // "message" : sentence.toUpperCase()
  });
});

//word game ends here

//total phone bill
const prices = {
  priceOfCall : 2.75,
  priceOfSms : 0.65
}

app.get('/api/phonebill/prices',function (req, res){
  res.json({
    priceOfCall: prices.priceOfCall,
    priceOfSms: prices.priceOfSms
  })
});

app.post('/api/phonebill/total',function(req, res){
  const phoneBill=req.body.phoneBill;
  res.json({
    "totalPhoneBill": totalPhoneBill(phoneBill)
  })
});


app.post('/api/phonebill/price', function (req, res){
  const item=req.body.item;
  const price=req.body.price;
  prices[item]=price;
  res.json({
      "status":"success",
      "message":`${item} was set to ${price}`
  })
})
//total phone bill ends here

//enough airtime
app.get('/api/enoughAirtime', (req, res) => {
  const projectusage = req.query.projectusage;
  const airtime = req.query.airtime;
  if(!projectusage || !airtime){
    res.json({
      "error": 'Insert usage and projected usage amount.'
    });
  };
  res.json({
    'total': enoughAirtime(projectusage,airtime)
  });
});

app.post('/api/enoughAirtime', (req, res) => {
  const projectusage = req.body.projectusage;
  const airtime = req.body.airtime;
  res.json({
    "status" : 'success',
    "message" : enoughAirtime(projectusage,airtime)
  });
});

//enough airtime ends here

const PORT = 5000
app.listen(PORT, function () {
  console.log('api starting on port', PORT);
});