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
      text: "I'm currently interning at ",
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
    slug: "fpga-cnn",
    description:
      "Training and testing a neural network to identify handwritten digits on the MNIST dataset.",
    imageAlt: "Thumbnail preview for the CNN on an FPGA project",
    imageSrc: "/thumbnails/tb_fpga_cnn.png",
    title: "CNN on an FPGA",
    year: "2025",
  },
  {
    slug: "firing-frenzy",
    description:
      "A fun little game using a Nexys 4 FPGA and its built-in Analog ADXL362 accelerometer",
    imageAlt: "Thumbnail preview for the Firing Frenzy project",
    imageSrc: "/thumbnails/tb_firing_frenzy.png",
    title: "Firing Frenzy: An FPGA Game",
    year: "2024",
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
      src: "/experience/ng.svg",
      type: "image",
    },
    period: "2025-Present",
    role: "Technical Intern",
    team: "Northrop Grumman",
  },
  {
    icon: {
      alt: "USC",
      src: "/experience/usc.svg",
      type: "image",
    },
    period: "2024",
    role: "CA Dreams SURF Fellow",
    team: "USC John O’Brien Nanofabrication Lab",
  },
  {
    icon: {
      alt: "Evidant",
      src: "/experience/evidant.svg",
      type: "image",
    },
    period: "2023",
    role: "Data Science Intern",
    team: "Evidant Corporation",
  },
  {
    icon: {
      alt: "HackSC",
      src: "/experience/hacksc.svg",
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
