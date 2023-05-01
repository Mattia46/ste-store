import { Outlet, Link, Form } from "@remix-run/react";
import { Footer } from "@components/Footer";

export const Layout = ({ user }: any) => {
  return (
    <div className="px-4 pb-4 flex w-full flex-col h-screen pt-4 bg-slate-50 sm:px-6 sm:pb-14 sm:pt-8 lg:px-8 lg:pb-12 lg:pt-8">
      <header className="flex items-center justify-between bg-slate-800 p-4 text-white">
        <Link className="flex items-center" to="/"><img src="../logo.png" width="40" className="mr-4" alt="logo"/>CS Social</Link>
        { user &&  <p>{user.email}</p> }
        { user
          ? <Form action="/logout" method="post">
            <button type="submit"
              className="rounded bg-slate-600 px-4 py-2 text-blue-100 hover:bg-blue-500 active:bg-blue-600">
              Logout
            </button>
          </Form>
          : <Link className="rounded bg-slate-600 px-4 py-2 text-blue-100 hover:bg-blue-500 active:bg-blue-600" to="login">Login</Link>
        }
      </header>
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
