import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';

import { MarketOk } from './MarketOk';

export default {
  component: MarketOk,
  title: 'MarketOk',
} as Meta;

const Template: StoryFn<typeof MarketOk> = args => <MarketOk {...args} />;

export const Example = Template.bind({});
Example.args = {};
