import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Tiago",
  lastName: "Soriano",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "FullStack & Blockchain Developer",
  avatar: "/images/avatar.jpg",
  location: "Brazil/Balneário Camboriú", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Portuguese"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the
      intersection of creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/tiago-web",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/tiagosoriano",
  },
  // {
  //     name: 'X',
  //     icon: 'x',
  //     link: '',
  // },
  {
    name: "Email",
    icon: "email",
    link: "mailto:contact@tiagosoriano.dev",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Blockchain Engineer</>,
  subline: (
    <>
      I'm Tiago, a software engineer at <InlineCode>Starter Labs</InlineCode>,
      where I build scalable and secure web3 solutions. After hours, I build my
      own projects.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: true,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://calendly.com/tiagosoriano/30min",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Tiago is a software engineer based in Brazil with a passion for
        transforming complex challenges into scalable and secure solutions. His
        expertise lies in developing decentralized applications (dApps), smart
        contracts, and blockchain-based solutions that bridge the gap between
        traditional web technologies and the emerging Web3 ecosystem.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Starter Labs",
        timeframe: "Feb 2024 – Present",
        role: "FullStack Blockchain Developer",
        achievements: [
          <>
            Optimized an IDO Launchpad, enhancing user experience and
            performance.
          </>,
          <>
            Translated Figma designs into pixel-perfect frontends, responsive
            and accessible using Next.js.
          </>,
          <>
            Collaborated with a cross-functional team in an agile environment to
            deploy new features regularly.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          //   {
          //     src: "/images/projects/project-01/cover-01.jpg",
          //     alt: "Once UI Project",
          //     width: 16,
          //     height: 9,
          //   },
        ],
      },
      {
        company: "AGPS Web",
        timeframe: "Sep 2023 – Feb 2024",
        role: "Software Engineer",
        achievements: [
          <>
            Developed a dental platform using Next.js 14 facilitating efficient
            clinic searches for users.
          </>,
          <>
            Built a WebRTC meeting platform with real-time chat and video,
            improving virtual consultations.
          </>,
          <>
            Automated lead conversion from landing pages to CRM, reducing manual
            data entry.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Lambton College",
        description: <>Computer Programming Degree</>,
      },
      {
        name: "Rocketseat",
        description: <>Web Development/Mobile Development Certificate</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Solidity",
        description: (
          <>Able to develop smart contracts for EVM compatible chains.</>
        ),
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: (
          <>Building next gen ReactJS apps with Next.js + Supabase.</>
        ),
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about web3 and software development...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

const agenda = {
  label: "Agenda",
};

export { person, social, newsletter, home, about, blog, work, gallery, agenda };
