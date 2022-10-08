# 401-Lab14: Chatroom App

Authors: Jun Son, Stephen Clemmer



### Problem Domain

Create a new application using real-time events. We have decided to create a chatroom where users can log in, send messages, and see all of the other messages sent by other users.

**Requirements**
The application must employ the following programming concepts:

1. A “hub” server that moderates all events

The server.index.js file is serving this purpose. Mssages sent from each user are logged with a timestamp before emitting the messages to all users in the system.

2. Multiple “clients” that connect to the hub which can both publish and subscribe to events

We have set the system up to have two clients, Jun and Stephen. Each user can emit a payload containing thier username and the body of their message. These emmisions are heard by the hub at server.index.js.The server then broadcasts the messages to everyone on the chatroom namespace, and each user listens for those broadcasts.

3. Must operate over a network

We are using a namespace called chatroom at http://localhost:3002/chatroom

### Features

This chatroom allows users the ability to send messages across a namespace that will then be displayed on the account of each user that is on that namespace.

### UML
![Chatroom App UML](./assets/Lab14%20UML.png)

### File Structure

│── assets
├── node_modules
├── users
│   ├── Jun
│   │   ├── jun.index.js
│   ├── Stephen
│   │   ├── stephen.index.js
├── workflows
│   ├─ javascripttests.yml
├── .eeditorconfig
├── .eslintignore
├── .eslintrc.json
├── .gitattributes
├── .gitignore
├── config.json
├── LICENSE
├── package-lock.json
├── package.json
├── README.md
└── server.index.js


### Tests

This was tested by running each of the index files (server and two users) in separate terminals to simulate three distinct components. An interval was set up for each user to emit a message payload, which simulated a user typing in a new message into the system.
