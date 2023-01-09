import { render } from '@testing-library/react';
import React from 'react';

import SearchInput from './index';

const Props = {};

beforeEach(() => {
  render(<SearchInput {...Props} />);
});

test('Its rendering', () => {});
