import React, { useMemo } from 'react'
import { SectionList, Text } from 'react-native'

import * as S from './styles'
import { Meal, MealStatus } from '@src/@types/global'

type MealListProps = {
  meals: Meal[]
}

type MealInfo = {
  id: string
  title: string
  hour: string
  status: MealStatus
}

type MealsGroupped = {
  [key: string]: MealInfo[]
}

export const MealList = ({ meals }: MealListProps) => {
  const mealsFormatted = useMemo(() => {
    if (meals) {
      const mealsListOrdered = meals.sort(
        (a, b) => b.date.getTime() - a.date.getTime()
      )

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const mealsGrouppedByDate = mealsListOrdered.reduce((acc: any, item) => {
        // DD.MM.YYYY
        const date = `${String(item.date.getDate()).padStart(2, '0')}.${String(
          item.date.getMonth() + 1
        ).padStart(2, '0')}.${item.date.getFullYear()}`

        if (acc && acc[date]) {
          acc[date].push({
            id: item.id,
            title: item.title,
            hour: `${String(item.date.getHours()).padStart(2, '0')}:${String(
              item.date.getMinutes()
            ).padStart(2, '0')}`,
            status: 'in'
          } as MealInfo)
        } else {
          acc = {
            ...acc,
            [date]: [
              {
                id: item.id,
                title: item.title,
                hour: `${String(item.date.getHours()).padStart(
                  2,
                  '0'
                )}:${String(item.date.getMinutes()).padStart(2, '0')}`,
                status: 'out'
              } as MealInfo
            ]
          }
        }

        return acc
      }, {}) as MealsGroupped[]

      const dates = Object.keys(mealsGrouppedByDate)

      return dates.map(date => ({
        title: date,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        data: mealsGrouppedByDate[date as any] as unknown as MealInfo[]
      }))
    }

    return []
  }, [meals])

  return (
    <S.Wrapper testID="mealList">
      <SectionList
        showsVerticalScrollIndicator={false}
        sections={mealsFormatted}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <S.Item>
            <S.Hour>
              <Text>{item.hour}</Text>
            </S.Hour>
            <S.MealText>{item.title}</S.MealText>
            <S.Status type={item.status} />
          </S.Item>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <S.SectionTitle>{title}</S.SectionTitle>
        )}
        renderSectionFooter={() => <S.SectionFooterSpace />}
      />
    </S.Wrapper>
  )
}
