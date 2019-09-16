import React from 'react';
import { shallow } from 'enzyme';
import Headline from './index';

import { findByTestAttr } from '../../../testUtils';

const setUp = (props={}) => {
    const wrapper = shallow(<Headline {...props} />);
    return wrapper;
}
describe("<Headline />", ()=>{
    describe("Has props", ()=> {
        let wrapper; 
        beforeEach(()=>{
            const props = {
                header: 'Test Header',
                desc: 'Test Description'
            };
            wrapper = setUp(props);
        });

        it("should render without errors", ()=>{
            expect(findByTestAttr(wrapper, 'HeadlineComponent').length).toBe(1)
        });

        it("should render a <h1>", ()=> {
            expect(findByTestAttr(wrapper, 'header').length).toBe(1)
        });

        it("should render a <p>", ()=> {
            expect(findByTestAttr(wrapper, 'desc').length).toBe(1)
        });
    });

    describe("Has no props", ()=>{
        let wrapper;
        beforeEach(()=>{
            wrapper = setUp();
        });
        it("should not render", ()=>{
            expect(findByTestAttr(wrapper, 'HeadlineComponent').length).toBe(0);
        });
    });
})