import { Routes, Route } from 'react-router-dom'
import ProductList from '../pages/ProductList.jsx'
import ProductDetail from '../pages/ProductDetail.jsx'
import Home from '../pages/Home.jsx'
import Collection from '../pages/Collection.jsx'
import Login from '../pages/Login.jsx'
import BrandStory from '../pages/BrandStory.jsx'

const WebRouter = () =>{
    return(
       <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/products/platform-404" element={<ProductDetail />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/login" element={<Login />} />
            <Route path="/brand-story" element={<BrandStory />} />
       </Routes>  
    )
}
export default WebRouter