import React from 'react';

const Columns3 = () => {
  return (
    <div className="flex justify-center">
      <div className="w-1/3 p-4">
        <div className="p-4 rounded shadow-2xl opacity-70 bg-violet-200">
          <h2 className="mb-2 text-2xl font-bold text-center">Overview</h2>
          <h2>Content.</h2>
        </div>
      </div>
      <div className="w-1/3 p-4">
        <div className="p-4 bg-gray-200 rounded shadow-2xl opacity-50">
        <h2 className="mb-2 text-xl font-bold text-center">Resources</h2>
          <p>This is the content of column 2.</p>
        </div>
      </div>
      <div className="w-1/3 p-4">
        <div className="p-4 bg-gray-200 rounded shadow-2xl opacity-50 ">
        <h2 className="mb-2 text-2xl font-bold text-center">Costs</h2>
          <p>This is the content of column 3.</p>
        </div>
      </div>
    </div>
  );
};

export default Columns3;
