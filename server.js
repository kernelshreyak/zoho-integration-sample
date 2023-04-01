const express = require('express');
const bodyParser = require('body-parser')
const axios = require('axios');
const app = express();


app.set('view engine', 'ejs');
app.use(bodyParser.json())

require('dotenv').config()

// index page
app.get('/', function(req, res) {
  res.render('pages/index',{
    isZohoAuth: false,
    zohoError: "",
    zohoAccessToken: "",
    zohoAuthUrl : "http://localhost:3000/zoho/authinit"
  });
});

app.get('/zoho/authinit',function(req,res){
  res.redirect(`https://accounts.zoho.com/oauth/v2/auth?response_type=code&client_id=${process.env.ZOHO_CLIENT_ID}&scope=Desk.tickets.ALL,Desk.basic.READ&redirect_uri=${process.env.ZOHO_REDIRECT_URI}&state=zohostate${new Date().getTime()}`);
})

// handle Zoho OAuth callback 
app.get('/zoho/authcallback',async function(req,res){
    // console.log(req.query);
    let zohoAuthDone = false;
    let zohoError = "";
    let zohoAccessToken = "";

    try {
      // get access token from Zoho
      const code = req.query.code;
      if(!code){
        throw new Error("Invalid access code");
      }
      const tokenResp = await axios.post(`https://accounts.zoho.com/oauth/v2/token?code=${code}&grant_type=authorization_code&client_id=${process.env.ZOHO_CLIENT_ID}&client_secret=${process.env.ZOHO_CLIENT_SECRET}&redirect_uri=${process.env.ZOHO_REDIRECT_URI}`);
      if(tokenResp.data.error){
        throw new Error(tokenResp.data.error)
      }
      zohoAuthDone = true;
      // console.log('auth done');
      console.log(tokenResp.data);
      zohoAccessToken = tokenResp.data.access_token;
      console.log("zohoAccessToken",zohoAccessToken)
    } catch (error) {
      console.error("Zoho access token error: ",error);
      zohoError = error;
    } finally {
      res.render('pages/index',{
        isZohoAuth: zohoAuthDone,
        zohoError: zohoError,
        zohoAuthUrl: "",
        zohoAccessToken : zohoAccessToken    
    });
    }
});

app.get('/zoho/ticketinfo',async function (req,res){
  try {
    const resp = await axios.get(`https://desk.zoho.com/api/v1/tickets/${req.query.ticketId}?include=contacts,products,assignee,departments,team`,{
      headers: {
        'orgId': process.env.orgId,
        'Authorization': `Zoho-oauthtoken ${req.query.token}`
      }
    });
    // console.log("resp.data",resp.data)
    res.json({
      status: "success",
      data: resp.data
    });
  } catch (error) {
    console.error(error.message);
    res.json({
      status: "error",
      error: error.message
    })
  }
})

app.post('/zoho/add_ticket_comment',async function (req,res){
  try {
    console.log(req.body)
    console.log(`https://desk.zoho.com/api/v1/tickets/${req.body.ticketId}/comments`);
    const resp = await axios.post(`https://desk.zoho.com/api/v1/tickets/${req.body.ticketId}/comments`,{
      isPublic: "false",
      contentType: "html",
      content: req.body.comment
    },{
      headers: {
        'orgId': process.env.orgId,
        'Authorization': `Zoho-oauthtoken ${req.query.token}`
      }
    });
    console.log("resp.data",resp.data)
    res.json({
      status: "success",
      data: resp.data
    });
  } catch (error) {
    console.error(error);
    res.json({
      status: "error",
      error: error.message
    })
  }
})


const port = 3000;
app.listen(port);
console.log('Zoho sample app listening on:' + port);
