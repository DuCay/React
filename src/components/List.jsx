import PropTypes from "prop-types";
import ItemList from "./ItemList";

function List ({items}) {
    return (
    <div>
        {items.map(item=>(
            <ItemList 
            key={item.id}
            message={item}
            />)
        )}
    </div>)
}

List.propTypes={
    items: PropTypes.arrayOf(PropTypes.object),
}

List.defaultProps={
    items: [],
}
export default List