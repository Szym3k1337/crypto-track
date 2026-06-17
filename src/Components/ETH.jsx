import {useGLTF} from "@react-three/drei";

function ETH(){
    const {scene} = useGLTF('public/ethereum.glb')

    return <primitive object={scene} scale={1} position={[0, 0, 0]} />;
}

export default ETH;