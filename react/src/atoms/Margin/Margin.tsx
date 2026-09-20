import React from 'react'
import { Spacing } from '@ds.e/foundation'

interface MarginProps {
    space?: keyof typeof Spacing
}

const margin: React.FC<React.PropsWithChildren<MarginProps>> = ({ space = 'xxxl', children }) => {
    const className = `dse-margin-$(space)`
    return <div className={className}>
        {children}
    </div>
}

export default margin