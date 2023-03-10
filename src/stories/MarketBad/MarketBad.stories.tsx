import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';

import { MarketBad } from './MarketBad';

export default {
  component: MarketBad,
  title: 'MarketBad',
} as Meta;

const Template: StoryFn<typeof MarketBad> = args => <MarketBad {...args} />;

export const Example = Template.bind({});
Example.args = {};
