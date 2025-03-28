import ColorGenerator from "color-generator";

export const generateColor = () => {
    const generator = new ColorGenerator(0.3, .9);
    return generator.rgbString()
};
