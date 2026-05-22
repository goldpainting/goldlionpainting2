import MarkdownLandingPage from '../components/MarkdownLandingPage';
import { areaInterlinkCards } from '../content/landingCards';
import {
  buildMarkdownMetadata,
  readMarkdownContent,
} from '../content/markdownContent';
import { buildPageImages, servicePageImages } from '../content/pageImages';

const raw = readMarkdownContent('doc/infor_services/popcorn-ceiling.md');
const heroImage = '/parrish/Interior-painting-ceiling-painters.jpg';
const heroAlt =
  'Popcorn ceiling removal and ceiling refinishing by Gold Lion Painting Inc';

export const metadata = buildMarkdownMetadata({
  raw,
  canonical: '/popcorn-ceiling-removal',
  image: heroImage,
  imageAlt: heroAlt,
});

export default function PopcornCeilingRemovalPage() {
  return (
    <MarkdownLandingPage
      raw={raw}
      canonical="/popcorn-ceiling-removal"
      eyebrow="Popcorn Ceiling Removal"
      heroImage={heroImage}
      heroAlt={heroAlt}
      interlinkTitle="House Painting Areas"
      interlinks={areaInterlinkCards}
      interlinkType="areas"
      pageImages={buildPageImages(
        servicePageImages.popcorn,
        'Popcorn Ceiling Removal'
      )}
    />
  );
}
