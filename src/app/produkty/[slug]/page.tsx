import { ProductDetailClient } from './ProductDetailClient';

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ size?: string }>;
};

const productMeta: Record<string, { title: string; image: string; image1L: string; image5L: string; image20L: string }> = {
  'olecon-84-ec': { 
    title: 'OLECON 84 EC', 
    image: '/produkty/ricarion1l.png',
    image1L: '/produkty/ricarion1l.png',
    image5L: '/produkty/ricarion5l.png',
    image20L: '/produkty/ricarion20l.png'
  },
  'ricarion-95-ec': { 
    title: 'RICARION 95 EC', 
    image: '/produkty/ricarion1l.png',
    image1L: '/produkty/ricarion1l.png',
    image5L: '/produkty/ricarion5l.png',
    image20L: '/produkty/ricarion20l.png'
  },
  'agrileon-96-ec': { 
    title: 'AGRILEON 96 EC', 
    image: '/produkty/ricarion1l.png',
    image1L: '/produkty/ricarion1l.png',
    image5L: '/produkty/ricarion5l.png',
    image20L: '/produkty/ricarion20l.png'
  },
  'agricon-max': {
    title: 'AGRICON MAX',
    image: '/produkty/ricarion1l.png',
    image1L: '/produkty/ricarion1l.png',
    image5L: '/produkty/ricarion5l.png',
    image20L: '/produkty/ricarion20l.png'
  },
  'agrileus-turbo': {
    title: 'AGRILEUS TURBO',
    image: '/produkty/ricarion1l.png',
    image1L: '/produkty/ricarion1l.png',
    image5L: '/produkty/ricarion5l.png',
    image20L: '/produkty/ricarion20l.png'
  },
  'agrileus-power': {
    title: 'AGRILEUS POWER',
    image: '/produkty/ricarion1l.png',
    image1L: '/produkty/ricarion1l.png',
    image5L: '/produkty/ricarion5l.png',
    image20L: '/produkty/ricarion20l.png'
  },
  'polimery-silikonowe': {
    title: 'Polimery silikonowe',
    image: '/produkty/ricarion1l.png',
    image1L: '/produkty/ricarion1l.png',
    image5L: '/produkty/ricarion5l.png',
    image20L: '/produkty/ricarion20l.png'
  },
  'roztwr-soli-sodowej': {
    title: 'Roztwór soli sodowej',
    image: '/produkty/ricarion1l.png',
    image1L: '/produkty/ricarion1l.png',
    image5L: '/produkty/ricarion5l.png',
    image20L: '/produkty/ricarion20l.png'
  },
  'trojsiloksan-75': {
    title: 'Trójsiloksan 75%',
    image: '/produkty/ricarion1l.png',
    image1L: '/produkty/ricarion1l.png',
    image5L: '/produkty/ricarion5l.png',
    image20L: '/produkty/ricarion20l.png'
  },
  'etoksylowany-alkohol-90': {
    title: 'Etoksylowany alkohol 90%',
    image: '/produkty/ricarion1l.png',
    image1L: '/produkty/ricarion1l.png',
    image5L: '/produkty/ricarion5l.png',
    image20L: '/produkty/ricarion20l.png'
  },
  'estry-metylowe-825': {
    title: 'Estry metylowe 82,5%',
    image: '/produkty/ricarion1l.png',
    image1L: '/produkty/ricarion1l.png',
    image5L: '/produkty/ricarion5l.png',
    image20L: '/produkty/ricarion20l.png'
  },
  'trisiloksan-modyfikowany': {
    title: 'Trisiloksan modyfikowany',
    image: '/produkty/ricarion1l.png',
    image1L: '/produkty/ricarion1l.png',
    image5L: '/produkty/ricarion5l.png',
    image20L: '/produkty/ricarion20l.png'
  },
  'adiuwant-do-upraw-rolniczych': {
    title: 'Adiuwant do upraw rolniczych',
    image: '/produkty/ricarion1l.png',
    image1L: '/produkty/ricarion1l.png',
    image5L: '/produkty/ricarion5l.png',
    image20L: '/produkty/ricarion20l.png'
  },
  'koncentrat-emulsyjny': {
    title: 'Koncentrat emulsyjny',
    image: '/produkty/ricarion1l.png',
    image1L: '/produkty/ricarion1l.png',
    image5L: '/produkty/ricarion5l.png',
    image20L: '/produkty/ricarion20l.png'
  },
  'adiuwant-do-fungicydow-miedziowych': {
    title: 'Adiuwant do fungicydów miedziowych',
    image: '/produkty/ricarion1l.png',
    image1L: '/produkty/ricarion1l.png',
    image5L: '/produkty/ricarion5l.png',
    image20L: '/produkty/ricarion20l.png'
  },
  'produkt1': {
    title: 'Produkt1',
    image: '/produkty/ricarion1l.png',
    image1L: '/produkty/ricarion1l.png',
    image5L: '/produkty/ricarion5l.png',
    image20L: '/produkty/ricarion20l.png'
  },
  'produkt2': {
    title: 'Produkt2',
    image: '/produkty/ricarion1l.png',
    image1L: '/produkty/ricarion1l.png',
    image5L: '/produkty/ricarion5l.png',
    image20L: '/produkty/ricarion20l.png'
  },
  'produkt3': {
    title: 'Produkt3',
    image: '/produkty/ricarion1l.png',
    image1L: '/produkty/ricarion1l.png',
    image5L: '/produkty/ricarion5l.png',
    image20L: '/produkty/ricarion20l.png'
  },
  'produkt4': {
    title: 'Produkt4',
    image: '/produkty/ricarion1l.png',
    image1L: '/produkty/ricarion1l.png',
    image5L: '/produkty/ricarion5l.png',
    image20L: '/produkty/ricarion20l.png'
  }
};

export default async function ProductDetailPage({ params, searchParams }: Props) {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;

  const meta = productMeta[resolvedParams.slug] ?? {
    title: 'OLECON 84 EC',
    image: '/produkty/ricarion1l.png',
    image1L: '/produkty/ricarion1l.png',
    image5L: '/produkty/ricarion5l.png',
    image20L: '/produkty/ricarion20l.png'
  };

  return <ProductDetailClient initialSize={resolvedSearchParams.size || '1l'} meta={meta} slug={resolvedParams.slug} />;
}