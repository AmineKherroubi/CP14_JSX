import './App.css';
import { NomPrenom } from './Component/Profile/FullName'
import { Adresse } from "./Component/Profile/Address";
import { PhotoProfil } from "./Component/Profile/ProfilePhoto"

function App() {
  return (
    <div className='container'>
      <div className='profil'>
        <PhotoProfil/>
        <NomPrenom/>
        <Adresse/>
      </div>
    </div>
  );
}

export default App;
