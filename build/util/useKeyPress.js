import React from 'react';
export function useKeyPress(targetKey) {
    const [keyPressed, setKeyPressed] = React.useState(false);
    const keyDownHandler = (e) => {
        if (e.key === targetKey) {
            setKeyPressed(true);
        }
    };
    const keyUpHandler = (e) => {
        if (e.key === targetKey) {
            setKeyPressed(false);
        }
    };
    React.useEffect(() => {
        document.addEventListener('keydown', keyDownHandler);
        document.addEventListener('keyup', keyUpHandler);
        return () => {
            document.removeEventListener('keydown', keyDownHandler);
            document.removeEventListener('keyup', keyUpHandler);
        };
    }, []);
    return keyPressed;
}
