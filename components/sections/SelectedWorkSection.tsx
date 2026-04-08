import { Section } from "@/components/layout/Section";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { projectsType } from "@/lib/site-content";
import styles from "@/styles/sections/SelectedWorkSection.module.css";

type SelectedWorkSectionProps = {
  projects: projectsType;
};

export function SelectedWorkSection({ projects }: SelectedWorkSectionProps) {
  return (
    <Section
      aria-labelledby="selected-work-title"
      className={styles.section}
      id="featured"
      size="content"
    >
      <SectionHeading eyebrow="Featured" hiddenTitle id="selected-work-title" title="Featured" />
      <div className={styles.grid}>
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </Section>
  );
}
