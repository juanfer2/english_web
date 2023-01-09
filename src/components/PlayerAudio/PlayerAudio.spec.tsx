import { render } from '@testing-library/react';
import React from 'react';

import PlayerAudio from './index';

const Props = {};

beforeEach(() => {
  render(<PlayerAudio {...Props} />);
});

test('Its rendering', () => {});
