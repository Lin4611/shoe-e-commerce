const collectionList=[
    {
        title:'PLATFORM 404',
        size:38,
        color:'Navy',
        price:'NT$2,600',
        imgUrl:'img/choose-blue.png'
    },
    {
        title:'BOOMLOK',
        size:38,
        color:'White',
        price:'NT$3,200',
        imgUrl:'img/best-4.png'
    },
    {
        title:'MELTY KISS',
        size:38,
        color:'Violet',
        price:'NT$4,000',
        imgUrl:'img/best-1.png'
    },
]
export default function Collection(){
    return (
        <div className="mx-auto">
            <div className="collection-list-container">
                <div className="collection-list-title-container">
                    <article className='w-[40px] h-[40px] flex items-center justify-center rounded-full bg-primary-300 '>
                        <img src={`${import.meta.env.BASE_URL}img/collection-icon.svg`} alt="" />
                    </article>
                    <h2 className="text-h3 font-bold leading-tight tracking-default max-sm:text-h4">我的收藏</h2>
                </div>
                <div className="open-time-banner">
                    <img src={`${import.meta.env.BASE_URL}img/truck.svg`} alt="" className='w-[24px] h-[24px]'/>
                    <span className='text-label-md text-primary-400 leading-relaxed tracking-default max-sm:whitespace-pre-line'>
                        {`門市營業時間：
                        週一至週五 10:00 - 22:00`}
                    </span>
                </div>
                {   
                    collectionList.map((p,index)=>(
                        <article className='collection-card' key={index}>
                            <img src={`${import.meta.env.BASE_URL}${p.imgUrl}`} alt="" className='w-[120px] h-auto aspect-square object-cover' />
                            <div className="collection-card-text">
                                <h5 className='text-h5 font-bold leading-relaxed tracking-default'>{p.title}</h5>
                                <div className="text-container">
                                    <span className='text-body-md text-neutral-600 leading-relaxed tracking-default font-normal'>尺寸</span>
                                    <span className='text-label-md leading-relaxed'>{p.size}</span>
                                </div>
                                <div className="text-container">
                                    <span className='text-body-md text-neutral-600 leading-relaxed tracking-default font-normal'>顏色</span>
                                    <span>{p.color}</span>
                                </div>
                                <div className="text-container w-full justify-end-safe">
                                    <span className='text-h6 font-bold leading-relaxed tracking-default'>{p.price}</span>
                                </div>

                            </div>
                        </article>
                    ))  
                }
                <button type="button" className='btn-quick-try'>
                    立即預約門市試穿
                </button>
            </div>
        </div>
    )
}