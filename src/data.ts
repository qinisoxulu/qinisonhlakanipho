// Edit this file to change what the site shows. Empty strings are hidden.

export const site = {
  name: 'Qiniso Xulu',
  role: 'Junior Software Engineer',
  location: 'Johannesburg, South Africa',
  email: 'qiniso.nhlakanipho.xulu@gmail.com',
  github: 'https://github.com/qinisoxulu',
  linkedin: 'https://linkedin.com/in/qinisoxulu',
  lynxkitGithub: 'https://github.com/lynx-kit',
  lynxkitNpm: 'https://www.npmjs.com/org/lynx-kit',
  vennor: 'https://vennor.co.za',
  mecer: 'https://mecerintered.co.za/',
  cv: '/Qiniso_Xulu_CV.pdf',
  // Contact form: paste a Formspree or Web3Forms endpoint to have messages
  // delivered to your inbox from the page. Leave empty to open the visitor's
  // email app with the message filled in instead.
  formEndpoint: '',
};

export type Project = {
  slug: string;
  title: string;
  image: string;
  imageBg?: string;
  urls: { label: string; href: string }[];
  summary: string;
  details?: string[];
  note: string;
  stack: string[];
};

export const projects: Project[] = [
  {
    slug: 'lynxkit',
    title: 'Lynxkit',
    image: '/lynxkit-icon.png',
    urls: [
      { label: 'github.com/lynx-kit', href: 'https://github.com/lynx-kit' },
      { label: 'npmjs.com/org/lynx-kit', href: 'https://www.npmjs.com/org/lynx-kit' },
    ],
    summary:
      'An open source, Expo-style toolkit for LynxJS. Install Lynx, then build and test native features such as notifications without writing any Kotlin: an auto-generated bridge connects your TypeScript to the native Android side. This is what I am working on now.',
    note: 'AI-assisted: I use AI tools for planning and to help with parts of the development.',
    stack: ['LynxJS', 'TypeScript', 'Kotlin', 'npm'],
  },
  {
    slug: 'vennor',
    title: 'Vennor',
    image: '/vennor-logo.png',
    imageBg: 'white',
    urls: [{ label: 'vennor.co.za', href: 'https://vennor.co.za' }],
    summary:
      'An AI study platform for South African students, built and deployed by me as founder and developer (Dec 2024 to Dec 2026).',
    details: [
      'AI tutor, flashcards with spaced repetition, auto-marked practice exams and a study planner with Google Calendar sync.',
      'CI/CD pipelines on GitHub, with Lynx bundles hosted on AWS S3 and media on Cloudflare R2.',
      'Built to Google API data policy requirements.',
    ],
    note: 'AI-assisted: I used AI tools to help plan and build the frontend UI.',
    stack: ['SolidJS', 'Kotlin', 'LynxJS', 'PostgreSQL', 'Docker', 'AWS S3', 'Cloudflare R2'],
  },
];

export type GlanceItem = {
  label: string;
  title: string;
  text: string;
  link: { text: string; href: string };
  skills: string[];
};

export const glance: GlanceItem[] = [
  {
    label: 'In progress',
    title: 'Lynxkit',
    text: 'An open source, Expo-style toolkit for LynxJS. Build and test native Android features such as notifications from TypeScript, with no Kotlin to write.',
    link: { text: 'Read about Lynxkit', href: '#projects' },
    skills: ['LynxJS', 'TypeScript', 'Kotlin', 'npm'],
  },
  {
    label: 'Live',
    title: 'Vennor',
    text: 'An AI study platform for South African students, with a tutor, spaced-repetition flashcards, auto-marked practice exams and a study planner. I built it, deployed it and run it.',
    link: { text: 'Visit vennor.co.za', href: 'https://vennor.co.za/' },
    skills: ['SolidJS', 'Kotlin', 'LynxJS', 'PostgreSQL'],
  },
  {
    label: 'Training',
    title: 'Software engineering at WeThinkCode_',
    text: 'Project-based Java and Python in Agile peer teams, using test-driven development, finished with a Pass with Distinction. I then stayed on as a peer mentor, reviewing first-year Python code.',
    link: { text: 'See my education', href: '#education' },
    skills: ['Java', 'Python', 'TDD', 'Agile'],
  },
  {
    label: 'In progress',
    title: 'Courses at Mecer Inter-Ed',
    text: 'Soft skills, introductory programming, HTML, JavaScript and CSS3, and Java Fundamentals so far, with more Java, DevOps and a system project to come.',
    link: { text: 'See my education', href: '#education' },
    skills: ['Java', 'HTML', 'CSS3', 'JavaScript'],
  },
  {
    label: 'Shipping',
    title: 'CI/CD and cloud',
    text: 'Pipelines on GitHub and GitLab, Docker for packaging, and hosting on AWS S3 and Cloudflare R2.',
    link: { text: 'Technical skills', href: '#skills' },
    skills: ['GitHub', 'GitLab', 'Docker', 'AWS S3', 'Cloudflare R2'],
  },
  {
    label: 'Next',
    title: 'Looking for my first full-time role',
    text: 'A software engineering graduate programme or junior developer role, in South Africa or remote.',
    link: { text: 'Get in touch', href: '#contact' },
    skills: [],
  },
];

