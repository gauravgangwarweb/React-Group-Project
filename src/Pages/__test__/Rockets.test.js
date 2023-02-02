import renderer from 'react-test-renderer';
import { screen, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../Redux/consfigureStore';
import Rockets from '../Rocket/Rockets';

const RocketProvider = () => (
  <Provider store={store}>
    <Rockets />
  </Provider>
);

describe('Rockets components test', () => {
  it('check for proper rendering', () => {
    const allRockets = renderer.create(<RocketProvider />).toJSON();
    expect(allRockets).toMatchSnapshot();
  });

  it('has a text in the DOM', () => {
    const { container } = render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );
    expect(container.getElementsByClassName('list').length).toBe(1);
  });
});