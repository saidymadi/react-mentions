import React from 'react';
import axios from 'axios';
import {SocialMarkupInput} from '../../src';
require('./sample-response.json');
require('./sample-response2.json');
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

const asyncData = function (query, callback) {
  axios.get('./views/sample-response.json').then((response) => {
    
    var data = response.data;
    const results = [];
    for (let i = 0, l = data.length; i < l; ++i) {
      const display = data[i].display ||  data[i].id;
      if (display.toLowerCase().indexOf(query.toLowerCase()) >= 0) {
        results.push(data[i]);
      }
    }
    return callback(results);
  });

};
export default function ReactMentions() {
  return (
    <div className="react-mentions">
     
      <div className="container">
      <h2 id="examples">Examples</h2>
      <br/>  
      <h2>regular case</h2>
      <SocialMarkupInput 
      onChangeCallBack={(val,textAreaValAndMarkup,listOfMentions)=>{
        
      }} 
      data={asyncData} 
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
      <SocialMarkupInput readOnly={true} onChangeCallBack={(val,textAreaValAndMarkup,listOfMentions)=>{
        
        }} data={asyncData} value={"Hi @[John Doe](user:johndoe), \n\nlet\'s add @[joe@smoe.com](email:joe@smoe.com) and @[John Doe](user:johndoe) to this conversation..."}/>
        <br/>

{/* 
      <SocialMarkupInput singleLine={true} data={asyncData} value={"Hi @[John Doe](user:johndoe)"}/> */}
      </div>
    </div>
  )
}
