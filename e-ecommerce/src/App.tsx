
import { Provider } from 'react-redux';
import store from './app/containers/redux/store';
import Main from './app/shared/components/layout/Main';
import Header from './app/shared/components/layout/Header';
import './App.css';
import '../../e-ecommerce/src/app/stylesheet/style.css';
import Footer from './app/shared/components/layout/Footer';
import { BrowserRouter as Router } from "react-router-dom";


function App  () {
  return (
    <Provider store={store}>
      <Router>

        <Header/>
        <Main/>
        <Footer/>
      </Router>
    </Provider>
  );
}

export default App;
