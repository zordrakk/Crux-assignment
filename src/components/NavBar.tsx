import { useState } from "react";
import AddWidget from "../components/AddWidget";
import styles from "./nav.module.css";

function NavBar() {
  const [openAddWidget, setOpenAddWidget] = useState(false);

  return (
    <div>
      <nav className={styles.navbar}>
        <div className={styles.navbar_com}>
          <div className={styles["logo-container"]}>
            <a className="" href="#">
              <img src="../assets/home.svg" alt="" />
            </a>
          </div>
          <div className={styles.rightnav}>
            <div className={styles.filters}>
              <button>
                <a href="#">Overview</a>
              </button>
              <button>
                <a href="#">Customer</a>
              </button>
              <button>
                <a href="#">Setting</a>
              </button>
            </div>
            <div className={styles.rightnavbar}>
              <button
                className="openModalBtn"
                onClick={() => {
                  setOpenAddWidget(true);
                }}
              >
                <a href="#">Add Widget</a>
              </button>
              <a href="#">
                <img src="../assets/setting.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </nav>
      {openAddWidget && <AddWidget closeAddWidget={setOpenAddWidget} />}
    </div>
  );
}

export default NavBar;
