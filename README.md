# loginGithubGoogleCalendar

project of lists what search in github and google calendar. developed in react.js with redux using docker

[![N|Solid](https://res.cloudinary.com/drqk6qzo7/image/upload/v1565583365/githubend_yerwto.png)](https://nodesource.com/products/nsolid)

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

[trello](https://trello.com/b/b5bY98L0/logingithubgooglecalendar) Trello

And of course netcore-webapi itself is open source with a [public repository][afn]
 on GitHub.
 
## Usage

loginGithubGoogleCalendar requires 

[Docker](https://hub.docker.com/editions/community/docker-ce-desktop-windows)
[Git](https://git-scm.com/downloads)

to run.

Install the dependencies and devDependencies previous
start the server.

## download
```sh
git clone https://github.com/afnarqui/loginGithubGoogleCalendar.git
cd loginGithubGoogleCalendar
docker build . --tag logingithubgooglecalendar
docker run -it -p 3000:3200 logingithubgooglecalendar
```
## exec 
```sh
https://loginggc-back.afnarqui.now.sh/api
https://loginggc-web.afnarqui.now.sh
```

[afn]: <https://github.com/afnarqui/loginGithubGoogleCalendar>

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
