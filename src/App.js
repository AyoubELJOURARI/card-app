import ProfileCard from './ProfileCard';
import AlexaImage from './images/alexa.png'
import SiriImage from './images/siri.png'
import CortanaImage from './images/cortana.png';
import './App.css';

function App() {
  return (
    <div className="App">

        <div className='d-flex justify-content-evenly mx-auto'>
          <ProfileCard  title="First_USER" handle="@ALEXA_1Id" image={AlexaImage} description='Alexa was created by Amazon.'/>
          <ProfileCard  title="Second_USER" handle="@CORTANA_2Id" image={CortanaImage} description='Cortana was created by Microsoft.'/>
          <ProfileCard  title="Third_USER" handle="@SIRI_3Id" image={SiriImage} description='Siri was created by Apple.'/>
        </div>
        
    </div>
  );
}

export default App;
