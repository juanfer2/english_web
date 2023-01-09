import { render } from '@testing-library/react';
import React from 'react';

import Banner from './index';

const Props = {};

beforeEach(() => {
  render(<Banner {...Props} />);
});

test('Its rendering', () => {});
