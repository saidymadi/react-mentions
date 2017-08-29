import React from 'react';
import defaultStyle from './defaultStyle';
import defaultMentionStyle from './defaultMentionStyle';
import axios from 'axios';
import MentionsInput from './MentionsInput';
import Mention from './Mention';
class SocialMarkupInput extends React.Component {

  constructor(props){
    super(props);
    // this.fetchSuggestions = this.fetchSuggestions.bind(this);
     this.state = {
      value : this.props.value || '',
      isLoading : false,
      suggestionsList : this.props.data
    };
  }

  // fetchSuggestions (query, callback) {
  //     this.setState({...this.state,isLoading:true });
  //     axios.get('./views/sample-response.json').then((response) => {
  //       setTimeout(()=>{
  //         var data = response.data;
  //         const results = [];
  //         for (let i = 0, l = data.length; i < l; ++i) {
  //           const display = data[i].display ||  data[i].id;
  //           if (display.toLowerCase().indexOf(query.toLowerCase()) >= 0) {
  //             results.push(data[i]);
  //           }
  //         }
  //         this.setState({...this.state, isLoading:false });
  //         return callback(results);
  //       },3000);
        
  //     });

  //   }


  render() {
   //data passed is got to be the url for us to fetch stuff 
    const { value, data, onChangeCallBack, onAdd,singleLine , readOnly , placeholderText, maxAllowedTextLength } = this.props;

    return (
      <div style={{margin:"0", all: 'initial'}}>
        <MentionsInput 
          maxLength={maxAllowedTextLength}
          readOnly={readOnly? true:false}
          singleLine= {singleLine ? true : false}
          value={this.state.value}
          onChange={(ev,val, textAreaValAndMarkup , listOfMentions )=>{
              this.setState({value: val});
              //call back with the content value of the text area 
              if(onChangeCallBack && typeof onChangeCallBack === 'function'){
                onChangeCallBack(val,textAreaValAndMarkup,listOfMentions);
              }
            }}
          style={defaultStyle}
          placeholder={placeholderText? placeholderText:"Mention people using '@'"}
        >
        <Mention 
          readOnly={readOnly? true:false}
          data={this.state.suggestionsList}
          onAdd={(added)=>{console.log(added)} }
          style={defaultMentionStyle}
          isLoading={this.state.isLoading}
        />
        </MentionsInput>
      </div>
    );
  }
}



export default SocialMarkupInput;