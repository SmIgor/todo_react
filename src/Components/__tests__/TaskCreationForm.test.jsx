import '../../setupTests';
import { render, screen } from '@testing-library/react';
import TaskCreationForm from '../TaskCreationForm';
import userEvent from '@testing-library/user-event';

describe('<TaskCreationForm />', () => {
  it('should submit correct data', () => {
    const onClick = jest.fn();
    render(<TaskCreationForm handleCreate={onClick} />);
    const input = screen.getByPlaceholderText(/Task text/i);
    userEvent.type(input, 'Test');
    expect(input.value).toBe('Test');

    const submitBtn = screen.getByRole('button');
    userEvent.click(submitBtn);
    expect(onClick).toHaveBeenCalledWith('Test');
  });

  it('handleCreate should not be triggered with empty input', () => {
    const onClick = jest.fn();
    render(<TaskCreationForm handleCreate={onClick} />);
    const input = screen.getByPlaceholderText(/Task text/i);
    expect(input.value).toBe('');

    const submitBtn = screen.getByRole('button');
    userEvent.click(submitBtn);
    expect(onClick).toHaveBeenCalledTimes(0);
  });
});
