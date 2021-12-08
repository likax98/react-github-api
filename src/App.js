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

  //ENV
  //   REACT_APP_GITHUB_API_URL = https://api.github.com
  // REACT_APP_AUTH_API_URL = https://comm-auth.kapo.dev/auth
  // SKIP_PREFLIGHT_CHECK=true
  // webpack-ის ვერსიასთან აქვს პრობლემა და ეს ბოლო მაგიტო დამჭირდა

  // თუ ბლოგისთვის ან სადმე დასადებად დაჭირდებათ ქასთომ დიზაინიც მაქ და ვერ მოვასწარი
  // გადაწყობა, თუ ოქეი იქნება შენგან მერე გადავაწყობ სტილებს
  // https://drive.google.com/file/d/1zpPZi_TbgMVz-DNr5wBc4SvJvwwz3PHI/view?usp=sharing

  //
  return (
    <main>
      {isLogged && <Header />}
      <RoutesLibrary />
    </main>
  );
}

export default App;
