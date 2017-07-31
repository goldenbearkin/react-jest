import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Button from '../Button';

describe('rendering', () => {
  let wrapper: ShallowWrapper<{}, {}>;
  beforeEach(() => {
    wrapper = shallow(<Button />);
  });
  it('should render a <button />', () => {
    expect(wrapper.find('RaisedButton')).toHaveLength(1);
  });
});