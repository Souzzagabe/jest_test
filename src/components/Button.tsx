import { ReactNode } from "react";

interface ButtonProps {
  onClick: () => void;
  children: ReactNode; // Importe ReactNode e corrija a tipagem das children
}

const Button = ({ onClick, children }: ButtonProps) => { // Corrija a definição das props
  return (
    <div>
      <button
        onClick={onClick}
        className="bg-green-400 rounded border-none w-[150px] h-[30px] font-bold text-white hover:bg-green-600"
      >
        {children} {/* Renderize as children do componente */}
      </button>
    </div>
  );
};

export default Button;
