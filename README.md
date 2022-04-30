# Boss Machine

A unique management application for today's most accomplished (evil) entrepreneurs.

This is one of projects in Codecademy's full-stack skill path course. By following some tutorial, I could finish coding of this Api.

## Project Overview

The API enable you to manage your 'minions', your brilliant 'million dollar ideas', and to handle all the annoying meetings that keep getting added to your busy schedule.

Here is a video demonstration of the final app here:
<img src="https://user-images.githubusercontent.com/64364271/166120774-d03959f0-20c2-4d94-b95f-f00995ab8eb2.gif" alt="boss machine image"  width="250" />

## How to Use

First, download this project.
Second, open the root project directory in your terminal. Run `npm install` to install the dependencies of this project. Once it has finished installing, you can run `npm run start` to begin your server. You'll see `Server listening on port 4001` in the terminal.

---

### Key Technologies

- Understand Node.js
- Create a server with express
- Design/serve RESTful APIs
- Understand what CORS is
- Explain routing

---

### Server Boilerplate

In **server.js**, these are the things What I did:

- Set up body-parsing middleware with the `body-parser` packagae.
- Set up CORS middleware with the `cors` package. You can use the default settings.
- Mount the existing `apiRouter` at `/api`. This router will serve as the starting point for all your API routes.
- Start the server listening on the provided `PORT`. Make sure to use the `PORT` constant and not a hard-coded number, as this is required for tests to run.

### Testing

A testing suite has been provided in the test folder.

To run these tests, first open the root project directory in your terminal. Then run `npm install` to install all necessary testing dependencies (you will only need to do this step once).

Finally, run `npm run test`. You will see a list of tests that ran with information
about whether or not each test passed.

---

### Special thanks

- Codecademy
