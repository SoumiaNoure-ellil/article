import { createRoot } from 'react-dom/client';
import './index.css';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import store from './Store/Context.jsx'; 
import { Provider } from 'react-redux';
import './App.css';
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}> 
    <App />
    
  </Provider>,
);