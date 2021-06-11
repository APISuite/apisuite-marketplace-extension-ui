export interface AppCardProps {
  media?: JSX.Element
  cardContent: string | JSX.Element
  contentStyle?: string
  icon?: string
  onClick?: () => void
}
