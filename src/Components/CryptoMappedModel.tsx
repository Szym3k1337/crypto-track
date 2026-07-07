import { useTexture } from '@react-three/drei';
interface props {
    textureUrl: string;
}
function ProceduralCoin({ textureUrl }: props) {

    const texture = useTexture(textureUrl);

    return (
        <mesh rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[2, 2, 0.3, 32]} />
            <meshStandardMaterial map={texture} roughness={0.3} metalness={0.8} />
        </mesh>
    );
}
export default ProceduralCoin;
