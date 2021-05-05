import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
const Link = React.forwardRef(({ externalTarget = '_blank', href, to, ...props }, ref) => {
    const destination = href || to;
    if (typeof destination === 'string' && /^https?:\/\//.test(destination)) {
        return (React.createElement("a", Object.assign({ href: destination, target: externalTarget }, props), props.children));
    }
    else {
        return React.createElement(RouterLink, Object.assign({ ref: ref, to: destination }, props));
    }
});
Link.displayName = 'Link';
export default Link;
