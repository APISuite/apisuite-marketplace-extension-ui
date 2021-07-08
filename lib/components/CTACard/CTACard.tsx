import React from 'react'
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
  useTheme,
} from '@apisuite/fe-base'

import { CTACardProps } from './types'

const CTACard: React.FC<CTACardProps> = ({
  actions,
  content,
  textArray,
  title,
}) => {
  const { palette } = useTheme()

  const generateCTAText = (ctaTextArray: string[]) => {
    const numberOfParagraphs = ctaTextArray.length

    return ctaTextArray.map((ctaText, index) => {
      return (
        <Typography
          style={{ color: palette.text.secondary }}
          gutterBottom={index < numberOfParagraphs - 1}
          key={`ctaText${index}`}
          variant="h6"
        >
          {ctaText}
        </Typography>
      )
    })
  }

  return (
    <Card elevation={3}>
      <Box>
        <Grid
          alignItems="center"
          container
          direction="row"
          justify="space-between"
        >
          <Grid item xs={8}>
            <CardContent>
              {title && (
                <Typography gutterBottom variant="h4">
                  {title}
                </Typography>
              )}

              {!!textArray.length && generateCTAText(textArray)}

              {content}
            </CardContent>
          </Grid>

          <Grid item xs={4}>
            <CardActions>
              <Box alignItems="center" display="flex" pl={5}>
                {actions}
              </Box>
            </CardActions>
          </Grid>
        </Grid>
      </Box>
    </Card>
  )
}

export default CTACard
