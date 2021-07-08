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
          variant="body1"
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
            <CardContent
              style={{
                padding: '24px 0px 24px 40px',
              }}
            >
              {title && (
                <Typography gutterBottom variant="h3">
                  {title}
                </Typography>
              )}

              {!!textArray.length && generateCTAText(textArray)}

              {content}
            </CardContent>
          </Grid>

          <Grid item xs={4}>
            <CardActions style={{ paddingRight: 40 }}>
              <Box alignItems="center" display="flex">
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
