import Button from "./Button"

const Header = () => {
    function myFunc () {
        console.log('ADD')
    }



    return (
        <div className = 'Header'>
            <div className = 'heading-btn'>
                <h1>Task Tracker</h1> 
                <Button margin = {'2rem'} text = {'ADD TASK'} color = {'red'} func = {myFunc}/>
            </div>
            <p>What can we do today brain?</p>
        </div>
    )
}

export default Header
