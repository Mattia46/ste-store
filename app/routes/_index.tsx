import type { V2_MetaFunction } from "@remix-run/node";
export const meta: V2_MetaFunction = () => [{ title: "Ste store" }];

export default function HomeRoute() {
  return (
    <div className="flex justify-center md:mt-48">
      <img alt="logo" src="logo.png" width="800"/>
    </div>
  )
}
