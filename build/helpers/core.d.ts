interface Core {
    (): Record<string, any>;
    set: (core: Record<string, any>) => void;
}
declare const core: Core;
export default core;
