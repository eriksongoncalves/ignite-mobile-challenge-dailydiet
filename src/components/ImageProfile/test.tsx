import React from 'react'

import { ImageProfile } from './'
import { render } from '@utils/testHelper'

describe('ImageProfile component', () => {
  it('should render with a default uri', () => {
    const { getByTestId } = render(<ImageProfile />)

    const image = getByTestId('imageProfile')
    const imageSource = image.props.source
    const containRandomUserInSource =
      imageSource?.uri?.indexOf('randomuser') >= 0

    expect(image).toBeTruthy()
    expect(containRandomUserInSource).toBeFalsy()
  })

  it('should render with a uri', () => {
    const { getByTestId } = render(
      <ImageProfile uri="https://randomuser.me/api/portraits/thumb/men/75.jpg" />
    )

    const image = getByTestId('imageProfile')
    const imageSource = image.props.source
    const containRandomUserInSource =
      imageSource?.uri?.indexOf('randomuser') >= 0

    expect(image).toBeTruthy()
    expect(containRandomUserInSource).toBeTruthy()
  })
})
