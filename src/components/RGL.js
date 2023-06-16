import React from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

const ResponsiveGridLayout = WidthProvider(Responsive);

const RGL = ({ data }) => {
  const renderNestedObject = (obj, level = 0) => {
    if (typeof obj === 'object') {
      return Object.keys(obj).map((key) => (
        <div key={key} data-grid={{ w: 1, h: 1, x: level, y: level }}>
          {renderNestedObject(obj[key], level + 1)}
        </div>
      ));
    }

    return (
      <input
        type="text"
        value={obj}
        onChange={(e) => console.log(e.target.value)} // Handle input changes as needed
        style={{ width: '100%' }}
      />
    );
  };

  return (
    <ResponsiveGridLayout
      className="layout"
      cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
      breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
    >
      {renderNestedObject(data)}
    </ResponsiveGridLayout>
  );
};

export default RGL;
