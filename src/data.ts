// Edit this file to change what the site shows. Empty strings are hidden.

export const site = {
  name: 'Qiniso Xulu',
  role: 'Junior Software Engineer',
  location: 'Johannesburg, South Africa',
  email: 'qiniso.nhlakanipho.xulu@gmail.com',
  github: 'https://github.com/qinisoxulu',
  linkedin: 'https://linkedin.com/in/qinisoxulu',
  lynxkitGithub: 'https://github.com/lynx-kit',
  vennor: 'https://vennor.co.za',
  cv: '/Qiniso_Xulu_CV.pdf',
  // Contact form: paste a Formspree or Web3Forms endpoint to have messages
  // delivered to your inbox from the page. Leave empty to open the visitor's
  // email app with the message filled in instead.
  formEndpoint: '',
};

export type Project = {
  slug: string;
  title: string;
  status: string;
  tags?: string[];
  image?: string;
  /** Draws the image on a dark tile (for logos with a transparent background). */
  imageTile?: boolean;
  when?: string;
  summary: string;
  details?: string[];
  note?: string;
  stack: string[];
  links: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    slug: 'lynxkit',
    title: 'Lynxkit',
    status: 'In progress',
    tags: ['Open source'],
    image: '/lynxkit-icon.png',
    summary:
      'An Expo-style toolkit for LynxJS. Install Lynx, then build and test native features such as notifications without writing any Kotlin: an auto-generated bridge connects your TypeScript to the native Android side. This is what I am working on now.',
    stack: ['LynxJS', 'TypeScript', 'Kotlin', 'npm'],
    links: [{ label: 'View on GitHub', href: 'https://github.com/lynx-kit' }],
  },
  {
    slug: 'vennor',
    title: 'Vennor',
    status: 'Live',
    image: '/vennor-logo.png',
    imageTile: true,
    when: 'Dec 2024 to Dec 2026',
    summary:
      'An AI study platform for South African students, built and deployed by me as founder and developer.',
    details: [
      'AI tutor, flashcards with spaced repetition, auto-marked practice exams and a study planner with Google Calendar sync.',
      'CI/CD pipelines on GitHub, with Lynx bundles hosted on AWS S3 and media on Cloudflare R2.',
      'Built to Google API data policy requirements.',
    ],
    note: 'AI-assisted: I used AI tools to help plan and build the frontend UI. The CI/CD and cloud setup are my own work.',
    stack: ['SolidJS', 'Kotlin', 'LynxJS', 'PostgreSQL', 'Docker', 'AWS S3', 'Cloudflare R2'],
    links: [{ label: 'Visit vennor.co.za', href: 'https://vennor.co.za' }],
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

export type Highlight = {
  /** Shown as a status pill when set, otherwise as plain text. */
  status?: string;
  label?: string;
  title: string;
  text: string;
  link: { label: string; href: string };
};

// The vertical list on the home page, in reading order.
export const highlights: Highlight[] = [
  {
    status: 'In progress',
    title: 'Lynxkit',
    text: 'An open source, Expo-style toolkit for LynxJS. Build and test native Android features such as notifications from TypeScript, with no Kotlin to write.',
    link: { label: 'Read about Lynxkit', href: '/projects' },
  },
  {
    status: 'Live',
    title: 'Vennor',
    text: 'An AI study platform for South African students, with a tutor, spaced-repetition flashcards, auto-marked practice exams and a study planner. I built it, deployed it and run it.',
    link: { label: 'Visit vennor.co.za', href: 'https://vennor.co.za' },
  },
  {
    label: 'Training',
    title: 'Software engineering at WeThinkCode_',
    text: 'Project-based Java and Python in Agile peer teams, using test-driven development, finished with a Pass with Distinction. I then stayed on as a peer mentor, reviewing first-year Python code.',
    link: { label: 'See every module', href: '/training' },
  },
  {
    status: 'In progress',
    title: 'Courses at Mecer Inter-Ed',
    text: 'Soft skills, introductory programming, HTML, JavaScript and CSS3, and Java Fundamentals so far, with more Java, DevOps and a system project to come.',
    link: { label: 'See the course table', href: '/training' },
  },
  {
    label: 'Shipping',
    title: 'CI/CD and cloud',
    text: 'Pipelines on GitHub and GitLab, Docker for packaging, and hosting on AWS S3 and Cloudflare R2.',
    link: { label: 'Technical skills', href: '/about' },
  },
  {
    label: 'Next',
    title: 'Looking for my first full-time role',
    text: 'A software engineering graduate programme or junior developer role, in South Africa or remote.',
    link: { label: 'Get in touch', href: '/contact' },
  },
];

export type TrainingRow = { label: string; items: string[] };
export type TrainingBlock = { title: string; credits: string; rows: TrainingRow[] };

// Mecer Inter-Ed: only courses that have finished are listed.
export const mecer = {
  intro:
    'Software development courses and certifications at Mecer Inter-Ed, running since September 2026. This table lists only the courses I have finished so far.',
  courses: [
    {
      course: 'Work Readiness: Soft Skills',
      code: '',
      when: '7 to 11 Sep 2026',
      covers: [
        'Effective time management',
        'Decision making',
        'Critical thinking',
        'Business etiquette and professionalism',
      ],
    },
    {
      course: 'Introduction to Programming',
      code: 'MS-55337',
      when: '14 to 25 Sep 2026',
      covers: ['Introductory programming'],
    },
    {
      course: 'Programming in HTML with JavaScript and CSS3',
      code: 'MS-55320',
      when: '28 Sep to 9 Oct 2026',
      covers: ['HTML', 'JavaScript', 'CSS3'],
    },
    {
      course: 'Introduction to Programming: Java Fundamentals',
      code: 'OCA',
      when: '12 to 30 Oct 2026',
      covers: ['Java fundamentals, on the Oracle Certified Associate (OCA) track'],
    },
  ],
};

// WeThinkCode_ final transcript (issued 6 Feb 2026), without personal identifiers or marks.
export const wtc = {
  facts: [
    ['Qualification', 'Occupational Certificate: Software Engineer (NQF Level 6, QCTO)'],
    ['Programme', '16 months, Johannesburg campus, 2024 cohort'],
    ['NQF credits', '242 acquired, against a minimum of 240'],
    ['Final outcome', 'Pass with Distinction, based on the overall assessment average on the first attempt'],
  ] as [string, string][],
  note: 'NQF credits are provisional until the QCTO EISA exam is passed and the NQF 6 certificate is issued.',
  blocks: [
    {
      title: 'Semester 1: Programming Fundamentals',
      credits: '43 of 43 credits',
      rows: [
        {
          label: 'Knowledge',
          items: [
            'Programming: introduction to programming, data structures and algorithms, logical flow, error handling',
            'Project management for software engineering: fundamentals of projects and of project management',
            'Software engineering mathematics: basic algebra, analytical geometry, calculus, exponents and logarithms, basic statistics and probability, equations and graphs, linear programming, inequalities',
          ],
        },
        { label: 'Practical', items: ['Documenting system design', 'Programming and deploying applications'] },
        { label: 'Workplace experience', items: ['Software design', 'Software development'] },
        {
          label: 'Assessments',
          items: [
            'Python fundamentals and problem solving (basic syntax)',
            'Python file handling and a random quote generator',
            "Python pattern drawing and Pascal's triangle",
            'Python lists, statistics and number patterns (data structures)',
            'Python consolidation: sequences, recursion and algorithms',
          ],
        },
      ],
    },
    {
      title: 'Semester 2: Object-Oriented Programming',
      credits: '42 of 42 credits',
      rows: [
        {
          label: 'Knowledge',
          items: [
            'Software engineering: systems analysis and design, software and system testing',
            'Programming: introduction to programming, data structures and algorithms, logical flow',
            'Project management for software engineering',
          ],
        },
        {
          label: 'Practical',
          items: [
            'Documenting system design',
            'Programming and deploying applications',
            "Testing and debugging source code to make sure the client's needs are met",
          ],
        },
        { label: 'Workplace experience', items: ['Software design', 'Software development'] },
        {
          label: 'Assessments',
          items: [
            'Java fundamentals and problem-solving consolidation',
            'Java OOP: encapsulation and money abstractions',
          ],
        },
      ],
    },
    {
      title: 'Semester 3: Brownfields',
      credits: '64 of 64 credits',
      rows: [
        {
          label: 'Knowledge',
          items: [
            'Software engineering: systems analysis and design, software and system testing, system deployment and integration, system management',
            'Database design and information systems: introduction to information systems, components of an information system, principles of database design',
          ],
        },
        {
          label: 'Practical',
          items: [
            'Documenting system design',
            'Designing and manipulating databases',
            'Programming and deploying applications',
            'Testing and debugging source code',
          ],
        },
        {
          label: 'Workplace experience',
          items: ['Software design', 'Database design and manipulation', 'Software development', 'Software testing'],
        },
      ],
    },
    {
      title: 'Semester 3: Web Development',
      credits: '49 of 49 credits',
      rows: [
        {
          label: 'Knowledge',
          items: [
            'Database design and information systems: components of an information system, principles of database design',
          ],
        },
        {
          label: 'Practical',
          items: [
            'Documenting system design',
            'Programming and deploying applications',
            'Testing and debugging source code',
          ],
        },
        {
          label: 'Workplace experience',
          items: ['Software design', 'Database design and manipulation', 'Software development', 'Software testing'],
        },
        {
          label: 'Assessments (Brownfields and Web Development)',
          items: [
            'Acceptance testing and build pipelines',
            'Acceptance testing and build pipelines, relational databases and separation of concerns',
            'Java encapsulation and BigInteger money modelling',
          ],
        },
      ],
    },
    {
      title: 'Semester 4: Cloud Computing',
      credits: '44 of 44 credits',
      rows: [
        {
          label: 'Knowledge',
          items: [
            'Software engineering: systems analysis and design',
            'Programming: error handling',
            'Database design and information systems: introduction to information systems',
            'Project management for software engineering',
          ],
        },
        { label: 'Practical', items: ['Documenting system design', 'Testing and debugging source code'] },
        { label: 'Workplace experience', items: ['Software design', 'Software development', 'Software testing'] },
        { label: 'Assessments (electives)', items: ['Formative assessment', 'Summative assessment', 'Capstone project'] },
      ],
    },
  ] as TrainingBlock[],
};

export type Entry = {
  when: string;
  title: string;
  place: string;
  points: string[];
};

export const education: Entry[] = [
  {
    when: 'Sep 2026 to present',
    title: 'Software development courses and certifications (in progress)',
    place: 'Mecer Inter-Ed',
    points: [
      'Finished so far: Work Readiness (soft skills), Introduction to Programming, Programming in HTML with JavaScript and CSS3, and Java Fundamentals.',
      'The full table is on the Training page.',
    ],
  },
  {
    when: 'Sep 2024 to Dec 2025',
    title: 'Software Engineering (completed 2025)',
    place: 'WeThinkCode_, Johannesburg',
    points: [
      'Project-based training in Java and Python, applying Agile delivery, test-driven development and full software lifecycles in peer teams.',
      'Subjects: Programming Fundamentals, Object-Oriented Programming, Brownfield Development, Web Development, Cloud Computing.',
    ],
  },
  {
    when: '2021 to 2023',
    title: 'BSc Computer Science',
    place: 'University of the Witwatersrand, Johannesburg',
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
    place: 'WeThinkCode_, Johannesburg',
    points: [
      "Reviewed first-year students' Python submissions through structured code reviews, reinforcing code quality, readability and sound structure.",
      'Coached junior engineers on debugging, problem decomposition and best practices.',
    ],
  },
  {
    when: 'Apr 2023 to Dec 2023',
    title: 'Technical Laboratory Assistant',
    place: 'University of the Witwatersrand, Johannesburg',
    points: [
      'Provided IT support and operations: managed lab access, maintained workstations, ran system updates and resolved hardware and software issues.',
      'Supported 3D printing and design work using Blender.',
    ],
  },
  {
    when: 'Feb 2022 to Jul 2022',
    title: 'Mathematics Tutor and Volunteer',
    place: 'Edukit (Sijabulile High School)',
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
