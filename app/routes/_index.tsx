import { Outlet } from "@remix-run/react";
import type { V2_MetaFunction } from "@remix-run/node";
export const meta: V2_MetaFunction = () => [{ title: "Ste store" }];

export default function HomeRoute() {
  return (
    <>
      <div className="text-3xl flex justify-center mt-12">HomePage</div>
      <Outlet />
    </>
  )
}
