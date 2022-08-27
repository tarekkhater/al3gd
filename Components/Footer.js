import React from 'react'
import Link from 'next/link';
import styles from '../styles/Footer.module.css';
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from 'react';


function Footer() {
    useEffect(()=>{
        import("bootstrap/dist/js/bootstrap");
    },[])
  return (
    <div className={styles.containerr}>
    <footer className={styles.footer2} id="footer2">
            <div className={styles.container}>
                <div className={styles.row}>
                    <div className={styles.textCenter}>
                        <h5>للتواصل: 0530712710</h5>
                        <h2>  General@allgm.net : ايميل</h2>
                        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"></link>
                    </div>
                   
                </div>
            </div>
        </footer>
        <div className={styles.footercopy}>
            
                © 2021. GHASAN Real-State. All rights reserved.
            
        </div>
    </div>
  )
}
export default Footer;