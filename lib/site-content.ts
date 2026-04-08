export const siteIdentity = {
  name: "Bryce Tobiano",
  shortName: "Bryce",
};

export type NavItem = {
  href?: string;
  isExternal?: boolean;
  label: string;
};

export type NavGroup = {
  label?: string;
  items: NavItem[];
};

export const heroContent = {
  eyebrow: "Designing systems from silicon to software",
  summary:
    "I'm currently interning part-time at Northrop Grumman's Microelectronics Center (NGMC) working on a variety of initiatives such as: developing PDKs, implementing ML defect detection, creating custom tooling software, and more!",
} as const;

export type heroContentType = typeof heroContent;

export const projects = [
  {
    slug: "semiconductor-research",
    title: "Semiconductor Research",
    category: "Research",
    year: "2024",
    gradient:
      "linear-gradient(151deg, rgb(152 16 250) 0%, rgb(21 93 252) 100%)",
  },
  {
    slug: "web-application",
    title: "Web Application",
    category: "Development",
    year: "2024",
    gradient:
      "linear-gradient(151deg, rgb(0 184 219) 0%, rgb(20 71 230) 100%)",
  },
] as const;

export type projectType = (typeof projects)[number];
export type projectsType = typeof projects;

export const experiences = [
  {
    icon: "🔬",
    period: "2025-Present",
    role: "Technical Intern",
    team: "Northrop Grumman",
  },
  {
    icon: "💻",
    period: "2024",
    role: "CA Dreams SURF Fellow",
    team: "Personal Projects",
  },
  {
    icon: "🛠️",
    period: "2023",
    role: "Data Science Intern",
    team: "Evidant Corporation",
  },
  {
    icon: "🔒",
    period: "2022-2025",
    role: "Software Engineer",
    team: "HackSC",
  },
] as const;

export type experienceType = (typeof experiences)[number];
export type experiencesType = typeof experiences;

export const navGroups: NavGroup[] = [
  {
    items: [
      {
        label: "About",
        href: "#about",
      },
      {
        // TODO: Replace with the real resume asset once it exists in public/.
        label: "Resume",
      },
      {
        label: "Projects",
        href: "#featured",
      },
    ],
  },
  {
    label: "Connect",
    items: [
      {
        // TODO: Replace with your actual LinkedIn URL.
        label: "LinkedIn",
      },
      {
        label: "Contact",
        href: "mailto:hello@brycetobiano.com",
      },
    ],
  },
];

export type navGroupsType = NavGroup[];

export const footerContent = {
  quote:
    '"And not only so, but we also boast in our tribulations, knowing that tribulation produces endurance" - Romans 5:3',
} as const;
