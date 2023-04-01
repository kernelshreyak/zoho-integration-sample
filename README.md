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

```