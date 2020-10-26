Execute the npm install cmd's in these two folders:
      "cd altimetrik-login-register"  
       and 
      "cd altimetrik-login-register/server".


// To run in development:  
   1) cd altimetrik-login-register" and then execute "npm start" cmd

   2) Development server is running on 3000 port

   3) TO run in development mode requires server to validate users from db, run server by navigating to 
   "cd altimetrik-login-register/server" and execute "node server.js"

//Running in the production:
   1) Execute  "npm run build" cmd by navigating to "cd altimetrik-login-register".
      Creates a build folder in the root folder. Minimizing all the files of specific extension into single file.

   2) then "cd altimetrik-login-register/server"

   3) Using node (or) nodemon (or) pm2, execute server.js file
      For eg: node server.js
                  (or)
              pm2 server.js (need to install pm2 globally)

//** 
   Production server is running on 8080 port as of now.
   Open localhost:8080. Before this the above steps to be performed to get the build files
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
 6) npm run build is creating the minified files, for the production deployment

A basic setup is completed, based on the requirements the application can be enhanced.

 
  