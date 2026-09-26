import React, { useState, useRef, useEffect } from 'react'

import Text from '../../atoms/Text'
interface SelectOption {
    label: string
    value: string
}
interface RenderOptionProps {
    isSelected: boolean
    option: SelectOption
    getOptionRecommendedProps: (overrideProps?: Object) => Object
}
interface SelectProps {
    onOptionSelected: (option: SelectOption, optionIndex: number) => void
    options?: SelectOption[]
    label?: string
    renderOption?: (props: RenderOptionProps) => React.ReactNode
}

const Select: React.FunctionComponent<SelectProps> = ( {options = [], label = 'Please select an option ...', onOptionSelected: handler, renderOption }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [selectedIndex, setSelectedIndex] = useState<null|number>(null)
    //let isOpen: boolean = true;
    const labelRef = useRef<HTMLButtonElement>(null);
    const [overlayTop, setOverlayTop] = useState<number>(0)
    const onOptionSelected = (option: SelectOption, optionIndex: number) => {
        setIsOpen(!isOpen)
        //isOpen = !isOpen;
        if (handler) {
            handler(option, optionIndex)
        }

        setSelectedIndex(optionIndex)
        setIsOpen(false)
    }
    const onLabelClick = () => {
        setIsOpen(!isOpen)
        //isOpen = !isOpen;
    }

    useEffect(() => {
        setOverlayTop((
            labelRef.current?.offsetHeight || 0    
        ) + 10)
    }, [labelRef.current?.offsetHeight])

    let selectedOption = null
    
    if (selectedIndex !== null) {
        selectedOption = options[selectedIndex]
    }
    return <div className='dse-select'>
        <button ref={labelRef} className='dse-select__label' onClick={() => onLabelClick()}>
            <Text>{selectedOption === null ? label : selectedOption.label}</Text>
            <svg className={`dse-select__caret ${isOpen ? 'dse-select__caret--open' : 'dse-select__caret--closed'} size-6`} width='1rem' height='1rem' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>

        </button>

        {isOpen ? (<ul style={{top: overlayTop}} className='dse-select__overlay'>
            {options.map((option, optionIndex) => {
                const isSelected = selectedIndex === optionIndex
                const renderOptionProps = {
                    option,
                    isSelected,
                    getOptionRecommendedProps: (overrideProps = {}) => {return {
                        className: `dse-select__option
                            ${isSelected ? 'dse-select__option--selected' : ''}
                        `,
                        key: option.value,
                        onClick: () => onOptionSelected(option, optionIndex),
                        ...overrideProps
                    }}
                }
                if (renderOption) {
                    return renderOption(renderOptionProps)
                }
                return <li className={`dse-select__option
                    ${isSelected ? 'dse-select__option--selected' : ''}
                `} onClick={() => onOptionSelected(option, optionIndex)} key={option.value}>
                    <Text>
                        {option.label}
                    </Text>

                    {isSelected ? (
                        <svg width='1rem' height='1rem' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
</svg>) : null}

                </li>

            })}
        </ul>) : null}
    </div>
}

export default Select