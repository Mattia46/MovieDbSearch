# Movie DB search
### This single page app will allow to consume the https://www.themoviedb.org/ to search a movie

## Approach
### I've decided to use Webpack as a module builder, jest for testing and React, React-DOM for the user interface. I haven't used the crete-react-app because creates too many dependencies that I can not manage. I always prefer adding only the dependencies that I need for my projects.

I am also using the Public Class Field syntax to use arrow function in the classes because I prefer not to bind this in every function and state. Because is currently a stage-3 proposal in the EcmaScript standardization process of the TC39 I've added babel-plugin-transform-class-properties for babelrc and babel-eslint for eslint.