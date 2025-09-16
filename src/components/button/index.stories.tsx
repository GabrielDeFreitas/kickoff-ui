import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '.';

const meta: Meta<typeof Button> = {
    component: Button,
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

const Icon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
);


export const Primary: Story = {
    args: {
        icon: Icon,
        variant: 'primary',
        label: 'Click here',
    },
};

export const Secondary: Story = {
    args: {
        variant: 'secondary',
        label: 'Click here',
    },
};

export const Danger: Story = {
    args: {
        variant: 'danger',
        label: 'Click here',
    },
};

export const Success: Story = {
    args: {
        variant: 'success',
        label: 'Click here',
    },
};