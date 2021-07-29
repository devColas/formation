const {StyleSheet} = require('react-native');

export default StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
  },
  appName: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2780c3',
  },
  logoContainer: {
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
  },
  buttonContainer: {
    padding: 100,
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
  },
  buttonIcon: {
    width: 50,
    height: 50,
  },
});
