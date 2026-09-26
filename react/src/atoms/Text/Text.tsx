import React from 'react'

interface TextProps {
    label?: string
}

const text: React.FC<React.PropsWithChildren<TextProps>> = ({ label, children }) => {
    return <p className='dse-text__container'>{children}</p>
}

export default text