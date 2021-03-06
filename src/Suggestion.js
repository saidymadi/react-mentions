import React, { Component, PropTypes } from 'react';
import { defaultStyle } from 'substyle';
import omit from 'lodash/omit';
import keys from 'lodash/keys';

class Suggestion extends Component {

  static propTypes = {
    id: PropTypes.string.isRequired,
    query: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,

    suggestion: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        display: PropTypes.string
      }),
    ]).isRequired,
    descriptor: PropTypes.object.isRequired,

    focused: PropTypes.bool,
  };

  render() {
    let rest = omit(this.props, 'style', keys(Suggestion.propTypes));

    return (
      <li
        { ...rest }
        { ...this.props.style }
      >

        { this.renderContent() }

      </li>
    );
  }

  renderContent() {
    let { id, query, descriptor, suggestion, index } = this.props;

    let display = this.getDisplay();
    let highlightedDisplay = this.renderHighlightedDisplay(suggestion, query);

    if(descriptor.props.renderSuggestion) {
      return descriptor.props.renderSuggestion(suggestion, query, highlightedDisplay, index);
    }

    return highlightedDisplay;
  }

  getDisplay() {
    let { suggestion } = this.props;

    if(suggestion instanceof String) {
      return suggestion;
    }

    let { id, display } = suggestion;

    if(!id || !display) {
      return id;
    }

    return display;
  }

  renderHighlightedDisplay({display,description}) {
    const { query, style } = this.props;

    let i = display.toLowerCase().indexOf(query.toLowerCase());
    let descriptionText = description ?
        (<div style={{margin: "0 2px 0 0", fontSize:10, color: "#6B787F"}}>
        {description}
        </div>) : null;
    if(i === -1) {
      return (<div style={{margin:0}}>
              { display }
              {descriptionText}
            </div>);
    }

    return (
      <div style={{margin:0}}>
        { display.substring(0, i) }
        <span style={{fontWeight:"bold"}}>
          { display.substring(i, i+query.length) }
        </span>
        { display.substring(i+query.length) }
        {descriptionText}
      </div>
    );
  }
}

const styled = defaultStyle({
  cursor: "pointer"
}, (props) => ({ "&focused": props.focused }))

export default styled(Suggestion);
