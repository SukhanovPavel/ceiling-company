import React from "react";
import styles from "@/components/WallsContent/WallsContent.module.css";
import Link from "next/link";

const WallsPdf = () => {
  return (
    <>
      <Link href="/walls"><button className={styles.backLink}>Назад</button></Link>
      {/*<iframe*/}
      {/*  src="/walls-3-21.pdf#view=FitH"*/}
      {/*  // className={styles.pdf}*/}
      {/*  style={{ width: "600px", height: "600px" }}*/}
      {/*  frameborder="0" />*/}
      <embed
        name="174BEC0978D19BC4E3EACBCEB7256E46"
        style={{ position:"absolute", left: "0", top: "0", width: "400px", height: "100%" }}
        src="/walls-3-21.pdf#view=FitH"
        type="application/pdf"
        internalid="174BEC0978D19BC4E3EACBCEB7256E46"
      />
    </>
  );
};

export default WallsPdf;