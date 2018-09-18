import React, { Component } from 'react';

import './poetry.css';

const poems = [
  {
    'title': 'Resilient',
    'body': ` Resilient means to get back up<br />
              When you are tangled on the ground<br />
              <br />
              To find the silver lining<br />
              in the darkest of those clouds<br />
              <br />
              To look an enemy eye to eye<br />
              And not fear their secrets or lies<br />
              <br />
              To feel their hateful words<br />
              But feel no need to start a rise<br />
              <br />
              To remember that a storm<br />
              Brings the rainbows to your door<br />
              <br />
              That you are strong enough<br />
              For even the worst of the storms<br />
              <br />
              To believe in yourself<br />
              Even when you have been so very lost<br />
              <br />
              To follow your dreams, and not give up,<br />
              No matter all the cost.<br />
              <br />
              Resilience is truly brave.<br />
              In it’s own extraordinary right.<br />
              <br />
              To have experienced the demons reach to grab you,<br />
              And still keep searching for the light.<br />
              `,
    'featured': true
  }
];

class Poetry extends Component {
  render() {
    return (
      <div className="page poetry-page">
        {poems.map((poem, index) => {
          return (
            <div className="poem" key={index}>
              <h3>{poem.title}</h3>
              <div className="poem-body" dangerouslySetInnerHTML={{__html: poem.body}}></div>
              <h3>{'-JV'}</h3>
            </div>
          )
        })}
      </div>
    );
  }
}
export default Poetry;
