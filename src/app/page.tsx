import MarkdownLandingPage from './components/MarkdownLandingPage';
import { serviceInterlinkCards } from './content/landingCards';
import {
  buildMarkdownMetadata,
  readMarkdownContent,
} from './content/markdownContent';
import { buildPageImages } from './content/pageImages';

const raw = readMarkdownContent('doc/home-lading/home.md');
const fallbackHeroImage = '/services/home-exterior-painting-manatee-county.jpg.jpg';
const heroAlt = 'House painters in St. Petersburg by Gold Lion Painting';

export const metadata = buildMarkdownMetadata({
  raw,
  canonical: '/',
  image: fallbackHeroImage,
  imageAlt: heroAlt,
});

const homeImages = [
  '/services/home-exterior-painting-manatee-county.jpg.jpg',
  '/home/interior-house-painting-anna-maria-.jpg',
  '/home/kitchen-cabinet-painting.jpg',
  '/parrish/stucco-repair-parrish.jpg',
  '/services/house-interior-painting-manatee-county.jpg',
  '/sarasota/interior-sarasota-techo.jpeg',
  '/services/exterior-painting-manatee-county.jpg',
  '/parrish/Interior-painting-ceiling-painters.jpg',
];

export default function HomePage() {
  return (
    <MarkdownLandingPage
      raw={raw}
      canonical="/"
      eyebrow="House Painters in St. Petersburg"
      heroImage={fallbackHeroImage}
      heroAlt={heroAlt}
      interlinkTitle="Painting Services"
      interlinks={serviceInterlinkCards}
      interlinkType="services"
      pageImages={buildPageImages(homeImages, 'House Painters in St. Petersburg')}
    />
  );
}
