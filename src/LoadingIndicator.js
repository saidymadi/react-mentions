import React from 'react';
import substyle from 'substyle';
import DelayRender from './react-delay-render';

function LoadingIndicator({ style }) {
  return (
    <ul style={{
        margin: 0,
        padding: '4px 11px',
        border: '1px solid rgb(204, 204, 204)'
      }}
    >
      <div style={{margin:0}} className="mentions-suggestions__loading-container">
        <div className="mentions-suggestions__sm-spin spin-small">
        </div>
      </div>
    </ul>
  );
};

export default DelayRender({ delay: 1000 })(substyle(LoadingIndicator));


