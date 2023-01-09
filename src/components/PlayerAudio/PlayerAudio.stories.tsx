import React from 'react';
import PlayerAudio from './';
import { Meta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/PlayerAudio',
  component: PlayerAudio
} as Meta;

const Story = (args: any) => <PlayerAudio {...args} />;

export const Default: ComponentStory<typeof PlayerAudio> = Story.bind({});

const Props = {};

Default.args = Props;
