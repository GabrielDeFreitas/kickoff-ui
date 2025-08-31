import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '.';

const meta: Meta<typeof Button> = {
    component: Button,
    title: 'Components/Button',
    tags: ['autodocs'],
    argTypes: {
        label: {
            control: 'text',
            description: 'text to be displayed inside the button',
        },
    },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
    args: {
        label: 'Click here',
    },
};

export const LongLabel: Story = {
    args: {
        label: 'button with a very long label that exceeds typical lengths',
    },
};
