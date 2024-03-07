# Project Overview.
This project is written based on client-side rendering with a monolith architecture, written in JavaScript and with the [Express framwork](https://expressjs.com/). The project also follows the [MVVM architectural pattern]( https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93viewmodel), 
where MVVM stands for Model-View-Viewmodel. 

In this project there is a `ViewModel.js` (in the `viewModel` folder) file and a `view` folder in the frontend (client-side), and a model folder in the backend project (server-side). Since we opted to use client-side rendering, we have split the application into two separate projects, one for the frontend (this repository) and one for [backend](https://github.com/dgenfors/iv1201-vt24-backend). They handle the client-side code and server-side code independently. So the JavaScript code in the browser, which is loaded from the frontend server, calls to the backend server. Since this is a cross-origin request, where there is an request to another server than the one from which the code was loaded, the application is enabled to follow CORS policy.

The `ViewModel.js` acts as the "controller" as in the MVC pattern, it recieves, sends, and creates requests to the server-side/backend. The viewmodel also handles the cookie token, as well as keeps track of the users userID and states.

The views (located in the view folder) are views for the different paged on the website. These are the following views:
* `Application.js`
* `Login.js`
* `MainPAge.js`
* `RecruiterView.js`
* `Register.js`

The views are split into multiple files to increase encapsulation and make navigation easier. If you wish to add a new page to the website, create a new view in the view folder, and see Javadoc in the other views and `ViewModel.js` for structural architecture and naming conventions. The project follows the camelCase naming convention in code, and PascalCase for file and folder names.


# How to keep developing

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Please read up on create-react-app before continuing development.

## Run project locally
If you wish to run the project locally and have access to the backend, you will need to change the IP addresses in the following files to "http://localhost:3001":
* `ViewModel.js`        (All functions that fetch and await response)


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
