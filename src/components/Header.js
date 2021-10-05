import Button from './Button';

const Header = ( {title} ) => {
    const onClick = () => {
        console.log('button clicked')
    }

    return (
        <header>
            <h1>{title}</h1>
            <Button color='green' text='Add' onClick={onClick}/>
        </header>
    )
}

Header.defaultProps = {
    title: 'Angry Borgs'
}

export default Header
