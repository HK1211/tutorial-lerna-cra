import React from 'react';
import { Button } from '@leehankue/components';
import './App.css';

function App() {
  const [state, setState] = React.useState(0);
  return (
    <div className="App">
      test
      {state}
     <Button onClick={()=>setState(s=>++s)}>Click me2!</Button>
    </div>
  );
}

export default App;
