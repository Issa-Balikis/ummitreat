const MenuList = (props) => {
    return ( 
        <div className="menulist">
            <img src={props.item.image} alt="" className="menulist--img" />
            <div className="span">
            <span>{props.item.name}</span>
            <span>{props.item.price}</span>
            </div>
        </div>
     );
}
 
export default MenuList;