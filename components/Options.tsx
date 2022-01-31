import type { NextPage } from "next";
import { useState } from "react";
import clsx from "clsx";
import styles from "../styles/Options.module.scss";

const Options: NextPage = () => {
  const [dropDownActive, setDropdownActive] = useState(false);
  const [sideNav, setSideNav] = useState(false);

  const toggleDropdown = () => {
    setDropdownActive((prevState) => !prevState);
  };

  const toggleSideNav = () => {
    setSideNav((prevState) => !prevState);
  };

  return (
    <>
      {!sideNav && dropDownActive && <DropDown />}
      <div className={clsx(styles.options, { [styles.side]: sideNav })}>
        <div className={styles.main}>
          <button
            className={clsx({ [styles.active]: dropDownActive })}
            onClick={toggleDropdown}
          >
            <div className={styles.imgContainer}>
              <img className={styles.img} src="/layers.svg" alt="layers" />
              <img
                className={clsx(styles.active, styles.img)}
                src="/layers-dark.svg"
                alt="layers"
              />
            </div>
            <div className={styles.text}>Layers</div>
            {dropDownActive && <DropDown />}
          </button>
          <button onClick={toggleSideNav}>
            <div className={styles.imgContainer}>
              <img className={styles.img} src="/chat.svg" alt="chart" />
              <img
                className={clsx(styles.active, styles.img)}
                src="/chat-dark.svg"
                alt="chart"
              />
            </div>
            <div className={styles.text}>Chat</div>
          </button>
          <button>
            <div className={styles.imgContainer}>
              <img className={styles.img} src="/participant.svg" alt="layers" />
              <img
                className={clsx(styles.active, styles.img)}
                src="/participant-dark.svg"
                alt="layers"
              />
            </div>
            <div className={styles.text}>Participant</div>
          </button>
          <button>
            <div className={styles.imgContainer}>
              <img className={styles.img} src="/webcam.svg" alt="layers" />
              <img
                className={clsx(styles.active, styles.img)}
                src="/webcam-dark.svg"
                alt="layers"
              />
            </div>
            <div className={styles.text}>Webcam</div>
          </button>
          <button>
            <div className={styles.imgContainer}>
              <img className={styles.img} src="/add-imgs.svg" alt="layers" />
              <img
                className={clsx(styles.active, styles.img)}
                src="/add-imgs-dark.svg"
                alt="layers"
              />
            </div>
            <div className={styles.text}>Images</div>
          </button>
          <button>
            <div className={styles.imgContainer}>
              <img className={styles.img} src="/add-video.svg" alt="layers" />
              <img
                className={clsx(styles.active, styles.img)}
                src="/add-video-dark.svg"
                alt="layers"
              />
            </div>
            <div className={styles.text}>Vidoes</div>
          </button>
          <button>
            <div className={styles.imgContainer}>
              <img className={styles.img} src="/background.svg" alt="layers" />
              <img
                className={clsx(styles.active, styles.img)}
                src="/background-dark.svg"
                alt="layers"
              />
            </div>
            <div className={styles.text}>Background</div>
          </button>
          <button>
            <div className={styles.imgContainer}>
              <img className={styles.img} src="/banner.svg" alt="layers" />
              <img
                className={clsx(styles.active, styles.img)}
                src="/banner-dark.svg"
                alt="layers"
              />
            </div>
            <div className={styles.text}>Banner</div>
          </button>
          <button>
            <div className={styles.imgContainer}>
              <img className={styles.img} src="/studio-mode.svg" alt="layers" />
              <img
                className={clsx(styles.active, styles.img)}
                src="/studio-mode-dark.svg"
                alt="layers"
              />
            </div>
            <div className={styles.text}>Studio Mode</div>
          </button>
          <button>
            <div className={styles.imgContainer}>
              <img className={styles.img} src="/default.svg" alt="layers" />
              <img
                className={clsx(styles.active, styles.img)}
                src="/default-dark.svg"
                alt="layers"
              />
            </div>
            <div className={styles.text}>Default</div>
          </button>
        </div>
      </div>
    </>
  );
};

export default Options;

const DropDown = () => {
  return (
    <div className={styles.dropdown}>
      <h1 className="text-center">All Layers</h1>

      <ul>
        <li>
          <div className={styles.left}>
            <img src="/layers-item.svg" alt="layers-item" />
            <h2>Background</h2>
          </div>
          <div className={styles.right}>
            <button>
              <img src="/arrow-right.svg" alt="arrow" />
            </button>
          </div>
        </li>
        <li>
          <div className={styles.left}>
            <img src="/layers-item.svg" alt="layers-item" />
            <h2>Layer 1</h2>
          </div>
          <div className={styles.right}>
            <button>
              <img src="/arrow-right.svg" alt="arrow" />
            </button>
          </div>
        </li>
        <li>
          <div className={styles.left}>
            <img src="/layers-item.svg" alt="layers-item" />
            <h2>Layer 2</h2>
          </div>
          <div className={styles.right}>
            <button>
              <img src="/arrow-right.svg" alt="arrow" />
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
};
