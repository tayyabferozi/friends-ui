import type { NextPage } from "next";
import Img from "next/image";
import clsx from "clsx";
import styles from "../styles/Head.module.scss";

const Head: NextPage<{ toggleResp: any }> = ({ toggleResp }) => {
  return (
    <header className={styles.header}>
      <div className={styles.nav}>
        <Img
          className={styles.back}
          src="/arrow-back.svg"
          alt="arrow"
          width={26}
          height={20}
        />
        <h1 className="ms-2">Untitled Project</h1>
      </div>
      <div className={styles.options}>
        <button className={clsx("shadowed", styles.resp)} onClick={toggleResp}>
          <Img width={12} height={18} src="/mobile.svg" alt="mobile" />
          <span className="ms-3 d-flex align-items-center">
            <Img width={10} height={6} src="/dropdown-arrow.svg" alt="arrow" />
          </span>
        </button>
        <button className={clsx("shadowed d-md-block d-none", styles.live)}>
          Go Live
        </button>
        <button className={clsx("d-md-flex d-none", styles.platform)}>
          <Img width={18} height={18} src="/add.svg" alt="add" />
          <span className="ms-2"> Add Platform</span>
        </button>
        <div className="d-md-flex d-none align-items-center">
          <Img width={50} height={50} src="/language.svg" alt="language" />
        </div>
        <div className="d-md-flex d-none align-items-center">
          <Img width={50} height={50} src="/user.svg" alt="user" />
        </div>
      </div>
    </header>
  );
};

export default Head;
