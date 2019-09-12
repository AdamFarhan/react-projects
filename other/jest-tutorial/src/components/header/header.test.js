import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';
import { findByTestAttr } from '../../../testUtils';


describe("<Header />", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Header />);
    });
    it('should render without errors', () => {
        expect(findByTestAttr(wrapper, 'headerComponent').length).toBe(1);
    });

    it('should render a logo image', () => {
        expect(findByTestAttr(wrapper, 'logoIMG').length).toBe(1);
    })
});