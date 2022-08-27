import Sidebar from './Sidebar'
import Widget from './Widget'
import Revenue from './Revenue'
import Graph from './Graph'
import Header from './Header'
import styles from '../../styles/Dashboard.module.css'
export default function Home() {
  return (
    <div className="container" id={styles.container} >
        <div className="row" >
            <div className="col-3" >
                <Sidebar />
            </div>
            <div className="col-9">
                <Header />
                <Widget />
                <div className="row" >
                  <div className="col-4">
                    <Revenue />
                  </div>
                  <div >
                  <Graph />
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}
