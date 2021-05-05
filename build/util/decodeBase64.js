export const decodeBase64 = (value) => {
    try {
        if (value)
            return atob(value);
    }
    catch {
        return '';
    }
    return '';
};
