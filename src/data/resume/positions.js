const positions = [
  {
    position: 'Graduate Research Scientist',
    company: 'Research Centre for Data Analytics and Cognition(CDAC), La Trobe University, Australia.',
    link: 'https://www.latrobe.edu.au/cdachttps://www.latrobe.edu.au/cdac',
    daterange: 'October 2021 - Present',
    points: [
      'CDAC is a research laboratory in La Trobe University, Melbourne, Australia.',
      'Engage in Research work in Natural Language Processing and Data Science.',
      'Research Supervisors : Prof. Damminda Alahakoon, Prof. Daswin De Silva.'
    ],
    image: process.env['PUBLIC_URL']+'/images/cdac.jpg',
    image_width:'200px',
    image_height:'120px',
  },
  {
    position: 'Graduate Research Scientist',
    company: 'Swinburne University of Technology, Melbourne Australia.',
    link: 'https://www.swinburne.edu.au/',
    daterange: 'February 2022 - August 2022',
    points: [
      'Engage in Research work in Natural Language Processing and Data Science.',
      'Modelling emotions in financial letters.'
    ],
    image: process.env['PUBLIC_URL']+'/images/swin.png',
    image_width:'160px',
    image_height:'70px',
  },
  {
    position: 'Contract Lecturer',
    company: 'Department of Computer Science and Engineering, University of Moratuwa, Srilanka.',
    link: 'http://cse.mrt.ac.lk/',
    daterange: 'September 2020 - October 2021',
    points: [
      'Worked as a contract lecturer and contributing to both academic and research work.',
      'Lecturing for Modular Software Development - CS2832',
        'Mentoring - Research and Development Project-CS4202'
    ],
    image: process.env['PUBLIC_URL']+'/images/uom.png',
    image_width:'120px',
    image_height:'120px',
  },
  {
    position: 'Junior Consultant',
    company: 'Department of Computer Science and Engineering, University of Moratuwa, Srilanka.',
    link: 'http://cse.mrt.ac.lk/',
    daterange: 'February 2020 - September 2020',
    points: [
      'Worked as as a Junior Consultant and contributing to both academic and research work.',
      'Teaching Assistant work for modules Programming Fundamentals-CS1032, Software Engineering Project-CS3202, Research and Development Project-CS4202, Machine Learning-CS4622',

    ],
    image: process.env['PUBLIC_URL']+'/images/uom.png',
    image_width:'120px',
    image_height:'120px',
  },
  {
    position: 'Research Scientist',
    company: 'Live Labs, Singapore Management University, Singapore.',
    link: 'https://livelabs.smu.edu.sg/',
    daterange: 'June 2018 - December 2018',
    points: [
      'Live Labs is a research laboratory in the School of Information Systems, Singapore Management University (SMU), Singapore.',
      ' I worked with a project to build a crowdsourcing platform with advanced features which branched to areas such as Bayesian Machine Learning and Data Science and Analytics.',
        '· Research Supervisor : Kotaro HARA, Ph.D. (Maryland, College Park) - Assistant Professor at the School of Information Systems, Singapore Management University, Singapore.'

    ],
    image: process.env['PUBLIC_URL']+'/images/smu.png',
    image_width:'180px',
    image_height:'70px',
  },



];

export default positions;
