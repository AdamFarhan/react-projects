export const findByTestAttr = (wrapper, attr) => {
    const tempWrapper = wrapper.find(`[data-test='${attr}']`);
    return tempWrapper
}