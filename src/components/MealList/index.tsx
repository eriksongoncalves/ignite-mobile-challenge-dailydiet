import React, { useMemo } from 'react'
import { SectionList, Text } from 'react-native'

import * as S from './styles'
import { Meal } from '@src/@types/global'
import { MealInfo, mealsGrouppedByDateDesc } from './helper'

type MealListProps = {
  meals: Meal[]
}

export const MealList = ({ meals }: MealListProps) => {
  const mealsFormatted = useMemo(() => {
    if (meals.length > 0) {
      const mealsGrouppedByDate = mealsGrouppedByDateDesc(meals)

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
    <SectionList
      testID="mealList"
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
  )
}
