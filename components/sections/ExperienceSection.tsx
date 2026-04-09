import type { CSSProperties } from "react";
import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { experiencesType } from "@/lib/site-content";
import styles from "@/styles/sections/ExperienceSection.module.css";

type ExperienceSectionProps = {
  experiences: experiencesType;
};

export function ExperienceSection({ experiences }: ExperienceSectionProps) {
  return (
    <Section
      aria-labelledby="experience-title"
      className={`${styles.section} page-enter`}
      id="experience"
      size="content"
      style={{ "--page-enter-delay": "600ms" } as CSSProperties}
    >
      <SectionHeading eyebrow="Experience" hiddenTitle id="experience-title" title="Experience" />
      <div className={`${styles.list} reveal-stagger`}>
        {experiences.map((experience, index) => (
          <article
            className={styles.item}
            data-reveal="fade-up"
            key={`${experience.role}-${experience.period}`}
            style={{ "--reveal-delay": `${index * 70}ms` } as CSSProperties}
          >
            <div aria-hidden="true" className={styles.icon}>
              {experience.icon.type === "image" ? (
                <Image
                  alt={experience.icon.alt}
                  className={styles.iconImage}
                  height={20}
                  width={20}
                  src={experience.icon.src}
                />
              ) : (
                <span className={styles.iconEmoji}>{experience.icon.symbol}</span>
              )}
            </div>
            <div className={styles.details}>
              <h3 className={styles.role}>{experience.role}</h3>
              <p className={styles.team}>
                <span className={styles.dot}>@</span> {experience.team}
              </p>
            </div>
            <p className={styles.period}>{experience.period}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
