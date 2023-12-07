import Button from './Button'

const Header = ({ title, onAdd }) => {
    return (
        <div>
            <header className="header" >
                <h1>
                    {title}
                </h1>
                <Button text='Add' color='green' onClick={onAdd}/>
            </header>
        </div>
    )
}

export default Header
