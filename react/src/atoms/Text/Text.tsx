import React from 'react'

interface TextProps {
    label: string
}

const text: React.FunctionComponent<TextProps> = ({ label }) => {
    return <button className='dse-text__container'>{label}</button>
}

export default text