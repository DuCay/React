import styles from '/home/alexeydemin/Рабочий стол/React/my-app/src/styles/itemList.module.css'
import PropTypes from 'prop-types'

function ItemList ({message}) {
    const {title,name}=message

    return (<div className={styles.item}>
                <div>{title}{name}</div>
            </div>)
}
ItemList.propTypes={
    message: PropTypes.object.isRequired,
}
export default ItemList
