import React from 'react'
import {
  Box,
  Button,
  Grid,
  Paper,
  Typography,
  useTheme,
} from '@apisuite/fe-base'

import Link from '../../components/Link'
import { CTACardProps } from './types'

const CTACard: React.FC<CTACardProps> = ({
  ctaCardButtonLabel,
  ctaCardButtonLink,
  ctaCardContent,
  ctaCardTextArray,
  ctaCardTitle,
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
    <Paper elevation={3}>
      <Box px={3} py={3}>
        <Grid
          alignItems="center"
          container
          direction="row"
          justify="space-between"
        >
          <Grid item xs={8}>
            {ctaCardTitle && (
              <Typography gutterBottom variant="h4">
                {ctaCardTitle}
              </Typography>
            )}

            {!!ctaCardTextArray.length && generateCTAText(ctaCardTextArray)}

            {ctaCardContent}
          </Grid>

          <Grid item xs={4}>
            <Box alignItems="center" display="flex" pl={5}>
              <Button
                color="primary"
                disableElevation
                size="large"
                variant="contained"
              >
                <Link
                  style={{
                    color: palette.common.white,
                    textDecoration: 'none',
                  }}
                  to={ctaCardButtonLink}
                >
                  {ctaCardButtonLabel}
                </Link>
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  )
}

export default CTACard
