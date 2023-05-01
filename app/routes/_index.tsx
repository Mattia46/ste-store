import type { V2_MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: V2_MetaFunction = () => [{ title: "Ste store" }];

export default function Index() {
  return (
    <div className="mx-auto mt-16 max-w-7xl text-center">
      <Link to="/posts" className="text-xl text-blue-600 underline">
        Ste store
      </Link>
    </div>
  );
}
