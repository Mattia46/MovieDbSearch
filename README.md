# Movie DB search
##### This single page app will allow to consume the [The movie DB](https://www.themoviedb.org/) to search a movie or browse through the most popular Tvs or Movies.

### Approach
I've decided to use **Webpack** as a module builder, **jest** for testing and **React**, **React-DOM** for the user interface. I haven't used the crete-react-app because creates too many dependencies that I can not manage. I always prefer adding only the dependencies that I need for my projects.

I am also using the **Public Class Field** syntax to use arrow function in the classes because I prefer not to bind this in every function and state. Because is currently a stage-3 proposal in the EcmaScript standardization process of the TC39 I've added babel-plugin-transform-class-properties for babelrc and babel-eslint for eslint.
I have used this project to play with **Curry** and **IoC**.
    
As a unit test framework I have used Jest and Enzyme for the shallow render.


### To run tests
This will run both unit test and shallow tests because the are both integrated in Jest.  
`$ npm i`  
`$ npm t`  

### To run the app
Create the `.env` file on the root of this project and paste in it your api_key. Ex: `API_KEY=######`    
I am using dotenv-webpack in order to access the env var even in development.

Once you have created you .env file run:  
`$ npm start`
