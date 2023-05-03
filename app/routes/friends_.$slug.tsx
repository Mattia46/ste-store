import { useParams, useNavigate } from "@remix-run/react";
import { music as musicList } from '@constants';
import { MusicItem } from '@components/MusicItem';

export default function MusicDescriptionRoute() {
  const navigate = useNavigate();
  const { slug } = useParams();
  const music = musicList.find(x => x.slug === slug);
  if (!music) return navigate('/');

  return <MusicItem music={music} />;
}
