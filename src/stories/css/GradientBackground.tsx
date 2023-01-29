import React from 'react';

export interface GradientBackgroundProps {
    orientation: 'to top' | 'to bottom' | 'to left' | 'ro right',
    firstColor: string
    secondColor: string
}

const style = ({ orientation, firstColor, secondColor }: GradientBackgroundProps) => ({
    width: '300px',
    height: '300px',
    backgroundImage: `linear-gradient(${orientation}, ${firstColor}, ${secondColor})`
})

export const GradientBackground = (props: GradientBackgroundProps): React.ReactElement => {
    return (
        <div style={style(props)}>
            Gradient
        </div>
    )
}