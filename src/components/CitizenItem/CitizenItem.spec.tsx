import { render } from '@testing-library/react';
import React from 'react';

import CitizenItem from './index';

const Props = {};

beforeEach(() => {
  render(<CitizenItem {...Props} />);
});

test('Its rendering', () => {});
