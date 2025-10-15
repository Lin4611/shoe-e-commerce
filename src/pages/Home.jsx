import { useState } from 'react'
import React from 'react'
const productList=[
  {
    id:1,
    name:'Monoverse',
    price:'3,600',
    imgAlt:'Monoverse shoes',
    imgUrl:'img/new-1.png'
  },
  {
    id:2,
    name:'PLATFORM 404',
    price:'2,600',
    imgAlt:'PLATFORM 404 shoes',
    imgUrl:'img/new-2.png'
  },
  {
    id:3,
    name:'URBN Force',
    price:'3,200',
    imgAlt:'URBN Force shoes',
    imgUrl:'img/new-3.png'
  },
  {
    id:4,
    name:'Mode90',
    price:'4,000',
    imgAlt:'Mode90 shoes',
    imgUrl:'img/new-4.png'
  }
]
const bestSellLsit=[
  {
    id:1,
    imgUrl:'img/best-1.png'
  },
  {
    id:2,
    imgUrl:'img/best-2.png'
  },
  {
    id:3,
    imgUrl:'img/best-3.png'
  },
  {
    id:4,
    imgUrl:'img/best-4.png'
  }
]
const seriesList=[
  {
    id:1,
    title:'URBN RUNNER',
    subtitle:'慢跑系列',
    imgUrl:'img/series-1.png'
  },
  {
    id:2,
    title:'STREETMODE',
    subtitle:'滑板系列',
    imgUrl:'img/series-2.png'
  },
  {
    id:3,
    title:'CHUNK DISTRICT',
    subtitle:'厚底系列',
    imgUrl:'img/series-3.png'
  },
  {
    id:4,
    title:'COLLAB ZONE',
    subtitle:'聯名企劃',
    imgUrl:'img/series-4.png'
  },
]
const ootdList=[
  {id:1,imgUrl:'img/inspiration-1.png',size:'small'},
  {id:2,imgUrl:'img/inspiration-2.png',size:'small'},
  {id:3,imgUrl:'img/inspiration-4.png',size:'small'},
  {id:4,imgUrl:'img/inspiration-5.png',size:'small'},
  {id:5,imgUrl:'img/inspiration-10.png',size:'large'},
  {id:6,imgUrl:'img/inspiration-3.png',size:'large'},
  {id:7,imgUrl:'img/inspiration-6.png',size:'small'},
  {id:8,imgUrl:'img/inspiration-7.png',size:'small'},
  {id:9,imgUrl:'img/inspiration-8.png',size:'small'},
  {id:10,imgUrl:'img/inspiration-9.png',size:'small'},
  {id:11,imgUrl:'img/inspiration-11.png',size:'small'},
  {id:12,imgUrl:'img/inspiration-12.png',size:'small'}
]
const getSizeClass = (size) => {
  return size === 'large' 
    ? 'col-span-2 row-span-2' 
    : 'col-span-1 row-span-1';
};

