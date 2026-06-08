import { render, screen } from '@testing-library/react'
import Collapse from '../components/Collapse'
import userEvent from '@testing-library/user-event'

describe('Collapse', () => {
    test('hides content by default', () => {
    render(<Collapse title="Description" content="Contenu du collapse" />)

    expect(screen.getByText('Description')).toBeInTheDocument()
    expect(screen.queryByText('Contenu du collapse')).not.toBeInTheDocument()
  })
    test('displays content after clicking on the title', async () => {
    const user = userEvent.setup()

    render(<Collapse title="Description" content="Contenu du collapse" />)

    await user.click(screen.getByText('Description'))

    expect(screen.getByText('Contenu du collapse')).toBeInTheDocument()
    })
    test('hides content again after a second click on the title', async () => {
    const user = userEvent.setup()

    render(<Collapse title="Description" content="Contenu du collapse" />)

    await user.click(screen.getByText('Description'))
    expect(screen.getByText('Contenu du collapse')).toBeInTheDocument()

    await user.click(screen.getByText('Description'))
    expect(screen.queryByText('Contenu du collapse')).not.toBeInTheDocument()
    })
})