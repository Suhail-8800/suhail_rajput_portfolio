/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Suhail's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Suhail Rajput Portfolio",
    type: "website",
    url: "",
  },
};

//Home Page
const greeting = {
  title: "Suhail Rajput",
  logo_name: "SuhailRajput",
  nickname: "Software Developer",
  subTitle:
    "A passionate builder who enjoys creating end-to-end scalable systems and digital products that drive innovation and solve real-world challenges.",
  resumeLink: "",
  portfolio_repository: "https://github.com/Suhail-8800/suhail_portfolio.git",
  githubProfile: "https://github.com/Suhail-8800",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/Suhail-8800",
  // linkedin: "https://www.linkedin.com/in/suhail-rajput-64158722b/",
  // gmail: "suhailrajput325@gmail.com",
  // facebook: "https://www.facebook.com/suhail.rajput.31924",
  // twitter: "https://x.com/SuhailR75217155",
  // instagram: "https://www.instagram.com/suhailrajput1/"

  {
    name: "Github",
    link: "https://github.com/Suhail-8800",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/suhail-rajput-64158722b/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/@suhailrajput8970",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:suhailrajput325@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X-Twitter",
    link: "https://twitter.com/SuhailR75217155",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/suhail.rajput.31924",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/suhailrajput1/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive and modern web applications using React, HTML, CSS, and JavaScript",
        "⚡ Developing scalable backend services and REST APIs using Node.js, Express, and Java/Spring Boot",
        "⚡ Deploying and managing full-stack applications using MongoDB, AWS, and cloud platforms",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "logos:java",
          style: {
            color: "#f89820",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#F05032",
          },
        },
      ],
    },

    {
      title: "Cloud & Deployment",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Deploying and hosting full-stack web applications on cloud platforms",
        "⚡ Setting up backend servers and integrating databases on virtual machines",
        "⚡ Managing application deployment and updates using cloud services and version control",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },

        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Building AI and Machine Learning solutions for real-world applications",
        "⚡ Experience working on Computer Vision and data-driven projects",
        "⚡ Integrating Machine Learning and AI features into scalable software systems",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "OpenCV",
          fontAwesomeClassname: "simple-icons:opencv",
          style: {
            color: "#5C3EE8",
          },
        },
        {
          skillName: "TensorFlow",
          fontAwesomeClassname: "simple-icons:tensorflow",
          style: {
            color: "#FF6F00",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/u/Suhail_Rajput/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/profile/suhailrajput325",
    },

    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/suhailrajput",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Vellore Institute of Technology",
      subtitle: "B.Tech. in Computer Science & Engineering (CGPA: 8.45/10)",
      logo_path: "vit_logo.png",
      alt_name: "VIT Bhopal",
      duration: "2022 - 2026",
      descriptions: [
        "⚡ Studied core computer science subjects including Data Structures, Algorithms, DBMS, Operating Systems, and Computer Networks.",
        "⚡ Gained practical experience through projects in Full Stack Development, Artificial Intelligence, and Machine Learning.",
        "⚡ Actively building real-world applications and strengthening problem-solving and software engineering skills.",
      ],
      website_link: "https://vitbhopal.ac.in/",
    },
    {
      title: "DAV Public School, Baghpat",
      subtitle: "Senior Secondary Education (Class XII - Percentage: 92%) ",
      logo_path: "dav_logo.png",
      alt_name: "DAV Public School, Baghpat",
      duration: "2020 - 2021",
      descriptions: [
        "⚡ Completed senior secondary education with focus on Science and Mathematics.",
        "⚡ Built strong foundation in analytical thinking and problem-solving skills.",
        "⚡ Actively participated in academic and technical learning activities.",
      ],
      website_link: "https://davcmc.net.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "AWS Solution Architect",
      subtitle: "- Ethnus",
      logo_path: "ethnus_codemithra_aws_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1b1RCSCtG6F94hMqh0yWEPfbweTKPFYZh/view?usp=sharing",
      alt_name: "Ethnus",
      color_code: "#8C151599",
    },
    {
      title: "Marketing Analytics",
      subtitle: "- NPTEL",
      logo_path: "nptel_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1LshBkmeWi_Jpeqsw5U4VxaCShm51WY6T/view?usp=sharing",
      alt_name: "NPTEL",
      color_code: "#0C9D5899",
    },
    {
      title: "Machine Learning with Python",
      subtitle: "- IBM",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/AQC9BYBSTNWM",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "AWS Academy Graduate - AWS Academy Cloud Foundations",
      subtitle: "- ETHNUS",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1A-AKv4M01YPc3iVYO4jO0LPAfkCU4c0d/view?usp=sharing",
      alt_name: "ETHNUS",
      color_code: "#D83B0199",
    },
    {
      title: "MERN Full Stack",
      subtitle: "- ETHNUS",
      logo_path: "ethnus_codemithra_mern_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1oJd2GrwvYcvoojMdGHY8GDMrjsxHxDVs/view?usp=sharing",
      alt_name: "ETHNUS",
      color_code: "#1F70C199",
    },
    {
      title: "Python Essentials",
      subtitle: "- Vityarthi",
      logo_path: "vitYarthi_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1vSq1dK_Isne5PwfZOWwsS10oIZ-5dzjP/view?usp=sharing",
      alt_name: "vitYarthi",
      color_code: "#0C9D5899",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Freelancing, Internship & Project Experience",
  description:
    "Computer Science student specializing in backend systems, full-stack architecture, and AI-driven applications. Experienced in building scalable software solutions, integrating cloud services, and developing real-time systems.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Freelancing & Internship Experience",
      work: true,
      experiences: [
        {
          title: "Freelance Developer",
          company: "Alignerr",
          company_url: "https://www.alignerr.com/",
          logo_path: "alignerr_logo.png",
          duration: "2025 - Present",
          location: "Remote",
          description:
            "Designing and delivering backend and full-stack solutions for client projects, focusing on scalable APIs, optimized database interactions, and system reliability improvements.",
          color: "#000000",
        },
        {
          title: "Data Analytics Intern",
          company: "Earnwell",
          company_url: "https://earnwell.co.in/",
          logo_path: "earnwell_logo.png",
          duration: "2024",
          location: "Remote",
          description:
            "Performed financial data analysis and implemented structured data processing workflows to derive actionable insights using analytics and reporting tools.",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Key Project Experience",
      experiences: [
        {
          title: "Full Stack Developer",
          company: "Boutique Travel Planning Portal",
          company_url: "https://boutique-travel-portal-suhaill.vercel.app/",
          logo_path: "boutique_travel_logo.png",
          duration: "2025",
          location: "Full Stack Web Application",
          description:
            "Architected and implemented a full-stack travel platform using React, Node.js, and MongoDB, enabling dynamic itinerary generation, booking workflows, and secure REST API integrations.",
          color: "#000000",
        },
        {
          title: "AI Developer",
          company: "Real-Time Sign Language Detector",
          company_url:
            "https://github.com/Suhail-8800/Real-Time-Sign-Language-Detector.git",
          logo_path: "real_time_sign_language_detector_logo.png",
          duration: "2025",
          location: "Computer Vision & Deep Learning Project",
          description:
            "Developed a real-time sign language recognition system using OpenCV and machine learning techniques, optimizing frame processing for responsive gesture detection.",
          color: "#ee3c26",
        },
        {
          title: "System Developer",
          company: "System Resource Monitor",
          company_url: "https://github.com/Suhail-8800/System-Resource-Monitor",
          logo_path: "system_resource_management_logo.png",
          duration: "2025",
          location: "System Programming Project",
          description:
            "Built a lightweight terminal-based system monitoring tool in C to track CPU, memory, and disk utilization in real time, emphasizing performance efficiency and low resource overhead.",
          color: "#0071C5",
        },
        {
          title: "Backend Developer",
          company: "Webhook SQL Problem Solver",
          company_url: "https://github.com/Suhail-8800/bajajFinserv",
          logo_path: "QueryNexus_logo.png",
          duration: "2025",
          location: "Backend Automation Project",
          description:
            "Engineered backend logic to process webhook requests and automate SQL-based problem solving, focusing on optimized query execution and API-driven workflow automation.",
          color: "#0071C5",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Here are some of the real-world applications and systems I have built using full-stack development, AI, and backend technologies to solve practical problems.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Research & Publications",
  description:
    "Research works and papers currently under review and ongoing contributions in applied Artificial Intelligence.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "deepfake-detection",
      name: "DeepFake Detection Using Deep Learning",
      createdAt: "2025-01-01T00:00:00Z",
      description:
        "Research paper submitted to MDPI journal and currently under peer review.",
      url: "#",
    },
    {
      id: "sign-language-research",
      name: "Real-Time Sign Language Detection System",
      createdAt: "2025-02-01T00:00:00Z",
      description:
        "Ongoing research work focusing on real-time sign language recognition using Computer Vision and Machine Learning techniques.",
      url: "#",
    },
  ],
};

const projects = {
  data: [
    {
      id: 1,
      name: "Boutique Travel Planning Portal",
      description:
        "Full-stack travel platform with dynamic itinerary generation, booking workflows, and secure REST APIs.",
      html_url: "https://boutique-travel-portal-suhaill.vercel.app/",
      stargazers_count: 0,
      forks_count: 0,
      language: "JavaScript",
      topics: ["React", "Node.js", "MongoDB", "Full-Stack"],
      owner: {
        login: "Suhail-8800",
        avatar_url: "",
      },
    },
    {
      id: 2,
      name: "Real-Time Sign Language Detector",
      description:
        "Real-time gesture recognition system using OpenCV and Machine Learning.",
      html_url:
        "https://github.com/Suhail-8800/Real-Time-Sign-Language-Detector",
      stargazers_count: 0,
      forks_count: 0,
      language: "Python",
      topics: ["Python", "OpenCV", "Machine Learning"],
      owner: {
        login: "Suhail-8800",
        avatar_url: "",
      },
    },
    {
      id: 3,
      name: "System Resource Monitor",
      description: "Lightweight terminal-based monitoring tool built in C.",
      html_url: "https://github.com/Suhail-8800/System-Resource-Monitor",
      stargazers_count: 0,
      forks_count: 0,
      language: "C",
      topics: ["C", "Linux", "System Programming"],
      owner: {
        login: "Suhail-8800",
        avatar_url: "",
      },
    },
    {
      id: 4,
      name: "Webhook SQL Problem Solver",
      description:
        "Backend automation system handling webhook triggers and SQL execution.",
      html_url: "https://github.com/Suhail-8800/bajajFinserv",
      stargazers_count: 0,
      forks_count: 0,
      language: "Node.js",
      topics: ["Node.js", "SQL", "Backend"],
      owner: {
        login: "Suhail-8800",
        avatar_url: "",
      },
    },
  ],
};

//Highlights Page
const engineeringHighlights = {
  title: "Engineering Highlights",
  subtitle:
    "Selected technical decisions and architecture improvements demonstrating backend, systems, and AI engineering depth.",
  highlights: [
    {
      title: "Optimized Webhook Processing Pipeline",
      project: "Webhook SQL Problem Solver",
      description:
        "Redesigned backend request validation and SQL execution flow to reduce redundant database queries.",
      impact:
        "Improved request efficiency and minimized database overhead under repeated webhook triggers.",
      tech: ["Node.js", "Express", "SQL", "REST APIs"],
    },
    {
      title: "Lightweight System Monitoring Architecture",
      project: "System Resource Monitor",
      description:
        "Implemented optimized system call sampling in C to track CPU, memory, and disk usage in real time.",
      impact:
        "Maintained performance monitoring with minimal runtime overhead.",
      tech: ["C", "Linux System Calls", "Memory Management"],
    },
    {
      title: "Real-Time Inference Optimization",
      project: "Sign Language Detector",
      description:
        "Structured preprocessing and prediction pipeline for stable real-time video-based ML inference.",
      impact: "Achieved smooth live detection while preserving model accuracy.",
      tech: ["Python", "OpenCV", "Machine Learning"],
    },
    {
      title: "Scalable Full Stack Deployment Architecture",
      project: "Boutique Travel Portal",
      description:
        "Designed API routing and database schema optimization for dynamic booking workflows.",
      impact:
        "Enabled scalable handling of real-time user interactions and booking logic.",
      tech: ["React", "Node.js", "MongoDB", "AWS"],
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "suhail_profile.jpg",
    description:
      "I am open to internships, full-time opportunities, and freelance collaborations related to Full Stack Development, Backend Systems, and AI-powered applications. Feel free to reach out, and I will respond as soon as possible.",
  },

  addressSection: {
    title: "Address",
    subtitle: "Baghpat, Uttar Pradesh, India",
    locality: "Baghpat",
    country: "India",
    region: "Uttar Pradesh",
    postalCode: "250609",
    streetAddress: "Mohalla Deshraj, Baghpat",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/QWpWm6yFaz9P32Lw5",
  },
  phoneSection: {
    title: "Contact",
    subtitle: "+91 9368056263",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
  engineeringHighlights,
  projects,
};
