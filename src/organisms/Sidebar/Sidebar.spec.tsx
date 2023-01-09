import { render } from '@testing-library/react';
import React from 'react';

import Sidebar from './index';

const Props = {};

beforeEach(() => {
  render(<Sidebar {...Props} />);
});

test('Its rendering', () => {});
