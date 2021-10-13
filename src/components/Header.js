import Button from "./Button"

const Header = (props) =>
        <div className = 'Header'>
            <div className = 'heading-btn'>
                <h1>Task Tracker</h1>
            </div>
            <p>What can we do today brain?</p>
            <Button 
                margin = {'2rem'} 
                text = {props.showInputsState ? 'Hide Input Panel':  'Show Input Panel'}
                color = {props.showInputsState ? 'red' : 'green'}
                func = {props.toggleInputs}
            />

        </div>

export default Header
