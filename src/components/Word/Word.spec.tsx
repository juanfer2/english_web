import { render } from '@testing-library/react';
import React from 'react';

import Word from './index';

const Props = {};

beforeEach(() => {
  render(<Word {...Props} />);
});

test('Its rendering', () => {});
