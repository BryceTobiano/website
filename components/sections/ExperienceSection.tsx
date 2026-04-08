import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { experiencesType } from "@/lib/site-content";
import styles from "@/styles/sections/ExperienceSection.module.css";

type ExperienceSectionProps = {
  experiences: experiencesType;
};

export function ExperienceSection({ experiences }: ExperienceSectionProps) {
  return (
    <Section aria-labelledby="experience-title" className={styles.section} id="experience" size="content">
      <SectionHeading eyebrow="Experience" hiddenTitle id="experience-title" title="Experience" />
      <div className={styles.list}>
        {experiences.map((experience) => (
          <article className={styles.item} key={`${experience.role}-${experience.period}`}>
            <div aria-hidden="true" className={styles.icon}>
              {experience.icon}
            </div>
            <div className={styles.details}>
              <h3 className={styles.role}>{experience.role}</h3>
              <p className={styles.team}>
                <span className={styles.dot}>•</span> {experience.team}
              </p>
            </div>
            <p className={styles.period}>{experience.period}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
