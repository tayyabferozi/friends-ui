import type { NextPage } from "next";
import clsx from "clsx";
import Image from "next/image";
import Head from "../components/Head";
import styles from "../styles/Layout.module.scss";
import Options from "../components/Options";

const Layout: NextPage<{ toggleResp: any; showModal: any; children: any }> = ({
  toggleResp,
  showModal,
  children,
}) => {
  return (
    <div className={styles.container}>
      <Head toggleResp={toggleResp} />
      <button
        onClick={showModal}
        className={clsx(styles.btnList, "btn-shadowed")}
      >
        <Image width={32} height={18} src="/list.svg" alt="list" />
      </button>
      <main className={clsx(styles.main)}>{children}</main>
      <Options />
    </div>
  );
};

export default Layout;
