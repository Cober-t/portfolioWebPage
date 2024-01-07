import { useControls } from 'leva'
import { useFrame } from '@react-three/fiber'
import { useRef, useEffect } from 'react'
import { Perf } from 'r3f-perf'
import { useMemo } from 'react'

export default function Lights(enable)
{
    {/* DEBUG */}
    const dirLight = useMemo(() => {
        return {
            x: { value: -0.5, step: 0.1 },
            y: { value: 10, step: 0.1 },
            z: { value: 0, step: 0.1 },
            shadow: true,
            intensity: {value: 2.5, step: 0.01},
            bias: {value: 0.14, step: 0.01}
        }
    }, [])

    const ambLight = useMemo(() => {
        return {
            intensity: {value: 0.5, step: 0.01},
            bias: {value: 0.04, step: 0.01}
        }
    }, [])

    // const lDir = useControls('L_Directional', dirLit)
    // const lAm = useControls('L_Ambient', ambLit)
    const dirlightRef = useRef()
    // const amblightRef = useRef()

    useFrame((state)=>
    {
        // light.current.position.z = state.camera.position.z + 3
        // light.current.target.position.z = state.camera.position.z + 4
        dirlightRef.current.target.updateMatrixWorld()
        // amblightRef.current.target.updateMatrixWorld()
    })

    var ambIntensityValue = enable.enable == false ? 1.5 : ambLight.intensity.value
    var dirIntensityValue = enable.enable == false ? 0 : dirLight.intensity.value

    return (
        <>
        {/* <Perf position="top-left"/> */}

        <directionalLight 
            ref={dirlightRef}
            position={[dirLight.x.value, dirLight.y.value, dirLight.z.value]}
            intensity= { dirIntensityValue }
            castShadow={ dirLight.shadow }
            shadow-normalBias={ dirLight.bias.value }
            shadow-mapSize={[1024, 1024]}
            shadow-camera-near={0}
            shadow-camera-far={15}
            shadow-camera-top={15}
            shadow-camera-right={15}
            shadow-camera-bottom={-15}
            shadow-camera-left={-15}s
        />
        <ambientLight intensity={ ambIntensityValue } />
    </>
    )
}