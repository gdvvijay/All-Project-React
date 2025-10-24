import { useRef } from 'react'
import mobileWithCart from '../assets/mobileWithCart.png'
import { toast } from 'react-toastify'
import useSignUpContext from '../Hooks/useSignUpContext'
import { useLocation, useNavigate } from 'react-router-dom'


export default function LogIn(){
const emailRef=useRef()
const passwordRef=useRef()
const [signUpAuth,setSignUpAuth]=useSignUpContext()
const location=useLocation()
const navigate=useNavigate()
     function formSubmission(e){
        e.preventDefault()
             const email=emailRef.current.value
        const password=passwordRef.current.value
            const isEmailAvailable=localStorage.getItem('EMAIL')
    const isPasswordAvailable=localStorage.getItem('PASSWORD')
     
     if(isEmailAvailable === email && isPasswordAvailable === password){
        toast('login successful')
        setSignUpAuth(true)
        if(location.state?.from==='product'){
            navigate('/productdetails',{state:location.state?.data,replace: true })
        }
        if(location.state?.data==null){
            navigate('/account/myprofile')
        }
     }else{
        toast('User is available')
     }

    }
    return(
         <section className="sing-up-container max-w-7xl pr-3.5">
                    <div className="w-full flex justify-between">
                        <div className="image-container w-full basis-[65%] max-sm:basis-[58%] "><img src={mobileWithCart} alt="mobile with cart image"/></div>
                        <div className="form-container w-full basis-[42%] flex flex-col max-w-[330px] max-lg:max-w-[280px] max-sm:max-w-[250px] gap-y-8 max-lg:gap-y-4 max-sm:gap-y-1 justify-center pl-2 max-sm:pl-0.5 max-[400px]:mt-2">
                            
                                <h1 className="font-[Inter] text-4xl font-medium max-lg:text-[28px] max-md:text-[22px] max-sm:text-[13px]">Log in to Exclusive</h1>
                                <h5 className="font-[poppins] max-lg:text-sm max-md:text-[10px] max-sm:text-[4px]">Enter your details below</h5>
                                <form className="flex flex-col gap-y-6.5 max-lg:gap-y-4 max-sm:gap-y-1 font-[Poppins] max-lg:text-sm max-md:text-[12px] max-sm:text-[7px]">
                                    <input ref={emailRef} type="text" className="outline-none border-b-2 border-[#00000048]" placeholder="Email and Phone Number"/>
                                    <input ref={passwordRef} type="password" className="outline-none border-b-2 border-[#00000048]" placeholder="Password"/>
                                    <div className="w-full flex justify-between"><button className="bg-[#DB4444] w-full max-w-[143px]  h-14 max-lg:h-12 max-md:h-10 max-sm:h-4 rounded font-[Poppins] font-medium text-[#FAFAFA] cursor-pointer" onClick={formSubmission}>Log In</button><button className="text-[#DB4444] w-full">Forget Password?</button></div>
                                    
                                </form>
                        </div>
                    </div>
                </section>
    )
}