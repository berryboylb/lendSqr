import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { Formik, FormikHelpers } from "formik";
import * as yup from "yup";
import styles from "./css/styles.module.css";
type Props = {
  postsPerPage: number;
  totalPosts: number;
  paginate: any;
  previousPage: any;
  nextPage: any;
  currentPage: number;
  organizations: { orgName: string }[];
};

type Filter = {
  orgName: string;
  userName: string;
  email: string;
  phoneNumber: string;
  lastActiveDate: string;
  status: "pending" | "inactive" | "blacklisted" | "active";
};

const index: React.FC<Props> = ({
  postsPerPage,
  totalPosts,
  paginate,
  previousPage,
  nextPage,
  currentPage,
  organizations,
}) => {
  const [popUp, setPopUp] = useState<boolean>(false);
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const filterValidation = yup.object().shape({
    orgName: yup.string().required("Oragnaization is required"),
    userName: yup
      .string()
      .min(3, "Username must be at least at 3 characters")
      .required("Username is required"),
    email: yup
      .string()
      .email("Please provide a valid email address")
      .required("Email is required"),
    lastActiveDate: yup
      .string()
      .min(3, "Date must be at least at 3 characters")
      .required("Date is required"),
    phoneNumber: yup
      .string()
      .min(3, "Date must be at least at 3 characters")
      .required("Date is required"),
    status: yup.string().required("Date is required"),
  });
  return (
    <div className={styles.con__}>
      {popUp && (
        <div className={styles.filter_}>
          <Formik
            validationSchema={filterValidation}
            initialValues={{
              orgName: "",
              email: "",
              userName: "",
              lastActiveDate: "",
              phoneNumber: "",
              status: "pending",
            }}
            onSubmit={async (
              values: Filter,
              { resetForm }: FormikHelpers<Filter>
            ) => {}}
          >
            {(props) => (
              <form onSubmit={props.handleSubmit}>
                <div className={styles.fields}>
                  <label htmlFor="">Organization</label>
                  <select
                    id=""
                    value={props.values.orgName}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                      props.setFieldValue("orgName", e.target.value)
                    }
                  >
                    <option value={""}>Select</option>
                    {organizations.map(
                      (item: { orgName: string }, i: number) => (
                        <option value={item.orgName} key={i}>
                          {item.orgName}
                        </option>
                      )
                    )}
                  </select>
                  <span className={styles.err}>
                    {props.touched.orgName && props.errors.orgName}
                  </span>
                </div>
                <div className={styles.fields}>
                  <label htmlFor="">Username</label>
                  <input
                    placeholder="User"
                    type="text"
                    value={props.values.userName}
                    onChange={props.handleChange("userName")}
                    onBlur={props.handleBlur("userName")}
                  />
                  <span className={styles.err}>
                    {props.touched.userName && props.errors.userName}
                  </span>
                </div>
                <div className={styles.fields}>
                  <label htmlFor="">Email</label>
                  <input
                    placeholder="Email"
                    type="text"
                    value={props.values.email}
                    onChange={props.handleChange("email")}
                    onBlur={props.handleBlur("email")}
                  />
                  <span className={styles.err}>
                    {props.touched.email && props.errors.email}
                  </span>
                </div>

                <div className={styles.fields}>
                  <label htmlFor="">Date</label>
                  <input
                    placeholder="Date"
                    type="datetime"
                    value={props.values.lastActiveDate}
                    onChange={props.handleChange("lastActiveDate")}
                    onBlur={props.handleBlur("lastActiveDate")}
                  />
                  <span className={styles.err}>
                    {props.touched.lastActiveDate &&
                      props.errors.lastActiveDate}
                  </span>
                </div>

                <div className={styles.fields}>
                  <label htmlFor="">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={props.values.phoneNumber}
                    onChange={props.handleChange("phoneNumber")}
                    onBlur={props.handleBlur("phoneNumber")}
                  />
                  <span className={styles.err}>
                    {props.touched.phoneNumber && props.errors.phoneNumber}
                  </span>
                </div>

                <div className={styles.fields}>
                  <label htmlFor="">Status</label>
                  <select
                    id=""
                    value={props.values.status}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                      props.setFieldValue("status", e.target.value)
                    }
                  >
                    <option value={""}>Select</option>
                    <option value={"pending"}>pending</option>
                    <option value={"inactive"}>inactive</option>
                    <option value={"blacklisted"}>blacklisted</option>
                    <option value={"active"}>active</option>
                  </select>

                  <span className={styles.err}>
                    {props.touched.phoneNumber && props.errors.phoneNumber}
                  </span>
                </div>

                <div className={styles.btns_}>
                  <button type="reset" className={styles.reset}>
                    Reset
                  </button>
                  <button type="submit" className={styles.filter}>
                    Filter
                  </button>
                </div>
              </form>
            )}
          </Formik>
        </div>
      )}
      <div className={styles.paginate}>
        <div className={styles.filter}>
          Showing{" "}
          <h4>
            {" "}
            <button onClick={() => setPopUp(!popUp)}>
              {currentPage} <FontAwesomeIcon icon={faChevronDown} />
            </button>
          </h4>{" "}
          out of {pageNumbers.length}
        </div>
        <ul>
          <li onClick={previousPage} className={styles.ctrl}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </li>
          {pageNumbers.map((number) => (
            <li
              style={
                currentPage === number ? { color: "#213F7D", opacity: 1 } : {}
              }
              key={number}
              className="page-number"
              onClick={() => paginate(number)}
            >
              {number}
            </li>
          ))}
          <li onClick={nextPage} className={styles.ctrl}>
            <FontAwesomeIcon icon={faChevronRight} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default index;
