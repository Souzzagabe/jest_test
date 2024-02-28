import { useForm } from "react-hook-form";
import validator from "validator";

interface FormData {
  name: string
  email: string
  password: string
  passwordConfirmation: string
  profession: string
  privacyTerms: boolean
}

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    alert(JSON.stringify(data));
  };

  const watchPassword = watch("passwordConfirmation");


  return (
    <main className="h-screen bg-zinc-800 flex items-center justify-center flex-col text-zinc-100 gap-10">
      <h1 className="font-bold">React Hook Form</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 w-full max-w-xs"
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            placeholder="Digite seu nome"
            className="border-zinc-800 shadow-sm rounded h-10 px-3 bg-zinc-400 text-white"
            {...register("name", { required: true })}
          />
          {errors?.name?.type === "required" && (
            <p className="text-red-500">Name is required.</p>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            className="border-zinc-800 shadow-sm rounded h-10 px-3 bg-zinc-400 text-white"
            {...register("email", {
              required: true,
              validate: (value) => validator.isEmail(value), // Corrigir aqui
            })}
          />

          {errors?.email?.type === "required" && (
            <p className="text-red-500">E-mail required.</p>
          )}

          {errors?.email?.type === "validate" && (
            <p className="text-red-500">Invalid e-mail.</p>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            className="border-zinc-800 shadow-sm rounded h-10 px-3 bg-zinc-400 text-white"
            {...register("password", { minLength: 7, required: true })}
          />
          {errors?.password && errors.password.type === "minLength" && (
            <p className="text-red-500">
              Password must have at least 7 characters.
            </p>
          )}
          {errors?.password && errors.password.type === "required" && (
            <p className="text-red-500">Password is required.</p>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="password">Confirmação de senha:</label>
          <input
            type="password"
            id="password"
            placeholder="Confirmar senha"
            className="border-zinc-800 shadow-sm rounded h-10 px-3 bg-zinc-400 text-white"
            {...register("passwordConfirmation", {
              minLength: 7,
              required: true,
              validate: (value) => value === watchPassword,
            })}
          />

          {errors?.passwordConfirmation?.type === "required" && (
            <p className="text-red-500">Password confirmation is required.</p>
          )}
          {errors?.passwordConfirmation?.type === "validate" && (
            <p className="text-red-500">Passwords is not match.</p>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="profession">Profissão:</label>
          <select
            id="profession"
            className="border-zinc-800 shadow-sm rounded h-10 px-3 bg-zinc-400 text-white"
            {...register("profession", {
              required: true,
              validate: (value) => value !== "0",
            })}
          >
            <option value="0">Seleciona sua profissão</option>
            <option value="Developer">Desenvolvedor</option>
            <option value="Other">Outra</option>
          </select>
          {errors?.profession && (
            <p className="text-red-500">Profissão is required.</p>
          )}
        </div>
        <div className="items-center justify-between">
          <input
            type="checkbox"
            {...register("privacyTerms", { required: true })}
            className=""
          />
          <label className="ml-2">I agree with the privacy terms.</label>
        </div>
        {errors?.privacyTerms && (
          <p className="text-red-500">Accept terms is required.</p>
        )}

        <button
          type="submit"
          className="bg-emerald-400 rounded font-semibold shadow-sm text-white h-10 hover:bg-emerald-500 px-3"
        >
          Criar conta
        </button>
      </form>
    </main>
  );
};

export default Form;
