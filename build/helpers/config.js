import baseConfig from '../config';
let values = {
    ...baseConfig,
};
const config = () => values;
config.set = (conf) => {
    values = {
        ...values,
        ...conf,
    };
};
export default config;