export default function Home(){
    const [current, setCurrent] = useState(0); // 目前顯示的圖片 index
    const [touchStart, setTouchStart] = useState(0); // 記錄手指開始觸碰螢幕的位置（X 座標）
    
      // 當手指開始觸碰螢幕時執行
    const handleTouchStart = (e) => {
        // e.touches[0] 是第一根手指
        // clientX 是手指的 X 座標位置
        setTouchStart(e.touches[0].clientX);
    };
    
    // 當手指離開螢幕時執行
    const handleTouchEnd = (e) => {
    // 取得手指離開時的 X 座標
    const touchEnd = e.changedTouches[0].clientX;
    
    // 如果手指往左滑超過 50px（開始位置 - 結束位置 > 50）
    if (touchStart - touchEnd > 50) {
        // 切換到下一張，如果是最後一張就回到第一張
        // (current + 1) % products.length 是取餘數，確保不會超出範圍
        setCurrent((prev) => (prev + 1) % bestSellLsit.length);
    }
          
          // 如果手指往右滑超過 50px（開始位置 - 結束位置 < -50）
          if (touchStart - touchEnd < -50) {
            // 切換到上一張，如果是第一張就跳到最後一張
            // (prev - 1 + products.length) 確保不會出現負數
            setCurrent((prev) => (prev - 1 + bestSellLsit.length) % bestSellLsit.length);
          }
        };
      return (
         <div className='mx-auto'>
            <section className="banner bg-hero"
              style={{ 
                '--hero-desktop': `url(${import.meta.env.BASE_URL}img/banner.png)`,
                '--hero-mobile' : `url(${import.meta.env.BASE_URL}img/banner-sm.png)` }}
            >
            <div className="banner-content">
              <div className="banner-text">
                  <h2 className='text-display-1 text-neutral-0 font-bold max-sm:text-display-2'>URBNSTEP</h2>
                  <p className='text-h3 text-neutral-0 font-bold max-sm:text-h5'>Your Step, Your Statement</p>
              </div>
              <button type="button" className='btn-default'>立即選購</button>
            </div>      
            </section>
            <div className="content">
              <div className="mx-auto max-w-[1296px] flex flex-col mt-8">
                <div className="product-title">
                  <h2 className="text-center text-display-2 font-bold">New Arrival</h2>
                  <h3 className="text-center text-h2 font-bold">新品上市</h3>
                </div>
                <div className="product-card mb-16">
                  {productList.map((product) => (
                    <article className='w-full flex flex-col justify-around'key={product.id}>
                      <img src={`${import.meta.env.BASE_URL}${product.imgUrl}`} alt={product.imgAlt} className='w-full h-[636px] aspect-square object-cover max-sm:h-[169.5px]' />
                      <div className='mt-3 flex flex-col'>
                        <h3 className="text-h5 text-neutral-900 font-bold max-sm:text-h6">
                          {product.name}
                        </h3>
                        <p className="mt-1 text-label-md text-neutral-900">NT${product.price}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
              <div className="best-card-list">
                  <h2 className='text-h2 font-bold text-neutral-900 max-sm:text-h4' >熱銷補貨</h2>
                  <div className="best-card">
                    {
                      bestSellLsit.map((product)=>(
                        <React.Fragment key={product.id}>
                          <article className="w-full flex flex-col justify-between bg-neutral-100 relative">
                            <div className="h-[37px] w-[91px] absolute bg-primary-100 left-0 top-0 flex justify-center items-center">
                              <h4 className='text-label-sm text-primary-400'>人氣No.1</h4>
                            </div>
                            <img src={`${import.meta.env.BASE_URL}${product.imgUrl}`} alt="pic" className='w-full h-[306px] aspect-square object-cover'/>
                          </article>
                        </React.Fragment>
                      ))}
                  </div>
                  <div className="best-card-phone">
                    <div className="min-w-full max-w-[351px] mx-auto">  {/* 設定最大寬度 */}
                      {/* 輪播容器，監聽觸碰事件 */}
                      <div 
                        className="overflow-hidden"
                        onTouchStart={handleTouchStart}  // 手指碰到螢幕時
                        onTouchEnd={handleTouchEnd}      // 手指離開螢幕時
                      >
                        {/* 內層容器，用 flex 讓所有圖片橫向排列 */}
                        {/* translateX 移動整個容器來切換圖片 */}
                        {/* 例如 current=1 時，移動 -100%，就會顯示第二張圖 */}
                        <div 
                          className="flex transition-transform duration-500 ease-out"
                          style={{ transform: `translateX(-${current * 100}%)` }}
                        >
                          {/* 用 map 迴圈產生每一張圖片 */}
                          {
                            bestSellLsit.map((product)=>(
                              <article className="w-full flex flex-col justify-between bg-neutral-100 relative flex-shrink-0" key={product.id}>
                                <div className="h-[37px] w-[91px] absolute bg-primary-100 left-0 top-0 flex justify-center items-center">
                                  <h4 className='text-label-sm text-primary-400'>人氣No.1</h4>
                                </div>
                                <img src={`${import.meta.env.BASE_URL}${product.imgUrl}`} alt="pic" className='w-full h-[300px] aspect-square object-cover '/>
                              </article>
                            ))}
                        </div>
                      </div>
                      </div>
                  </div>
              </div>
              <div className="sales-banner">
                <section className="sales-banner-card bg-hero" 
                  style={{ 
                '--hero-desktop': `url(${import.meta.env.BASE_URL}img/banner-co-branded.png)`,
                '--hero-mobile' : `url(${import.meta.env.BASE_URL}img/banner-co-branded-sm.png)` }}
                >
                    <img src={`${import.meta.env.BASE_URL}img/star.svg`} alt="star" className='hidden max-sm:block absolute top-8 -left-6'/>
                    <img src={`${import.meta.env.BASE_URL}img/sparkle.svg`} alt="sparkle" className='hidden max-sm:block absolute bottom-[104px] -right-10'/>
                    <div className="sales-banner-content">
                      <div className="sales-banner-text">
                        <div className="sales-banner-title">
                          <div className="sales-banner-main-title">
                            <h2 className='text-display-2 text-neutral-0 font-bold max-sm:text-h2'>URBNSTEP</h2>
                            <span className='text-h1 text-primary-300 font-bold max-sm:text-h3'>x</span>
                            <h2 className='text-display-2 text-neutral-0 font-bold max-sm:text-h2'>Kevin Chen</h2>
                          </div>
                          <h2 className="text-h2 text-neutral-0 font-bold max-sm:text-h5">跨界聯名，限量發售</h2>
                        </div>
                        <span className='text-body-lg text-neutral-500 max-sm:text-center'>新銳漫畫家 Kevin Chen 親自操刀設計，街頭能量全面引爆！</span>
                      </div> 
                      <button type="button" className='btn-default'>立即搶購</button>
                    </div>
                </section>
              </div>
              <div className="series-card-list">
                <h2 className='text-h2 font-bold text-neutral-900 max-sm:text-h4' >依系列選購</h2>
                  <div className="series-card">
                    {
                      seriesList.map((product)=>(
                        <article className="w-full flex flex-col justify-between bg-neutral-950/40 relative" key={product.id} >
                          <div className='absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300'>
                          <div className="flex flex-col justify-center items-center absolute top-[38%] left-0 w-full">
                            <h3 className='text-h3 text-neutral-0 font-bold max-sm:text-h6'>{product.title}</h3>
                            <h4 className='text-h4 text-neutral-0 font-bold max-sm:text-h6'>{product.subtitle}</h4>
                          </div>
                          </div>
                          <img src={`${import.meta.env.BASE_URL}${product.imgUrl}`} alt="pic" className='w-full h-[306px] aspect-square object-cover bg-neutral-200 max-sm:h-[169.5px]'/>
                        </article>
                      ))}
                  </div>
              </div>
              <div className="ootd-card-list">
                <h2 className='text-h2 text-neutral-900 font-bold max-sm:text-h4'>穿搭靈感</h2>
                  <div className="ootd-card">
                      {
                        ootdList.map((product)=>(
                          <article key={product.id}　className={`overflow-hidden ${getSizeClass(product.size)}`}>
                            <img src={`${import.meta.env.BASE_URL}${product.imgUrl}`} alt={`Product ${product.id}`} className='w-full h-full object-cover'/>
                          </article>
                        ))
                      }
                  </div>
                  <div className="ootd-card-phone">
                    <div className="ootd-card-phone-scroll">
                      { 
                        ootdList.map((product)=>(
                          <article className="w-[300px] h-[300px] flex-shrink-0 group cursor-pointer" key={product.id}>
                            <img src={`${import.meta.env.BASE_URL}${product.imgUrl}`} alt={`Product${product.id}`} className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'/>
                          </article>
                        ))
                      }
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
         </div>
    
      )
}