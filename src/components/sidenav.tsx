import React from "react";
import styles from "./sidenav.module.css";
import { SidenavData } from "./SidenavData";
function sidenav() {
  return (
    <div className={styles.sidenav}>
      <ul className={styles.sidenavlist}>
        {SidenavData.map((val, key) => {
          return (
            <li
              key={key}
              className={styles.row}
              onClick={() => {
                window.location.pathname = val.link;
              }}
            >
              {" "}
              <div>{val.icon}</div>
              <div></div>
            </li>
          );
        })}
        <li className={styles.avataricon}>
          <img src="../assets/Avatar.svg" />
        </li>
      </ul>
    </div>
  );
}

export default sidenav;
