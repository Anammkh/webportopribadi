import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  ];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "nyubi",
    icon: starbucks,
    iconBg: "#383E56",
    date: "2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
     
    ],
  },
  {
    title: "Web Developer",
    company_name: "Laravel",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022",
    points: [
      "Developing and maintaining web applications using laravel and other related technologies.",
      
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Next js",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using Next.js and other related technologies.",
]},
];

const testimonials = [
  {
    testimonial:
      "Bagus banget Ini hiihih",
    name: "Ayang",
    designation: "CFO",
    company: "PBSfc",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Kelas",
    name: "Lisa Blackpink",
    designation: "CTO",
    company: "Blackpink",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Alma Ata",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
 
];

const projects = [
  {
    name: "UI ",
    description:
      "Merupakan sebuah desain mobile app menggunakan Figma",
    tags: [
      {
        name: "Figma",
        color: "blue-text-gradient",
      },
      {
        name: "Desain",
        color: "green-text-gradient",
      },
      {
        name: "UIUX",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Linux Operation",
    description:
      "Disini saya menggunakan sistem operasi linux ubuntu lunar.",
    tags: [
      {
        name: "Os Linux",
        color: "blue-text-gradient",
      },
      {
        name: "OS",
        color: "green-text-gradient",
      },
      
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Prediksi Jantung",
    description:
      "Website untuk prediksi Penyakit Jantung menggunakan Streamlit dan bahasa pemrogaman python",
    tags: [
      {
        name: "Streamlit",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
