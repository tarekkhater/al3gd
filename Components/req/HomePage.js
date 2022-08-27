import styles from '../../styles/ReqHome.module.css'
import styless from '../../styles/FormRequest.module.css'
import 'bootstrap/dist/css/bootstrap.css';
import {useSession} from 'next-auth/react'
import Link from 'next/link';
import {modalState, PostIdState} from '../../atom/modalAtom';
import Modal from 'react-modal';
import { useRecoilState } from "recoil"
import { useState } from 'react';
import img from '../../Images/WhatsApp Image 2022-08-26 at 9.08.47 PM.jpeg'
import Image from 'next/image';
export default function Body() {
    const {data : session} = useSession();
    const [show , setShow] = useState(false)
    console.log(session)
  return (
    <div className={styles.container}>
        <div>
        <Image src={img} alt='logo' width='110px' height="110px"  style={{marginLeft:"20px" , marginTop:"30px" , }} />
        <img src="https://jawharatarabnews.net/assets/2022-04-17/images/73462_1_1650225937.png" alt="logo" className={styles.img2}   /> 
          <div className={styles.title}>
            <h1>مرحبا بك {session?.user?.name}</h1>
            <p>يسعدنا انك من عملائنا</p>
            <button type="button" className="btn btn-primary" onClick={()=>setShow(true)} >
              تنفيذ طلب جديد
          </button>
          </div>
          
        </div>
     {show &&(
       <div> <Modal isOpen={show} className={styless.model}>
       <div style={{paddingTop:"5px"}}>
       <div className={styless.profile}>
            <h2>تنبيه</h2>
            <p>لتسجيل العقد يرجي تجهيز البيانات الاتية:</p>
            <ol>
              <li>رقم صك المبني وتاريخه</li>
              <li>هوية المؤجر والمستأجر وارقام جوالاتهم</li>
              <li>العنوان الوطني للعقار المراد تأجيره</li>
            </ol>
            <h3>علماً أن الموظف سوف يتواصل معك لمراجعة البيانات والتعديل أن وجد</h3>
        </div > 
         </div>
         
             <button type="button"id={styless.btn1} className="btn btn-primary"  onClick={()=>{setShow(false)}}>الغاء</button>   
             <button type="button"id={styless.btn} className="btn btn-primary" ><Link href="/form"> استمرار</Link></button>
   </Modal>
    </div>
      )}
        

    </div>
  )
}