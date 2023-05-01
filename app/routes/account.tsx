import type { LoaderArgs } from "@remix-run/node";
import { Outlet, Form, useLoaderData } from "@remix-run/react";
import { getUser } from "~/session.server";
import { json } from "@remix-run/node";

type LoaderData = {
  user: Awaited<ReturnType<typeof getUser>>;
};

export async function loader({ request }: LoaderArgs) {
  return json<LoaderData>({
    user: await getUser(request),
  });
}
export default function AccountIndex() {
  const { user } = useLoaderData();
  return (
    <>
      <h2>Account</h2>

      <div>Welcome { user.email }</div>
      <Form action="/logout" method="post">
        <button type="submit" className="button">
          Logout
        </button>
      </Form>
      <Outlet />
    </>
  )
}
