import React from 'react';
import Container from '@mui/material/Container';
import {Box} from "../components/Shapes/Box/Box";
import {CanvasView} from "../components/CanvasView/CanvasView";

const App:React.FC = () =>
    <Container>
        <CanvasView>
            <Box position={[-1.2, 0, 0]} />
            <Box position={[1.2, 0, 0]} />
        </CanvasView>
    </Container>

export default App;
