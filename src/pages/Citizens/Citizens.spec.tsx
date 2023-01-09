import { render } from '@testing-library/react';
import React from 'react';

import Citizens from './index';

const Props = {};

beforeEach(() => {
  render(<Citizens {...Props} />);
});

test('Its rendering', () => {});
