import React from 'react'
import Link from 'next/link';
import styles from '../styles/Nav.module.css';
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from 'react';
import Image from 'next/dist/client/image';
import {useSession} from 'next-auth/react';
import img from '../Images/WhatsApp Image 2022-08-26 at 9.08.47 PM.jpeg'
export default function Nav() {
  const {data:session} = useSession();
    useEffect(()=>{
        import("bootstrap/dist/js/bootstrap");
    },[])
  return (
    <div className={styles.container}>
        <nav className="navbar navbar-expand-lg " >
  <div className="container-fluid" id={styles.contain}>
        <Image src={img} alt='logo' width='90px' height='90px'  /> <p>GHASAN </p>
        <span>Real State</span>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      {session? (
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item" id={styles.links}>
          <Link className="nav-link active" aria-current="page" href="/">Home </Link>
        </li>
        <li className="nav-item" id={styles.links}>
          <Link className="nav-link" href="/#footer2">Contact</Link>
        </li>
        <li className="nav-item" id={styles.links}>
          <Link className="nav-link" href="/dashboard">dashboard</Link>
        </li>
      </ul>
      ) : (
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item" id={styles.links}>
          <Link className="nav-link active" aria-current="page" href="/signin">Login </Link>
        </li>
      </ul>
      )}
      
      
    </div>
  </div>
</nav>
    </div>
  )
}
