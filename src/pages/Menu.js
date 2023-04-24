import "./menu.css";
import menuItem from "../data";
import MenuList from "../components/menulist";

const Menu = () => {
    const menulist = menuItem.map((item) => {
        return (
           
            <MenuList key={item.id}
                      item={item}
            />
        
        )
    })
    return (
     <div className="menu"  >
       
        <div className="title">
            <h1>Our Menu</h1>
        </div>
        <div className="menu--menu">
            {menulist}
        </div>

    </div>
     );
}
 
export default Menu;