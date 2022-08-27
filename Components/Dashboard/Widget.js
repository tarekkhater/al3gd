import styles from "../../styles/Widget.module.css";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
export default function Widget() {
  return (
    <div className="container" id={styles.container}>
        <div className="row" id={styles.widgets}>
            <div className="col-3" id={styles.widget}>
                <div className={styles.left}>
                    <span className={styles.title}>USERS</span>
                    <span className={styles.counter}>
                     100
                    </span>
                    <span className={styles.link}>See all users</span>
                </div>
                <div className={styles.right}>
                    <div className={styles.percentagePositive}>
                        <KeyboardArrowUpIcon />
                        20 %
                    </div>
                        <PersonOutlinedIcon className={styles.icon} style={{ color: "crimson",  backgroundColor: "rgba(255, 0, 0, 0.2)", }}/>
                </div>
                </div>
            <div className="col-3" id={styles.widget} >
                <div className={styles.left}>
                    <span className={styles.title}>ORDERS</span>
                    <span className={styles.counter}>
                        100
                    </span>
                    <span className={styles.link}>View all orders</span>
                </div>
                <div className={styles.right}>
                    <div className={styles.percentagePositive}>
                        <KeyboardArrowUpIcon />
                        20 %
                    </div>
                        <ShoppingCartOutlinedIcon className={styles.icon} style={{ color: "goldenrod",  backgroundColor: "rgba(218, 165, 32, 0.2)", }}/>
                </div>
            </div>
            <div className="col-3" id={styles.widget} >
                <div className={styles.left}>
                    <span className={styles.title}>EARNINGS</span>
                    <span className={styles.counter}>
                      $100
                    </span>
                    <span className={styles.link}>View earnings</span>
                </div>
                <div className={styles.right}>
                    <div className={styles.percentagePositive}>
                        <KeyboardArrowUpIcon />
                        20 %
                    </div>
                        <MonetizationOnOutlinedIcon className={styles.icon} style={{ color: "green",  backgroundColor: "rgba(0, 128, 0, 0.2)", }}/>
                </div>
            </div>
            <div className="col-3" id={styles.widget} >
                <div className={styles.left}>
                    <span className={styles.title}>BALANCE</span>
                    <span className={styles.counter}>
                      $100
                    </span>
                    <span className={styles.link}>See details</span>
                </div>
                <div className={styles.right}>
                    <div className={styles.percentagePositive}>
                        <KeyboardArrowUpIcon />
                        20 %
                    </div>
                        <AccountBalanceWalletOutlinedIcon className={styles.icon} style={{ color: "purple",  backgroundColor: "rgba(128, 0, 128, 0.2)", }}/>
                </div>
            </div>
        </div>
    </div>
  )
}
