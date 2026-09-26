import React from 'react'
import ReactDOM from 'react-dom'

import { Text, Margin, Select } from '@ds.e/react'

import '@ds.e/scss/lib/Utilities.css'
import '@ds.e/scss/lib/Margin.css'
import '@ds.e/scss/lib/Text.css'
import '@ds.e/scss/lib/Select.css'


const options = [{
    label: 'Strict Black',
    value: 'Strict Black'
}, {
    label: 'Strict Blue',
    value: 'Strict Blue'
}, {
    label: 'Strict Red',
    value: 'Strict Red'
}, {
    label: 'Strict Yellow',
    value: 'Strict Yellow'
}]

ReactDOM.render(
    <div style={{ padding: '40px'  }}>
        <Select options={options} renderOption={({ option, getOptionRecommendedProps }) => <p {...getOptionRecommendedProps({
            className: 'custom'
        })}>{option.label}</p>}></Select>
        <p>this is some text</p>
    </div>,
    document.querySelector('#root')
)





//    <div>
//        <Margin>
//           <Text label='this is some text'/>
//        </Margin>
//    </div>