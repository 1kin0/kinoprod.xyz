import GradientBlindsShader from '../../lib/GradientBlindsShader.jsx'

export default function GradientBlinds() {
    return (
        <div style={{ width: '100%', height: '100%', position: 'absolute', top:0,right:0, zIndex:-1}}>
            <GradientBlindsShader
                gradientColors={['#FF9FFC', '#5227FF']}
                angle={0}
                noise={0.3}
                blindCount={12}
                blindMinWidth={50}
                spotlightRadius={0.5}
                spotlightSoftness={1}
                spotlightOpacity={1}
                mouseDampening={0.15}
                distortAmount={0}
                shineDirection="left"
                mixBlendMode="lighten"
            />
        </div>
    )
}