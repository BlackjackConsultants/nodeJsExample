# Node Example
This is a node js Rest Api example.

## Creating a node.js application.

1. Create a new folder in your computer.
1. Open the command prompt.
1. Go to that folder and type:
```
npm init
```
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This creates a file called **package.json**.
```
{
  "name": "nodejsexample",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "author": "",
  "license": "ISC",
}
```

4. Answer all questions.
1. To install express type:
```
$ npm install express --save
```
6. Add the code to handle route calls.
```
app.get('/', (req, res) => {
    res.send('Hello World');
})

app.get('/api/courses', (req, res) => {
    res.send([1, 2, 3]);
})
``` 
1. Now add the code to listen for client requests.
```
app.listen(3000, () => {
    console.log(`listing on port ${3000}`);
})
   ```
## Running application
To run the application add the following code to the "scripts" section under main in package.json file:
```
  "main": "index.js",
  "scripts": {
    "serve": "node index.js"
  },
```
type the following
```
npm run serve
```

## The Entry Point
The entrypoint file is the **index.js** which starts the express web server and starts to listen to client request on port 3000.

## Debugging app
### Backend
1. place breakpoint using vscode.
1. go to debug and run.
1. click run icon.
   
## About
This is a sample was produced by [Blackjack Consultants](https://blackjackconsultants.com)

