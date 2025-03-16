import React from 'react';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista'
import './style.scss'

function App() {
  return (
    <div className="App">
      <header className="AppStyle">        
        <Formulario />
        <Lista />
      </header>
    </div>
  );
}

export default App;
