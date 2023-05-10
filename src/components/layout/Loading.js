import styles from "./Loading.module.css"
import loading from "../../img/loading.svg"

function Loading() {
    return (
        <div className={styles.louder_container}>
            <img className={styles.loader} src={loading} alt="loading"></img>
        </div>
    )
}

export default Loading