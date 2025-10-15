import { useMemo, useState } from 'react';
import {Link} from 'react-router-dom';
import Products from '../data/Products';
const Mobile_items=10;
const Desktop_items=9;
export default function ProductList(){
    const [currentPage,setCurrentPage]=useState(1);
    const [itemsPrePage,setItemsPrePage]=useState(
        window.matchMedia('(max-width:640px)').matches ? Mobile_items : Desktop_items
    );
    const totalPages=Math.ceil(Products.length/itemsPrePage);
    const pagedProducts = useMemo(()=>{
        const start = (currentPage-1) * itemsPrePage;
        const end = start + itemsPrePage;
        return Products.slice(start,end)
    },[Products,currentPage])
    const goToPrev = () => setCurrentPage((p)=>Math.max(1,p-1))
    const goToNext = () => setCurrentPage((p)=>Math.min(totalPages,p+1))

    const goToPages =(page)=>{
        if(page < 1 || page > totalPages) return;
        setCurrentPage(page);
    }

    // 產生 1..totalPages 的陣列
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1)
    return (
         <div className='mx-auto'>
            <div className="content-text">
                <div className="category-container">
                    <div className="category-text">
                        <Link to="/" className='text-label-md text-neutral-600 hover:text-primary-400 max-sm:text-label-sm'>首頁</Link>
                        <span className='text-neutral-300 font-bold'>/</span>
                        <span className='text-label-md text-neutral-600 max-sm:text-label-sm'>女鞋</span>
                        <span className='text-neutral-300 font-bold'>/</span>
                        <span className='text-label-md  max-sm:text-label-sm'>所有商品</span>
                    </div>
                </div>
                <div className="title-container">
                    <h1 className='text-h3 font-bold'>女鞋</h1>
                </div>
                <div className="product-card-container">
                    <div className="left-sidebar">
                        <a href="#" className='left-sidebar-link-active'>所有商品</a>
                        <a href="#" className="left-sidebar-link">慢跑鞋</a>
                        <a href="#" className="left-sidebar-link">滑板鞋</a>
                        <a href="#" className="left-sidebar-link">厚底鞋</a>
                        <a href="#" className="left-sidebar-link">限定 / 聯名企劃</a>
                    </div>
                    <div className="rightside-product-container">
                        {pagedProducts.map((p)=>(
                            <article key={p.id} className='items-card'>
                                <img src={`${import.meta.env.BASE_URL}${p.imgUrl}`} alt="" className='w-full h-[342px] aspect-square object-cover bg-[#F1F3F7] max-sm:h-[169.5px]' />
                                <div className="product-text">
                                    <span className='text-h6 font-bold'>{p.name}</span>
                                    <span className='text-label-md'>{p.price}</span>
                                </div>
                            </article>
                        ))}
                        <div className="changepage-btn-container">
                            <button type='button' className={`pages-btn ${currentPage === 1 ? "opacity-40 cursor-not-allowed" : ""}`} onClick={goToPrev} disabled={currentPage===1}><img src={`${import.meta.env.BASE_URL}img/chevron-left.png`} alt="" /></button>
                                <div className="pages-num-btn">
                                    {pageNumbers.map((n)=>(
                                        <button type="button" key={n} onClick={()=>goToPages(n)}
                                         className={currentPage === n ? "pages-btn-active" : 'pages-btn'}
                                        >
                                        {n}
                                        </button>
                                    ))}
                                </div>
                            <button type='button' onClick={goToNext} disabled={currentPage===totalPages} className={`pages-btn ${currentPage === totalPages ? "opacity-40 cursor-not-allowed" : ""}`}><img src={`${import.meta.env.BASE_URL}img/chevron-right.png`} alt="" /></button>
                        </div>
                    </div>
                </div>
            </div> 
            <div className="add-member">
                <div className="add-member-banner">
                <h3 className='text-h4 font-bold max-sm:text-h5'>加入會員取得 9 折優惠</h3>
                <button type="button" className='btn-neutral-filled-lg-default'>馬上註冊</button> 
                </div>
            </div>     
        </div>
    )
}