import type { NextPage } from "next";
import { useState } from "react";
import Img from "next/image";
import clsx from "clsx";
import Layout from "../layouts/Layout";

import styles from "../styles/Home.module.scss";
import Modal from "../components/Modal";

const Home: NextPage = () => {
  const [resp, setResp] = useState(false);
  const [modalActive, setModalActive] = useState(false);
  const [popupActive, setPopupActive] = useState(false);

  const showModal = () => {
    setModalActive(true);
  };

  const hideModal = () => {
    setModalActive(false);
  };

  const togglePopup = () => {
    setPopupActive((prevState) => !prevState);
  };

  const toggleResp = () => {
    setResp((prevState) => !prevState);
  };

  return (
    <Layout toggleResp={toggleResp} showModal={showModal}>
      <div className={clsx(styles.home, "pt-4 px-3 px-md-5")}>
        <Modal active={modalActive} hideModal={hideModal}>
          <div className="container-fluid">
            <div className="row">
              <div className="col-6 col-sm-4 col-md-3">
                <div className={styles.newCardContainer}>
                  <div className={styles.new}>
                    <div className={styles.img}></div>
                    <div className={styles.title}>New</div>
                  </div>
                  <img
                    className={styles.plus}
                    src="/plus-line.svg"
                    alt="plus"
                  />
                </div>
              </div>
              <div className="col-6 col-sm-4 col-md-3">
                <div className={styles.newCardContainer}>
                  <div className={styles.new}>
                    <div className={styles.img}></div>
                    <div className={styles.title}>New</div>
                  </div>
                  <img
                    className={styles.plus}
                    src="/plus-line.svg"
                    alt="plus"
                  />
                </div>
              </div>
              <div className="col-6 col-sm-4 col-md-3">
                <div className={styles.newCardContainer}>
                  <div className={styles.new}>
                    <div className={styles.img}></div>
                    <div className={styles.title}>New</div>
                  </div>
                  <img
                    className={styles.plus}
                    src="/plus-line.svg"
                    alt="plus"
                  />
                </div>
              </div>
              <div className="col-6 col-sm-4 col-md-3">
                <div className={styles.newCardContainer}>
                  <div className={styles.new}>
                    <div className={styles.img}></div>
                    <div className={styles.title}>New</div>
                  </div>
                  <img
                    className={styles.plus}
                    src="/plus-line.svg"
                    alt="plus"
                  />
                </div>
              </div>
              <div className="col-6 col-sm-4 col-md-3">
                <div className={styles.newCardContainer}>
                  <div className={styles.new}>
                    <div className={styles.img}></div>
                    <div className={styles.title}>New</div>
                  </div>
                  <img
                    className={styles.plus}
                    src="/plus-line.svg"
                    alt="plus"
                  />
                </div>
              </div>
              <div className="col-6 col-sm-4 col-md-3">
                <div className={styles.newCardContainer}>
                  <div className={styles.new}>
                    <div className={styles.img}></div>
                    <div className={styles.title}>New</div>
                  </div>
                  <img
                    className={styles.plus}
                    src="/plus-line.svg"
                    alt="plus"
                  />
                </div>
              </div>
              <div className="col-6 col-sm-4 col-md-3">
                <div className={styles.newCardContainer}>
                  <div className={styles.new}>
                    <div className={styles.img}></div>
                    <div className={styles.title}>New</div>
                  </div>
                  <img
                    className={styles.plus}
                    src="/plus-line.svg"
                    alt="plus"
                  />
                </div>
              </div>
              <div className="col-6 col-sm-4 col-md-3">
                <div className={styles.newCardContainer}>
                  <div className={styles.new}>
                    <div className={styles.img}></div>
                    <div className={styles.title}>New</div>
                  </div>
                  <img
                    className={styles.plus}
                    src="/plus-line.svg"
                    alt="plus"
                  />
                </div>
              </div>
            </div>
          </div>
        </Modal>
        <div className={clsx(styles.popup, { [styles.active]: popupActive })}>
          <div className={styles.popupClose} onClick={togglePopup}>
            <img
              className={styles.popupCloseImg}
              src="/modal-close.svg"
              alt="modal-close"
            />
          </div>
          <div className={clsx(styles.newCardContainer, "mb-4")}>
            <div className={styles.new}>
              <div className={styles.img}></div>
              <div className={styles.title}>New</div>
            </div>
            <img className={styles.plus} src="/plus-line.svg" alt="plus" />
          </div>
          <div className={styles.newCardContainer}>
            <div className={styles.new}>
              <div className={styles.img}></div>
              <div className={styles.title}>New</div>
            </div>
            <img className={styles.plus} src="/plus-line.svg" alt="plus" />
          </div>
        </div>
        <div className="page-container">
          <div className={clsx({ [styles.landing]: resp })}>
            <div className="container-fluid">
              <div className="row gx-md-0">
                <div className="col-5"></div>
                <div className="col-7"></div>
                <div className="col-sm">
                  <div className="buttons mb-2 d-flex justify-content-center align-items-center">
                    <button className={styles.arrowBtn}>
                      <img src="/arrow-btn-left.svg" alt="arrow" />
                    </button>
                    <button
                      onClick={togglePopup}
                      className={clsx(
                        styles.new,
                        styles.newBtn,
                        "btn-primary shadowed py-0 justify-content-center"
                      )}
                    >
                      New
                    </button>
                    <button className={styles.arrowBtn}>
                      <img src="/arrow-btn-right.svg" alt="arrow" />
                    </button>
                  </div>

                  <div className={styles.cardPlaceholder}></div>
                </div>
                <div
                  className="col-sm-1 py-3 py-sm-0 flex-shrink-0"
                  style={{ minWidth: "85px" }}
                >
                  <div className="d-flex align-items-center justify-content-center h-100 px-0 px-md-2">
                    <button className="p-0 mx-1">
                      <Img src="/settings.svg" width={40} height={40} />
                    </button>
                    <button className="p-0 mx-1">
                      <Img
                        src="/arrow-double-right.svg"
                        width={40}
                        height={40}
                      />
                    </button>
                  </div>
                </div>
                <div className="col d-flex align-items-end">
                  <div className={styles.cardPlaceholder}></div>
                </div>
                <div className="col-12">
                  <div
                    className={clsx(
                      styles.callOptions,
                      "d-flex justify-content-center align-items-center mt-3"
                    )}
                  >
                    <button className="btn-primary btn-shadowed btn-rounded">
                      <Img src="/mice.svg" width={25} height={37} />
                    </button>
                    <button className="btn-primary btn-shadowed btn-rounded">
                      <Img src="/video.svg" width={40} height={23} />
                    </button>
                    <button className="btn-primary btn-shadowed btn-rounded">
                      <Img src="/screenshare.svg" width={33} height={33} />
                    </button>
                    <button className="btn-primary btn-shadowed btn-rounded">
                      <Img src="/settings-white.svg" width={33} height={33} />
                    </button>
                    <button className="btn-primary btn-shadowed btn-rounded">
                      <Img src="/hide.svg" width={32} height={27} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
