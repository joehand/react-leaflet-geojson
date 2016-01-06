
# GeoJson React Map Template

General starting point for a mapping application using geojson/topojson data and React.

## Current Features:

* Add single geojson/topojson file
* Specify map defaults and options
* Search a single geojson property and display geo results
* Click on feature and view title and properties (not very stylishly)

*See [Austin Green map](https://github.com/open-austin/austingreenmap), [America Panorama Project](https://github.com/americanpanorama/panorama), and ... for another uses of Leaflet + React.*

## Development

* Uses [Gen React Webpack as boilerplate](https://github.com/newtriks/generator-react-webpack/blob/master/README.md)
* React
* Leaflet + [React-leaflet](https://github.com/PaulLeCam/react-leaflet)
* [Freezer](https://github.com/arqex/freezer) for immutable data

### Usage

#### Install:
```bash
npm install
```

### Commands
The following commands are available:
```bash
# Start for development
npm start # or
npm run serve

# Start the dev-server with the dist version
npm run serve:dist

# Just build the dist version and copy static files
npm run dist

# Run unit tests
npm test

# Lint all files in src (also automatically done AFTER tests are run)
npm run lint

# Clean up the dist directory
npm run clean

# Just copy the static assets
npm run copy
```

#### Running Tests
`npm test` or `node node_modules/.bin/mocha`