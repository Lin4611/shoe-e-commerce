import {Link} from 'react-router-dom';
const Navbar = ({showMobileNavbar})=>{
    if(showMobileNavbar){
        return(
            <>
            <header className='navbar-header-productpage max-sm:hidden'> 
                    <nav className="navbar-start-productpage">
                        <Link to="/">
                            <img src={`${import.meta.env.BASE_URL}img/Logo.png`} alt="missing pic" className='logo-pic'/>
                        </Link>
                        <div className="navbar-header-link">
                            <Link to="/products" className="link-text">商品列表</Link>
                            <Link to="/brand-story" className="link-text">產品故事</Link>
                        </div> 
                    </nav>
                    <Link to="/login" className='client-icon'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-person w-6 h-6" viewBox="0 0 16 16">
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
                    </svg>
                    </Link>
            </header>
            <header className='nav-phone'>
                <div className="nav-phone-top">
                    <Link　to="/">
                        <img src={`${import.meta.env.BASE_URL}img/Logo.png`} alt="" className='logo-pic'/>
                    </Link>    
                    <Link to='/login' className='client-icon'>
                        <img src={`${import.meta.env.BASE_URL}img/Vector.svg`} alt="" />
                    </Link>
                </div>
                <div className="nav-phone-link">
                    <Link to="/products" className="max-sm:bg-primary-200 block w-full text-center py-3 text-neutral-900">商品列表</Link>
                    <Link to="/brand-story" className="max-sm:bg-primary-100 block w-full text-center py-3 text-neutral-900">產品故事</Link>
                </div>
            </header>
            </>
        )
    }else{
        return(
            <>
                <header className='navbar-header-productpage '> 
                    <nav className="navbar-start-productpage">
                        <Link to="/">
                            <img src={`${import.meta.env.BASE_URL}img/Logo.png`} alt="missing pic" className='logo-pic'/>
                        </Link>
                        <div className="navbar-header-link">
                            <Link to="/products" className="link-text">商品列表</Link>
                            <Link to="/brand-story" className="link-text">產品故事</Link>
                        </div> 
                    </nav>
                    <Link to="/login" className='client-icon'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-person w-6 h-6" viewBox="0 0 16 16">
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
                    </svg>
                    </Link>
                </header>
            </>
        )
    } 
    
}
export default Navbar