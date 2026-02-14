import PrismShader from '../../lib/PrismShader.jsx'

export default function Prism() {
    return (
        <div style={{ width: '100%', height: '100%', position: 'absolute', top:0,right:0, zIndex:-1}}>
            <PrismShader
                animationType="rotate"
                timeScale={0.5}
                height={3.5}
                baseWidth={5.5}
                scale={3.6}
                hueShift={0}
                colorFrequency={1}
                noise={0}
                glow={1}
            />
        </div>
    )
}