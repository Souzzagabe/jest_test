import { render, fireEvent } from '@testing-library/react';
import Form from './OnlyHookForm';

describe('Form component', () => {
  it('should render form fields and submit the form with valid data', () => {
    const { getByLabelText, getByText } = render(<Form />);

    fireEvent.change(getByLabelText('Nome:'), { target: { value: 'Gabriel Souza' } });
    fireEvent.change(getByLabelText('E-mail:'), { target: { value: 'Souzzagabe@hotmail.com' } });
    fireEvent.change(getByLabelText('Senha:'), { target: { value: 'password123' } });
    fireEvent.change(getByLabelText('Confirmação de senha:'), { target: { value: 'password123' } });
    fireEvent.change(getByLabelText('Profissão:'), { target: { value: 'Developer' } });

    fireEvent.click(getByText('Criar conta'));

  });

  it('should display error messages for required fields if form is submitted with invalid data', async () => {
    const { getByText } = render(<Form />);

    fireEvent.click(getByText('Criar conta'));

  });
});
