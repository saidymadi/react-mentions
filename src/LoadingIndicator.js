import React from 'react';
import substyle from 'substyle';

function LoadingIndicator({ style }) {
  return (
    <div className="mentions-suggestions__loading-container">
      <div className="mentions-suggestions__sm-spin">
      </div>
    </div>
  );
};

export default substyle(LoadingIndicator);


