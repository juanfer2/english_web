import { render } from '@testing-library/react';
import React from 'react';

import Button from './index';

const Props = {};

beforeEach(() => {
  render(<Button {...Props} />);
});

test('Its rendering', () => {});
