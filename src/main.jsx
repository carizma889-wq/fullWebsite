import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter } from 'react-router-dom';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { WishlistProvider } from './context/WishListContext.jsx';
import { CartsProvider } from './context/CartContext.jsx';
import App from './App.jsx'
import "@fontsource/poppins"; 
import "@fontsource/poppins/700.css"; 
import store from './app/store.js';
import { Provider } from 'react-redux';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <WishlistProvider>
      <CartsProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </CartsProvider>
    </WishlistProvider>
  </BrowserRouter>
  </StrictMode>,
)
