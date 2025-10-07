# Steps to Create React Chat App

1. Create a react app
   - command - `npm create vite@latest project-name`
2. Create another folder name it `server` outside of your react app

   - run these command in there
   - `cd server` - go to server directory
   - `npm init -y` - to install package.json file

     ```js
     "scripts": {
        "start":"node index.js",
        "dev": "nodemon index.js"
     },
     ```

   - install more dependecies -> nodemon cors express socket.io
   - command - `npm i cors nodemon express socket.io`

3. Important, when we are working with react we have to install another dependecy - [socket.io-client](https://www.npmjs.com/package/socket.io-client)

   - `cd project-name` - go to your project first then install dependency
   - command - `npm i socket.io-client`

4. Run the project

   - NOTE
   - we have package.json file in both chat-app and server
   - which means both can run independently by using below command
   - command - `npm run dev`

   - But if you want it to run in one go you have to do this
     1. install concurrently dependencies
        - command - `npm i concurrently --save-dev`
     2. install `package.json` file `outside both server and chat-app`
        - command - `npm init -y`
     3. Make these changes in script of package.json file
        ```json
        "scripts": {
           "client": "cd chat-app && npm run dev",
           "server": "cd server && npm run dev",
           "start:dev": "concurrently \"npm run client\" \"npm run server\""
        },
        ```
     4. now go to your main folder in which both your chat-app and server are then run this command
        - command - `npm run start:dev`
