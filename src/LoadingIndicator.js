import React from 'react';
import substyle from 'substyle';
import DelayRender from './react-delay-render';

function LoadingIndicator({ style }) {
  return (
    <div style={{margin:0}} className="mentions-suggestions__loading-container">
      <div className="mentions-suggestions__sm-spin spin-small">
      </div>
    </div>
  );
};

export default DelayRender({ delay: 1000 })(substyle(LoadingIndicator));


