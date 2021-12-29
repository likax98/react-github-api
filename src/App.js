import RoutesLibrary from './Routes';
import { useStateValue } from './context/StateProvider';
import { Header } from './components';
import './App.css';

function App() {
  const [
    {
      loggedUser: { isLogged },
    },
  ] = useStateValue();
  //
  return (
    <main>
      {isLogged && <Header />}
      <RoutesLibrary />
    </main>
  );
}

export default App;
