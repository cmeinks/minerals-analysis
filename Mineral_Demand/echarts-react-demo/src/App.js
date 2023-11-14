import React, { useState } from 'react';
import Chart from './Chart';
import InputForm from './InputForm';

const defaultData = [
  { value: 1048, name: 'Search Engine' },
  { value: 735, name: 'Direct' },
  { value: 580, name: 'Email' },
  { value: 484, name: 'Union Ads' },
  { value: 300, name: 'Video Ads' }
];

function App() {
  const [chartData, setChartData] = useState(defaultData);

  const handleDataChange = (newData) => {
    const updatedData = chartData.map(item =>
      item.name === newData.name ? { ...item, value: newData.value } : item
    );
    setChartData(updatedData);
  };

  return (
    <div className="App">
      <InputForm onDataChange={handleDataChange} />
      <Chart data={chartData} />
    </div>
  );
}

export default App;

