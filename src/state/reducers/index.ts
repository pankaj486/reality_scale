import { combineReducers } from 'redux';
import NavbarReducer from './NavbarReducer';
import ScreenReducer from './ScreenReducer';
import AllAppReducer from './AllAppReducer';
import MediaReducer from './MediaReducer';
import FooterNavbarReducer from './FooterNavbarReducer';
import Mode from './ModeReducer';
import CompassReducer from './CompassReducer';

const reducers = combineReducers({
      navbar: NavbarReducer,
      allscreens: ScreenReducer,
      allapp: AllAppReducer,
      media: MediaReducer,
      footernavbar: FooterNavbarReducer,
      mode:Mode,
      compass: CompassReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;