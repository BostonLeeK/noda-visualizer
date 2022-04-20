import React from 'react';
import './App.scss';
import {Box} from "../components/Shapes/Box/Box";
import {CanvasView} from "../components/CanvasView/CanvasView";
function App() {
  return (
    <div className="App">
        <p>App is loaded</p>
        <CanvasView>
            <Box position={[-1.2, 0, 0]} />
            <Box position={[1.2, 0, 0]} />
        </CanvasView>
    </div>
  );
}

export default App;
