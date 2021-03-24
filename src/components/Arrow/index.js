import React from "react"
import Image from "next/image"
import styles from "./Arrow.module.scss"

const index = () => {
    return (
        <div className={styles.main_block}>
            <Image
                src="/assets/up-arrow.svg"
                alt="arrow"
                width="50px"
                height="50px"
                priority={true}
            />
            <p className={styles.para}>Switch To Try The Dark Mode</p>
        </div>
    )
}

export default index
