import { useState } from 'react'
const productdetail_pic_list=[
    {
        id:1,
        imgUrl:'img/product-detail-pic-1.png'
    },
    {
        id:2,
        imgUrl:'img/product-detail-pic-2.png'
    },
    {
        id:3,
        imgUrl:'img/product-detail-pic-3.png'
    },
    {
        id:4,
        imgUrl:'img/product-detail-pic-4.png'
    },
    {
        id:5,
        imgUrl:'img/product-detail-pic-5.png'
    },
    {
        id:6,
        imgUrl:'img/product-detail-pic-6.png'
    },
    {
        id:7,
        imgUrl:'img/product-detail-pic-7.png'
    },
    {
        id:8,
        imgUrl:'img/product-detail-pic-8.png'
    }
]
const size_btn_list=[
    {
        id:1,
        us:35,
        cm:22.5,
        status:'selected'
    },
    {
        id:2,
        us:36,
        cm:23.0,
        status:'default'
    },
    {
        id:3,
        us:37,
        cm:23.5,
        status:'default'
    },
    {
        id:4,
        us:38,
        cm:24.0,
        status:'default'
    },
    {
        id:5,
        us:39,
        cm:24.5,
        status:'default'
    },
    {
        id:6,
        us:40,
        cm:25.0,
        status:'default'
    },
    {
        id:7,
        us:41,
        cm:26.0,
        status:'default'
    },
    {
        id:8,
        us:42,
        cm:26.5,
        status:'default'
    },
    {
        id:9,
        us:43,
        cm:27.0,
        status:'disabled'
    }
]
const notice_detail_text=[
    {
        title:'商品材質',
        content:`鞋面：合成皮革（Synthetic Leather）
        內裡：透氣網布材質，提升舒適與排汗性
        鞋底：EVA 輕量發泡橡膠，具備良好緩震與止滑效果
        鞋帶：聚酯纖維，耐拉扯不易鬆脫`
    },
    {
        title:'購買須知',
        content:`商品顏色因螢幕顯示可能略有差異，請以實品為準。
        建議首次穿著前試穿確認尺寸，避免影響退換貨權益。
        本商品為限量發售，庫存有限，如需更換尺寸請儘早聯繫客服協助處理。`
    },
    {
        title:'保養方式',
        content:`建議以乾布或微濕軟布擦拭表面汙漬，避免機洗或長時間浸水。
        收納時請放置於乾燥通風處，避免日曬及高溫導致變形或龜裂。
        若需深層清潔，建議使用中性清潔劑並搭配柔刷輕刷，勿使用漂白水或強酸強鹼清潔劑。脫`
    },
]
const guessYoulikeItemsList=[
    {
        name:'VM001',
        price:'NT$2,600',
        imgUrl:'/img/ProductCard-3.png'
    },
    {
        name:'Melty Kiss',
        price:'NT$4,000',
        imgUrl:'/img/ProductCard-4.png'
    },
    {
        name:'BOOMBLOK',
        price:'NT$3,200',
        imgUrl:'/img/ProductCard-5.png'
    },
    {
        name:'Sugar Snap',
        price:'NT$4,000',
        imgUrl:'/img/ProductCard-8.png'
    }
]
export default function ProductDetail(){

    const [current, setCurrent] = useState(0); // 目前顯示的圖片 index
    const [touchStart, setTouchStart] = useState(0); // 記錄手指開始觸碰螢幕的位置（X 座標）
    const getBtnStatus =(status)=>{
        if (status === 'default')  return 'btn-option-default'
        if (status === 'selected') return 'btn-option-selected'
        if (status === 'disabled') return 'btn-option-disabled'
        return 'btn-option-default'
    }
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
            setCurrent((prev) => (prev + 1) % productdetail_pic_list.length);
          }
          
          // 如果手指往右滑超過 50px（開始位置 - 結束位置 < -50）
          if (touchStart - touchEnd < -50) {
            // 切換到上一張，如果是第一張就跳到最後一張
            // (prev - 1 + products.length) 確保不會出現負數
            setCurrent((prev) => (prev - 1 + productdetail_pic_list.length) % productdetail_pic_list.length);
          }
    };

    return (
        <div className="mx-auto">
            <div className="content-productdetail-container">
                <div className="leftside-pic-container">
                    {
                    productdetail_pic_list.map((p)=>(
                        <article key={p.id} className='max-w-[49%] bg-[#F0F3F7]'>
                            <img src={p.imgUrl} alt="" className='w-full aspect-square object-cover' />
                        </article>
                    ))
                    }
                </div>
                <div className="leftside-pic-container-phone">
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
                         productdetail_pic_list.map((p)=>(
                            <article key={p.id} className='w-full h-[375px] flex-shrink-0 bg-[#F0F3F7]'>
                                <img src={p.imgUrl} alt="" className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300' />
                            </article>
                        ))
                      }
                    </div>
                  </div>
                  </div>
                </div>
                <div className="rightside-detail-container">
                    <div className="rightside-detail-top">
                        <div className="category-container">
                            <div className="category-txt">
                                <span className='text-label-md text-neutral-600 max-sm:text-label-sm'>首頁</span>
                                <span className='text-neutral-300 font-bold'>/</span>
                                <span className='text-label-md text-neutral-600 max-sm:text-label-sm'>女鞋</span>
                                <span className='text-neutral-300 font-bold'>/</span>
                                <span className='text-label-md text-neutral-600 max-sm:text-label-sm'>滑板鞋</span>
                                <span className='text-neutral-300 font-bold'>/</span>
                                <span className='text-label-md  max-sm:text-label-sm'>Platform 404</span>
                            </div>
                            <h2 className='text-h2 font-bold'>Platform 404</h2>
                        </div>
                        <div className="rightside-detail-price-container">
                            <span className='text-h5 font-bold text-primary-400'>NT$2,600 </span>
                            <small className='text-body-sm text-neutral-500 line-through'>NT$3,200</small>
                        </div>
                        <div className="rightside-detail-text">
                            <p className='leading-relaxed tracking-default'>Platform 404 以柔和奶白為底，搭配深藍色皮革點綴，走在街上自帶回頭率。鞋型採用復古運動風輪廓，結合輕量厚底與柔軟泡棉鞋舌，兼顧美感與舒適。</p>
                            <p className='leading-relaxed tracking-default'>鞋身選用柔軟皮革材質，打造出清新卻不失個性的氛圍，並以鞋面透氣孔設計提升穿著體驗，兼顧質感與舒適度，適合日常長時間著用。無論是街頭穿搭、日常通勤或週末出遊都能輕鬆駕馭。</p>
                        </div>
                    </div>
                    <div className="rightside-choose-part">
                        <div className="rightside-choose-part-top">
                            <div className="rightside-choose-part-top-color">
                                <span className='text-body-md'>顏色</span>
                                <div className="rightside-choose-part-pic-container">
                                    <article className='rightside-choose-part-pic-card'>
                                        <img src="/img/choose-blue.png" alt="" className='h-[64px] w-auto aspect-square object-cover bg-[#F1F3F7]'/>
                                        <span className='text-neutral-600'>藍色</span>
                                    </article>
                                    <article className='rightside-choose-part-pic-card'>
                                        <img src="/img/choose-khaki.png" alt="" className='h-[64px] w-auto aspect-square object-cover bg-[#F1F3F7]'/>
                                        <span className='text-neutral-600'>卡其色</span>
                                    </article>
                                </div>
                            </div>
                            <div className="rightside-choose-part-size">
                                <span className='text-body-md'>尺寸</span>
                                <div className="rightside-choose-part-size-card-container">
                                    {   
                                        size_btn_list.map((btn)=>(
                                            <section key={btn.id}>
                                                <button type="button" className={getBtnStatus(btn.status)}>{`${btn.us}(${btn.cm}cm)`}</button>
                                            </section>
                                        ))
                                    }
                                </div>
                                <span className='text-danger-300 text-body-sm leading-relaxed tracking-default'>僅剩 3 雙</span>
                            </div>
                        </div> 
                        <div className="rightside-bottom-btns">
                            <button type="button" className='btn-add-like-default'>
                                <img src="/img/heart.svg" alt="heart-icon" className='w-[20px] h-[20px] aspect-square object-cover'/>
                                <span className='text-label-md leading-relaxed tracking-default max-sm:hidden'>加入收藏</span>
                            </button>
                            <button type="button" className='btn-reserve'>
                                <img src="/img/handbag.svg" alt="" className='w-[20px] h-[20px] aspect-square object-cover'/>
                                <span className='text-label-md leading-relaxed tracking-default'>門市預約試穿</span>
                            </button>
                        </div>
                    </div>
                    <div className="rightside-detail-notice-text">
                        {
                        notice_detail_text.map((item)=>(
                            <section className='notice-text-container'>
                                <p className='text-label-md leading-relaxed tracking-default'>{item.title}</p>
                                <span className='text-body-md font-normal leading-relaxed tracking-default text-neutral-600'>{item.content}</span>
                            </section>
                        ))}
                    </div>
                </div>
            </div>
            <div className="guess-you-like-items-contanier">
                    <h4 className='text-h4 leading-tight tracking-default font-bold'>你可能也喜歡...</h4> 
                    <div className="guess-you-like-items-card-container">
                        {
                            guessYoulikeItemsList.map((p,index)=>(
                                <article key={index} className='guess-you-like-items-card'>
                                    <img src={p.imgUrl} alt="" className='w-full h-[342px] aspect-square object-cover bg-[#F1F3F7]' />
                                    <div className="product-text">
                                        <span className='text-h6 font-bold leading-tight tracking-default'>{p.name}</span>
                                        <span className='text-label-md leading-relaxed tracking-default'>{p.price}</span>
                                    </div>
                                </article>
                            ))
                        }
                    </div>
                    <div className="guess-you-like-items-card-container-phone">
                        <div className="card-scroll">
                            {
                            guessYoulikeItemsList.map((p,index)=>(
                                <article key={index} className='w-[300px] h-[359px] flex-shrink-0 group cursor-pointer flex-col gap-3'>
                                    <img src={p.imgUrl} alt="" className='w-[300px] h-[300px] object-cover group-hover:scale-105 transition-transform duration-300'/>
                                    <div className="product-text">
                                        <span className='text-h6 font-bold leading-tight tracking-default'>{p.name}</span>
                                        <span className='text-label-md leading-relaxed tracking-default'>{p.price}</span>
                                    </div>
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
    )
}