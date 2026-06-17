import {useGLTF} from "@react-three/drei";

function CryptoModel3D({modelPath, scale}){
    const {scene} = useGLTF(modelPath);

    return(
        <primitive object={scene} scale={scale} position={[0, 0, 0]}/>
    )
}

export default CryptoModel3D;