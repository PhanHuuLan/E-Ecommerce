
import { Provider } from 'react-redux';
import store from './app/containers/redux/store';
import Main from './app/shared/components/layout/Main';
import Header from './app/shared/components/layout/Header';
import './App.css';
import '../../e-ecommerce/src/app/stylesheet/style.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App  () {
  return (
    <Provider store={store}>
      <Header/>
      <Main/>
    </Provider>
  );
}

export default App;
