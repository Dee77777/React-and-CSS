import { jsx } from 'react/jsx-runtime';
import { Spacing } from '@ds.e/foundation';

const color = ({ hexCode, width = Spacing.sm, height = Spacing.sm }) => {
    const className = `dse-width-${width} dse-height-${height}`;
    return jsx("div", { className: className, style: {
            backgroundColor: hexCode,
        } });
};

export { color as default };
//# sourceMappingURL=Color.js.map
