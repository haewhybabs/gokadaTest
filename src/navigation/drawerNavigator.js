import { Dimensions } from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { AppStack } from './stackNavigator';
import SideMenu from '../common/SideMenu';
const { width } = Dimensions.get('window');

export const drawerNavigator = createDrawerNavigator(
  {
    App: AppStack
  },
  {
    drawerWidth: width * 0.8,
    drawerPosition: 'left',
    contentComponent: SideMenu
  }
);
