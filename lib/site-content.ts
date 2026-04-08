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

export type HeroSummarySegment =
  | {
      text: string;
      type: "text";
    }
  | {
      href: string;
      isExternal?: boolean;
      text: string;
      type: "link";
    };

export const heroContent = {
  eyebrow: "Designing systems from silicon to software",
  summary: [
    {
      text: "I'm currently interning part-time at ",
      type: "text",
    },
    {
      href: "https://www.northropgrumman.com/what-we-do/mission-solutions/microelectronics",
      isExternal: true,
      text: "Northrop Grumman's Microelectronics Center (NGMC)",
      type: "link",
    },
    {
      text: " working on a variety of initiatives such as: developing ",
      type: "text",
    },
    {
      href: "https://en.wikipedia.org/wiki/Process_design_kit",
      isExternal: true,
      text: "PDKs",
      type: "link",
    },
    {
      text: ", implementing ML defect detection, creating custom tooling software, and more!",
      type: "text",
    },
  ] satisfies HeroSummarySegment[],
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

export type ExperienceIcon =
  | {
      symbol: string;
      type: "emoji";
    }
  | {
      alt: string;
      src: string;
      type: "image";
    };

export type ExperienceEntry = {
  icon: ExperienceIcon;
  period: string;
  role: string;
  team: string;
};

export const experiences: ExperienceEntry[] = [
  {
    icon: {
      alt: "Northrop Grumman",
      src: "/ng.svg",
      type: "image",
    },
    period: "2025-Present",
    role: "Technical Intern",
    team: "Northrop Grumman",
  },
  {
    icon: {
      alt: "USC",
      src: "/usc.svg",
      type: "image",
    },
    period: "2024",
    role: "CA Dreams SURF Fellow",
    team: "USC John O’Brien Nanofabrication Lab",
  },
  {
    icon: {
      alt: "Evidant",
      src: "/evidant.svg",
      type: "image",
    },
    period: "2023",
    role: "Data Science Intern",
    team: "Evidant Corporation",
  },
  {
    icon: {
      alt: "HackSC",
      src: "/hacksc.svg",
      type: "image",
    },
    period: "2022-2025",
    role: "Software Engineer",
    team: "HackSC",
  },
];

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
