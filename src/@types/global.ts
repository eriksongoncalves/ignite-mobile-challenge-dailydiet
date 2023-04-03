import theme from '@styles/theme'

export type ThemeColors = keyof typeof theme.colors

export type Meal = {
  id: string
  date: Date
  title: string
}

export type MealStatus = 'in' | 'out'
