const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Promise Pending
const dataPromise = d3.json(url);
console.log("Data Promise: ", dataPromise);

// Fetch the JSON data and console log it
d3.json(url).then(function(data) {
  console.log(data);

//   Create bar chart
const ids = data.samples[0].otu_ids.map(otuID => `OTU ${otuID}`);
const idsPlain = data.samples[0].otu_ids;
const sampleValues = data.samples[0].sample_values;
const otuLabels = data.samples[0].otu_labels;


const trace1 = {
  x: sampleValues.slice(0, 10),
  y: ids.slice(0, 10),
  text: otuLabels.slice(0, 10),
  type: "bar",
  orientation: "h"
};
const layout = {
  title: "Top 10 OTUs",
  xaxis: {
    title: "Sample Values"
  },
  yaxis: {
    title: "OTU ID",
    autorange: 'reversed'
  }
};

Plotly.newPlot("bar", [trace1], layout);

// Create colorScale for bubble chart
const colorScale = [[0, 'purple'],
  [0.25, 'blue'],
  [0.5, 'lightblue'],
  [0.75, 'green'],
  [1, 'brown']
];

// Create bubble chart
const trace2 = {
    x: idsPlain,
    y: sampleValues,
    text: otuLabels,
    mode: "markers",
    marker: {size: sampleValues, color: idsPlain, colorscale: colorScale, sizeref: 1.5}
}
const layout2 = {
    xaxis: {
      title: "OTU ID"
    },
    yaxis: {
      title: "Sample Values"
    }
  };

  Plotly.newPlot("bubble", [trace2], layout2);
});

