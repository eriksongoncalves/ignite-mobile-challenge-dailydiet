import React, { useCallback } from 'react'
import { useNavigation } from '@react-navigation/native'
import { ArrowLeft } from 'phosphor-react-native'
import { useForm, Controller } from 'react-hook-form'

import * as S from './styles'
import { Meal, MealStatus } from '../../@types/global'
import { Input } from '@components/Input'
import { Button } from '@components/Button'

type FormData = Omit<Meal, 'id'>

export const NewMealForm = () => {
  const navigation = useNavigation()
  const { handleSubmit, control } = useForm<FormData>({})

  const handleNewMeal = useCallback((data: FormData) => {
    console.log('>>> data', data)
  }, [])

  return (
    <S.Wrapper>
      <S.Header>
        <S.Back onPress={() => navigation.goBack()}>
          <ArrowLeft size={24} />
        </S.Back>
        <S.Title>Nova Refeição</S.Title>
      </S.Header>

      <S.Content>
        <S.Form>
          <Input control={control} name="name" label="Nome" />

          <Input
            control={control}
            name="description"
            label="Descrição"
            style={{ height: 120 }}
            multiline
          />

          <S.FlexRow>
            <S.InputWrapper>
              <Input
                control={control}
                name="date"
                label="Data"
                keyboardType="numbers-and-punctuation"
                maxLength={5}
              />
            </S.InputWrapper>

            <S.InputWrapper>
              <Input
                control={control}
                name="hour"
                label="Hora"
                keyboardType="numbers-and-punctuation"
                maxLength={5}
              />
            </S.InputWrapper>
          </S.FlexRow>

          <S.OptionsWrapper>
            <S.OptionLabel>Está dentro da dieta?</S.OptionLabel>

            <Controller
              name="status"
              control={control}
              render={({ field: { onChange, value } }) => (
                <S.OptionButtonsWrapper>
                  <S.OptionButton
                    color="green"
                    isActive={value === MealStatus.IN}
                    onPress={() => onChange(MealStatus.IN)}
                  >
                    <S.OptionButtonsBullet color="green" />
                    <S.OptionButtonText>Sim</S.OptionButtonText>
                  </S.OptionButton>
                  <S.OptionButton
                    color="red"
                    isActive={value === MealStatus.OUT}
                    onPress={() => onChange(MealStatus.OUT)}
                  >
                    <S.OptionButtonsBullet color="red" />
                    <S.OptionButtonText>Sim</S.OptionButtonText>
                  </S.OptionButton>
                </S.OptionButtonsWrapper>
              )}
            />
          </S.OptionsWrapper>
        </S.Form>

        <Button
          text="Cadastrar refeição"
          onPress={handleSubmit(handleNewMeal)}
        />
      </S.Content>
    </S.Wrapper>
  )
}
