import React, {PropTypes} from 'react';
import substyle from 'substyle';
import DelayRender from './react-delay-render';


export class LoadingIndicatorTitle extends React.Component {
  static propTypes = {
    loadingTitle: PropTypes.string.isRequired
  }

  render(){
    return (
      <div style={{ margin: 0,
            fontWeight: 500,
            fontSize: 12,
            padding: "4px 11px",
            color: "#007FAA",
            borderTop:"1px solid rgb(204, 204, 204)",
            borderLeft:"1px solid rgb(204, 204, 204)",
            borderRight:"1px solid rgb(204, 204, 204)"}}>
              {this.props.loadingTitle}
      </div>
    );
  }
};

export default DelayRender({ delay: 1000 })(LoadingIndicatorTitle);


