import MarkdownLandingPage from '../components/MarkdownLandingPage';
import { areaInterlinkCards } from '../content/landingCards';
import {
  buildMarkdownMetadata,
  readMarkdownContent,
} from '../content/markdownContent';
import { buildPageImages, servicePageImages } from '../content/pageImages';

const raw = readMarkdownContent('doc/infor_services/stucco-repair.md');
const heroImage = '/parrish/stucco-repair-parrish.jpg';
const heroAlt = 'Stucco repair and exterior painting by Gold Lion Painting Inc';

export const metadata = buildMarkdownMetadata({
  raw,
  canonical: '/stucco-repair',
  image: heroImage,
  imageAlt: heroAlt,
});

export default function StuccoRepairPage() {
  return (
    <MarkdownLandingPage
      raw={raw}
      canonical="/stucco-repair"
      eyebrow="Stucco Repair"
      heroImage={heroImage}
      heroAlt={heroAlt}
      interlinkTitle="House Painting Areas"
      interlinks={areaInterlinkCards}
      interlinkType="areas"
      pageImages={buildPageImages(
        servicePageImages.stucco,
        'Stucco Repair'
      )}
    />
  );
}
