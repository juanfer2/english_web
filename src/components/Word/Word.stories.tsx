import React from 'react';
import Word from './';
import { Meta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/Word',
  component: Word
} as Meta;

const Story = (args: any) => <Word {...args} />;

export const Default: ComponentStory<typeof Word> = Story.bind({});

const Props = {};

Default.args = Props;
