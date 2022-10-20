import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import App from './App';


describe('init', () => {
    test('renders learn react link', () => {
        render(<App/>);
        const linkElement = screen.getByText(/Hello world/i);
        const buttonElement = screen.getByRole('button')
        const inputElement = screen.queryAllByPlaceholderText(/input-text/i)
        expect(linkElement).toBeInTheDocument();
        expect(buttonElement).toBeInTheDocument()
        expect(inputElement).toMatchSnapshot()
    })
    test('APP TEST', async () => {
        render(<App/>)
        const helloWorldElement = await screen.findByText(/data/i);
        expect(helloWorldElement).toBeInTheDocument()
        screen.debug()
    });
    test('toggle handler in component', () => {
        render(<App/>)
        const btn = screen.getByTestId('toggle-btn')
        expect(screen.queryByTestId('menu')).toBeNull()
        fireEvent.click(btn)
        expect(screen.queryByTestId('menu')).toBeInTheDocument()
        fireEvent.click(btn)
        expect(screen.queryByTestId('menu')).toBeNull()
    })
    test('input handler in component', () => {
        render(<App/>)
        const input = screen.getByPlaceholderText(/input-text/i)
        expect(screen.queryByTestId('value')).toContainHTML('')
        fireEvent.input(input, {
            target: {
                value: '12345'
            }
        })
        expect(screen.queryByTestId('value')).toContainHTML('12345')
    })
});
