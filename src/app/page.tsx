import { Roboto_Slab } from '@next/font/google';
import Banner from '../components/banner/banner';
import NavBar from '../components/nav/nav';
import SectionCard from '../components/card/section-card';
import data from './mockData.json';
import { useRouter } from 'next/router';

const videos = data.items.map((item) => {
  return {
    id: item.id.videoId,
    title: item.snippet.title,
    imgUrl: item.snippet.thumbnails.medium.url,
    description: item.snippet.description,
  };
});
console.log(videos);

const robotoSlab = Roboto_Slab({ subsets: ['latin'] });

export default function Home() {
  const router = useRouter();

  const onPlay = () => {
    console.log('Play');
    router.push('/play');
  };
  return (
    <main className={robotoSlab.className}>
      <NavBar userName="Luc Thi" />

      <Banner
        title="Clifford the red dog"
        subTitle="a very cute dog"
        imgUrl="/images/clifford.jpg"
        onPlay={onPlay}
      />

      <SectionCard title="Section 1" items={videos} />
    </main>
  );
}
