import React from 'react';
import CardTopics from './';
import { Meta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/CardTopics',
  component: CardTopics
} as Meta;

const Story = (args: any) => <CardTopics {...args} />;

export const Default: ComponentStory<typeof CardTopics> = Story.bind({});

const Props = {};

Default.args = Props;
