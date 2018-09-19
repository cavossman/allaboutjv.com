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
  },
  {
    'title': 'Kindness',
    'body': ` How brave it is<br />
              To be kind<br />
              In a world so cold<br />
              Where it’s rare to find.<br />
    
              `,
    'featured': false
  },
  {
    'title': 'Wild Flowers',
    'body': ` A flower needs water to grow,<br /> 
              Sunlight, kind words, and air.<br />
              And when that's all taken away. <br />
              It never does seem fair.<br />
              <br />
              Roots, become unplanted<br />
              Leaves begin to wilt.<br />
              Everything curls into itself<br />
              Darkness as its still<br />
              
              It's cruel the way<br />
              Flowers will reach towards the sun<br />
              But forget it when someone takes it<br />
              When it is somehow gone<br />
              <br />
              No one on this earth<br />
              Should ever have that  power<br />
              To take the dance that lives <br />
              inside a beautiful wildflower<br />
              <br />
              Nor to stop the color<br />
              Of happiness growing<br />
              That willingly springs to life<br />
              That those Sunflowers are always showing<br />
              <br />
              After all that rain, you’d think<br />
              it’d hurt a flower more.<br />
              But flowers are resilient.<br />
              And they’ll thrive forevermore. <br /> 
              `,
    'featured': false
  },
  {
    'title': 'Broken All Along',
    'body': ` I had an abuser for 2 years, <br /> 
              Forced to call her boss<br /> 
              Leave and risk financial burden<br /> 
              Stay and my health was the cost.<br /> 
              <br /> 
              She turned my friends against me<br /> 
              Spread lies and deceit<br /> 
              She took the place I loved so much<br /> 
              And made a hell for me.<br /> 
              <br /> 
              I cried, I hid,<br /> 
              I tried to hit every alarm that I could find<br /> 
              But it seemed that those that could do something<br /> 
              Could never find the time.<br /> 
              <br /> 
              The things she said to me<br /> 
              Were more than just rough<br /> 
              I was too short, too dull, too nice, too strict<br /> 
              But never good enough.<br /> 
              <br /> 
              Every strength I ever had<br /> 
              She tried to take away<br /> 
              My confidence I came with<br /> 
              Will never be the same.<br /> 
              <br /> 
              The worst part about it all,<br /> 
              Was even I would start to believe<br /> 
              That it was all my fault<br /> 
              That the blame was all on me.<br /> 
              <br /> 
              Looking back, I now know<br /> 
              What happened to me was wrong<br /> 
              Legally, morally, ethically,<br /> 
              But I learned how to be strong.<br /> 
              <br /> 
              Those 2 years passed,<br /> 
              Despite feeling like they would never end<br /> 
              And though I feel so broken<br /> 
              It’s nice to breath again.<br /> 
              <br /> 
              So take a breath- walk away<br /> 
              Do what you can to move on<br /> 
              Abusers make you feel this way,<br /> 
              Because they’ve been broken all along.   <br />  
              `,
    'featured': false
  },
  {
    'title': 'Just Forget',
    'body': ` They tell me to stop<br /> 
              They tell me to quit<br /> 
              The endless thoughts<br /> 
              That came from it<br /> 
              <br /> 
              Pretend to smile<br /> 
              Pretend not to care<br /> 
              Pretend until<br /> 
              It’s no longer there<br /> 
              <br /> 
              But all of these thoughts<br /> 
              Feel weird to me<br /> 
              Pretend it’s not there<br /> 
              It will disappear, you’ll see?<br /> 
              <br /> 
              But what happened to me<br /> 
              It wasn’t a thought <br /> 
              It wasn’t a joke<br /> 
              Just to be forgot<br /> 
              <br /> 
              As much as they say<br /> 
              Just let it go<br /> 
              What happened to me<br /> 
              Should be well know<br /> 
              <br /> 
              Because it wasn’t just a time<br /> 
              Nor just a place<br /> 
              Nor a bad memory<br /> 
              To be replaced<br /> 
              <br /> 
              What happened to me<br /> 
              Cannot be undone<br /> 
              It took who I was<br /> 
              Shattered from where I was from<br /> 
              <br /> 
              And what they can’t see <br /> 
              When they say just forget<br /> 
              Is how much of me<br /> 
              Has already been left.<br />  
              `,
    'featured': false
  },
  {
    'title': 'Voice',
    'body': ` There was a tiny voice in me<br />
              Quiet and meek<br />
              It wanted to shout<br />
              But sometimes it forgot how to speak.<br />
              <br />
              Until one day<br />
              A thought came along<br />
              And whispered<br />
              That’s enough.<br />
              <br />
              That little voice<br />
              Turned ferocious inside<br />
              And now<br />
              It’s  loud enough.<br />  
              `,
    'featured': false
  }
];

class Poetry extends Component {
  render() {
    return (
      <div className="page poetry-page">
        {poems.map((poem, index) => {
          return (
            <div className={'poem ' + (poem.featured ? 'featured-poem' : '')} key={index}>
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
