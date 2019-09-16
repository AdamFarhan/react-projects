import checkPropTypes from 'check-prop-types';

export const findByTestAttr = (wrapper, attr) => {
    const tempWrapper = wrapper.find(`[data-test='${attr}']`);
    return tempWrapper
}

export const checkProps = (component, expectedProps) => {
    const propsErr = checkPropTypes(component.propTypes, expectedProps, 'props', component.name);
    return propsErr;
}