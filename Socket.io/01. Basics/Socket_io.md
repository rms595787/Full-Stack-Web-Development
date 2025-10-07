# Socket.io

Socket.IO is a JavaScript library that enables real-time `bidirectional` communication between web clients (browser) and servers. It simplifies the process of building interactive web applications by allowing data to be transmitted instantly and continously between the client and server, facilitating features like chat applications, live updates, and multiplayer gaming.

## Bidirectional Communication?

Bidirectional communication means that information can flow in `two directions`, both the web client (browser) and the server can send and receive data to and from each other in real-time. So, if something changes on the server, it can immediately notify the client, and vice-versa, without the client needing to constantly ask the server if there's new information available.

## Analogy 📲

Think of bidirectional communication like a phone call. When you're talking on the phone with someone, you can both speak and listen at the same time. It's not just one person talking while the other listens; both parties can exchange information back and forth. Similarly,with bidirectional communication in Socket.IO, both the web client and the server can send and receive data, creating a two-way flow of information like a conversation on the phone.

## Setup your device for using Socket.io - [Link](https://socket.io)

1. Install package.json file
   - command - `npm init -y`
2. Install express, nodemon, socket.io in your project
   - command - `npm i express nodemon socket.io`
3. Create `index.js` file and then make these changes in `packages.json` file

```js
    "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
    },
```

4. Run the project
   - command - `npm run dev`

## index.js file

In our index.js file we will take care of these things in it

1. packages
2. Instances
3. Serving HTML file
4. Define a connection event handler
5. Start the server
