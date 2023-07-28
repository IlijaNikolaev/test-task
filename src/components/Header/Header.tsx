import {Container} from "@mui/material";
import styles from './css/index.module.scss'

const Header = () => {
    return(
        <div className={styles.Header}>
            <Container>
                <img src="/images/giperlogo.png" alt="logo" className={styles.HeaderLogo}/>
            </Container>
        </div>
    )
}

export default Header