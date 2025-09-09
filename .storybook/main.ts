import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
    framework: {
        name: '@storybook/react-vite',
        options: {},
    },
    stories: [
        '../src/**/*.stories.@(ts|tsx|js|jsx)',
    ],
    addons: [
        '@storybook/addon-essentials',
    ],
    async viteFinal(config) {
        return {
            ...config,
            css: {
                postcss: {
                    plugins: [require('@tailwindcss/postcss')]
                }
            }
        }
    }
}

export default config