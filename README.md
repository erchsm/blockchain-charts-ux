# Blockchain.com UX Challenge

For Blockchain.com's UX Challenge I was tasked with creating a better user expereince on part of their charts page, [blockchain.info/charts](https://blockchain.info/charts), using React.

To create a better experience I used a chart library called [Chart.js](http://www.chartjs.org/) and created loading states for every chart. Additionally I created a reusable and flexible card slider component that would allow for the content to easily change. This component allowed for a better mobile experience and better use of page real estate.

### Install & Run

To run the app you'll need node and npm. Install whichever way you please, I use homebrew:

```
brew install node
```

Then you will also need to install gulp:

```
npm install -g gulp
```

After you have cloned the repo, install the rest of the packages from the directory:

```
npm install
```

Run the project with gulp:

```
gulp
```

### Built with

* [React](https://reactjs.org/) - The web framework used
* [Gulp](https://gulpjs.com/) - Building and Serving
* [react-chartsjs-2](https://www.npmjs.com/package/react-chartjs-2) - Charts.js React Wrapper
* [SASS/Autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer) - CSS Preprocessor with automatic browser prefixing


### How it could be better!

* [gulp-iconfont](https://www.npmjs.com/package/gulp-iconfont) I started on some Iconography that would help make the Stat Cards more compelling using the SVG -> Icon Front gulp task.
* More Chart.js finessing. I had an idea to make a slider UI for the chart Timespans so that the user could control how far back they are seeing in the chart.
