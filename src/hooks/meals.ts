import { useEffect, useState } from 'react'
import { getMeals } from '@storage/meals'
import { Meal, MealStatus } from '../@types/global'

type Data = {
  meals: Meal[]
  count: number
  percentageIn: number
  percentageOut: number
  mealsIn: number
  mealsOut: number
}

export const useMeals = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<Data>({
    meals: [],
    count: 0,
    percentageIn: 0,
    percentageOut: 0,
    mealsIn: 0,
    mealsOut: 0
  })

  const loadMeal = async () => {
    try {
      const meals = await getMeals()

      const count = meals.length
      const mealsIn = meals.filter(meal => meal.status === MealStatus.IN)
      const mealsOut = meals.filter(meal => meal.status === MealStatus.OUT)
      const percentageIn = count > 0 ? (mealsIn.length / count) * 100 : 0
      const percentageOut = count > 0 ? (mealsOut.length / count) * 100 : 0

      setData({
        meals,
        count,
        percentageIn,
        percentageOut,
        mealsIn: mealsIn.length,
        mealsOut: mealsOut.length
      })
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log('>>> useMeals Error', e)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadMeal()
  }, [])

  return {
    loading,
    data
  }
}
