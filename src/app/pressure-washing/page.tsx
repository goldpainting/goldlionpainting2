import MarkdownLandingPage from '../components/MarkdownLandingPage';
import { areaInterlinkCards } from '../content/landingCards';
import {
  buildMarkdownMetadata,
  readMarkdownContent,
} from '../content/markdownContent';
import { buildPageImages, servicePageImages } from '../content/pageImages';

const raw = readMarkdownContent('doc/infor_services/pressure.md');
const heroImage = '/services/home-exterior-painting-manatee-county.jpg.jpg';
const heroAlt = 'Pressure washing and exterior surface cleaning by Gold Lion Painting Inc';

export const metadata = buildMarkdownMetadata({
  raw,
  canonical: '/pressure-washing',
  image: heroImage,
  imageAlt: heroAlt,
});

export default function PressureWashingPage() {
  return (
    <MarkdownLandingPage
      raw={raw}
      canonical="/pressure-washing"
      eyebrow="Pressure Washing"
      heroImage={heroImage}
      heroAlt={heroAlt}
      interlinkTitle="House Painting Areas"
      interlinks={areaInterlinkCards}
      interlinkType="areas"
      pageImages={buildPageImages(
        servicePageImages.pressure,
        'Pressure Washing'
      )}
    />
  );
}
