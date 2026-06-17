import HeroSection from '@/components/home/Hero';
import OurCapabilities from '@/components/data-science/ourCapabiity';
import StatsCounter from '@/components/home/StatsCounter';
import CaseStudies from '@/components/home/CaseStudies';
import Testimonials from '@/components/home/Testimonials';
import IndustryStrength from '@/components/data-science/IndustryStrength';
function DataScience() {
  return (
    <div>
      <HeroSection

        title="Data Science"
        description="Predict, analyze, and optimize with AI-driven insights turning your raw data into measurable competitive advantage.
      "
        ctaText="Schedule a Free Consultation"
        ctaLink="/about"
        heroImage="/img/data-scie.webp"
        bgImage="/img/Feature.png"
        sideImage="/img/List.svg"
        highlightColor="#5fb0c2"
        showCursor={false}
        descmaxWidth="md"
        clipPath="
    polygon(
  0% 0%,
  100% 0%,
  100% 100%,
  22.26% 100%,
  21.96% 100.01%,
  21.66% 100.01%,
  21.36% 100.01%,
  21.04% 100%,
  20.76% 99.96%,
  20.44% 99.89%,
  20.14% 99.77%,
  19.87% 99.60%,
  19.54% 99.37%,
  19.22% 99.07%,
  18.89% 98.65%,
  18.55% 98.19%,
  18.21% 97.74%,
  17.89% 97.29%,
  17.59% 96.86%,
  17.33% 96.48%,
  17.10% 96.16%,
  16.93% 95.90%,
  16.83% 95.74%,
  16.80% 95.68%,
  16.40% 95.07%,
  16.01% 94.59%,
  15.58% 94.22%,
  15.17% 93.92%,
  14.79% 93.72%,
  14.44% 93.60%,
  14.14% 93.51%,
  13.90% 93.47%,
  13.75% 93.45%,
  13.70% 93.45%,
  3.18% 93.45%,
  2.38% 93.35%,
  1.73% 93.05%,
  1.20% 92.58%,
  0.80% 92.02%,
  0.50% 91.42%,
  0.28% 90.82%,
  0.14% 90.29%,
  0.05% 89.84%,
  0.01% 89.51%,
  0% 89.41%,
  0% 0%
) "
        bgColor="linear-gradient(45deg, #F0F9FB, transparent)"
       
      />
      <OurCapabilities />
      <IndustryStrength />
      <CaseStudies />
      <Testimonials />
      <StatsCounter />
    </div>
  )
}

export default DataScience
