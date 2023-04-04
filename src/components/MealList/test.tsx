import React from 'react'

import { MealList } from './'
import { render } from '@utils/testHelper'
import { mealsMock } from '../../mocks/meals'

describe('MealList component', () => {
  it('should render with a default uri', () => {
    const { getByTestId } = render(<MealList meals={mealsMock} />)

    const list = getByTestId('mealList')

    expect(list).toBeTruthy()
  })
})
