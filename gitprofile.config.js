// gitprofile.config.js

const config = {
  github: {
    username: 'Hasan-446', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 8, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'mahmudul020',
    twitter: '',
    facebook: '',
    instagram: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // format: userid/username
    website: '',
    phone: '01521566438',
    email: 'hasanmahmudul020@gmail.com',
  },
  resume: {
    fileUrl: 'Mahmudul-Hasan-Resume.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Javascript',
    'React.js',
    'Python',
    'Html5',
    'Css3',
    'Bootstrap',
    'Material UI',
    'Firebase',
    'Jquery',
    'Tailwind Css',
    'Node.js',
    'Flask',
    'MongoDB',
    'SQL',
    'Express.js',
    'Next.js',
    'sanity.io',
    'Git',
    'Github',
    'npm',
    'Figma',
  ],
  experiences: [],
  education: [
    {
      institution: 'Daffodil International University',
      degree: 'B.sc in Computing & information System',
      from: '2019',
      to: '2023',
    },
    {
      institution: 'Dhaka College',
      degree: 'H.S.C major in Science',
      from: '2016',
      to: '2018',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {},
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'business',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },
};

export default config;
