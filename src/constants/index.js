import {
  html,
  css,
  bootstrap,
  javascript,
  react,
  redux,
  axios,
  mui,
  nextjs,
  tailwindcss,
  typescript,
  estate,
  git,
  github,
  linkedin,
  motion,
  exp,
  webDev,
  devActivity,
  pricewise,
  car,
  contact,
  snapgram,
  summiz,
  threads,
  edu
} from "../assets/icons";

export const skills = [
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: bootstrap,
    name: "Bootstrap",
    type: "Frontend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: axios,
    name: "Axios",
    type: "API",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: motion,
    name: "Motion",
    type: "Animation",
  },
];

export const educations = [
  {
    title: "Secondary School Certificate",
    college_name: "J.I.C Marapar, kushmhi bazaar",
    city_state: "Gorakhpur, Uttar Pradesh",
    icon: edu,
    iconBg: "#accbe1",
    points: [
      "Completed the Science and Math stream curriculum with distinction.",
      "Demonstrated strong analytical and problem-solving skills.",
      "Engaged in hands-on experiments and projects, fostering a deep understanding of scientific principles.",
    ],
  },
  {
    title: "Higher Secondary Certificate",
    college_name: "Maharana Pratap Girls Inter College, Civil lines",
    city_state: "Gorakhpur, Uttar Pradesh",
    icon: edu,
    iconBg: "#fbc3bc",
    points: [
      "Successfully completed the rigorous Science and Math stream curriculum.",
      "Conducted hands-on experiments, strengthening practical knowledge.",
      "Demonstrated strong analytical and problem-solving skills in Mathematics and Sciences.",
      "Engaged in independent research projects, showcasing a keen interest in the subjects.",
    ],
  },
  {
    title: "Frontend Developer",
    college_name: "M",
    icon: edu,
    iconBg: "#b7e4c7",
    points: [
        "Completed the comprehensive BCA program with a focus on computer science fundamentals.",
        "Successfully undertook practical projects, applying theoretical knowledge to real-world scenarios.",
        "Developed proficiency in programming languages such as Javascript, Python.",
        "Gained hands-on experience in database management, web development, and software engineering.",
        "Collaborated with peers on group projects, enhancing teamwork and communication skills.",
    ],
  },
];

export const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Code-B",
    icon: exp,
    iconBg: "#accbe1",
    date: "Sept 2021 - Mar 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "Pixsonik",
    icon: devActivity,
    iconBg: "#fbc3bc",
    date: "Mar 2022 - Feb 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Radix Electrosystems Pvt. Ltd",
    icon: webDev,
    iconBg: "#b7e4c7",
    date: "Mar 2023 - Jun 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "Amazon Price Tracker",
    description:
      "Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.",
    link: "https://github.com/adrianhajdin/pricewise",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Full Stack Threads Clone",
    description:
      'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
    link: "https://github.com/adrianhajdin/threads",
  },
  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "Car Finding App",
    description:
      "Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.",
    link: "https://github.com/adrianhajdin/project_next13_car_showcase",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "Full Stack Instagram Clone",
    description:
      "Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.",
    link: "https://github.com/adrianhajdin/social_media_app",
  },
  {
    iconUrl: estate,
    theme: "btn-back-black",
    name: "Real-Estate Application",
    description:
      "Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.",
    link: "https://github.com/adrianhajdin/projects_realestate",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    name: "AI Summarizer Application",
    description:
      "App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.",
    link: "https://github.com/adrianhajdin/project_ai_summarizer",
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/Khushboo-Singh03",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/khushboo-singh-46a65421a/",
  },
];
