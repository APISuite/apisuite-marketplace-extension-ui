let values = {};
const core = () => values;
core.set = (core) => {
    values = {
        ...values,
        ...core,
    };
};
export default core;
