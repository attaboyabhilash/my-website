import React from "react"
import Image from "next/image"
import styles from "./Arrow.module.scss"

const index = () => {
    return (
        <div className={styles.main_block}>
            <div>
                <p className={styles.emptyPara}></p>
                <p className={styles.para}>Switch To Try The Dark Mode</p>
            </div>
            <Image
                src="/assets/right-up-arrow.svg"
                alt="arrow"
                width="40px"
                height="40px"
                priority={true}
            />
        </div>
    )
}

export default index
