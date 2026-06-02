import { render, screen } from '@testing-library/react'
import Banner from './Banner'

describe('Banner', () => {
  test('displays the title when title prop is provided', () => {
    render(<Banner image="/test-image.png" title="Chez vous, partout et ailleurs" />)

    expect(screen.getByText('Chez vous, partout et ailleurs')).toBeInTheDocument()
  })
  test('does not display a title when title prop is not provided', () => {
  render(<Banner image="/test-image.png" />)

  expect(screen.queryByRole('heading')).not.toBeInTheDocument()
})
})