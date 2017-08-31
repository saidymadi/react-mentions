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
  },
  {
    id: 'jesse',
    display: 'Jesse Pinkman',
  },
  {
    id: 'gus',
    display: 'Gustavo "Gus" Fring',
  },
  {
    id: 'saul',
    display: 'Saul Goodman',
  },
  {
    id: 'hank',
    display: 'Hank Schrader',
  },
  {
    id: 'skyler',
    display: 'Skyler White',
  },
  {
    id: 'mike',
    display: 'Mike Ehrmantraut',
  },
]


class ReactMentions extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      dataLoading:false
    }
  }
 


  render(){
  const asyncData = function (query, callback) {
 
    axios.get('./views/sample-response.json').then((response) => {
      this.setState({...this.state, dataLoading:true} )
      setTimeout(()=>{
        var data = response.data;
        const results = [];
        for (let i = 0, l = data.length; i < l; ++i) {
          const display = data[i].display ||  data[i].id;
          if (display.toLowerCase().indexOf(query.toLowerCase()) >= 0) {
            results.push(data[i]);
          }
        }
        this.setState({...this.state, dataLoading:false})
        return callback(results);
      },1000);
        
    });
  
  }.bind(this);
  return (
    <div className="react-mentions">
     
      <div className="container">
      <h2 id="examples">Examples</h2>
      <br/>  
      <h2>regular case</h2>
      <SocialMarkupInput 
      shouldAutoFocus={true}
      isLoading={this.state.dataLoading}
      onChangeCallBack={(val,textAreaValAndMarkup,listOfMentions)=>{
        
      }} 
      data={asyncData} 

      value={"enter async"}
      />
      
      <br/>  
      <h2>email trigger case</h2>
      <SocialMarkupInput 
      allowEmailTrigger={true}
      onChangeCallBack={(val,textAreaValAndMarkup,listOfMentions)=>{
      }} 
      data={users} 
      value={"Hi @[John Doe](user:johndoe), \n\nlet\'s add @[joe@smoe.com](email:joe@smoe.com) and @[John Doe](user:johndoe) to this conversation..."}
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
      <h2>read Only case</h2>
      <SocialMarkupInput 
        readOnly={true} 
        onChangeCallBack={(val,textAreaValAndMarkup,listOfMentions)=>{
        }} 
        data={users} 
        value={"Hi @[John Doe](user:johndoe), \n\nlet\'s add @[joe@smoe.com](email:joe@smoe.com) and @[John Doe](user:johndoe) to this conversation..."}
      />
        <br/>
        
      <h2>Single Line case</h2>
      <SocialMarkupInput 
        singleLine={true}
        onChangeCallBack={(val,textAreaValAndMarkup,listOfMentions)=>{
          }} 
        data={users} 
        value={"Hi @[John Doe](user:johndoe),  add @[joe@smoe.com](email:joe@smoe.com) to this conversation..."}
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