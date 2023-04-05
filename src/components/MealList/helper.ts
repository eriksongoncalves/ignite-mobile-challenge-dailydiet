import { Meal } from '../../@types/global'

type MealsGroupped = {
  [key: string]: Meal[]
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

    acc[date].push(meal)

    return acc
  }, {}) as MealsGroupped[]
}
