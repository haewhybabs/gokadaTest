
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default {
  container: {
    marginTop:20,
    flex: 1,
    backgroundColor: 'white',
  },
  
  horizontalLine: {
    height: 2,
    borderBottomWidth: 0.5,
    marginTop: 10,
    marginLeft: 4,
    marginRight: 4,
    borderColor: 'grey',
    opacity: 0.5
  },
  navItemStyle: {
    paddingTop: 20,
    paddingLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  navTextStyle: {
    paddingLeft: 10,
    fontSize: 17,
    fontWeight: 'bold',
    color: '#2B2B2B'
  },
  navIconStyle: {
    width: 22,
    height: 22,
    resizeMode: 'contain'
  },
  navSectionStyle: {
    flex: 1,
  },
  
  
  
  
};
