import React, { useState, useEffect } from 'react';
// import { JsAnimationKeyframe } from './ync-react-animation-keyframe';
import { JsAnimationKeyframe } from 'ync-react-animation-keyframe';

function App() {
  let [images, setImages] = useState([]);

  useEffect(() => {
    Promise.all([
      import('../../source/01/0.jpg'),
      import('../../source/01/1.jpg'),
      import('../../source/01/2.jpg'),
      import('../../source/01/3.jpg'),
      import('../../source/01/4.jpg'),
      import('../../source/01/5.jpg'),
      import('../../source/01/6.jpg'),
      import('../../source/01/7.jpg'),
      import('../../source/01/8.jpg'),
      import('../../source/01/9.jpg'),
      import('../../source/01/10.jpg'),
      import('../../source/01/11.jpg'),
      import('../../source/01/12.jpg'),
      import('../../source/01/13.jpg'),
      import('../../source/01/14.jpg'),
      import('../../source/01/15.jpg'),
      import('../../source/01/16.jpg'),
      import('../../source/01/17.jpg'),
      import('../../source/01/18.jpg'),
      import('../../source/01/19.jpg'),
      import('../../source/01/20.jpg'),
      import('../../source/01/21.jpg'),
      import('../../source/01/22.jpg'),
      import('../../source/01/23.jpg'),
      import('../../source/01/24.jpg'),
    ]).then((res) => {
      setImages(res.map(i => i.default));
    })
  }, [])
  
  return (
    <JsAnimationKeyframe
      seconds={150}
      images={images}
      style={{
        width: '100%',
        height: '100vh'
      }}
    />
  );
}

export default App;
