import {useGLTF} from "@react-three/drei";

function BTC(){
    const {scene} = useGLTF('public/bitcoin.glb')

    return <primitive object={scene} scale={50} position={[0, 0, 0]} />;
}

export default BTC;