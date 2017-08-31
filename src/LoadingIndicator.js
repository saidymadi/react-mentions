import React from 'react';
import substyle from 'substyle';

function LoadingIndicator({ style }) {
  return (
    <div className="loading-container">
      <div className="sm-spin">
      </div>
    </div>
  );
};

export default substyle(LoadingIndicator);


