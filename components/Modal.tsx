import type { NextPage } from "next";
import clsx from "clsx";
import styles from "../styles/Modal.module.scss";

const Modal: NextPage<{ children: any; hideModal: any; active: any }> = ({
  active,
  hideModal,
  children,
}) => {
  return (
    <>
      <div
        onClick={hideModal}
        className={clsx(styles.modalOverlay, { [styles.active]: active })}
      ></div>
      <div className={clsx(styles.modal, { [styles.active]: active })}>
        <div className={styles.close}>
          <div className={styles.modalClose} onClick={hideModal}>
            <img
              className={styles.modalCloseImg}
              src="/modal-close.svg"
              alt="modal-close"
            />
          </div>
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;
