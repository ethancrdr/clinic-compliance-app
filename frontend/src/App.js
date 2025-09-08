import React from 'react';
import { auth } from './firebase';

function App() {
  return (
    <div>
      <h1>Checklist App</h1>
      <p>Usuario autenticado: {auth.currentUser ? auth.currentUser.email : 'No logueado'}</p>
    </div>
  );
}

export default App;