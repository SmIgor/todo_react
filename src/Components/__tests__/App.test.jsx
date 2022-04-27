import '../../setupTests';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('<App />', () => {
  it('should render App', () => {
    render(<App />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toHaveClass('task-creation__input');
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
