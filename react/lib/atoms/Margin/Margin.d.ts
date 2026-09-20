import React from 'react';
import { Spacing } from '@ds.e/foundation';
interface MarginProps {
    space?: keyof typeof Spacing;
}
declare const margin: React.FC<React.PropsWithChildren<MarginProps>>;
export default margin;
