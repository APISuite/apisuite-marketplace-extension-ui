import React from 'react';
import { Box, Card, CardActions, CardContent, Grid, Typography, useTheme, } from '@apisuite/fe-base';
export const CTACard = ({ actions, content, textArray, title, }) => {
    const { palette, spacing } = useTheme();
    const generateCTAText = (ctaTextArray) => {
        const numberOfParagraphs = ctaTextArray.length;
        return ctaTextArray.map((ctaText, index) => {
            return (React.createElement(Typography, { style: { color: palette.text.secondary }, gutterBottom: index < numberOfParagraphs - 1, key: `ctaText${index}`, variant: "body1" }, ctaText));
        });
    };
    return (React.createElement(Card, { elevation: 3 },
        React.createElement(Box, null,
            React.createElement(Grid, { alignItems: "center", container: true, direction: "row", justify: "space-between" },
                React.createElement(Grid, { item: true, xs: 8 },
                    React.createElement(CardContent, { style: {
                            padding: spacing(3, 0, 3, 5),
                        } },
                        title && (React.createElement(Typography, { gutterBottom: true, variant: "h3" }, title)),
                        !!textArray.length && generateCTAText(textArray),
                        content)),
                React.createElement(Grid, { item: true, xs: 4 },
                    React.createElement(CardActions, { style: { paddingRight: spacing(5) } },
                        React.createElement(Box, { alignItems: "center", display: "flex" }, actions)))))));
};
