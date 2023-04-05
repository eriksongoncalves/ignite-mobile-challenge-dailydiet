import theme from '@styles/theme'

export type ThemeColors = keyof typeof theme.colors

export type Meal = {
  id: string
  name: string
  description: string
  date: string
  hour: string
  status: MealStatus
}

export enum MealStatus {
  IN = 'in',
  OUT = 'out'
}
