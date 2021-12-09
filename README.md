# Väder

## A weather forecast website for Swedens cities and towns 

### [Live demo](https://smhi-vader.netlify.app/)

**SMHI weather forecast API:**  
The forecast is gathered using SMHI (the Swedish Meteorological and Hydrological Institute) [Open Data API](http://opendata.smhi.se/apidocs/metfcst/geographic_area.html).

**List of Swedish citites with coordinates:**  
All of the Swedish cities along with their respective coordinates are from [Niclas Kron's Svenska Städer `.csv` list](https://github.com/sphrak/svenska-stader/). 

**Weather icons:**  
Weather icons used for displaying the weather can be downloaded from [https://erikflowers.github.io/weather-icons/](https://erikflowers.github.io/weather-icons/).

## Available Scripts

In the project directory, you can run:

### `yarn dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn lint`

Runs ESLint for all files in the pages, components, and lib directories. It also provides a guided setup to install any required dependencies if ESLint is not already configured in your application.

If you have other directories that you would like to lint, you can specify them using the --dir flag:
`next lint --dir utils`

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
