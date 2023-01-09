import React from 'react';
import styles from "./css/styles.module.css";
import { AllUsers, ActiveUser, LoanUsers, SavingsUsers } from "../../assets";

type Props = {
  users: number;
  activeUsers: number;
};
const Index: React.FC<Props> = ({ users, activeUsers }) => {
  return (
    <div className={styles.users}>
      <h3>Users</h3>
      <div className={styles.cons_}>
        <div>
          <img src={AllUsers} alt="All Users" />
          <h4>users</h4>
          <h2>{Number(users).toLocaleString()}</h2>
        </div>
        <div>
          <img src={ActiveUser} alt="active users" />
          <h4>Active Users</h4>
          <h2>{Number(activeUsers).toLocaleString()}</h2>
        </div>
        <div>
          <img src={LoanUsers} alt="Loan users" />
          <h4>Users with Loans</h4>
          <h2>2,453</h2>
        </div>
        <div>
          <img src={SavingsUsers} alt="savings users" />
          <h4>Users with Savings</h4>
          <h2>2,453</h2>
        </div>
      </div>
    </div>
  );
};

export default Index;