import React from "react";
import { Logo, ProfilePic } from "../../assets";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { Formik, FormikHelpers } from "formik";
import toast from "react-hot-toast";
import styles from "./css/styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faChevronDown,
  faBell,
} from "@fortawesome/free-solid-svg-icons";

type Props = {
  mobileNav: boolean;
  handleMobileNav?: () => void;
};

const Index: React.FC<Props> = ({ mobileNav, handleMobileNav }) => {
  const searchValidation = yup.object().shape({
    query: yup
      .string()
      .min(4, "It must be at leat four characters")
      .required("Must not be empty"),
  });
  return (
    <div className={styles.header}>
      <div className={styles.imgCon}>
        <img
          src={Logo}
          alt="LendSquare"
          className="w-[130px] h-[36px] object-contain"
        />
      </div>
      <div className={styles.form}>
        <Formik
          validationSchema={searchValidation}
          initialValues={{
            query: "",
          }}
          onSubmit={(values: { query: string }, actions) => {
            console.log(values.query);
          }}
        >
          {(props) => (
            <form
              onSubmit={props.handleSubmit}
              // className="flex  justify-between w-2/5"
            >
              <input
                placeholder="Search for anything"
                type="text"
                value={props.values.query}
                onChange={props.handleChange("query")}
                onBlur={props.handleBlur("query")}
                // className={`w-full border-2 border-r-0 text-sm lg:text-base text-[#545F7D] border-[rgba(84, 95, 125, 0.15)] p-2 rounded-l-lg outline-none placeholder:text-[#545F7D] placeholder:text-sm placeholder:opacity-[.6]`}
              />
              {/* <>
                {props.touched.query && toast.error(String(props.errors.query))}
              </> */}
              {/* <span className="block my-2 text-[#E4033B] text-xs lg:text-sm">
                  {props.touched.query && props.errors.query}
                </span> */}

              <button type="submit">
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </form>
          )}
        </Formik>

        <div className={styles.profile}>
          <Link className={styles.docs} to="/dashboard/docs">
            Docs
          </Link>
          <Link className={styles.notififcation} to="/dashboard/notifications">
            <span>0</span>
            <FontAwesomeIcon icon={faBell} />
          </Link>
          <div className={styles.profileMain}>
            <Link to="/dashboard/profile">
              <img src={ProfilePic} alt="Anon" />
            </Link>

            <h3>Adedeji</h3>
            <button>
              <FontAwesomeIcon icon={faChevronDown} />
            </button>
          </div>
        </div>
      </div>
      <div
        onClick={handleMobileNav}
        className={mobileNav ? styles.bro : styles.burger}
      >
        <div className={styles.line0}></div>
        <div className={styles.line1}></div>
        <div className={styles.line2}></div>
      </div>
    </div>
  );
};

export default Index;
