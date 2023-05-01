import { Link, useLoaderData } from "@remix-run/react";
import type { LoaderFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { getPostListings } from '~/models/post.server';
import { useOptionalAdminUser } from "~/utils";

type LoaderData = {
  posts: Awaited<ReturnType<typeof getPostListings>>
}

export const loader: LoaderFunction = async() => {
  const posts = await getPostListings();

  return json<LoaderData>({ posts });
}

export default function PostsRoute() {
  const { posts } = useLoaderData() as LoaderData;
  const adminUser = useOptionalAdminUser();

  return (
    <main>
      <h1>Posts</h1>
      <ul>
        { adminUser && <Link
          to="admin"
          prefetch="intent"
          className="text-blue-600 underline"
        >
          Admin
        </Link>}
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              to={post.slug}
              // Prefetch intent triggers api request when hovering
              prefetch="intent"
              className="text-blue-600 underline"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}

