import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'flag-icons/css/flag-icons.min.css' 
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import CSS
import { UserProvider } from './component/context/User.jsx';
import 'sweetalert2/dist/sweetalert2.min.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
        <UserProvider>
          <App />
        </UserProvider>
    </BrowserRouter>
  </StrictMode>,
)
