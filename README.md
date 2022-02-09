## Directory Browser

Directory Browser was created as a case study solution for Corti Front-End Developer position. 

The app is an online directory browser with predefined data structure. Data structure was designed based on requirements of the case study. 

In order to render the data correctly, I use recursive React component DirectoryBrowser that takes FileNode (data) as a prop and maps it's children into DirectoryBrowser component. In essence, DirectoryBrowser keeps calling itself until all data is rendered.

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


