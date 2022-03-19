# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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


### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)


<!-- #########   self nots..lean about react 16/3/2022-->
##  what is node_modules file structure..
    node_modules just take a vlaue and fill full the required of packages and library's
    for example we have add a new npm package so we can simple run the command the install it
    but we have second opetion
## second option  -` we can just add the copy past package name and run the commant [npm install]`
## npm install :-
    npm install is a powerful command its full fill the all requiere react project and node_module. let's we want to remove a one package in package.json file .
    simple we are delete the package overhere and run the commant `npm install`
    [ye sari packages ko sahi kar deta h jo isme milta he use rak leta h jis package ko remove kar diya use hta deta he ]

## QUESTION:-1 how to create a file and which place to import so that its working fine 
`STEP -1` create a file with in `src Folder` example creat a [User.js] file ..
`STEP -2` import the file with name in index.js example: `import User from ./user`
`STEP -3` call the file with the name tag example: `<User />`


## QUESTION:-2 what is component ..
piece of code that can reuse  called the component
    each folder called to component like header component login form component etc
mostly we have two type component 
`FIRST:-` Function component [same as function ] ex:- function _file-name_(){return()} used export default 
`SECND:-` Class component[use hard] ex- class _file-name_  extande Compnenet{ reder(){return()}} used export default _file-name_

## QUESTION:-3 what is click event and function
 we can esaly define a function and call the in return withing tag<h1>function {name}//called system

 ## QUESTION:-4 state in function component
    its similar to variable .we use state instead of variable beacuse component is not update when we used variable declare one time and used the used multipl time 
    example var str ="akleem"
                str ="khan".. its condition component is not update
    state is used only react.js and react-native

## what is useState..
    its a hook that allow the meantain state and same funcationaliety like update component
## what is props
     prop is similare to parameter like when we pass the parameter in function same as pass props in component    