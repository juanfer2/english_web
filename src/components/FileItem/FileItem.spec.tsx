import { render } from '@testing-library/react';
import React from 'react';

import FileItem from './index';

const Props = {};

beforeEach(() => {
  render(<FileItem {...Props} />);
});

test('Its rendering', () => {});
