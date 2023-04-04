import { Meal, MealStatus } from '@src/@types/global'

export type MealInfo = {
  id: string
  title: string
  hour: string
  status: MealStatus
}

type MealsGroupped = {
  [key: string]: MealInfo[]
}

export const mealsOrderedByDateDesc = (meals: Meal[]) =>
  meals.sort((a, b) => b.date.getTime() - a.date.getTime())

export const mealsGrouppedByDateDesc = (meals: Meal[]) => {
  const mealsOrdered = mealsOrderedByDateDesc(meals)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return mealsOrdered.reduce((acc: any, meal) => {
    // DD.MM.YYYY
    const date = `${String(meal.date.getDate()).padStart(2, '0')}.${String(
      meal.date.getMonth() + 1
    ).padStart(2, '0')}.${meal.date.getFullYear()}`

    if (!acc[date]) {
      acc[date] = []
    }

    acc[date].push({
      id: meal.id,
      title: meal.title,
      hour: `${String(meal.date.getHours()).padStart(2, '0')}:${String(
        meal.date.getMinutes()
      ).padStart(2, '0')}`,
      status: 'in'
    } as MealInfo)

    return acc
  }, {}) as MealsGroupped[]
}
