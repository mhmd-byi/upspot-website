import React, {useEffect} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './assets/scss/styles.scss';


function App() {
  useEffect(() => {
    const handleVisibilityChange = () => {
      const favicon = document.querySelector("link[rel*='icon']");
      favicon.href = document.hidden ? '/missing.png' : '/favicon.ico';
    };
  
    document.addEventListener('visibilitychange', handleVisibilityChange);
  
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  const getComponent = (component) => {
    return React.createElement(component, {});
  }
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={getComponent(route.component)} />
            ))}
        </Routes>
      </BrowserRouter>      
    </div>
  );
}

export default App;
