import FaultyTerminalShader from '../../shader/FaultyTerminalShader.jsx'

export default function FaultyTerminal() {
    return (
        <div style={{ width: '100%', height: '100%', position: 'absolute', top:0,right:0, zIndex:-1}}>
            <FaultyTerminalShader
                scale={2.3}
                gridMul={[2, 1]}
                digitSize={1.6}
                timeScale={0.5}
                pause={false}
                scanlineIntensity={0.5}
                glitchAmount={1}
                flickerAmount={1}
                noiseAmp={1}
                chromaticAberration={0}
                dither={0}
                curvature={0.1}
                tint="#7a7a7a"
                mouseReact={false}
                mouseStrength={0.5}
                pageLoadAnimation
                brightness={0.6}
            />
        </div>
    )
}