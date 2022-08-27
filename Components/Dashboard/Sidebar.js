import styles from '../../styles/Sidebar.module.css'
import 'bootstrap/dist/css/bootstrap.css';
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import Link from 'next/link'
import { useEffect } from 'react';
export default function Sidebar() {
    
  return (
    <div className="container" id={styles.container}>
        <div className="row">
            <div className=" ">
                <nav  id={styles.nav} className="navbar-nav" >  
                    <h2 >Company</h2>
                    <ul>
                        <p>MAIN</p>
                       <li className="ropdown-item"><DashboardIcon className={styles.icon} /> <Link className="list-group-item list-group-item-action" href="#list-item-1"id="dashboard">dashboard</Link></li> 
                        <p>LISTS</p>
                        <li> <PersonOutlineIcon className={styles.icon}  />  <Link className="list-group-item list-group-item-action" href="#list-item-1"id="dashboard">Users</Link></li>
                        <li><StoreIcon className={styles.icon}  />  <Link className="list-group-item list-group-item-action" href="#list-item-1"id="dashboard">Products</Link></li>
                        <li> <CreditCardIcon className={styles.icon}  />  <Link className="list-group-item list-group-item-action" href="#list-item-1"id="dashboard">Orders</Link></li>
                        <li><LocalShippingIcon className={styles.icon}  />  <Link className="list-group-item list-group-item-action" href="#list-item-1"id="dashboard">Delievry</Link></li>
                        <p>USEFUL</p>
                        <li><InsertChartIcon className={styles.icon}  /> <Link className="list-group-item list-group-item-action" href="#list-item-1"id="dashboard">Stats</Link></li>
                        <li><NotificationsNoneIcon className={styles.icon}  /><Link className="list-group-item list-group-item-action" href="#list-item-1"id="dashboard">Notifications</Link></li>
                        <p>SERVICE</p>
                        <li> <SettingsSystemDaydreamOutlinedIcon className={styles.icon}  />  <Link className="list-group-item list-group-item-action" href="#list-item-1"id="dashboard">System Health</Link></li>
                        <li> <PsychologyOutlinedIcon className={styles.icon}  />  <Link className="list-group-item list-group-item-action" href="#list-item-1"id="dashboard">Logs</Link></li>
                        <li> <SettingsApplicationsIcon  className={styles.icon}  />  <Link className="list-group-item list-group-item-action" href="#list-item-1"id="dashboard">Settings</Link></li>
                        <p>USER</p>
                        <li><AccountCircleOutlinedIcon className={styles.icon}  /> <Link className="list-group-item list-group-item-action" href="#list-item-1"id="dashboard">Profile</Link></li>
                        <li><ExitToAppIcon  className={styles.icon}  /><Link className="list-group-item list-group-item-action" href="#list-item-1"id="dashboard">Logout</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
  )
}
