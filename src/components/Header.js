import Button from "./Button"




const Header = (props) =>
        <div className = 'Header'>
            <div className = 'heading-btn'>
                <h1>Task Tracker</h1>
                <Button margin = {'2rem'} text = {'ADD TASK'} color = {'green'}/>
            </div>
            <p>What can we do today brain?</p>
           
           
            
        </div>
    
// let text = ''
//                 for (let i = 0; i < items.length; i++) {
//                    text = <h3> items.text</h3>

//             }

export default Header
