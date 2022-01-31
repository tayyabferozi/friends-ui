import type { NextPage } from "next";
import clsx from "clsx";
import Image from "next/image";
import styles from "../styles/MinimalLayout.module.scss";

const MinimalLayout: NextPage = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <Image src="/logo.svg" width={145} height={52} alt="logo" />
      </div>
      <div className={clsx(styles.main)}>
        <div className="container-fluid px-0">
          <div className="row gy-4">
            <div className="col-md-5 col-lg-6 col-xl-7">
              <img
                className={clsx(styles.call, "w-100")}
                src="/call-2.png"
                alt="call"
              />

              <div className="d-flex align-items-center justify-content-center">
                <div className="call-btns-1">
                  <button className="bg-primary-1">
                    <img src="/call-mice-1.svg" alt="mice" />
                  </button>
                  <button>
                    <img src="/call-screen-1.svg" alt="screen" />
                  </button>
                  <button>
                    <img src="/call-video-1.svg" alt="video" />
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-7 col-lg-6 col-xl-5">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MinimalLayout;
