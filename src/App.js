import * as React from 'react';
import PageContents from './components/PageContents';
import Navigation from './components/Navigation';
import Routes from './components/Routes';
import Footer from './components/Footer';

class App extends React.Component {
  render() {
    return (
      <div>
        <PageContents>
          <Navigation />
          <Routes />
        </PageContents>
        <Footer />
      </div>
    );
  }
}

export default App;
