import { Component } from 'react';
import { Outlet, Link} from 'react-router-dom';

const MenuStrip = () => {
    return (
        <>
           <table>
                <tr>
                    <td>
                        <Link to='/'>Home</Link>
                    </td>
                    <td>
                        <Link to='/contact'>Contact</Link>
                    </td>
                </tr>
           </table>
           <Outlet />
        </>
    )
}

export default MenuStrip;


// Home Contact AboutUs Product

// Home Page - Image
// Contact - NamedNodeMap, Age, Email, Message 
// AboutUS - Paragrpagh with Image
// Product - Component