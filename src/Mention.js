import React, {PropTypes} from 'react';
import { defaultStyle } from 'substyle';

const styled = defaultStyle({
  fontWeight: "inherit"
});
//added handling to adjust for IOS
const Mention = styled(({ display, style }) => (
  <span style={{...style.style,paddingLeft: !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform) ? '3px':'0px'}}>
    { display }
  </span>
));

Mention.propTypes = {
  /**
   * Called when a new mention is added in the input
   *
   * Example:
   *
   * ```js
   * function(id, display) {
   *   console.log("user " + display + " was mentioned!");
   * }
   * ```
   */
  onAdd: PropTypes.func,
  onRemove: PropTypes.func,

  renderSuggestion: PropTypes.func,

  trigger: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(RegExp)
  ]),

  isLoading: PropTypes.bool,
};

Mention.defaultProps = {
  trigger: "@",
  onAdd: () => null,
  onRemove: () => null,
  renderSuggestion: null,
  isLoading: false,
  appendSpaceOnAdd: true
};

export default Mention;
