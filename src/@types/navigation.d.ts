import { MealStatus } from './global'

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined
      summary: undefined
      newMealForm: undefined
      newMealFormFinish: { status: MealStatus }
    }
  }
}
