/* eslint-disable no-undef */
import { render } from '@testing-library/react';
import Header from './index';

describe('Header component test', () => {
  it('Should render page header correctly', () => {
    const { getByAltText } = render(<Header />);

    expect(getByAltText(/E commeerce logo/i)).toBeInTheDocument();
  });
});
