import React from 'react'
import { Control } from 'react-hook-form'

import { Input } from './'
import { render } from '@utils/testHelper'

describe('Button component', () => {
  it('should render a solid button by default', () => {
    const { getByTestId } = render(
      <Input label="Nome" name="name" control={{} as Control} />
    )

    const label = getByTestId('label')

    expect(label).toBeTruthy()
  })
})
