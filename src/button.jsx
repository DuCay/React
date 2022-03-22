import PropTypes from 'prop-types'
import styles from '/home/alexeydemin/Рабочий стол/React/my-app/src/button.module.css'

function Button ({text,onClick}) {
    return <button className={styles.button} onClick={onClick}>{text}</button>
}

Button.propTypes ={
    text: PropTypes.string.isRequired,
}

export default Button
