import React from 'react';

const TestComponent = () => {
  return (
    <div className="bg-blue-500 text-white p-4 rounded-lg m-4">
      <h1 className="text-2xl font-bold">Tailwind CSS Test</h1>
      <p className="mt-2">Bu bileşen Tailwind CSS&apos;in çalışıp çalışmadığını test ediyor.</p>
      <button className="bg-red-500 hover:bg-red-700 px-4 py-2 rounded mt-2">
        Test Butonu
      </button>
    </div>
  );
};

export default TestComponent;

