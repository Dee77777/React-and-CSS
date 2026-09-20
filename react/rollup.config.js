import Ts from 'rollup-plugin-typescript2'
import { nodeResolve } from '@rollup/plugin-node-resolve'

export default {
    input: [
        'src/index.ts',
        'src/atoms/Color/index.ts',
        'src/atoms/Margin/index.ts',
        'src/atoms/Button/index.ts',
        'src/atoms/Text/index.ts'
    ],
    output: {
        dir: 'lib',
        preserveModules: true,
        format: 'esm',
        sourcemap: true
    },
    plugins: [nodeResolve({
            extensions: ['.js', '.jsx', '.ts', '.tsx']
        }),
    Ts({
            tsconfig: './tsconfig.json',
            include: ['src/**/*.ts', 'src/**/*.tsx'],
            clean: true
    })],
    external: [
    'react', 
    'react-dom', 
    'react/jsx-runtime', // Add this line
    '@ds.e/foundation'
  ]
}