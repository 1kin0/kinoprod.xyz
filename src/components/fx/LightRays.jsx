import LightRaysShader from '../../lib/LightRaysShader.jsx'

export default function LightRays() {
    return (
        <div style={{ width: '100%', height: '100%', position: 'absolute', top:0,right:0, zIndex:-1}}>
            <LightRaysShader
                raysOrigin="top-center"
                raysColor="#ffffff"
                raysSpeed={1}
                lightSpread={0.5}
                rayLength={3}
                followMouse={true}
                mouseInfluence={0.1}
                noiseAmount={0}
                distortion={0}
                className="custom-rays"
                pulsating={false}
                fadeDistance={1}
                saturation={1}
            />
        </div>
    )
}