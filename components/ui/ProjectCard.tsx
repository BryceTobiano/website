import type { CSSProperties } from "react";
import Image from "next/image";
import type { projectType } from "@/lib/site-content";
import styles from "@/styles/ui/ProjectCard.module.css";

type ProjectCardProps = {
  project: projectType;
  revealDelay?: string;
};

export function ProjectCard({ project, revealDelay }: ProjectCardProps) {
  return (
    <article
      className={styles.card}
      data-reveal="fade-up"
      data-testid={`project-card-${project.slug}`}
      id={`project-${project.slug}`}
      style={revealDelay ? ({ "--reveal-delay": revealDelay } as CSSProperties) : undefined}
    >
      <div className={styles.preview}>
        <Image
          alt={project.imageAlt}
          className={styles.previewImage}
          fill
          sizes="(max-width: 640px) 100vw, 280px"
          src={project.imageSrc}
        />
      </div>
      <div className={styles.meta}>
        <div className={styles.headingGroup}>
          <h3 className={styles.title}>{project.title}</h3>
          <p className={styles.description}>{project.description}</p>
        </div>
        <p className={styles.year}>{project.year}</p>
      </div>
    </article>
  );
}
