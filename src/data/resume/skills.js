// TODO: Add Athletic Skills, Office Skills,
// Data Engineering, Data Science, ML Engineering, ... ?

const skills = [
  {
    title: 'Javascript',
    competency: 4,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'Node.JS',
    competency: 3,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'React',
    competency: 3,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Bash',
    competency: 2,
    category: ['Tools', 'Languages'],
  },
  {
    title: 'Amazon Web Services',
    competency: 2,
    category: ['Web Development', 'Tools'],
  },
  {
    title: 'MongoDB',
    competency: 4,
    category: ['Web Development', 'Databases'],
  },

  {
    title: 'PostgreSQL/SQLite3/SQL',
    competency: 4,
    category: ['Web Development', 'Databases', 'Languages'],
  },

  {
    title: 'Data Mining',
    competency: 3,
    category: ['Data Science'],
  },


  {
    title: 'Flask/Django',
    competency: 4,
    category: ['Web Development', 'Python'],
  },
  {
    title: 'Git',
    competency: 4,
    category: ['Tools'],
  },

  {
    title: 'Azure services',
    competency: 3,
    category: ['Tools', 'Web Development'],
  },
  {
    title: 'Numpy',
    competency: 4,
    category: ['Data Science', 'Data Engineering', 'Python'],
  },
  {
    title: 'Language Models',
    competency: 4,
    category: ['Data Science', 'NLP', 'Python'],
  },
  {
    title: 'Information extraction',
    competency: 4,
    category: ['Data Science', 'NLP', 'Python'],
  },
  {
    title: 'Primary NLP',
    competency: 4,
    category: ['Data Science', 'NLP', 'Python'],
  },
  {
    title: 'Spacy/NLTK',
    competency: 4,
    category: ['Data Science', 'NLP', 'Python'],
  },
  {
    title: 'Huggingface',
    competency: 4,
    category: ['Data Science', 'NLP', 'Python'],
  },

  {
    title: 'Tensorflow + Keras',
    competency: 4,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'Google Colab, Jupyter',
    competency: 4,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'HTML + SASS/SCSS/CSS',
    competency: 5,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Python',
    competency: 5,
    category: ['Languages', 'Python'],
  },
  {
    title: 'Java',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'Android',
    competency: 3,
    category: ['Mobile Development'],
  },

  {
    title: 'R',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'Data Visualization',
    competency: 4,
    category: ['Data Science', 'Javascript'],
  },
  {
    title: 'Pandas',
    competency: 5,
    category: ['Data Engineering', 'Data Science', 'Python'],
  },
  {
    title: 'Matplotlib',
    competency: 5,
    category: ['Data Engineering', 'Data Science', 'Python'],
  },
  {
    title: 'Scikit-Learn',
    competency: 4,
    category: ['Data Engineering', 'Data Science', 'Python'],
  },


].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
