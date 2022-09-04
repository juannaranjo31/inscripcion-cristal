import { CloseAd } from './components/CloseAd';
import { FormStudents } from './components/FormStudents';
import { Welcome } from './components/Welcome';
import { IsMobile } from './helpers/IsMobile';
import './styles/main.scss';

function App() {
  IsMobile();

  return (
    /*<div className="app">
      <div className="main">
        <FormStudents />
        <Welcome />
      </div>
    </div>
    */
   <CloseAd></CloseAd>
  );
}

export default App;
