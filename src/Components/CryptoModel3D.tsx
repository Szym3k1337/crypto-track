import {useGLTF} from "@react-three/drei";
interface props {
    modelPath: string;
    scale: number;
}
function CryptoModel3D({ modelPath, scale }: props) {
    const {scene} = useGLTF(modelPath);

    return(
        <primitive object={scene} scale={scale} position={[0, 0, 0]}/>
    )
}

export default CryptoModel3D;