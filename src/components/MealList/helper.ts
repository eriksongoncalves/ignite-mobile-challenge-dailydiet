import { Meal } from '../../@types/global'

type MealsGroupped = {
  [key: string]: Meal[]
}

export const mealsOrderedByDateDesc = (meals: Meal[]) =>
  meals.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

export const mealsGrouppedByDateDesc = (meals: Meal[]) => {
  const mealsOrdered = mealsOrderedByDateDesc(meals)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return mealsOrdered.reduce((acc: any, meal) => {
    const mealDate = new Date(meal.date)

    // DD.MM.YYYY
    const date = `${String(mealDate.getDate()).padStart(2, '0')}.${String(
      mealDate.getMonth() + 1
    ).padStart(2, '0')}.${mealDate.getFullYear()}`

    if (!acc[date]) {
      acc[date] = []
    }

    acc[date].push(meal)

    return acc
  }, {}) as MealsGroupped[]
}
