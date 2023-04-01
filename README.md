## Zoho Integration sample App

Sample app showcasing Zoho Desk API integration. 
Backend is in Node.js Express and frontend is built using EJS templating engine to keep things coupled in a single application. 

Vue3 is also used within the EJS template to showcase usage of REST API communcation to the express backend

This can be easily extended to be used with a frontend web app using a JavaScript framework like React

API documentation reference:

https://desk.zoho.com/DeskAPIDocument 

### Setup

1.  Install dependencies
```bash
npm install
```
2. Create a .env file with Zoho API credentials (make sure you have created an OAuth client beforehand as per: https://desk.zoho.com/DeskAPIDocument#OauthTokens#RegisteringAClient)
```env
ZOHO_ORGID=807062861
ZOHO_CLIENT_ID=1000.5JB6XKM401PS6L44VXFAIU7L03RSTO
ZOHO_CLIENT_SECRET=bf20327352b54d798c4407a41d59e716de2c6fbea4
ZOHO_REDIRECT_URI=http://localhost:3000/zoho/authcallback
```

3.  Start the server on http://localhost:3000
```
npm run dev
```

4. You should now be able to login with required Zoho account and use the app as per screencast: [here](Screencast%202023-04-01%2018:10:33.mp4)