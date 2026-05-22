import MarkdownLandingPage from '../components/MarkdownLandingPage';
import { areaInterlinkCards } from '../content/landingCards';
import {
  buildMarkdownMetadata,
  readMarkdownContent,
} from '../content/markdownContent';
import { buildPageImages, servicePageImages } from '../content/pageImages';

const raw = readMarkdownContent('doc/infor_services/drywall-repair.md');
const heroImage = '/parrish/Interior-painting-ceiling-painters.jpg';
const heroAlt = 'Drywall repair and ceiling painting project by Gold Lion Painting Inc';

export const metadata = buildMarkdownMetadata({
  raw,
  canonical: '/drywall-repair',
  image: heroImage,
  imageAlt: heroAlt,
});

export default function DrywallRepairPage() {
  return (
    <MarkdownLandingPage
      raw={raw}
      canonical="/drywall-repair"
      eyebrow="Drywall Repair"
      heroImage={heroImage}
      heroAlt={heroAlt}
      interlinkTitle="House Painting Areas"
      interlinks={areaInterlinkCards}
      interlinkType="areas"
      pageImages={buildPageImages(
        servicePageImages.drywall,
        'Drywall Repair'
      )}
    />
  );
}
