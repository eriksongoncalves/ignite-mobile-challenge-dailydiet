import React, { useCallback } from 'react'
import { useNavigation } from '@react-navigation/native'
import { ArrowLeft } from 'phosphor-react-native'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import * as S from './styles'
import { NewMealFormData, schemaValidation } from './schema-validation'
import { MealStatus } from '../../@types/global'
import { Input } from '@components/Input'
import { Button } from '@components/Button'
import { ErrorMessage } from '@components/ErrorMessage'
import { saveMeal } from '@storage/meals'

export const NewMealForm = () => {
  const navigation = useNavigation()
  const {
    handleSubmit,
    control,
    formState: { errors, isValid }
  } = useForm<NewMealFormData>({
    resolver: zodResolver(schemaValidation),
    mode: 'all'
  })

  const handleNewMeal = useCallback(
    async (data: NewMealFormData) => {
      try {
        await saveMeal({
          id: String(Date.now()),
          ...data
        })
        navigation.navigate('newMealFormFinish', { status: data.status })
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log('>>> NewMealForm Error', e)
      }
    },
    [navigation]
  )

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
          <Input
            control={control}
            name="name"
            label="Nome"
            errorMessage={errors.name?.message}
          />

          <Input
            control={control}
            name="description"
            label="Descrição"
            style={{ height: 120 }}
            multiline
            errorMessage={errors.description?.message}
          />

          <S.FlexRow>
            <S.InputWrapper>
              <Input
                control={control}
                name="date"
                label="Data"
                keyboardType="numbers-and-punctuation"
                maxLength={10}
                errorMessage={errors.date?.message}
                placeholder="dd/mm/yyyy"
              />
            </S.InputWrapper>

            <S.InputWrapper>
              <Input
                control={control}
                name="hour"
                label="Hora"
                keyboardType="numbers-and-punctuation"
                maxLength={5}
                errorMessage={errors.hour?.message}
                placeholder="hh:mm"
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
                    <S.OptionButtonText>Não</S.OptionButtonText>
                  </S.OptionButton>
                </S.OptionButtonsWrapper>
              )}
            />
            <ErrorMessage message={errors.status?.message} />
          </S.OptionsWrapper>
        </S.Form>

        <Button
          text="Cadastrar refeição"
          onPress={handleSubmit(handleNewMeal)}
          disabled={!isValid}
        />
      </S.Content>
    </S.Wrapper>
  )
}
