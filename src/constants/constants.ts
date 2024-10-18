
import shoppingProject from '../assets/shopping2-gif.gif'
import webTemplatesProject from '../assets/develope-gif.gif'
import ecommerceProject from '../assets/ecommerce-develope.gif'
import gymProject from '../assets/gym-gif.gif'
import yogaProject from '../assets/yoga.gif'

const backgroundImageUrl = 'https://images.wallpaperscraft.com/image/single/man_photographer_roof_146991_3840x2400.jpg';


// Enter here your first and last name
const name = {
  firstname: 'Jonathan',
  lastname: 'Dominion',
  // Enter as url a link where your resume can be downloaded ( dropbox, OneDrive, ect )
  url: 'https://www.google.com',
};

// Display your job title or skills or whatever you want in the typewriter
const typeWriterText = [
  'Photographer...',
  'UX/UI designer...',
  'Cool dude...'
];

// Social media profiles buttons
const socialProfiles = [
  {
    name: 'LinkedIn',
    icon: 'lni lni-linkedin',
    url: 'https://www.linkedin.com/in/christoph-pfrommer',
  },
  {
    name: 'GitHub',
    icon: 'lni lni-github',
    url: 'https://github.com/Pfrommer1982',
  },
  //   Add more social profiles here, it will automatically add more link-buttons with icons (if available)
  //   {
  //     name: 'Twitter',
  //     icon: 'lni lni-twitter',
  //     url: 'https://twitter.com/your-username',
  //   },
  //   {
  //     name: 'Facebook',
  //     icon: 'lni lni-facebook',
  //     url: 'https://facebook.com/your-username',
  //   },
];

//////////////////////////////////////// ** CONTENT SECTION **//////////////////////////////////////////////////


const categories = [
  {
    name: 'Web Development',
    icon: 'lni lni-code',
    title: 'Photography',
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas diam lorem, tempus at dapibus vitae, vehicula sit amet dui. Fusce at libero id massa ornare molestie sed eu tellus.",
    skills: [
      {
        icon: 'lni lni-camera',
        title: 'HTML5',
      },
      {
        icon: 'lni lni-certificate',
        title: 'CSS3',
      },
      {
        icon: 'lni lni-instagram',
        title: 'JavaScript',
      },
    ],
  },
  {
    name: 'Software',
    icon: 'lni lni-code',
    title: 'Software',
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas diam lorem, tempus at dapibus vitae, vehicula sit amet dui. Fusce at libero id massa ornare molestie sed eu tellus.",
    skills: [
      {
        icon: 'lni lni-adobe',
        title: 'adobe',
      },
      {
        icon: 'lni lni-code',
        title: 'Code',
      },
      {
        icon: 'lni lni-sketch',
        title: 'Sketch'
      },


    ],
  },
  {
    name: 'brands',
    icon: 'lni lni-code',
    title: 'Brands',
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas diam lorem, tempus at dapibus vitae, vehicula sit amet dui. Fusce at libero id massa ornare molestie sed eu tellus.",
    skills: [
      {
        icon: 'lni lni-pinterest',
        title: 'Pinterest',
      },
      {
        icon: 'lni lni-crop',
        title: 'Crop',
      },

    ],
  },

];

// Here you can give in your achiements in a number counter animation
const achievements = [
  { word: 'Clients', value: 10, unit: '+' },
  { word: 'Projects', value: 50, unit: '+' },
  { word: 'Core Language', value: 10, unit: '+' },
  { word: 'experience', value: 4, unit: ' years' },
];



// If you already have some projects, fill the url 
const projectData = [
  {
    className: "odd",
    projectTitle: "Online Shopping Platform",
    projectDesc: "An online shopping experience with secure payment options, product filtering, and easy-to-use cart management features.",
    projectLink: "#",
    deployedProjectLink: "https://bookmyshop.netlify.app/",
    projectImg:shoppingProject
  },
  {
    className: "even",
    projectTitle: "E-Commerce Platform",
    projectDesc: "A feature-rich e-commerce platform offering users a seamless shopping experience with real-time inventory updates.",
      projectLink: "#",
    deployedProjectLink: "#",
    projectImg: ecommerceProject
  },
  {
    className: "odd",
    projectTitle: "Yoga Website",
    projectDesc: "Transform your living room into a personal yoga studio with this app, offering guided sessions for all skill levels.",
    projectLink: "#",
    deployedProjectLink: "#",
    projectImg: yogaProject
  },
  {
    className: "even",
    projectTitle: "Gym App",
    projectDesc: "A fitness app that allows users to create personalized workout plans and track their fitness progress over time.",
    projectLink: "#",
    deployedProjectLink: "#",
    projectImg: gymProject
  },
  {
    className: "odd",
    projectTitle: "Web Templates Collection",
    projectDesc: "A versatile collection of customizable templates for developers, ranging from portfolios to e-commerce sites.",
    projectLink: "#",
    deployedProjectLink: "#",
    projectImg: webTemplatesProject
  },
];


// You can tell something about yourself in the infotext.
const aboutMeText = {
  infotext: `Hi there, I'm Jonathan. With 20 years of experience as photographer Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas diam lorem, tempus at dapibus vitae, vehicula sit amet dui. Fusce at libero id massa ornare molestie sed eu tellus.
    `,
  power_slogan: `Lorem ipsum dolor sit amet`,
};

// For contact form: You need to make an account on emailjs.com
// There you can choose a free tier ( 200 emails per month )
// In your account settings you can see 'serviceID, templateID and userID. 
// Fill them here and it will automatically work. 

const emailConfig = {
  serviceID: 'service_XXXXXXX',
  templateID: 'template_XXXXXXXX',
  userID: 'XXXXXXXXXXXX',
};

export {
  backgroundImageUrl,
  name,
  typeWriterText,
  socialProfiles,
  categories,
  achievements,
  projectData,
  aboutMeText,
  emailConfig,
};
