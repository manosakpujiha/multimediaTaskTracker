import audio from '../static/success.mp3';
import Button from "./Button"

function playsound () {
    let audioObj = new Audio(audio);
    audioObj.play();
    audioObj.volume = 0.1;

}




const Header = (props) =>



        <div className = 'Header'>
        

            <div className = 'heading-btn'>
                <h1>Task Tracker</h1>
            </div>
            <p>What can we do today brain?</p>
            <Button margin = {'2rem'} text = {'Hide'} color = {'rgb(0, 255, 85)'} func = {playsound} />

        </div>

export default Header
