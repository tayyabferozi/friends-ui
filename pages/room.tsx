import type { NextPage } from "next";
import { useState } from "react";
import clsx from "clsx";
import MinimalLayout from "../layouts/MinimalLayout";

const Enter: NextPage<{ children: any }> = ({ children }) => {
  const [messageTabActive, setMessageTabActive] = useState(false);

  const toggleTab = (bool: boolean) => {
    setMessageTabActive(bool);
  };

  return (
    <MinimalLayout>
      <div className="form-1">
        <div className="tabs">
          <div
            onClick={() => toggleTab(true)}
            className={clsx("tab", { active: messageTabActive })}
          >
            Messages (3)
          </div>
          <div
            onClick={() => toggleTab(false)}
            className={clsx("tab", { active: !messageTabActive })}
          >
            Participants (1)
          </div>
        </div>

        {messageTabActive ? (
          <>
            <div className="label-container">
              <div className="text">Messages</div>
            </div>
            <div className="messages">
              <div className="message">
                <div className="img">
                  <img src="/you.png" alt="me" />
                </div>
                <div className="text">
                  <div className="name">Octavia</div>
                  <div className="content">Hi,</div>
                </div>
              </div>
              <div className="message">
                <div className="img">
                  <img src="/you.png" alt="me" />
                </div>
                <div className="text">
                  <div className="name">Octavia</div>
                  <div className="content">Can you heat me?</div>
                </div>
              </div>
              <div className="message me">
                <div className="img">
                  <img src="/me.png" alt="me" />
                </div>
                <div className="text">
                  <div className="name">You</div>
                  <div className="content">Hi,</div>
                </div>
              </div>
            </div>

            <div className="write-msg">
              <button className="img">
                <img src="/add-img.svg" alt="add-img" />
              </button>
              <input
                type="text"
                name=""
                id=""
                placeholder="Write a message ..."
              />
              <button className="send p-0">
                <img src="/send.svg" alt="send" />
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="label-container">
              <div className="text">In call</div>
            </div>
            <div className="participants">
              <div className="container-fluid">
                <div className="row gy-3">
                  <div className="col-6 col-md-4">
                    <img src="/call-3.png" alt="participant" />
                  </div>
                  <div className="col-6 col-md-4">
                    <img src="/call-3.png" alt="participant" />
                  </div>
                  <div className="col-6 col-md-4">
                    <img src="/call-3.png" alt="participant" />
                  </div>
                  <div className="col-6 col-md-4">
                    <img src="/call-3.png" alt="participant" />
                  </div>
                  <div className="col-6 col-md-4">
                    <img src="/call-3.png" alt="participant" />
                  </div>
                  <div className="col-6 col-md-4">
                    <img src="/call-3.png" alt="participant" />
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </MinimalLayout>
  );
};

export default Enter;
