// gitprofile.config.js

const config = {
  github: {
    username: 'sagargoswami2001', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: True, // Forked projects will not be displayed if set to true.
      projects: ['sagargoswami2001', 'Python-Conditional-Statement-Programs', 'Simple-Web-Browser-Using-Python', 'Java-Lab-File-Programs', 'Love-Calculator-Using-Python', 'Python-Basic-Programs-2', 'School-Management-System-Using-Python', 'Credit-Card-Validator', 'Login-Form-Validation', 'Team-Section-Page', 'About-Us-Site-Page', 'Python-Turtle-Codes', 'C-Lab-File-Programs', 'Sign-Up-and-Login-Page', 'C-Programs', 'Calendar-in-C', 'Snake-Game', 'Cpp-Lab-File-Programs', 'Data-Structure-Lab-File-Programs', 'Rolling-Dice', 'Notification-Reminder', 'Tindog-Site', 'Java-Programs-For-Practice', 'CV-Sample-Using-HTML-And-CSS-Dark-Theme', 'CV-Sample-Using-HTML-And-CSS', 'Basic-CV-Sample-Using-HTML-And-CSS', 'Mouse-Using-Your-Eyes', 'Basic-Billing-Machine', 'Bitcoin-Mining', 'Social-Media-Button-Hover-Effect', '3D-Flip-Card', 'Simple-Blockchain', 'ATM-Machine-in-C', 'Java-Pattern-Programs', 'Python-Arrays-Programs', 'Dark-Mode-Toggle', 'Basic-Flipkart-Front-Page-Clone', 'Python-Basic-Programs-1', '100-Practice-Problems-in-Cpp', 'CGMA-Lab-File-Programs', 'Setup-Graphics.h-for-Visual-Studio-Code', 'How-Does-Bitcoin-Mining-Work', 'Snake-Water-Gun', 'Funny-Hack', 'Command-Line-Interface'], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'sagargoswami2001',
    twitter: 'Sagar_Goswami27',
    mastodon: '',
    facebook: '',
    instagram: 'sagar_goswami.2001',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // format: userid/username
    skype: '',
    telegram: 'sagargoswami2001',
    website: 'sagargoswami2001.github.io',
    phone: '9837876110',
    email: 'sagargoswami7417@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1go9alw5ynNfaoQCbedJbiRaT2yYRjnJe/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Git',
    'Github',
    'Github Actions',
    'C',
    'C++',
    'C#',
    'Python',
    'Blockchain',
    'HTML',
    'CSS',
    'JavaScript',
    'Jquery',
    'Bootstrap',
    'PHP',
    'Markdown',
    'Hugo',
    'Java',
    'Vim',
    'Linux',
    'Windows',
    'Bash',
    'MySQL',
    'SQLite',
    'Photoshop',
    'SVG',
    'Office-Suite',
  ],
  experiences: [
    {
      company: 'Jumpstart Blockchain',
      position: 'Technical Content Writer',
      from: 'March 2022',
      to: 'April 2022',
      companyLink: 'https://www.jumpstartblockchain.com/members/sagar-goswami',
    },
   /* {
      company: 'Company Name',
      position: 'Position',
      from: 'July 2019',
      to: 'August 2021',
      companyLink: 'https://example.com',
    }, */
  ],
  certifications: [
    {
      name: 'Blockchain Basics',
      body: 'University at Buffalo',
      year: 'Mar 2023',
      link: 'https://www.coursera.org/account/accomplishments/verify/97RXMVMFXLEN'
    },
    {
      name: 'Crash Course on Python',
      body: 'Google',
      year: 'Feb 2023',
      link: 'https://www.coursera.org/account/accomplishments/verify/Z43X5WJXR2UU'
    },
    {
      name: 'Introduction to Cybersecurity',
      body: 'Cisco',
      year: 'March 2023',
      link: 'https://www.credly.com/badges/c8caa3b7-9ff3-4d4d-82c0-595bf8cc8353/linked_in_profile'
    },
    {
      name: 'Version Control',
      body: 'Meta',
      year: 'Oct 2022',
      link: 'https://www.coursera.org/account/accomplishments/verify/RP59Q98BPMWV'
    },
    {
      name: 'Sales and CRM Overview',
      body: 'Salesforce',
      year: 'Jan 2023',
      link: 'https://www.coursera.org/account/accomplishments/verify/VPRYVB33AQPF'
    },
    {
      name: 'PCAP: Programming Essentials in Python',
      body: 'OpenEDG Python Institute',
      year: 'Mar 2022',
      link: 'https://id.cisco.com'
    },
  ],
  education: [
    {
      institution: 'Integrated Academy Of Management and Technology',
      degree: 'Bachelor of Computer Application',
      from: '2020',
      to: '2023',
    },
   /* {
      institution: 'Ch. Tara Chand Janta Inter College',
      degree: 'Intermediate',
      from: '2019',
      to: '2020',
    }, */
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Dressingnity',
      description:
        'A Dummy E-Commerce website',
      imageUrl: 'https://raw.githubusercontent.com/Prakash4844/Dressingnity-Ecommerce-Website/de36eb18936d18ca33ef3446d785017f04f6d62a/Images/SVG%20Samples/Dressingnity%20(LOGO-final).svg',
      link: 'https://dressingnity.rf.gd/',
    },
    {
      title: 'School Management System',
      description:
        'GUI Based School Management System Using the Tkinter, SQLite3, & TkCalender Libraries',
      imageUrl: '',
      link: 'https://github.com/sagargoswami2001/School-Management-System-Using-Python',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'Luxury',

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

// Optional Footer. Supports plain text or HTML.
//  footer: `Made with <a 
//      class="text-primary" href="https://github.com/arifszn/gitprofile"
//      target="_blank"
//      rel="noreferrer"
//    >GitProfile</a> and ❤️`,
};

export default config;
