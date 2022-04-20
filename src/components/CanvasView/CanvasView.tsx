import React, {PropsWithChildren} from "react";
import {Canvas} from "@react-three/fiber";

interface CanvasViewProps {
    children: any
}

export const CanvasView:React.FC<PropsWithChildren<CanvasViewProps>> = ({children}) => {
    return (
        <Canvas>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            {children}
        </Canvas>
    )
}