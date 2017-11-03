import React, {PropTypes} from 'react';

//added handling to adjust for IOS !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform) ? '3px':'0px'}
const Mention = ({ display, style }) => (
  <span style={{...style,fontWeight: "inherit", paddingLeft: !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform) ? '3px':'0px'}}>
    { display }
  </span>
);

Mention.propTypes = {
  trigger: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(RegExp)
  ]),
  isLoading: PropTypes.bool,
};

Mention.defaultProps = {
  trigger: "@",
  isLoading: false,
  appendSpaceOnAdd: true
};

export default Mention;
