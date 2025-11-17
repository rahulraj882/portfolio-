import type { PortfolioData } from '@/lib/types';

export const portfolioData: PortfolioData = {
  name: 'Rahul Raj',
  contact: {
    phone: '+91 8210722549',
    email: 'rahul.raj7112000@gmail.com',
    linkedin: 'https://linkedin.com/in/rahul-raj-9501b2191',
  },
  summary:
    'Software Developer with hands-on experience in React.js, JavaScript, REST APIs, Redux, and modern frontend architecture. Adept in Agile/Scrum workflows, version control, debugging, and building responsive interfaces. Strong CS foundation with a focus on clean code and maintainable UI development.',
  skills: {
    'Programming Languages': ['C++/C', 'Python', 'Java', 'SQL'],
    'Frontend Technologies': [
      'HTML',
      'CSS',
      'Figma',
      'JavaScript',
      'React.js',
      'Redux',
      'Tailwind CSS',
    ],
    Tools: ['Git', 'GitHub', 'Azure DevOps', 'Figma', 'MS Office'],
    'CS Fundamentals': [
      'Data Structures and Algorithms',
      'Object-Oriented Programming',
      'Database Management System',
    ],
  },
  certifications: [
    'Learn to code with AI',
    'Generative AI for everyone',
    'AI understanding basics',
  ],
  experience: [
    {
      company: 'Jio Platforms Limited',
      period: 'Jan 2024 – Present',
      role: 'Software Development Engineer 1',
      location: 'Mumbai, India',
      description: [
        'Led UI development for the People First’s Portal payroll module using React.js, improving billing and data-visualization workflows and reducing data retrieval time by 40%.',
        'Refactored 15,000+ lines of legacy code into modular, maintainable React components (87% reduction), improving delivery speed by 18% and team efficiency by 21%.',
        'Designed scalable REST API specifications for microservice communication in partnership with backend teams, improving system integration and decreasing downtime by 5%.',
        'Performed root cause analysis, troubleshooting, and bug fixing for high-priority production issues, improving stability and reducing user-impacting defects.',
        'Collaborated with backend teams to refine API contracts, optimize JSON payloads, standardize API response formats, and improve end-to-end data accuracy.',
        'Followed Agile methodologies while contributing to sprint planning, code reviews, and CI/CD pipelines in Azure DevOps, and collaborated with DevOps to resolve environment issues, improving staging reliability and reducing deployment downtime.',
      ],
    },
  ],
  projects: [
    {
      title: 'Food Ordering Website',
      technologies: 'React.js',
      link: 'https://github.com/Rahulraj711/Namaste-React',
      linkText: 'Link',
      description: [
        'Built a single-page food ordering application using React.js, Tailwind CSS, and REST APIs to fetch real-time restaurant/menu data, with reusable components, custom hooks, and optimized API handling.',
        'Improved overall UX by implementing Shimmer/Skeleton loaders, lazy loading, and search/filter logic, resulting in smoother navigation and 35% faster render performance.',
      ],
    },
    {
      title: 'Sorting Algorithm Visualizer',
      technologies: 'JavaScript',
      link: 'https://github.com/Rahulraj711/Sorting-visualizer',
      linkText: 'Link',
      description: [
        'Built an interactive sorting visualizer using JavaScript to animate major sorting algorithms, gaining hands-on understanding of algorithm complexity.',
      ],
    },
    {
      title: 'React counter app',
      technologies: 'React.js',
      link: 'https://github.com/Rahulraj711/Counter-App',
      linkText: 'Link',
      description: [
        'Developed a minimalist counter application in React, emphasizing state management, component reusability, and clean UI design.',
      ],
    },
    {
      title: 'Malware Detection Using Machine Learning',
      technologies: 'Python',
      link: 'https://github.com/Rahulraj711/Malware-detection',
      linkText: 'Source Code',
      description: [
        'Built a signature-based malware detection engine with improved pattern-matching logic.',
        'Implemented feature extraction, classification, and rule-based threat identification.',
      ],
    },
  ],
  education: {
    university: 'Vellore Institute of Technology',
    period: 'June 2019 – May 2023',
    degree: 'Bachelor of Technology - Electronics and Communication Engineering',
    gpa: '8.63',
    location: 'Chennai, India',
  },
};
