import React from 'react'
import ReactDOM from 'react-dom'

import { Text, Margin } from '@ds.e/react'

import '@ds.e/scss/lib/Utilities.css'
import '@ds.e/scss/lib/Margin.css'
import '@ds.e/scss/lib/Text.css'

ReactDOM.render(
    <div>
        <Margin>
            <Text label='this is some text'/>
        </Margin>
    </div>,
    document.querySelector('#root')
)
