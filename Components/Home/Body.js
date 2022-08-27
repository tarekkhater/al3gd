import Image from 'next/image'
import React from 'react'
import styles from '../../styles/Body.module.css'
import 'bootstrap/dist/css/bootstrap.css';
import {useSession} from 'next-auth/react'
import Link from 'next/link';
import img from '../../Images/WhatsApp Image 2022-08-26 at 9.08.47 PM.jpeg'
export default function Body() {
    const {data : session} = useSession();
    console.log(session)
  return (
    <div className={styles.container}>
      <div className={styles.img}>
        <Image src={img} alt='logo' width='' height=''  /> 
      </div>
      <img src="https://jawharatarabnews.net/assets/2022-04-17/images/73462_1_1650225937.png" alt="logo" className={styles.img2}   />
      <div className={styles.text}>
        <div className={styles.title}>
            <h1>العقد الإلكتروني</h1>
            <p>لتسجيل العقود الإلكترونية في منصة ايجار التابعة لوزارة الإسكان وتوثيقها من بوابة أبشر</p>
        </div>
        <button type="button" className="btn btn-primary" >
            <Link href="/signin">تسجيل الدخول</Link>
        </button>
        </div>

    </div>
  )
}