export const skills = [
  {
    label: 'Languages',
    items: ['Java', 'Python', 'Kotlin', 'JavaScript', 'TypeScript', 'PHP', 'SQL', 'C++', 'HTML5', 'CSS3'],
  },
  {
    label: 'Frameworks and APIs',
    items: ['React', 'SolidJS', 'LynxJS', 'Node.js', 'REST APIs'],
  },
  { label: 'Databases', items: ['PostgreSQL', 'SQL'] },
  {
    label: 'Tools and DevOps',
    items: ['Git', 'GitHub', 'GitLab', 'CI/CD pipelines', 'Docker', 'AWS (S3)', 'Cloudflare R2'],
  },
  {
    label: 'Practices',
    items: [
      'Object-Oriented Programming',
      'Data Structures and Algorithms',
      'Test-Driven Development',
      'Agile',
      'Code Reviews',
    ],
  },
];

export type Entry = {
  when: string;
  title: string;
  place: string;
  location?: string;
  url?: string;
  logo?: string;
  logoFill?: boolean;
  points: string[];
};

export const education: Entry[] = [
  {
    when: 'Sep 2026 to present',
    title: 'Software development courses and certifications (in progress)',
    place: 'Mecer Inter-Ed',
    url: 'https://mecerintered.co.za/',
    logo: '/logo-mecer.png',
    points: [
      'Finished so far: Work Readiness (soft skills), Introduction to Programming, Programming in HTML with JavaScript and CSS3, and Java Fundamentals.',
    ],
  },
  {
    when: 'Sep 2024 to Dec 2025',
    title: 'Software Engineering (completed 2025)',
    place: 'WeThinkCode_',
    location: 'Johannesburg',
    url: 'https://wethinkcode.co.za/',
    logo: '/logo-wethinkcode.png',
    points: [
      'Project-based training in Java and Python, applying Agile delivery, test-driven development and full software lifecycles in peer teams.',
      'Subjects: Programming Fundamentals, Object-Oriented Programming, Brownfield Development, Web Development, Cloud Computing.',
    ],
  },
  {
    when: '2021 to 2023',
    title: 'BSc Computer Science',
    place: 'University of the Witwatersrand',
    location: 'Johannesburg',
    url: 'https://www.wits.ac.za/',
    logo: '/logo-wits.jpg',
    logoFill: true,
    points: [
      'General Science (2021), then Computer Science (2022 to 2023). Studies were discontinued in 2023 following the withdrawal of NSFAS funding.',
      'Coursework: Data Structures and Algorithms, Analysis of Algorithms, Database Fundamentals, Computer Networks, Mobile Computing, Computer Organisation.',
    ],
  },
];

export const experience: Entry[] = [
  {
    when: 'Sep 2025 to Jan 2026',
    title: 'Peer Mentor',
    place: 'WeThinkCode_',
    location: 'Johannesburg',
    url: 'https://wethinkcode.co.za/',
    logo: '/logo-wethinkcode.png',
    points: [
      "Reviewed first-year students' Python submissions through structured code reviews, reinforcing code quality, readability and sound structure.",
      'Coached junior engineers on debugging, problem decomposition and best practices.',
    ],
  },
  {
    when: 'Apr 2023 to Dec 2023',
    title: 'Technical Laboratory Assistant',
    place: 'University of the Witwatersrand',
    location: 'Johannesburg',
    url: 'https://www.wits.ac.za/',
    logo: '/logo-wits.jpg',
    logoFill: true,
    points: [
      'Provided IT support and operations: managed lab access, maintained workstations, ran system updates and resolved hardware and software issues.',
      'Supported 3D printing and design work using Blender.',
    ],
  },
  {
    when: 'Feb 2022 to Jul 2022',
    title: 'Mathematics Tutor and Volunteer',
    place: 'Edukit (Sijabulile High School)',
    logo: '/logo-edukit.png',
    points: ['Tutored Grade 10 and 11 learners in core mathematics.'],
  },
];

export const certifications = [
  'AWS Educate Training Badges: Introduction to Cloud 101 (Nov 2025); Getting Started with Cloud Ops, Databases, Security, Networking, Storage, Serverless and Compute; Machine Learning Foundations; Introduction to Generative AI',
  'IBM: Python for Data Science; Data Analysis Using Python; Data Visualization Using Python; Applied Data Science with Python (Level 2)',
  'WeThinkCode_: Generative AI (Sep 2025)',
];

export const summary =
  'Junior software engineer and WeThinkCode_ graduate with a strong foundation in Java, Python and object-oriented programming, and hands-on experience working in Agile teams with version control and CI/CD pipelines. Analytical and detail-oriented, with a collaborative mindset, strong verbal and written communication, and high learning agility. Practical IT support and operations experience from a university technical laboratory role. Seeking a software engineering graduate programme or junior developer role where I can contribute to a team, keep learning and grow.';
