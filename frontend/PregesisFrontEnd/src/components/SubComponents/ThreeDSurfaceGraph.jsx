// src/App.js or src/components/ThreeDSurfaceGraph.js

import React from 'react';
import Plot from 'react-plotly.js';

// Function to generate data for a 3D surface plot
const generateSurfaceData = () => {
  const x = [];
  const y = [];
  const z = [];

  // Define ranges for x and y
  const range = 5; // -5 to 5
  const numPoints = 50;
  const step = (range * 2) / (numPoints - 1);

  // Populate x and y arrays
  for (let i = 0; i < numPoints; i++) {
    x.push(-range + i * step);
    y.push(-range + i * step);
  }

  // Calculate z values based on the function: z = sin(sqrt(x^2 + y^2))
  for (let i = 0; i < numPoints; i++) {
    const row = [];
    for (let j = 0; j < numPoints; j++) {
      const valX = x[j]; // x for current column
      const valY = y[i]; // y for current row
      const r = valX*valX+ valY*valY;
      row.push(r);
    }
    z.push(row);
  }

  return { x, y, z };
};

const generateSurfaceData2 = () => {
  const x2 = [];
  const y2 = [];
  const z2 = [];

  // Define ranges for x and y
  const range = 5; // -5 to 5
  const numPoints = 50;
  const step = (range * 2) / (numPoints - 1);

  // Populate x and y arrays
  for (let i = 0; i < numPoints; i++) {
    x2.push(-range + i * step);
    y2.push(-range + i * step);
  }

  // Calculate z values based on the function: z = sin(sqrt(x^2 + y^2))
  for (let i = 0; i < numPoints; i++) {
    const row = [];
    for (let j = 0; j < numPoints; j++) {
      const valX = x2[j]; // x for current column
      const valY = y2[i]; // y for current row
      const r = -valX*valX-valY*valY+10;
      row.push(r);
    }
    z2.push(row);
  }

  return { x2, y2, z2 };
};



function ThreeDSurfaceGraph() {
  const { x, y, z } = generateSurfaceData();
  const { x2, y2, z2 } = generateSurfaceData2();

  const data = [
    {
      z: z,
      x: x,
      y: y,
      type: 'surface', // Specifies a 3D surface plot
      colorscale: 'Plasma', // Choose a colorscale (e.g., 'Viridis', 'Plasma', 'Jet')
    },
    {
      z: z2,
      x: x2,
      y: y2,
      type: 'surface', // Specifies a 3D surface plot
      colorscale: 'Viridis', // Choose a colorscale (e.g., 'Viridis', 'Plasma', 'Jet')
    },

  ];

  const layout = {
    title: '3D Surface Plot: z = sin(√(x² + y²))',
    autosize: true,
    height: 600, // Adjust height as needed
    scene: {
      xaxis: { title: 'X-axis' },
      yaxis: { title: 'Y-axis' },
      zaxis: { title: 'Z-axis' },
      aspectratio: { x: 1, y: 1, z: 0.8 }, // Adjust aspect ratio if necessary
    },
    margin: {
      l: 50,
      r: 50,
      b: 50,
      t: 80,
    },
  };

  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center',marginTop:"4vw"}}>
      <Plot
        data={data}
        layout={layout}
        // You can add additional props like `useResizeHandler` for responsive design
        useResizeHandler={true}
        style={{ width: '100%', maxWidth: '800px'}} // Control overall size
        
      />
    </div>
  );
}



export default ThreeDSurfaceGraph;