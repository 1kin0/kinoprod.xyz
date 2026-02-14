import FloatingLinesShader from '/src/shaders/FloatingLinesShader.jsx'

export default function FloatingLines() {
    return (
        <div style={{ width: '100%', height: '100%', position: 'absolute', top:0,right:0, zIndex:-1}}>
             <FloatingLinesShader 
                enabledWaves={["top","middle","bottom"]}
                lineCount={2}
                lineDistance={5}
                bendRadius={5}
                bendStrength={-0.5}
                interactive={true}
                parallax={true}
            />
        </div>
    )
}