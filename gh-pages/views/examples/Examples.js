import React from 'react';
import { EnhancerProvider } from 'substyle';
import Radium from 'radium';
import axios from 'axios';

import MultipleTrigger from './MultipleTrigger';
import SingleLine from './SingleLine';
import Advanced from './Advanced';
import CssModules from './CssModules';
require('./server-response/response.json');
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

var asyncData = function (query, callback) {
  axios.get('./views/examples/server-response/response.json').then((response) => {
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

export default function Examples() {
  return (
    <EnhancerProvider enhancer={Radium}>
      <div className="examples">
        <div className="row">
          <div className="col-lg-12">
            <MultipleTrigger data={users} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <SingleLine data={asyncData} />
          </div>
          <div className="col-md-6">
            <Advanced data={users} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <CssModules data={users} />
          </div>
        </div>
      </div>
    </EnhancerProvider>
  )
}
