import {Link} from 'react-router-dom'
function Nav(){

    return(<>
    <div className="nav">
        {/* <img src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg" alt="img" /> */}
       
       <div>
        <Link className='btn btn-info rounded-pill' to={"/contact"}>contact</Link>
        <Link className='btn btn-info rounded-pill' to={"/about"}>About</Link>
        <Link className='btn btn-info rounded-pill' to={"/"}>Home</Link>
    </div>
        </div>
    </>)
}
export default Nav;