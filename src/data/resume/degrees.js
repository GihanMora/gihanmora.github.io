const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage
console.log('evn',process.env)
const degrees = [

  {
    school: 'Research Centre for Data Analytics and Cognition(CDAC), La Trobe University, Australia.',
    degree: 'Doctor of Philosophy (PhD) (Reading) ',
    link: 'https://www.latrobe.edu.au/cdac',
    year: 'August 2021 - Present',
    image: process.env['PUBLIC_URL']+'/images/cdac.jpg',
    image_width:'200px',
    image_height:'120px',
  },
  {
    school: 'Department of Computer Science and Engineering, University of Moratuwa',
    degree: 'BS.c. Computer Science and Engineering(Hons)',
    link: 'http://www.cse.mrt.ac.lk/',
    year: 'January 2015 - January 2020',
    image: process.env['PUBLIC_URL']+'/images/uom.png',
    des:'Overall SGPA: 4.01 out od 4.20. Dean\'s list in all the semesters. 4th Highest GPA batch of 128',
    image_width:'120px',
    image_height:'120px',
  },

];

export default degrees;
