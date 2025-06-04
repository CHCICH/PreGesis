import { Canvas, useThree } from '@react-three/fiber'
import { OrbitControls, useGLTF,CameraControls} from '@react-three/drei'
import { useState, useEffect, useRef } from 'react'

class Point{
    constructor(x,y,z){
        this.x = x;
        this.y = y;
        this.z = z;
    }
}





const TreedAstronaut = ({screenSize}) => {
    function Model({ url }) {
        const { scene } = useGLTF(url)
        return <primitive object={scene} />
    }
    // Converts cartesian coordinates to spherical coordinates [rho, phi, theta]
    const cartesian = (x, y, z) => {
        const rho = Math.sqrt(x * x + y * y + z * z);
        const phi = Math.acos(z / rho) * 180 / Math.PI; 
        const theta = Math.atan2(y, x) * 180 / Math.PI; 
        return [rho, phi, theta];
    }
    const spherical = (rho, phi, theta)=>{
        
        const phiRad = phi * Math.PI / 180;
        const thetaRad = theta * Math.PI / 180;
        const p = new Point(
            rho * Math.sin(phiRad) * Math.cos(thetaRad),
            rho * Math.sin(phiRad) * Math.sin(thetaRad),
            rho * Math.cos(phiRad)
        );
        return [p.x,p.y,p.z]
    };
    useEffect(() => {
        let animationFrameId;
        const animate = () => {
            if (controls.current) {
            const radius = 2; 
            const polar = Math.PI / 4; 
            const speed = 2 // Rotation speed
            const time = performance.now() * 0.0003 * speed;
            const azimuthal = time; 

            const x = radius * Math.sin(polar) * Math.cos(azimuthal);
            const y = radius * Math.sin(polar) * Math.sin(azimuthal);
            const z = radius * Math.cos(polar);

            controls.current.setLookAt(
                x, y, z, 
                0, 0, 0, 
                true
            );
            }
            animationFrameId = requestAnimationFrame(animate);
        };
        animate();
        return () => cancelAnimationFrame(animationFrameId);
    }, []);

    let [cameraPosition, setCameraPosition] = useState(spherical(2,20,-20))
    let controls = useRef();
    // Custom component to apply a glassy material to all meshes in the model
    function GlassyModel({ url }) {
        const { scene } = useGLTF(url)
        scene.traverse((child) => {
            if (child.isMesh) {
                child.material = child.material.clone()
                child.material.transparent = true
                child.material.opacity = 0.9
                child.material.roughness = 0.05
                child.material.metalness = 0.8
                child.material.envMapIntensity = 1
                child.material.clearcoat = 1
                child.material.clearcoatRoughness = 0
                child.material.color.set('#b3e5fc')
            }
        })
        return <primitive object={scene} />
    }

    return (
        <div
            style={{
                width: '90vw',
                height: '90vh',
                borderRadius: '10px',
                border: "solid black 2px",
                margin: "auto",
                backgroundImage: 'url("/final_background.webp")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative', // Make this the stacking context
                overflow: 'hidden',
                marginTop:"8vh",
                marginBottom : "8vh"
            }}
        >
            
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    opacity: 0,
                    background: 'grey',
                    zIndex: 1,
                }}
            ></div>
            <button
                className='white_button'
                style={{
                    fontSize: `${screenSize > 900 ? "25px":"20px" }`,
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: `${screenSize > 900 ? "20vw":"30vw" }` ,
                    height: '8%',
                    opacity: 1,
                    zIndex: 1,
                    transform: 'translate(-50%, -50%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
                onClick={()=>{}}
            >
                Join the community
            </button>
            {/* Canvas with overlay stacking below the overlay */}
            <div style={{ width: '100%', height: '100%', position: 'relative', zIndex: 0 }}>
                <Canvas style={{ background: 'transparent', width: '100%', height: '100%'}} camera={{ position: cameraPosition }}>
                    <ambientLight intensity={2} />
                    <pointLight position={[0, 10, 10]} intensity={6} color="#fffbe6" castShadow />
                    <spotLight
                        position={[15, 20, 5]}
                        angle={0.4}
                        penumbra={1}
                        intensity={120}
                        color="red"
                        castShadow
                        shadow-mapSize-width={2048}
                        shadow-mapSize-height={2048}
                    />
                    <directionalLight
                        position={[-10, 15, 10]}
                        intensity={10}
                        color=""
                        castShadow
                        shadow-mapSize-width={2048}
                        shadow-mapSize-height={2048}
                    />
                    <GlassyModel url="/Exploring_the_Cosmic__0528070852_texture.glb" />
                    <CameraControls ref={controls} enabled={true} mouseButtons={{ LEFT: 0, MIDDLE: 0, RIGHT: 0 }} touches={{ ONE: 0, TWO: 0 }}/>
                </Canvas>
            </div>
        </div>
    )
}

export default TreedAstronaut
