import { jsx } from 'react/jsx-runtime';

const text = ({ label, children }) => {
    return jsx("p", { className: 'dse-text__container', children: children });
};

export { text as default };
//# sourceMappingURL=Text.js.map
