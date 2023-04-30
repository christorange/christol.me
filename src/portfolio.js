const header = {
  // TODO
  homepage: 'https://rajshekhar26.github.io/cleanfolio',
  title: '',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Chenfei Yu',
  role: 'Student 🧑🏻‍🎓, web developer 🧑🏻‍💻 ',
  description:
    '',
  social: {
    linkedin: 'https://www.linkedin.com/in/christol-yu/',
    github: 'https://github.com/christorange',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'OpenRead',
    description:
      'Academic productivity tool for paper searching, reading and managing. Converts pdf paper into a  better layout, with AI enhancement for paper explanation, summary and translation',
    stack: [],
    livePreview: 'https://openread.academy',
  },
  {
    name: 'Rxcellent',
    description:
      'Online pharmacy web app, implements prescription generating and retrieving, separated purchasing paths for prescribed and OTC medications.',
    stack: ['TypeScript', 'React', 'Node.js', 'Express', 'MongoDB'],
    sourceCode: 'https://github.com/christorange/rxcellent',

  },
  // {
  //   name: 'QC-CNN',
  //   description:
  //     'Quantum-classical hybrid convolutional neural network for classical image classification.',
  //   stack: ['Python', 'PyTorch', 'PennyLane'],
  //   sourceCode: 'https://github.com/christorange/QC-CNN'
  // },
  {
    name: 'VerticalFox',
    description: 'Firefox theme with Edge like auto-hide vertical tab bar and minimalism design. Includes light and dark theme, supports MacOS and Windows. ',
    stack: [],
    sourceCode: 'https://github.com/christorange/VerticalFox'
  }
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Node.js',
  'Express',
  'Sass',
  'TailwindCSS',
  'Figma',
  'Java',
  'Python',
  'PyTorch'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'christol.yu@outlook.com',
}

export { header, about, projects, skills, contact }
