import React from "react";
import styles from "@/components/WallsContent/WallsContent.module.css";
import Link from "next/link";

const WallsPdf = () => {
  return (
    <>
      <Link href="/walls"><button className={styles.backLink}>Назад</button></Link>
      <iframe src="/walls-3-21.pdf#view=FitH" className={styles.pdf} />
    </>
  );
};

export default WallsPdf;