import React, { Component, PropTypes } from 'react';

import { defaultStyle } from 'substyle';

import utils from './utils';

import Suggestion from './Suggestion';
import LoadingIndicator from './LoadingIndicator';


class SuggestionsOverlay extends Component {

  static propTypes = {
    suggestions: PropTypes.object.isRequired,
    focusIndex: PropTypes.number,
    scrollFocusedIntoView: PropTypes.bool,
    isLoading: PropTypes.bool,
    onSelect: PropTypes.func,
  };

  static defaultProps = {
    suggestions: {},
    onSelect: () => null,
  };

  componentDidUpdate() {
    const { suggestions } = this.refs
    if (!suggestions || suggestions.offsetHeight >= suggestions.scrollHeight || !this.props.scrollFocusedIntoView) {
      return
    }

    const scrollTop = suggestions.scrollTop
    
    if(suggestions.children[this.props.focusIndex]){
        let { top, bottom } = suggestions.children[this.props.focusIndex].getBoundingClientRect();
      
        const { top: topContainer } = suggestions.getBoundingClientRect();
        top = top - topContainer + scrollTop;
        bottom = bottom - topContainer + scrollTop;

        if(top < scrollTop) {
          suggestions.scrollTop = top
        } else if(bottom > suggestions.offsetHeight) {
          suggestions.scrollTop = bottom - suggestions.offsetHeight
        }
    }
  }

  render() {
    //MenuTitles is object of shape MenuTitle { loadingTitle, defaultTitle, othercasesTitle...etc}
    const { suggestions, isLoading, style, onMouseDown, suggestionMenuTitles } = this.props;
    // do not show suggestions until there is some data
    if(utils.countSuggestions(suggestions) === 0 && !isLoading) {
      return null;
    }
    let loadingTitleArea = (suggestionMenuTitles && this.props.isLoading && suggestionMenuTitles.loadingTitle) ?
                      (<div style={{ margin: 0,
                        fontWeight: 600,
                        padding: "4px 12px",
                        color: "#007FAA",
                        borderTop:"1px solid rgb(204, 204, 204)",
                        borderLeft:"1px solid rgb(204, 204, 204)",
                        borderRight:"1px solid rgb(204, 204, 204)"}}>
                          {suggestionMenuTitles.loadingTitle}
                      </div>) : null;
    let defaultTitleArea = (suggestionMenuTitles && !this.props.isLoading && suggestionMenuTitles.defaultTitle) ?
                        (<div style={{margin: 0,
                          fontWeight: 600,
                          padding: "4px 12px",
                          color: "#007FAA",
                          borderTop:"1px solid rgb(204, 204, 204)",
                          borderLeft:"1px solid rgb(204, 204, 204)",
                          borderRight:"1px solid rgb(204, 204, 204)"}}>
                            {suggestionMenuTitles.defaultTitle}
                        </div>) : null;
    return (
      <div
        {...style}
        onMouseDown={onMouseDown}
      > 
      {loadingTitleArea}
      {defaultTitleArea}
       {/* render loading indicator  */}
       {this.props.isLoading &&
        (<ul
          ref="suggestions"
          { ...style("list") }
        >
          <LoadingIndicator { ...this.props.style("loadingIndicator") } />
        </ul>)
       
       }
       
       {/* render suggestion list */}
       {!this.props.isLoading && utils.countSuggestions(suggestions) > 0 && 
        (<ul
          ref="suggestions"
          { ...style("list") }
        >
          { this.renderSuggestions() }
        </ul>)
       }

      </div>
    );
  }

  renderSuggestions() {
    return utils.getSuggestions(this.props.suggestions).reduce((result, { suggestions, descriptor }) => [
      ...result,

      ...suggestions.map((suggestion, index) => this.renderSuggestion(
        suggestion,
        descriptor,
        result.length + index
      ))
    ], []);
  }

  renderSuggestion(suggestion, descriptor, index) {
    let id = this.getID(suggestion);
    let isFocused = (index === this.props.focusIndex);

    let { mentionDescriptor, query } = descriptor;

    return (
      <Suggestion
        style={this.props.style("item")}
        key={ id }
        id={ id }
        ref={isFocused ? "focused" : null}
        query={ query }
        index={ index }
        descriptor={ mentionDescriptor }
        suggestion={ suggestion }
        focused={ isFocused }
        onClick={ () => this.select(suggestion, descriptor) }
        onMouseEnter={ () => this.handleMouseEnter(index) } />
    );
  }

  getID(suggestion) {
    if(suggestion instanceof String) {
      return suggestion;
    }

    return suggestion.id;
  }


  handleMouseEnter(index, ev) {
    if(this.props.onMouseEnter) {
      this.props.onMouseEnter(index);
    }
  }

  select(suggestion, descriptor) {
    this.props.onSelect(suggestion, descriptor);
  }

}

const styled = defaultStyle(({ position }) => ({
  position: "absolute",
  zIndex: 99,
  backgroundColor: "white",
  marginTop: 14,
  minWidth: 100,
  ...position,

  list: {
    margin: 0,
    padding: 0,
    listStyleType: "none",
  }
}));

export default styled(SuggestionsOverlay);
