import type { NextPage } from "next";
import clsx from "clsx";
import Image from "next/image";
import styles from "../styles/Enter.module.scss";
import MinimalLayout from "../layouts/MinimalLayout";

const Enter: NextPage<{ children: any }> = ({ children }) => {
  return (
    <MinimalLayout>
      <div className={clsx(styles.form, "form-1")}>
        <h2 className={styles.head}>Name</h2>
        <input type="text" placeholder="Name" />

        <h2 className={clsx(styles.head, "mt-3")}>Settings</h2>
        <div>
          <label htmlFor="mic">Microphone</label>
          <div className="d-flex">
            <div className="flex-grow-1">
              <div className="select-container">
                <select name="" id="">
                  <option value=""></option>
                </select>
              </div>
            </div>
            <div className="test">
              <div className="d-flex align-items-center">
                <Image src="/mic-test.svg" width={14} height={20} alt="mic" />
                <span>Test</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <label htmlFor="mic">Speakers</label>
          <div className="d-flex">
            <div className="flex-grow-1">
              <div className="select-container">
                <select name="" id="">
                  <option value=""></option>
                </select>
              </div>
            </div>
            <div className="test">
              <div className="d-flex align-items-center">
                <Image
                  src="/speaker-test.svg"
                  width={14}
                  height={20}
                  alt="mic"
                />
                <span>Test</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <label htmlFor="mic">Camera</label>
          <div className="d-flex">
            <div className="flex-grow-1">
              <div className="select-container">
                <select name="" id="">
                  <option value=""></option>
                </select>
              </div>
            </div>
            <div className="test">
              <div className="d-flex align-items-center">
                <Image
                  src="/camera-test.svg"
                  width={14}
                  height={20}
                  alt="mic"
                />
                <span>Test</span>
              </div>
            </div>
          </div>
        </div>

        <button className="ready">I&apos;m ready</button>
      </div>
    </MinimalLayout>
  );
};

export default Enter;
