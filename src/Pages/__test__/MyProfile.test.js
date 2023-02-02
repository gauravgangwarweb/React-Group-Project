import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../Redux/consfigureStore';
import Profile from '../Profile/Profile';

const ProfileProvider = () => (
  <Provider store={store}>
    <Profile />
  </Provider>
);

describe('test profile component', () => {
  it('render profile correctly', () => {
    const Profile = renderer.create(<ProfileProvider />);
    expect(Profile).toMatchSnapshot();
  });
});
