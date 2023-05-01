import { prisma } from '~/db.server';
import type { Music } from "@prisma/client";

export async function getList() {
  return prisma.music.findMany({
    select: {
      slug: true,
      title: true,
      image: true,
      description: true
    }
  })
};

export async function getPosts() {
  return prisma.music.findMany();
};

export async function getMusic(slug: string) {
  return prisma.music.findUnique({ where: { slug}});
}

export async function createPost(
  music: Pick<Music, "slug" | "title" | "description">
) {
  return prisma.music.create({ data: music });
}

export async function updatePost(
  slug: string,
  music: Pick<Music, "slug" | "title" | "description">
) {
  return prisma.music.update({ data: music, where: { slug } });
}

export async function deletePost(slug: string) {
  return prisma.music.delete({ where: { slug } });
}

export type { Music };
