import { render } from '@testing-library/react';
import React from 'react';

import Card from './index';

const Props = {};

beforeEach(() => {
  render(<Card {...Props} />);
});

test('Its rendering', () => {});
