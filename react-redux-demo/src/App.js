import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store'
import CakeContainer  from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import UserContainer from './components/UserContainer';

function App() {
  return (
    <Provider store = {store}>
      <div className="App">
        <CakeContainer />
        {/* <HooksCakeContainer /> */}
        {/* <UserContainer /> */}

      </div>
    </Provider>
  );
}

export default App;
