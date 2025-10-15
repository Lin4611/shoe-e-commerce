import { useState } from 'react'
export default function Login(){
    const [tabStatus,setTabStatus] = useState('login')
    
    
    return(
        <div className="mx-auto">
            <div className="login-container">
                <article className="leftside-pic max-sm:bg-[url('/img/login-sm.png')]">
                    <img src="/img/banner-sm.png" alt="banner" className='w-full h-full object-cover rounded-xl max-sm:hidden'/>
                    <span className='text-display-2 text-white leading-tight tracking-default font-bold absolute top-[71px] left-10 max-sm:hidden'>URBNSTEP</span>
                    <span className='text-h4 font-bold leading-tight tracking-default text-neutral-500 absolute top-36 left-[125px] max-sm:hidden'>Your Step, Your Statement</span>
                </article>
                <div className="rightside-container">
                    <div className="rightside-title">
                        <h3 className='text-h3 font-bold leading-relaxed tracking-default'>歡迎！</h3>
                    </div>
                    <div className="rightside-btn-container">
                        <button type="button" className={`${tabStatus === 'login' ? 'btn-login-option' : 'btn-register-option'}`} onClick={()=>{setTabStatus('login')}}>登入</button>
                        <button type="button" className={`${tabStatus === 'register' ? 'btn-login-option' : 'btn-register-option'}`} onClick={()=>{setTabStatus('register')}}>註冊</button>
                    </div>
                    <div className="sso-option-btn-cotainer">
                        <button type="button" className='sso-btn'>
                            <img src="/img/facebook.svg" alt="facebook"/>
                            <span className='text-body-md font-normal leading-relaxed tracking-default'>Facebook 登入</span>
                        </button>
                        <button type="button" className='sso-btn'>
                            <img src="/img/apple.svg" alt="apple"/>
                            <span className='text-body-md font-normal leading-relaxed tracking-default'>Apple 登入</span>
                        </button>
                        <button type="button"  className='sso-btn'>
                            <img src="/img/google.svg" alt="google"/>
                            <span className='text-body-md font-normal leading-relaxed tracking-default'>Google 登入</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}