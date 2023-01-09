import { render } from '@testing-library/react';
import React from 'react';

import Layout from './index';

const Props = {};

beforeEach(() => {
  render(<Layout {...Props} />);
});

test('Its rendering', () => {});
