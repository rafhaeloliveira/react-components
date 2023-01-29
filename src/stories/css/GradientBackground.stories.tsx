import React from 'react'
import { GradientBackground, GradientBackgroundProps } from './GradientBackground'

export default {
    title: 'Css/Gradient Background',
    component: GradientBackground,
    argTypes: {
        orientation: {
            options: ['to top', 'to bottom', 'to left', 'to right'],
            control: { type: 'select'}
        },
        firstColor: {
            control: { type: 'color' }
        },
        secondColor: {
            control: { type: 'color' }
        }
    }
}

export const Default = (args: GradientBackgroundProps) => <GradientBackground {...args} />
Default.args = {
    firstColor: '#FF0000',
    secondColor: '#00FF00',
    orientation: 'to top'
}
