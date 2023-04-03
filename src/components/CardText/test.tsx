import React from 'react'

import { CardText } from './'
import { fireEvent, render } from '@utils/testHelper'
import theme from '@styles/theme'

const mockTheme = theme

jest.mock('styled-components', () => ({
  useTheme: () => mockTheme
}))

const mockFn = jest.fn()

describe('CardText component', () => {
  it('should render correctly', () => {
    const { getByTestId, getByText } = render(
      <CardText
        title="90,86%"
        subtitle="melhor sequência de pratos dentro da dieta"
        testID="card"
      />
    )

    const card = getByTestId('card')
    const title = getByText('90,86%')
    const subtitle = getByText('melhor sequência de pratos dentro da dieta')

    expect(card).toBeTruthy()
    expect(title).toBeTruthy()
    expect(subtitle).toBeTruthy()
  })

  it('should render with a green color', () => {
    const { getByTestId } = render(
      <CardText
        title="90,86%"
        subtitle="melhor sequência de pratos dentro da dieta"
        testID="card"
      />
    )

    const card = getByTestId('card')

    expect(card.props.style[0].backgroundColor).toBe('#e5f0db')
  })

  it('should render with a red color', () => {
    const { getByTestId } = render(
      <CardText
        title="90,86%"
        subtitle="melhor sequência de pratos dentro da dieta"
        testID="card"
        color="red"
        onPress={mockFn}
      />
    )

    const card = getByTestId('card')

    expect(card.props.style[0].backgroundColor).toBe('#F4E6E7')

    fireEvent.press(card)
    expect(mockFn).toBeCalled()
  })

  it('should render with a gray color', () => {
    const { getByTestId } = render(
      <CardText
        title="90,86%"
        subtitle="melhor sequência de pratos dentro da dieta"
        testID="card"
        color="gray"
      />
    )

    const card = getByTestId('card')

    expect(card.props.style[0].backgroundColor).toBe('#EFF0F0')
  })

  it('should render with a different title size', () => {
    const { getByText } = render(
      <CardText
        title="90,86%"
        subtitle="melhor sequência de pratos dentro da dieta"
        titleSize={14}
      />
    )

    const title = getByText('90,86%')

    expect(title._fiber.pendingProps.fontSize).toBe(14)
  })

  it('should render as a link', () => {
    const { getByTestId } = render(
      <CardText
        title="90,86%"
        subtitle="melhor sequência de pratos dentro da dieta"
        onPress={mockFn}
        testID="card"
      />
    )

    const card = getByTestId('card')

    fireEvent.press(card)
    expect(mockFn).toBeCalled()
  })
})
