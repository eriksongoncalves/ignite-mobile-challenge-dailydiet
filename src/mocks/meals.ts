import { Meal, MealStatus } from '../@types/global'

export const mealsMock = [
  {
    id: '1',
    date: new Date('2022-08-12'),
    hour: '20:00',
    name: 'X-tudo',
    status: MealStatus.IN
  },
  {
    id: '2',
    date: new Date('2022-08-12'),
    hour: '16:00',
    name: 'Whey protein com leite',
    status: MealStatus.IN
  },
  {
    id: '3',
    date: new Date('2022-08-12'),
    hour: '12:30',
    name: 'Salada cesar com frango',
    status: MealStatus.IN
  },
  {
    id: '4',
    date: new Date('2022-08-12'),
    hour: '09:30',
    name: 'Vitamina de banana com aveia',
    status: MealStatus.IN
  },
  {
    id: '5',
    date: new Date('2022-08-11'),
    hour: '20:00',
    name: 'X-tudo',
    status: MealStatus.IN
  },
  {
    id: '6',
    date: new Date('2022-08-11'),
    hour: '16:00',
    name: 'Whey protein com leite',
    status: MealStatus.IN
  },
  {
    id: '7',
    date: new Date('2022-08-11'),
    hour: '12:30',
    name: 'Salada cesar com frango',
    status: MealStatus.IN
  },
  {
    id: '8',
    date: new Date('2022-08-11'),
    hour: '09:30',
    name: 'Vitamina de banana com aveia',
    status: MealStatus.IN
  }
] as Meal[]
