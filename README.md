// To run in development: 
   1) cd altimetrik-login-register. Execute: npm start cmd
   2) To build for the production deployment, execute: npm run build cmd. 
      Creates a build folder in the root folder
   3) Development server is running on 3000 port

//Running in the production:
   1) cd altimetrik-login-register/server
   2) using node (or) nodemon (or) pm2, execute server.js file
      For eg: node server.js
                  (or)
              pm2 server.js (need to install pm2 globally)

//** 
   Production server is running on 8080 port as of now.
   Open localhost:8080
**//

Technology:
    Frontend: React JS and Redux
    Backend: Node JS and Express JS
    DB: Mongo 

// Steps I have performed to complete the task:

 1)Designed Login and Register pages.
   Registering with the 
   Username, Password, Email, First Name, Last Name, Gender and Country fields.
   
   Gender is a radio button and country is a dropdown

 2)Written Login and Register REST API's.
   Password is hashed while saving and compared while retrieving using bcryptjs

 3)A tooltip alert is displayed in Success or Failure responses.

 4)Used Redux state management to perform authentication of user

 5) After successful login user will be redirected to dashboard, the login user name is visible here

A basic setup is completed, based on the requirements the application can be enhanced.

 
  