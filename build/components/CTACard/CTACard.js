import React from 'react';
import { Box, Card, CardActions, CardContent, Grid, Typography, useTheme, } from '@apisuite/fe-base';
const CTACard = ({ actions, content, textArray, title, }) => {
    const { palette } = useTheme();
    const generateCTAText = (ctaTextArray) => {
        const numberOfParagraphs = ctaTextArray.length;
        return ctaTextArray.map((ctaText, index) => {
            return (React.createElement(Typography, { style: { color: palette.text.secondary }, gutterBottom: index < numberOfParagraphs - 1, key: `ctaText${index}`, variant: "h6" }, ctaText));
        });
    };
    return (React.createElement(Card, { elevation: 3 },
        React.createElement(Box, null,
            React.createElement(Grid, { alignItems: "center", container: true, direction: "row", justify: "space-between" },
                React.createElement(Grid, { item: true, xs: 8 },
                    React.createElement(CardContent, null,
                        title && (React.createElement(Typography, { gutterBottom: true, variant: "h4" }, title)),
                        !!textArray.length && generateCTAText(textArray),
                        content)),
                React.createElement(Grid, { item: true, xs: 4 },
                    React.createElement(CardActions, null,
                        React.createElement(Box, { alignItems: "center", display: "flex", pl: 5 }, actions)))))));
};
export default CTACard;
