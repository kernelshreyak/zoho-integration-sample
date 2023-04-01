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
ZOHO_ORGID=<your-zoho-org-id>
ZOHO_CLIENT_ID=<your-zoho-application-client-id>
ZOHO_CLIENT_SECRET=<your-zoho-application-client-secret>
ZOHO_REDIRECT_URI=<your-zoho-application-redirect-uri>
```

3.  Start the server on http://localhost:3000
```bash
npm start
```

or in development mode

```bash
npm run dev
```

1. You should now be able to login with required Zoho account and use the app as per screencast: [here](https://drive.google.com/file/d/10gPzpfJ8FG6YHFHQqxHHOaPvTH94Hdlg/view?usp=share_link)
