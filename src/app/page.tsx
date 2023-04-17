import Image from "next/image";
import { title, paragraph, label } from "./fonts/fonts";
import { FiEye } from "react-icons/fi";

export default function Home() {
  function showPassword() {}
  function hidePassword() {
    const input = document.querySelector("input[type=password]");
    const hideButton = document.querySelector("hidePassword");

    hideButton?.addEventListener("click", () => {
      input?.setAttribute("type", "password");
    });
  }

  return (
    <main className={`flex h-screen items-center justify-center`}>
      <aside className="flex flex-1 flex-col justify-center w-full items-center relative">
        <div className="w-2/4 flex flex-col gap-10">
          <div className="flex justify-start items-start flex-col leading-4 gap-4">
            <h2 className={`text-xl ${title.className}`}>
              Acesse a plataforma
            </h2>
            <p
              className={`break-words ${paragraph.className} leading-6 text-base`}
            >
              Faça login ou registre-se para começar a construir seus projetos
              ainda hoje
            </p>
          </div>

          <form className="flex justify-center items-center flex-col gap-4 w-full">
            <div className="w-full flex flex-col justify-center items-start gap-2">
              <label
                htmlFor="inputEmail"
                className={`leading-5 text-sm ${label.className}`}
              >
                E-mail
              </label>
              <input
                type="email"
                id="inputEmail"
                placeholder="Digite seu e-mail"
                className={`${paragraph.className} px-3 py-4 
                border rounded 
                placeholder:text-gray-400
                border-gray-200 outline-none
                text-sm w-full focus:border-purple-600
                transition invalid:text-red-600
                invalid:border-red-600`}
              />
            </div>

            <div
              className="w-full flex 
              flex-col justify-center 
              items-start gap-2"
            >
              <div className="flex justify-between items-center w-full">
                <label
                  htmlFor="inputSenha"
                  className={`leading-5 text-sm ${label.className}`}
                >
                  Senha
                </label>
                <a href="#" className={`${label.className} text-purple-600`}>
                  Esqueceu a senha?
                </a>
              </div>
              <div className="w-full relative">
                <input
                  type="password"
                  id="inputSenha"
                  placeholder="Digite sua senha"
                  className={`${paragraph.className} px-3 
                  py-4 border rounded 
                  placeholder:text-gray-400
                  border-gray-200 outline-none
                  text-sm w-full focus:border-purple-600
                  transition invalid:text-red-600`}
                />
              </div>
            </div>
            <button
              className={`px-2 py-4 border 
              w-full flex items-center 
              justify-center gap-2.5 
              rounded bg-purple-600
              text-white ${title.className}`}
            >
              Entrar
            </button>
            <div
              className="flex 
              justify-start 
              items-center w-full"
            >
              <span className={`${paragraph.className} leading-6 text-base`}>
                Ainda não tem uma conta?{" "}
                <a
                  href="#"
                  className={`${title.className} text-base leading-4 text-purple-600`}
                >
                  Inscreva-se
                </a>
              </span>
            </div>
          </form>
        </div>
      </aside>
      <div
        className="flex w-2/5 justify-center items-center bg-gradient-to-r 
        from-teal-500 to-slate-500 
        h-full relative"
      >
        <Image src="/barber.png" width={320} height={320} alt="Logo" />
      </div>
    </main>
  );
}
