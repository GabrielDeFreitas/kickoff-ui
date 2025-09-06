import type { Meta, StoryObj } from '@storybook/react-vite';
import { Alert } from '.';

const meta: Meta<typeof Alert> = {
    component: Alert,
    title: 'Components/Alert',
    tags: ['autodocs'],
    argTypes: {
        label: {
            control: 'text',
            description: 'text to be displayed inside the Alert',
        },
    },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Default: Story = {
    args: {
        label: 'Danger alert! Change a few things up and try submitting again.',
    },
};