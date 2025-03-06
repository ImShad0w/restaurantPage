# Restaurant page

Barebone restaurant page using:

- Webpack
- Modules

## Setup

Install the following dependencies as dev:
```bash
npm install --save-dev webpack webpack-cli
npm install --save-dev html-webpack-plugin
npm install --save-dev style-loader css-loader
npm install --save-dev html-loader
```

Create a webpack.config.js file with a structure like so:

```javascript
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};
```

Create a **src/** directory and add the files needed. E.g: index.html style.css app.js
## Usage

To **bundle** the page use:

``` bash
npx webpack
```
The output file will be located at **dist/**

## Server

If you don't want to bundle everytime you make a change in **src/**

Use this command:

```bash
npx webpack serve
```

# Things learned

I learned a lot about how the modules work and a bit about Webpack and the node dependency ecosystem.


# Made with love by ImShad0w <3
