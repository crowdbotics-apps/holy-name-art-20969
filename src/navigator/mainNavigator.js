import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings124710Navigator from '../features/Settings124710/navigator';
import Settings124672Navigator from '../features/Settings124672/navigator';
import Settings124653Navigator from '../features/Settings124653/navigator';
import BlankScreen0121457Navigator from '../features/BlankScreen0121457/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings124710: { screen: Settings124710Navigator },
Settings124672: { screen: Settings124672Navigator },
Settings124653: { screen: Settings124653Navigator },
BlankScreen0121457: { screen: BlankScreen0121457Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
