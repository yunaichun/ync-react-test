import React from 'react';
// import Modal from './entry';
import Modal from 'ync-react-modal'
import 'ync-react-modal/dist/index.css'

function App() {

  const openModal = () => {
    Modal.show({
      jsxContent: <div>1111</div>
    })

    setTimeout(() => {
      Modal.close()
    }, 1000)
  }
  return (
    <div onClick={openModal}>
      点击弹出弹窗，1s后自动关闭
    </div>
  );
}

export default App;
