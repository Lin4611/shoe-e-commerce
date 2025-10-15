import { Link } from "react-router-dom"
const Footer =()=>{
    return(
        <footer className='footer-container'>
            <div className="footer-content">
            <div className="footer-text">
                <Link to='/'>
                    <img src={`${import.meta.env.BASE_URL}img/Logo.png`} alt="missing pic" className='logo-pic' />
                </Link>
                <div className="footer-nav">
                    <Link to="/products" className="footer-nav-productlist-link">商品列表</Link>
                    <Link to="/brand-story" className="footer-nav-productstory-link">產品故事</Link>
                </div>
            </div>
            <div className="footer-copyright-text">
                <span className='text-body-sm text-neutral-600'>Copyright ©2025 URBNSTYLE</span>
                <span className='text-body-sm text-neutral-600'>All Rights Reserved.</span>
            </div>
            </div>
        </footer>
    )
}
export default Footer