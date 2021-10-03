
const Button = (prop) => {
    return (
        <div>
            <button style = {{color: prop.color, margin: prop.margin}} onClick = {prop.func} className = 'btn'>
                {prop.text}
            </button>
        </div>
    )
}

export default Button
