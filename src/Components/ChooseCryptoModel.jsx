import { Canvas } from '@react-three/fiber';
import { useState, useEffect } from 'react';
import CryptoModel3D from './CryptoModel3D.jsx';
import CryptoMappedModel from './CryptoMappedModel.jsx';
import {Float, OrbitControls} from "@react-three/drei";

const CRYPTO_MODELS_POOL = [
    { type: "model", path: "/bitcoin.glb", scale: 50 },
    { type: "model", path: "/ethereum.glb", scale: 2 },
    { type: "procedural", path: "/bnb.png" },
    { type: "procedural", path: "/xrp.png" },
    { type: "procedural", path: "/usdt.png" },
    { type: "procedural", path: "/solana.png" }
];

function ChooseCryptoModel() {

    const [randomModel, setRandomModel] = useState(null);


    useEffect(() => {

        const randomIndex = Math.floor(Math.random() * CRYPTO_MODELS_POOL.length);
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setRandomModel(CRYPTO_MODELS_POOL[randomIndex]);
    }, []);
    if (!randomModel) return null;


    return (
        <div className="w-full max-w-5xl h-80 bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden mb-8">
        <Canvas camera={{position : [0,0,5], fov : 45}}>
            <ambientLight intensity={1.5} />
            <directionalLight position={[5, 5, 5]} intensity={5} />
            <directionalLight position={[-5, -5, -5]} intensity={3} />
            <Float rotationIntensity={1} floatIntensity={1} speed={1.5}>
                {randomModel.type === 'model' ? (
                    <CryptoModel3D modelPath={randomModel.path} scale={randomModel.scale} />
                ) : (
                    <CryptoMappedModel textureUrl={randomModel.path} />
                )}
            </Float>
            <OrbitControls enableZoom={false} />
        </Canvas>
        </div>

    );
}

export default ChooseCryptoModel;