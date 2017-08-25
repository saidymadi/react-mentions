import React from 'react'
import { Mention, MentionsInput } from '../../../src'
import defaultStyle from './defaultStyle'
import defaultMentionStyle from './defaultMentionStyle'

// use first/outer capture group to extract the full entered sequence to be replaced
// and second/inner capture group to extract search string from the match
// const emailRegex = /(([^\s@]+@[^\s@]+\.[^\s@]+))$/

class MultipleTriggers extends React.Component {
    constructor(props){
    super(props);
    this.state = {
      value : this.props.value || ''
    };
  }
  render(){
    const { value, data, onChange, onAdd } = this.props;
    return (
    <div className="multiple-triggers">
       <MentionsInput
        value={ this.state.value }
        onChange={(ev,val)=>{this.setState({value: val});}}
        style={ defaultStyle }
        markup="@[__display__](__type__:__id__)"
        placeholder={"Mention people using '@'"}
      >
        <Mention
          type="user"
          trigger="@"
          data={ data }
          renderSuggestion={ (suggestion, search, highlightedDisplay) => (
            <div className="user">
              { highlightedDisplay }
            </div>
          )}
          onAdd={ onAdd }
          style={defaultMentionStyle}
        />
      </MentionsInput>
    </div>
  )
  }
  
}


export default MultipleTriggers;
