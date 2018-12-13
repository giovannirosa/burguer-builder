import React, { Component } from 'react';

import Layout from './components/Layout/Layout';
import BurguerBuider from './containers/BurguerBuilder/BurguerBuilder';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <BurguerBuider />
        </Layout>
      </div>
    );
  }
}

export default App;
