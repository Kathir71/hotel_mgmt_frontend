import { Link } from "react-router-dom";

import styles from "../styles/decide.module.css";

const ChooseSignup = () => {
    return (
        <>
 <div className={styles.content}>
        <div className={styles.contentSidebar}>
            <div className={styles.cl}>
                <div className={styles.head}><p className={styles.headpara}>Matching customers <br/> with great Hotels</p></div>
                <div className={styles.col}><p className={styles.colhead}><strong>For Managers</strong></p><p>We are market leading hotel reservation website and helps in increasing your customers.</p>
                <center>
                <Link to = "/hregister"><button className={styles.button1}><span>REGISTER</span></button></Link>
                </center>
                </div>
                <div className={styles.col}><p className={styles.colhead}><strong>For Users</strong></p><p>We provide over 2 million affordable and high quality hotels</p>
                <center>
                <Link to = "/signup"><button className={styles.button2}><span>SIGN UP</span></button></Link>
                </center>
                </div>
            </div>
            <div className={styles.image}>
                <img src="/homeimages/sketchphoto.jpg" />
            </div>
        </div>
    </div>
   </> 
    )
}
export default ChooseSignup;