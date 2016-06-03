import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import Bar from '../src/Bar';

describe.only("<Bar />", function() {
  it("should render with shallow", function() {
    const wrapper = shallow(<Bar />);
    expect(wrapper.find('.bar').length).to.equal(1);
  });

  it("contains spec with an expectation", function() {
    expect(shallow(<Bar />).is('.bar')).to.equal(true);
  });

  it("contains spec with an expectation", function() {
    const wrapper = mount(<Bar />);
    const bar = wrapper.find('.bar');

    expect(bar.length).to.equal(1);
    expect(wrapper.prop('modal')).to.equal(false);
    wrapper.setProps({ modal: true });
    expect(wrapper.prop('modal')).to.equal(true);
  });
});
