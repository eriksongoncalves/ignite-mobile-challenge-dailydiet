import React from 'react'
import { Plus } from 'phosphor-react-native'

import { render, fireEvent } from '@utils/testHelper'
import { Button } from './'
import { View } from 'react-native'

const mockFn = jest.fn()

describe('Button componenet', () => {
  it('should render a solid button by default', () => {
    const { getByTestId, getByText } = render(
      <Button text="My Button" onPress={mockFn} testID="button" />
    )

    const button = getByTestId('button')
    const buttonText = getByText('My Button')

    expect(button).toBeTruthy()
    expect(button.props.style.backgroundColor).toBe('#333638')

    expect(buttonText.props.style[0].color).toBe('#ffffff')

    fireEvent.press(button)
    expect(mockFn).toBeCalled()
  })

  it('should render a outline button', () => {
    const { getByTestId, getByText } = render(
      <Button text="My Button" onPress={mockFn} outline testID="button" />
    )

    const button = getByTestId('button')
    const buttonText = getByText('My Button')

    expect(button).toBeTruthy()
    expect(button.props.style.backgroundColor).toBe('transparent')

    expect(buttonText.props.style[0].color).toBe('#333638')
  })

  it('should render a button with icon', () => {
    const { getByTestId } = render(
      <Button
        text="My Button"
        onPress={mockFn}
        Icon={
          <View testID="icon">
            <Plus color="white" size={18} />
          </View>
        }
      />
    )

    const icon = getByTestId('icon')

    expect(icon).toBeTruthy()
  })

  it('should render a solid button active', () => {
    const { getByTestId } = render(
      <Button text="My Button" onPress={mockFn} testID="button" isActive />
    )

    const button = getByTestId('button')

    expect(button.props.style.backgroundColor).toBe('#1b1d1e')
  })

  it('should render a outline button active', () => {
    const { getByTestId } = render(
      <Button
        text="My Button"
        onPress={mockFn}
        outline
        testID="button"
        isActive
      />
    )

    const button = getByTestId('button')

    expect(button.props.style.backgroundColor).toBe('#dddedf')
  })
})
