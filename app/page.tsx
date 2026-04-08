import { PageShell } from "@/components/layout/PageShell";
import { SidebarNav } from "@/components/layout/SidebarNav";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { SelectedWorkSection } from "@/components/sections/SelectedWorkSection";
import {
  experiences,
  footerContent,
  heroContent,
  navGroups,
  projects,
  siteIdentity,
} from "@/lib/site-content";

export default function Home() {
  return (
    <PageShell
      footer={<SiteFooter quote={footerContent.quote} />}
      sidebar={<SidebarNav brand={siteIdentity.shortName} groups={navGroups} />}
    >
      <HeroSection content={heroContent} />
      <ExperienceSection experiences={experiences} />
      <SelectedWorkSection projects={projects} />
    </PageShell>
  );
}
