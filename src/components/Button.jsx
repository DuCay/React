import PropTypes from 'prop-types'

function ButtonList ({className,text,onClick}) {
    return <button className={className} onClick={onClick}>{text}</button>
}

ButtonList.propTypes ={
    text: PropTypes.string.isRequired,
}

export default ButtonList

