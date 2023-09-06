import { Link } from 'react-router-dom';
import { useContext} from 'react'
import { AppContext } from '../../appContext/App_context'
// Using the import below, we can call any exported function using: userService.someMethod()
import * as userService from '../../ultilities/users-service';

export default function NavBar({user,setUser}) {
  
  function handleLogOut() {
    // Delegate to the users-service
    userService.logOut();
    // Update state will also cause a re-render
    setUser(null);
  }
  return (
    <nav>
      {/* <Link to="/orders">Order History</Link>
      &nbsp; | &nbsp;
      <Link to="/orders/new">New Order</Link>
      &nbsp; | &nbsp; */}
      <h3>Welcome!!! , {user.name}</h3>
      &nbsp;&nbsp;<Link  to="" onClick={handleLogOut}>Log Out</Link>
      
    </nav>
  );
}