import React, { useState } from 'react'
import { useTheme, Box, Card, CardContent, Icon } from '@apisuite/fe-base'
import { AppCardProps } from './types'

export const AppCard: React.FC<AppCardProps> = ({
  media,
  cardContent,
  contentStyle,
  icon = '',
  onClick,
}) => {
  const { palette } = useTheme()
  const [isOver, setOver] = useState(false)

  return (
    <Card
      style={{ cursor: 'pointer' }}
      onClick={
        onClick
          ? onClick
          : () => {
              //do nothing
            }
      }
      onMouseOver={() => {
        setOver(true)
      }}
      onMouseLeave={() => {
        setOver(false)
      }}
      elevation={isOver ? 8 : 1}
    >
      {icon && (
        <Box position="relative">
          <Box p={1} right="0" position="absolute">
            <Icon
              style={{ color: isOver ? palette.grey['700'] : palette.label }}
            >
              {icon}
            </Icon>
          </Box>
        </Box>
      )}
      {media}

      <CardContent className={contentStyle}>{cardContent}</CardContent>
    </Card>
  )
}
