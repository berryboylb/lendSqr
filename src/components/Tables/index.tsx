import React, { useState } from "react";
import styles from "./css/styles.module.css";
import { BarsFilter } from "../../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { ViewDetails, WhitelistUser, BlackListUser } from "../../assets";
import { useNavigate } from "react-router-dom";

type Users = {
  orgName: string;
  userName: string;
  email: string;
  phoneNumber: string;
  createdAt: string;
  status: "pending" | "inactive" | "blacklisted" | "active";
};

type Props = {
  array: any;
};

const index: React.FC<Props> = ({ array }) => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const checkStatus = (status: string) => {
    if (status === "pending")
      return { color: "#E9B200", background: "#f0e0ac" };
    if (status === "inactive")
      return { color: "#545F7D", background: "#ced5ea" };
    if (status === "blacklisted")
      return { color: "#E4033B", background: "#f3bbc9" };
    if (status === "active") return { color: "#39CD62", background: "#c0f1ce" };
  };
  return (
    <>
      {typeof activeIndex === "number" && (
        <div
          onClick={() => setActiveIndex(null)}
          className={styles.invisible_}
        ></div>
      )}
      {array && array.length && (
        <div className={styles.con_}>
          <table role="table">
            <thead className="">
              <tr role="row">
                <th role="cell" className={styles.org}>
                  organization <img src={BarsFilter} alt="fileter" />
                </th>
                <th role="cell">
                  Username <img src={BarsFilter} alt="fileter" />
                </th>
                <th role="cell">
                  Email <img src={BarsFilter} alt="fileter" />
                </th>
                <th role="cell">
                  Phone number <img src={BarsFilter} alt="fileter" />
                </th>
                <th role="cell">
                  Date joined <img src={BarsFilter} alt="fileter" />
                </th>
                <th role="cell">
                  Status <img src={BarsFilter} alt="fileter" />
                </th>
                <th role="cell" />
              </tr>
            </thead>
            <tbody>
              {array.map((item: any, i: number) => (
                <tr key={i} role="row">
                  <td role="cell" className={styles.name___}>
                    {item.orgName}
                  </td>
                  <td role="cell" className={styles.name__}>
                    {item.userName}
                  </td>
                  <td role="cell" className={styles.email__}>
                    {item.email}
                  </td>
                  <td role="cell" className={styles.name__}>
                    {item.phoneNumber}
                  </td>
                  <td role="cell">{item.createdAt}</td>
                  <td
                    role="cell"
                    className={styles.status__}
                    style={checkStatus(item.status)}
                  >
                    {item.status}
                  </td>
                  <td role="cell" className={styles.option}>
                    <FontAwesomeIcon
                      className={styles.icon}
                      onClick={() => setActiveIndex(i)}
                      icon={faEllipsisV}
                    />
                    {activeIndex === i && (
                      <div
                        className={styles.popup}
                        onClick={() => setActiveIndex(null)}
                      >
                        <button
                          onClick={() => navigate(`/dashboard/user/${item.id}`)}
                        >
                          <img src={ViewDetails} alt={ViewDetails} /> View
                          Details
                        </button>
                        <button>
                          {" "}
                          <img src={BlackListUser} alt={BlackListUser} />
                          Blacklist User
                        </button>
                        <button>
                          <img src={WhitelistUser} alt={WhitelistUser} />
                          Activate User
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default index;
