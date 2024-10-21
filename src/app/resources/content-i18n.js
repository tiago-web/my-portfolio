import { InlineCode } from "@/once-ui/components";

const createI18nContent = (t) => {
  const person = {
    firstName: "Tiago",
    lastName: "Soriano",
    get name() {
      return `${this.firstName} ${this.lastName}`;
    },
    role: t("person.role"),
    avatar: "/images/avatar.jpg",
    location: "Brazil/Balneário Camboriú", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ["English", "Portuguese"], // optional: Leave the array empty if you don't want to display languages
  };

  const newsletter = {
    display: false,
    title: <>{t("newsletter.title", { firstName: person.firstName })}</>,
    description: <>{t("newsletter.description")}</>,
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
    label: t("home.label"),
    title: t("home.title", { name: person.name }),
    description: t("home.description", { role: person.role }),
    headline: <>{t("home.headline")}</>,
    subline: <>{t("home.subline")}</>,
  };

  const about = {
    label: t("about.label"),
    title: t("about.label"),
    description: t("about.description", {
      name: person.name,
      role: person.role,
      location: person.location,
    }),
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
      title: t("about.intro.title"),
      description: <>{t("about.intro.description")}</>,
    },
    work: {
      display: true, // set to false to hide this section
      title: t("about.work.title"),
      experiences: [
        {
          company: "Starter Labs",
          timeframe: t("about.work.experiences.StarterLabs.timeframe"),
          role: t("about.work.experiences.StarterLabs.role"),
          achievements: t(
            "about.work.experiences.StarterLabs.achievements"
          ).split(";"),
          images: [
            // optional: leave the array empty if you don't want to display images
            // todo: add images
            {
              src: "/images/projects/starter-labs/starter-platform.png",
              alt: "Starter Labs",
              width: 16,
              height: 9,
            },
          ],
        },
        {
          company: "AGPS Web",
          timeframe: t("about.work.experiences.AGPSWeb.timeframe"),
          role: t("about.work.experiences.AGPSWeb.role"),
          achievements: t("about.work.experiences.AGPSWeb.achievements").split(
            ";"
          ),
          images: [
            // todo: add images
          ],
        },
      ],
    },
    studies: {
      display: true, // set to false to hide this section
      title: "Studies",
      institutions: [
        {
          name: "Lambton College",
          description: (
            <>{t(`about.studies.institutions.LambtonCollege.description`)}</>
          ),
        },
        {
          name: "Rocketseat",
          description: (
            <>{t("about.studies.institutions.Rocketseat.description")}</>
          ),
        },
      ],
    },
    technical: {
      display: true, // set to false to hide this section
      title: t("about.technical.title"),
      skills: [
        {
          title: "Solidity",
          description: <>{t("about.technical.skills.Solidity.description")}</>,
          images: [
            // todo: add images
            // {
            //   src: "/images/projects/project-01/cover-02.jpg",
            //   alt: "Project image",
            //   width: 16,
            //   height: 9,
            // },
            // {
            //   src: "/images/projects/project-01/cover-03.jpg",
            //   alt: "Project image",
            //   width: 16,
            //   height: 9,
            // },
          ],
        },
        {
          title: "Next.js",
          description: <>{t("about.technical.skills.Nextjs.description")}</>, // "." not accepted in next-intl namespace
          images: [
            // todo: add images
            // {
            //   src: "/images/projects/project-01/cover-04.jpg",
            //   alt: "Project image",
            //   width: 16,
            //   height: 9,
            // },
          ],
        },
      ],
    },
  };

  const blog = {
    label: t("blog.label"),
    title: t("blog.title"),
    description: t("blog.description", { name: person.name }),
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
  };

  const work = {
    label: t("work.label"),
    title: t("work.title"),
    description: t("work.description", { name: person.name }),
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
  };

  const gallery = {
    label: t("gallery.label"),
    title: t("gallery.title"),
    description: t("gallery.description", { name: person.name }),
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
    label: t("agenda.label"),
  };

  return {
    person,
    social,
    newsletter,
    home,
    about,
    blog,
    work,
    gallery,
    agenda,
  };
};

export { createI18nContent };
