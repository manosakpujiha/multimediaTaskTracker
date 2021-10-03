import Button from "./Button"
const Input = () => {
    function myFunc (e) {
        console.log(e.target.innerText)
    }
    return (
        <div className = 'Input'>
            <input type="text" placeholder = 
                {`Same thing we do every other Night`}
             />
            <Button text = {'Delete'} func = {myFunc} />
        </div>
    )
}

export default Input
