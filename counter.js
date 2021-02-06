import { Provider } from 'react-redux';
import AppNav from './all/config/navigation';
import store from './store'

function Home() {
  return (
  <Provider store={store}>
    <AppNav></AppNav>
  </Provider>
  );
}
export default Home;