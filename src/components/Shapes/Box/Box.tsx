import React from 'react'
import { MeshProps } from '@react-three/fiber'
export const Box = (props: MeshProps) => {
    return (
        <mesh
            {...props}
            scale={1}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={'orange'} />
        </mesh>
    )
}