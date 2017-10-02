import React, {Component} from 'react';
import axios from 'axios';
import {SocialMarkupInput} from '../../src';
require('./sample-response.json');
require('./sample-response2.json');
require('../../src/stylesheets/loadingIndicatorStyle.css');
require('../../src/stylesheets/socialMarkupInputstyle.css');
const users = [
  {
    id: 'walter',
    display: 'Walter White',
    description: 'User'
  },
  {
    id: 'jesse',
    display: 'Jesse Pinkman',
    description: 'Lonely User'
  },
  {
    id: 'gus',
    display: 'Gustavo "Gus" Fring',
    description: 'Beautiful'

  },
  {
    id: 'saul',
    display: 'Saul Goodman',
    description: 'Numerical'
  },
  {
    id: 'hank',
    display: 'Hank Schrader',
    description: 'creative'
  },
  {
    id: 'skyler',
    display: 'Skyler White',
    description: 'Analysis'

  },
  {
    id: 'mike',
    display: 'Mike Ehrmantraut',
    description: 'Why This'

  },
]
const emailRegex = /(([^\s@]+@[^\s@]+\.[^\s@]+))$/;


class ReactMentions extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      dataLoading:false
    }
    this.asyncData = function (query, callback) {
      this.setState({...this.state, dataLoading:true} )
         axios.get('./views/sample-response.json').then((response) => {
      
           setTimeout(()=>{
            this.setState({...this.state, dataLoading:false});
             var data = users;
             const results = [];
             for (let i = 0, l = data.length; i < l; ++i) {
               const display = data[i].display ||  data[i].id;
               if (display.toLowerCase().indexOf(query.toLowerCase()) >= 0) {
                 results.push(data[i]);
               }
             }

             //if email query and no matching result allow user to add this 
             if(!results.length >0 && emailRegex.test(query)){
               return callback([{id: query, display:query}]);
              }
             //otherwise return matching users 
             return callback(results);
           },600); 
         });
       }.bind(this);
     
  

        this.handleInsertMention= function(){
          //a little uncomfortable must rework to expose add user in a different way 
          if(this.socialMarkup
            &&this.socialMarkup.mentionsInputRef
            &&this.socialMarkup.mentionsInputRef.wrappedInstance
            &&this.socialMarkup.mentionsInputRef.wrappedInstance.refs.input){
              let inputElement = this.socialMarkup.mentionsInputRef.wrappedInstance.refs.input;
              let newVal =  this.socialMarkup.state.value + " @[@b3eed](user:johndoe)";
              let updateUnderlyingTextInputArea = function(){
                this.socialMarkup.mentionsInputRef.wrappedInstance.handleInsertMention( {target: inputElement });
              }.bind(this);
              this.socialMarkup.setState({...this.socialMarkup.state,value : newVal} , updateUnderlyingTextInputArea)
           } 
        }.bind(this);
  }
 


  render(){


  return (
    <div className="react-mentions">
     
      <div className="container">
      <h2 id="examples">Examples</h2>
      <button onClick={this.handleInsertMention}>
        Add Joe to existing react mentions
     </button>
      <br/>  
      <h2>Email Trigger and @mention case</h2>
      <SocialMarkupInput   
      ref={(input) => { this.socialMarkup = input; }}
      shouldAutoFocus={true}
      isLoading={this.state.dataLoading}
      onAdd={(item)=>{console.log(item)}}
      onRemove={(item)=>{console.log(item)}}
      suggestionMenuTitles={{defaultTitle: "Suggestions", loadingTitle: "Fetching..."}}
      onChangeCallBack={(val,textAreaValAndMarkup,listOfMentions)=>{
        console.log("succeeeed " + listOfMentions);
      }} 
      getMentionsCallBack={(mentions)=>{console.log(mentions);}}
      data={this.asyncData } 
      />
      
      <br/>  
      <h2>No email trigger + case async data</h2>
      <SocialMarkupInput 
      allowEmailTrigger={false}
      isLoading={this.state.dataLoading}
      data={this.asyncData} 
      value={"Hi @[John Doe](user:johndoe), \n\nlet\'s and @[John Doe](user:johndoe) to this conversation..."}
      />
      <br/>
      <h2>300 char limit case </h2>
      <SocialMarkupInput 
        maxAllowedTextLength={300}
        onChangeCallBack={(val,textAreaValAndMarkup,listOfMentions)=>{
        }} 
        data={users} 
        value={"Hi @[John Doe](user:johndoe)"}
      />
      <br/>
      <h2>read Only</h2>
      <SocialMarkupInput 
        readOnly={true} 
        onChangeCallBack={(val,textAreaValAndMarkup,listOfMentions)=>{
        }} 
        data={users} 
        value={"Hi @[John Doe](user:johndoe), \n\nlet\'s add @[joe@smoe.com](email:joe@smoe.com) and @[John Doe](user:johndoe) to this conversation..."}
      />


      <br/>
      <h2>read Only Email Trigger</h2>
      <SocialMarkupInput 
        allowEmailTrigger={true}
        readOnly={true} 
        onChangeCallBack={(val,textAreaValAndMarkup,listOfMentions)=>{
        }} 
        data={users} 
        value={"Hi @[John Doe](user:johndoe) add \n\n @[joe@smoe.com](email:joe@smoe.com) and @[John Doe](user:johndoe) to this conversation..."}
      />
        <br/>
        
      <h2>Single Line case</h2>
      <SocialMarkupInput 
        singleLine={true}
        onChangeCallBack={(val,textAreaValAndMarkup,listOfMentions)=>{
          }} 
        data={users} 
        value={"Hi @[John Doe](user:johndoe), add @[joe@smoe.com](email:joe@smoe.com) to this conversation..."}
      />
        <br/>

       <h2>read only Single Line </h2>
      <SocialMarkupInput 
        singleLine={true}
        readOnly={true} 
        onChangeCallBack={(val,textAreaValAndMarkup,listOfMentions)=>{
        }} 
        data={users} 
        value={"Hi @[John Doe](user:johndoe),  add @[joe@smoe.com](email:joe@smoe.com) to this conversation..."}
      />
        <br/>
      </div>
    </div>
  );
  }
}
export default ReactMentions;