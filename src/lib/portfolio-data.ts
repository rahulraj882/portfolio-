import type { PortfolioData } from '@/lib/types';

export const portfolioData: PortfolioData = {
  name: 'Rahul Raj',
  contact: {
    phone: '+91 8210722549',
    email: 'rahul.raj7112000@gmail.com',
    linkedin: 'https://linkedin.com/in/rahul-raj-9501b2191',
  },
  summary:
    'Software Engineer with hands-on experience building scalable, high-performance web applications using React.js, JavaScript and Node.js. Proven ability to optimize frontend performance, refactor large codebases, and deliver maintainable, reusable components in Agile/Scrum environments. Experienced in collaborating with cross-functional teams and integrating APIs.',
  skills: {
    'Frontend': ['React.js', 'Redux Toolkit', 'Tailwind CSS', 'HTML5', 'CSS3'],
    'Languages': ['JavaScript (ES6+)', 'TypeScript', 'C++', 'Python', 'Java', 'SQL'],
    'Backend & Data': ['Node.js', 'Express.js', 'PostgreSQL', 'REST APIs', 'JSON'],
    'Tools': ['Git', 'GitHub', 'Azure DevOps', 'Postman', 'VS Code'],
    'Testing': ['Jest', 'React Testing Library (RTL)', 'Integration Testing', 'Manual Testing'],
    'Practices': ['Performance Optimization', 'CI/CD', 'Agile/Scrum', 'Code Reviews', 'Data Structures & Algorithms', 'DBMS'],
  },
  certifications: [
    'Learn to code with AI',
    'Generative AI for everyone',
    'AI understanding basics',
  ],
  experience: [
    {
      company: 'Reliance Jio Platforms Limited',
      period: 'Jan 2024 – Present',
      role: 'Software Development Engineer 1',
      location: 'Navi Mumbai, India',
      description: [
        'Implemented a user authentication flow using React.js, enabling role-based portal access for Reliance employees and replacing a static email notification system with a dynamic, API-driven asset management interface.',
        'Built a unified search component in React.js that accepts multiple query parameters (serial number, employee code, domain ID) against a REST API, consolidating 4+ separate input fields into a single intelligent search bar and reducing user interaction overhead significantly.',
        'Implemented a CSV file upload feature using React.js with client-side parsing and validation, enabling bulk asset ingestion with fields including serial number, assigned user, manager, and cost, replacing manual one-by-one data entry and reducing admin effort substantially.',
        'Revamped the People First Portal payroll UI using React.js and Tailwind CSS, improving page load times by 40% and enhancing user interaction across 400k+ active employees.',
        'Refactored 15,000+ lines of legacy code into modular, reusable components, improving maintainability and accelerating feature delivery by 20%.',
        'Collaborated with backend teams to refine API contracts, optimize JSON payloads, standardize API response formats, and improve end-to-end data accuracy.',
        'Performed root cause analysis, troubleshooting, and bug fixing for high-priority production issues, improving stability and reducing user-impacting defects.',
        'Contributed to sprint planning, code reviews, and CI/CD pipelines in Azure DevOps while collaborating with DevOps to resolve environment issues, improving staging reliability and minimizing deployment downtime.',
      ],
    },
  ],
  projects: [
    {
      title: 'AI Movie Recommendation App',
      technologies: 'React.js, Redux Toolkit, Tailwind CSS, OpenAI API, TMDB REST API',
      link: 'https://github.com/rahulraj882',
      linkText: 'Source Code',
      description: [
        'Engineered a scalable movie recommendation platform using React.js with Redux Toolkit for global state management and Tailwind CSS for fully responsive UI design.',
        'Integrated OpenAI GPT API and TMDB REST APIs to generate personalized, natural language-based movie recommendations with optimized API handling and efficient state updates.',
        'Implemented reusable components, lazy loading, and shimmer UI patterns — achieving measurable improvements in perceived load performance and user experience.',
      ],
    },
    {
      title: 'Food Ordering App',
      technologies: 'React.js, Node.js, Tailwind CSS, REST APIs, Custom Hooks',
      link: 'https://food-ordering-app-chi-one.vercel.app/',
      linkText: 'Link',
      description: [
        'Built a production-quality food ordering application with real-time restaurant data fetched via REST APIs, reusable component architecture, and optimized API handling using custom hooks.',
        'Improved render performance by 10% through lazy loading and shimmer loaders, demonstrating hands-on expertise in frontend performance optimization.',
      ],
    },
    {
      title: 'Sorting Algorithm Visualizer',
      technologies: 'JavaScript',
      link: 'https://rahulraj882.github.io/sorting_visualizer.github.io/',
      linkText: 'Link',
      description: [
        'Built an interactive sorting visualizer using JavaScript to animate major sorting algorithms, gaining hands-on understanding of algorithm complexity.',
      ],
    },
    {
      title: 'Malware Detection Using Machine Learning',
      technologies: 'Python',
      link: 'https://github.com/rahulraj882/Malware-Detection-using-machine-learning',
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
    degree: 'Bachelor of Technology – Electronics and Communication Engineering',
    gpa: '8.63',
    location: 'Chennai, India',
  },
};
