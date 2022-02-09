 require([
        "esri/Map",
        "esri/layers/CSVLayer",
        "esri/views/MapView",
        "esri/widgets/Legend"
      ], (Map, CSVLayer, MapView, Legend) => {
        const url =
          "https://raw.githubusercontent.com/gbrunner/adv-programming-for-gis-and-rs/master/Web%20Development%20Module/Unit%202%20-%20ArcGIS%20JavaScript%20API/stl_crime_wgs_84.csv";


     const template = {
   title: "Crime committed at {ILEADSStreet}"
};

        // The heatmap renderer assigns each pixel in the view with
        // an intensity value. The ratio of that intensity value
        // to the maxPixel intensity is used to assign a color
        // from the continuous color ramp in the colorStops property

        const renderer = {
          type: "heatmap",
          colorStops: [
            { color: "rgba(63, 40, 102, 0)", ratio: 0 },
            { color: "#833ab4", ratio: 0.083 },
            { color: "#94369f", ratio: 0.166 },
            { color: "#a03390", ratio: 0.249 },
            { color: "#bd2c6c", ratio: 0.332 },
            { color: "#cc295a", ratio: 0.415 },
            { color: "#e02442", ratio: 0.498 },
            { color: "#fd1d1d", ratio: 0.581 },
            { color: "#fd3a25", ratio: 0.664 },
            { color: "#fd4c2a", ratio: 0.747 },
            { color: "#fd6932", ratio: 0.83 },
            { color: "#fd873a", ratio: 0.913 },
            { color: "#fcde45", ratio: 1 }
          ],
          maxPixelIntensity: 220,
          minPixelIntensity: 0
        };

         const layer = new CSVLayer({
          url: url,
          title: "St. Louis Crime Heatmap",
          copyright: "St. Louis Police Department",
          popupTemplate: template,
          renderer: renderer
        });

        const map = new Map({
          basemap: "dark-gray-vector",
          layers: [layer]
        });

        const view = new MapView({
          container: "viewDiv",
          center: [-90.1994, 38.627],
          zoom: 11,
          map: map
        });

        view.ui.add(
          new Legend({
            view: view
          }),
          "bottom-left"
        );
      });
