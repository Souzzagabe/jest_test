// // jest-dom adds custom jest matchers for asserting on DOM nodes.
// // allows you to do things like:
// // expect(element).toHaveTextContent(/react/i)
// // learn more: https://github.com/testing-library/jest-dom
// import '@testing-library/jest-dom';
import { render, screen, fireEvent} from "@testing-library/react";
import App from "./App";

const sum = (x: number, y: number) => {
  return x + y;
};

describe("App component", () => {
  it("should sum correctly", () => {
    expect(sum(4, 4)).toBe(8);
  });

  it("should render App with hello message", () => {
    render(<App />);

    expect(screen.getByText("Hello world!"));
  });

  it("should change message on button click", () => {
    render(<App />);
    // Verifica se a mensagem inicial está presente
    expect(screen.getByText("Let's learn more about testing in React"));

    // Encontra e clica no botão
    const button = screen.getByText(/change message/i);
    fireEvent.click(button);

    // Verifica se a mensagem mudou após o clique no botão
    expect(screen.getByText(/mudei a frase/i)); 

    const oldMessage = screen.queryByText("Let's learn more about testing in React")

    expect(oldMessage).toBeNull()
  });
});
