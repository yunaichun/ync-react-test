import React from 'react';
// import Toast from './entry';
import Toast from 'ync-react-toast'
import 'ync-react-toast/dist/index.css'

function App() {

  const openToast = () => {
    Toast.show({
      content: '<div>1</div>',
      duration: 2000,
      onClose: ()=>alert(1)
    })
  }

  return (
    <div onClick={openToast}>
      点击弹出toast，2s后自动关闭
    </div>
  );
}

export default App;
