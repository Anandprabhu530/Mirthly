import { login, signup } from "./actions";

export default function page() {
  return (
    <div className="flex w-full h-screen justify-center items-center">
      <form className="flex flex-col border p-10 border-white rounded-xl w-[400px]">
        <div className="w-full flex justify-center items-center font-bold text-3xl pb-4">
          Your Career Starts Here
        </div>
        <div className="flex flex-col pb-6">
          <label className="text-lg" htmlFor="email">
            Email:
          </label>
          <input
            className="bg-transparent py-2 border-b border-white outline-none"
            id="email"
            name="email"
            type="email"
            required
          />
        </div>
        <div className="flex flex-col pb-14">
          <label className="text-lg" htmlFor="password">
            Password:
          </label>
          <input
            className="bg-transparent py-2 border-b border-white outline-none"
            id="password"
            name="password"
            type="password"
            required
          />
        </div>
        <div className="flex flex-col gap-4">
          <button
            className="p-2 hover:bg-white hover:text-black font-semibold bg-transparent border border-slate-100 rounded-md"
            formAction={login}
          >
            Log in
          </button>
          <button
            className="p-2 hover:bg-transparent hover:text-white font-semibold bg-white border text-black border-slate-100 rounded-md"
            formAction={signup}
          >
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
}
