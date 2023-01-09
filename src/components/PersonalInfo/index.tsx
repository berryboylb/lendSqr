import React from "react";
import { User } from "../../reducers/users";
import styles from "./css/style.module.css";
type Props = {
  user: User | null;
};

const index: React.FC<Props> = ({ user }) => {
  return (
    <div className={styles.block}>
      {/* first section */}

      <div className={styles.mini_block}>
        <h3>Personal Information</h3>
        <div className={styles.items_con}>
          <div>
            <h4>full Name</h4>
            <h2>
              {user?.profile.firstName} {user?.profile.lastName}
            </h2>
          </div>
          <div>
            <h4>Phone Number</h4>
            <h2>{user?.profile.phoneNumber}</h2>
          </div>
          <div>
            <h4>Email Address</h4>
            <h2>{user?.email}</h2>
          </div>
          <div>
            <h4>Bvn</h4>
            <h2>{user?.profile.bvn}</h2>
          </div>
          <div>
            <h4>Gender</h4>
            <h2>{user?.profile.gender}</h2>
          </div>
          <div>
            <h4>Oragnization</h4>
            <h2>{user?.orgName}</h2>
          </div>

          <div>
            <h4>Address</h4>
            <h2>{user?.profile.address}</h2>
          </div>

          <div>
            <h4>Currency</h4>
            <h2>{user?.profile.currency}</h2>
          </div>
        </div>
      </div>

      {/* second section */}
      <div className={styles.mini_block}>
        <h3>Education and Employment</h3>
        <div className={styles.items_con}>
          <div>
            <h4>level of education</h4>
            <h2>{user?.education.level}</h2>
          </div>
          <div>
            <h4>employment status</h4>
            <h2>{user?.education.employmentStatus}</h2>
          </div>
          <div>
            <h4>sector of employment</h4>
            <h2>{user?.education.sector}</h2>
          </div>
          <div>
            <h4>Duration of employment</h4>
            <h2>{user?.education.duration}</h2>
          </div>
          <div>
            <h4>office email</h4>
            <h2>{user?.education.officeEmail}</h2>
          </div>
          <div>
            <h4>Monthly income</h4>
            <h2>
              {user?.education.monthlyIncome.map((item: string, i) => (
                <span key={i}>
                  {i > 0 && <>-</>} ₦{item}
                </span>
              ))}
            </h2>
          </div>
        </div>
      </div>

      {/* third section */}

      <div className={styles.mini_block}>
        <h3>Socials</h3>
        <div className={styles.items_con}>
          <div>
            <h4>Twitter</h4>
            <h2>
              {user?.profile.firstName}
              {user?.socials.twitter}
            </h2>
          </div>
          <div>
            <h4>Facebook</h4>
            <h2>
              {user?.profile.firstName}
              {user?.socials.facebook}
            </h2>
          </div>
          <div>
            <h4>Instagram</h4>
            <h2>
              {user?.profile.firstName}
              {user?.socials.instagram}
            </h2>
          </div>
        </div>
      </div>

      {/* fourth section */}

      <div className={styles.mini_block}>
        <h3>Guarantor</h3>
        {Array.isArray(user?.guarantor) ? (
          <>
            {user?.guarantor.map((item, i) => (
              <div key={i} className={`${styles.items_con} ${styles.bottom}`}>
                <div>
                  <h4>full Name</h4>
                  <h2>
                    {item.firstName} {item.lastName}
                  </h2>
                </div>
                <div>
                  <h4>Phone Number</h4>
                  <h2>{item.phoneNumber}</h2>
                </div>
                <div>
                  <h4>Email Address</h4>
                  <h2>{item.address}</h2>
                </div>
                <div>
                  <h4>Gender</h4>
                  <h2>{item.gender}</h2>
                </div>
              </div>
            ))}
          </>
        ) : (
          <div className={`${styles.items_con} ${styles.bottom}`}>
            <div>
              <h4>full Name</h4>
              <h2>
                {user?.guarantor.firstName} {user?.guarantor.lastName}
              </h2>
            </div>
            <div>
              <h4>Phone Number</h4>
              <h2>{user?.guarantor.phoneNumber}</h2>
            </div>
            <div>
              <h4>Email Address</h4>
              <h2>{user?.guarantor.address}</h2>
            </div>
            <div>
              <h4>Gender</h4>
              <h2>{user?.guarantor.gender}</h2>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default index;
