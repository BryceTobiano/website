import Image from "next/image";
import type { projectType } from "@/lib/site-content";
import styles from "@/styles/ui/ProjectCard.module.css";

type ProjectCardProps = {
  project: projectType;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className={styles.card} id={`project-${project.slug}`}>
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
