import React from 'react';
import Layout from './Components/Layout/Layout';
import WordCount from './Containers/WordCountTable/WordCount';

function App() {
  return (
    <Layout>
      <WordCount />
      <p>word cloud</p>

  </Layout>
  );
}

export default App;
