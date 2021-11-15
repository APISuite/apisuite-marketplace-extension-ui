import React, { useState } from 'react';
import { useTheme, Box, Card, CardContent, Icon } from '@apisuite/fe-base';
export const AppCard = ({ media, cardContent, contentStyle, icon = '', onClick, }) => {
    const { palette } = useTheme();
    const [isOver, setOver] = useState(false);
    return (React.createElement(Card, { style: { cursor: 'pointer' }, onClick: onClick
            ? onClick
            : () => {
                //do nothing
            }, onMouseOver: () => {
            setOver(true);
        }, onMouseLeave: () => {
            setOver(false);
        }, elevation: isOver ? 8 : 1 },
        icon && (React.createElement(Box, { position: "relative" },
            React.createElement(Box, { p: 1, right: "0", position: "absolute" },
                React.createElement(Icon, { style: { color: isOver ? palette.grey['700'] : palette.label } }, icon)))),
        media,
        React.createElement(CardContent, { className: contentStyle }, cardContent)));
};
