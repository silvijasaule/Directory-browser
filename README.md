## Directory Browser

Directory Browser was created as a case study solution for the Corti Front-End Developer position. It is a single-page React app written using Typescript. 

The app is an online directory browser with a predefined data structure. The data structure was designed based on the requirements of the case study. 

To render the data correctly, I used the recursive React component DirectoryBrowser that takes FileNode (data) as a prop and maps its children (nodes) into the DirectoryBrowser component. 

Unfortunately, breadcrumbs are not implemented due to lack of time. 

Additional libraries used in the project: Material UI.
Total time spent on Directory Browser application: 4 hours.  

## Run the project

- To run this project you will need [Node](https://nodejs.org/en/). I strongly recommend to use [nvm](https://github.com/nvm-sh/nvm) for installing node.
- After installing nvm go to project directory and run:
  - `nvm install 14.17.0`
  - `nvm use`
  - `npm install`
  - `npm start` - builds project for development

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Usage

To start using Directory Browser, you need to run 'npm start'.

## Author

Silvija Aleknaitė, 2022


