import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({ title, onAdd, showAdd }) => {
    return (
        <header>
            <h1>{title}</h1>
            <Button color = {showAdd ? 'blue' : 'green'} text = {showAdd ? 'Home' : 'Add'} onClick={onAdd} />
        </header>
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header