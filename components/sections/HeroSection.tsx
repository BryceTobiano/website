import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import type { heroContentType } from "@/lib/site-content";
import styles from "@/styles/sections/HeroSection.module.css";

type HeroSectionProps = {
  content: heroContentType;
};

export function HeroSection({ content }: HeroSectionProps) {
  return (
    <Section aria-labelledby="hero-title" className={styles.section} id="about" size="narrow">
      <div className={styles.inner}>
        <p className={styles.greeting}>Hello,</p>
        <h1 className={styles.title} id="hero-title">
          I&apos;m Bryce
        </h1>
        <Eyebrow accent className={styles.eyebrow}>
          {content.eyebrow}
        </Eyebrow>
        <p className={styles.summary}>
          {content.summary.map((segment, index) => {
            if (segment.type === "link") {
              return (
                <a
                  className={styles.summaryLink}
                  href={segment.href}
                  key={`${segment.type}-${index}`}
                  rel={segment.isExternal ? "noreferrer" : undefined}
                  target={segment.isExternal ? "_blank" : undefined}
                >
                  {segment.text}
                </a>
              );
            }

            return <span key={`${segment.type}-${index}`}>{segment.text}</span>;
          })}
        </p>
      </div>
    </Section>
  );
}
