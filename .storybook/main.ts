import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
    framework: {
        name: '@storybook/react-vite',
        options: {},
    },
    stories: [
        '../src/**/*.mdx',
        '../src/**/*.stories.@(ts|tsx|js|jsx)',
    ],
    addons: [
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
    ],
}

export default config
