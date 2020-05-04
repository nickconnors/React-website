import React from 'react';
import './App.css';
import CustomNavbar from './components/CustomNavbar';
import Home from './components/Home';
import Layout from './Layout';

function App() {
  return (
    <React.Fragment>
      <CustomNavbar />
      <Home />
      <Layout>
      </Layout>
    </React.Fragment>
  );
}

export default App;
