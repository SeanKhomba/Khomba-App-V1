/* This is a config for intro Data when start app */

export default [
  {
    title: 'Find the closest taxi rank',
    description: 'Instead of spending time worring about where to find the right taxi, Khomba is here',
    backgroundColor: '#fff',
    source: require('./lotties/loading.json'),
    button: "GET STARTED"
  }, {
    title: 'Learn the taxi lingo of your city',
    description: 'Different places have different signs to move, town is not the same everywhere. Fortunately Khomba is here.',
    backgroundColor: '#fff',
    source: require('./lotties/like.json'),
    button: "NEXT"
  }, {
    title: 'Stay safe in your city',
    description: 'Khomba will help you find the information you need in order to help you get there',
    backgroundColor: '#0082b3',
    source: require('./lotties/mountain.json'),
    button: "DONE"
  }
]
