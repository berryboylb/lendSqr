import React from "react";
import { User } from "../../reducers/users";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import solid from "@fortawesome/free-solid-svg-icons";
import { faStar, IconDefinition } from "@fortawesome/free-regular-svg-icons";
import styles from "./css/styles.module.css";
type Props = {
  icon: IconDefinition;
  user: User | null;
  setCurrentTab: React.Dispatch<React.SetStateAction<number>>;
  currenTab: number;
};

const options: string[] = [
  "General Details",
  "Documents",
  "Bank Details",
  "Loans",
  "Savings",
  "App and System",
];

const index: React.FC<Props> = ({ user, setCurrentTab, currenTab, icon }) => {
  return (
    <div className={styles.con__}>
      <div className={styles.top}>
        <div className={styles.imgNameCon}>
          <div className={styles.imgCon}>
            <img src={user?.profile.avatar} alt={user?.profile.avatar} />
          </div>
          <div className={styles.nameCon}>
            <h3>
              {user?.profile.firstName} {user?.profile.lastName}
            </h3>
            <p>{user?.accountNumber}</p>
          </div>
        </div>
        <div className={styles.tier}>
          <h4>User’s Tier</h4>
          <div className={styles.rate}>
            <FontAwesomeIcon className={styles.first} icon={icon} />
            <FontAwesomeIcon className={styles.star} icon={faStar} />
            <FontAwesomeIcon className={styles.star} icon={faStar} />
          </div>
        </div>
        <div className={styles.bank__}>
          <h1>₦ {user?.accountBalance}</h1>

          <p> {user?.profile.bvn}/Providus Bank</p>
        </div>
      </div>
      <div className={styles.bottom}>
        {options.map((item, i) => (
          <button
            key={i}
            style={
              currenTab === i
                ? {
                    color: "#39CDCC",
                    borderBottom: "2px solid #39CDCC",
                  }
                : {}
            }
            onClick={() => setCurrentTab(i)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default index;
