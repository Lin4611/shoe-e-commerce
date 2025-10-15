import {Link} from 'react-router-dom';
const Navbar = ({showMobileNavbar})=>{
    if(showMobileNavbar){
        return(
            <>
            <div className="navbar-header-container max-sm:p-0">
                <header className='navbar-header max-sm:hidden'> 
                    <nav className="navbar-start">
                        <Link to="/">
                            <img src={`${import.meta.env.BASE_URL}img/Logo.png`} alt="missing pic" className='logo-pic'/>
                        </Link>
                        <div className="navbar-header-link">
                            <Link to="/products" className="link-text">商品列表</Link>
                            <Link to="/brand-story" className="link-text">產品故事</Link>
                        </div> 
                    </nav>
                    <nav className='rightside-navbar'>
                        <Link to='/collection' className='client-icon'>
                            <img src={`${import.meta.env.BASE_URL}img/heart.svg`} alt="collection" className='w-[24px] h-[24px] object-cover aspect-square'/>
                        </Link>
                        <Link to="/login" className='client-icon'>
                            <img src={`${import.meta.env.BASE_URL}img/Vector.svg`} alt="client" className='w-[24px] h-[24px] object-cover aspect-square'/>
                        </Link>
                    </nav>       
                </header>
                <header className='nav-phone'>
                    <div className="nav-phone-top">
                        <Link　to="/">
                            <img src={`${import.meta.env.BASE_URL}img/Logo.png`} alt="" className='logo-pic'/>
                        </Link>
                        <div className="flex gap-1">
                            <Link to='/collection' className='client-icon'>
                                <img src={`${import.meta.env.BASE_URL}img/heart.svg`} alt="collection" className='w-[24px] h-[24px] object-cover aspect-square'/>
                            </Link>    
                            <Link to='/login' className='client-icon'>
                                <img src={`${import.meta.env.BASE_URL}img/Vector.svg`} alt="" />
                            </Link>
                        </div>
                        
                    </div>
                    <div className="nav-phone-link">
                        <Link to="/products" className="max-sm:bg-primary-200 block w-full text-center py-3 text-neutral-900">商品列表</Link>
                        <Link to="/brand-story" className="max-sm:bg-primary-100 block w-full text-center py-3 text-neutral-900">產品故事</Link>
                    </div>
                </header>
            </div> 
            </>
        )
    }else{
        return(
            <>
                <div className="navbar-header-container">
                    <header className='navbar-header'> 
                        <nav className="navbar-start">
                            <Link to="/">
                                <img src={`${import.meta.env.BASE_URL}img/Logo.png`} alt="missing pic" className='logo-pic'/>
                            </Link>
                            <div className="navbar-header-link">
                                <Link to="/products" className="link-text">商品列表</Link>
                                <Link to="/brand-story" className="link-text">產品故事</Link>
                            </div> 
                        </nav>
                        <nav className='rightside-navbar'>
                            <Link to='/collection' className='client-icon'>
                                <img src={`${import.meta.env.BASE_URL}img/heart.svg`} alt="collection" className='w-[24px] h-[24px] object-cover aspect-square'/>
                            </Link>
                            <Link to="/login" className='client-icon'>
                                <img src={`${import.meta.env.BASE_URL}img/Vector.svg`} alt="client" className='w-[24px] h-[24px] object-cover aspect-square'/>
                            </Link>
                        </nav>       
                    </header>
                </div>
            </>
        )
    } 
    
}
export default Navbar