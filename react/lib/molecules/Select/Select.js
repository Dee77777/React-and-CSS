import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useRef, useEffect } from 'react';
import text from '../../atoms/Text/Text.js';

const Select = ({ options = [], label = 'Please select an option ...', onOptionSelected: handler, renderOption }) => {
    var _a;
    const [isOpen, setIsOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(null);
    //let isOpen: boolean = true;
    const labelRef = useRef(null);
    const [overlayTop, setOverlayTop] = useState(0);
    const onOptionSelected = (option, optionIndex) => {
        setIsOpen(!isOpen);
        //isOpen = !isOpen;
        if (handler) {
            handler(option, optionIndex);
        }
        setSelectedIndex(optionIndex);
        setIsOpen(false);
    };
    const onLabelClick = () => {
        setIsOpen(!isOpen);
        //isOpen = !isOpen;
    };
    useEffect(() => {
        var _a;
        setOverlayTop((((_a = labelRef.current) === null || _a === void 0 ? void 0 : _a.offsetHeight) || 0) + 10);
    }, [(_a = labelRef.current) === null || _a === void 0 ? void 0 : _a.offsetHeight]);
    let selectedOption = null;
    if (selectedIndex !== null) {
        selectedOption = options[selectedIndex];
    }
    return jsxs("div", { className: 'dse-select', children: [jsxs("button", { ref: labelRef, className: 'dse-select__label', onClick: () => onLabelClick(), children: [jsx(text, { children: selectedOption === null ? label : selectedOption.label }), jsx("svg", { className: `dse-select__caret ${isOpen ? 'dse-select__caret--open' : 'dse-select__caret--closed'} size-6`, width: '1rem', height: '1rem', xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", children: jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m19.5 8.25-7.5 7.5-7.5-7.5" }) })] }), isOpen ? (jsx("ul", { style: { top: overlayTop }, className: 'dse-select__overlay', children: options.map((option, optionIndex) => {
                    const isSelected = selectedIndex === optionIndex;
                    const renderOptionProps = {
                        option,
                        isSelected,
                        getOptionRecommendedProps: (overrideProps = {}) => {
                            return {
                                className: `dse-select__option
                            ${isSelected ? 'dse-select__option--selected' : ''}
                        `,
                                key: option.value,
                                onClick: () => onOptionSelected(option, optionIndex),
                                ...overrideProps
                            };
                        }
                    };
                    if (renderOption) {
                        return renderOption(renderOptionProps);
                    }
                    return jsxs("li", { className: `dse-select__option
                    ${isSelected ? 'dse-select__option--selected' : ''}
                `, onClick: () => onOptionSelected(option, optionIndex), children: [jsx(text, { children: option.label }), isSelected ? (jsx("svg", { width: '1rem', height: '1rem', xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "size-6", children: jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m4.5 12.75 6 6 9-13.5" }) })) : null] }, option.value);
                }) })) : null] });
};

export { Select as default };
//# sourceMappingURL=Select.js.map
