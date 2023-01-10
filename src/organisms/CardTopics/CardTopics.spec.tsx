import { render } from '@testing-library/react';
import React from 'react';

import CardTopics from './index';

const Props = {};

beforeEach(() => {
  render(<CardTopics {...Props} />);
});

test('Its rendering', () => {});
