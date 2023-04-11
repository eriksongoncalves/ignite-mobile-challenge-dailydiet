import AsyncStorage from '@react-native-async-storage/async-storage'

import { Meal } from '../@types/global'

const KEY = '@dailyDiet_meals'

export const getMeals = async () => {
  const storage = await AsyncStorage.getItem(KEY)

  const meals: Meal[] = storage ? JSON.parse(storage) : []

  return meals
}

export const saveMeal = async (meal: Meal) => {
  const meals = await getMeals()

  meals.push(meal)

  await AsyncStorage.setItem(KEY, JSON.stringify(meals))

  return meals
}
