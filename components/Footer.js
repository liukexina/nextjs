import React from 'react';
import { Layout } from 'antd';
const { Footer } = Layout;

class Siders extends React.Component {
  state = {};

  render() {
    return (
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    );
  }
}

export default Siders;
