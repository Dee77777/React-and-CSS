import { jsx } from 'react/jsx-runtime';

const margin = ({ space = 'xxxl', children }) => {
    const className = `dse-margin-$(space)`;
    return jsx("div", { className: className, children: children });
};

export { margin as default };
//# sourceMappingURL=Margin.js.map
