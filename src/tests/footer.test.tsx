import React from 'react';
import 'regenerator-runtime/runtime';
import '@testing-library/jest-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Footer } from '../components';

Enzyme.configure({ adapter: new Adapter() });

test('Footer renders correctly', async () => {
  const footer = shallow(<Footer />);
  expect(footer).toMatchSnapshot();
});
