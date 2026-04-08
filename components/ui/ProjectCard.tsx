import type { projectType } from "@/lib/site-content";
import styles from "@/styles/ui/ProjectCard.module.css";

type ProjectCardProps = {
  project: projectType;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className={styles.card} id={`project-${project.slug}`}>
      <div aria-hidden="true" className={styles.preview} style={{ backgroundImage: project.gradient }} />
      <div className={styles.meta}>
        <div className={styles.headingGroup}>
          <h3 className={styles.title}>{project.title}</h3>
          <p className={styles.category}>{project.category}</p>
        </div>
        <p className={styles.year}>{project.year}</p>
      </div>
    </article>
  );
}
