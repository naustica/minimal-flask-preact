import { render, cleanup } from '@testing-library/preact'
import { h } from 'preact'
import { expect } from 'chai'

import HelloWorld from '../views/hello_world'

describe('HelloWorldTest', () => {

  afterEach(cleanup)

  it('should render Component', () => {
    const { container } = render(<HelloWorld />)
    expect(container).exist
  })

})
