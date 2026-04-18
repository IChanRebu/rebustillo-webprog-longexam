import { Outlet } from 'react-router-dom';
import logoImg from '../assets/img/nubdexchange_logo.png';
 
const AuthLayout = () => {
  return (
    <section className="min-h-screen bg-zinc-100 text-zinc-900">
      <div className="grid min-h-screen w-full lg:grid-cols-[1.05fr_0.95fr]">
        <div className="hidden items-center justify-center border-r-2 border-zinc-200 bg-white p-8 sm:p-10 lg:flex lg:p-16">
          <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-2xl">
            <img
              src={logoImg}
              alt="BulldogEx Logo"
              className="h-72 w-72 object-contain"
            />
          </div>
        </div>
 
        <main className="flex items-center bg-zinc-50 px-6 py-10 sm:px-10 lg:px-16">
          <div className="mx-auto w-full max-w-md">
            <Outlet />
          </div>
        </main>
      </div>
    </section>
  );
};
 
export default AuthLayout;