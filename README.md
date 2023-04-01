## Zoho Integration sample App

Sample app showcasing Zoho Desk API integration. 
Backend is in Node.js Express and frontend is built using EJS templating engine to keep things coupled in a single application. 


This can be easily extended to be used with a frontend web app using a JavaScript framework like React, Vue, Angular etc.

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

1. You should now be able to login with required Zoho account and use the app as per screencast: [here](https://drive.google.com/file/d/10gPzpfJ8FG6YHFHQqxHHOaPvTH94Hdlg/view?usp=share_link)