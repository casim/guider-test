import React from 'react';
import App from './App';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';

afterEach(cleanup);

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
  });

  it('matches snapshot', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
