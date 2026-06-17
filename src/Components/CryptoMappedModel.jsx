import { useTexture } from '@react-three/drei';

function ProceduralCoin({ textureUrl }) {

    const texture = useTexture(textureUrl);

    return (
        <mesh rotation={[Math.PI / 2, 0, 0]}>
            {/* cylinderGeometry args=[promień góra, promień dół, grubość monety, liczba segmentów] */}
            <cylinderGeometry args={[2, 2, 0.3, 32]} />
            {/* Nakładamy teksturę na nasz wygenerowany cylinder */}
            <meshStandardMaterial map={texture} roughness={0.3} metalness={0.8} brightness={2} />
        </mesh>
    );
}
export default ProceduralCoin;