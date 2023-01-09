import React, { useEffect, useState, lazy, Suspense } from "react";
import { getSingleUser } from "../../reducers/users";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { useParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowLeft, faStar } from "@fortawesome/free-solid-svg-icons";
import styles from "./css/styles.module.css";
const Layout = lazy(() => import("../Layout"));
const Spinner = lazy(() => import("../Spinner"));
const SingleUserHeader = lazy(() => import("../SingleUserHeader"));
const PersonalInfo = lazy(() => import("../PersonalInfo"));
const Index = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { singleUser } = useAppSelector((state) => state.user);
  const [currenTab, setCurrentTab] = useState<number>(0);
  useEffect(() => {
    dispatch(getSingleUser(Number(id)));
  }, [dispatch]);
  return (
    <Suspense fallback={<Spinner />}>
      <Layout>
        <button className={styles.back} onClick={() => navigate(-1)}>
          <FontAwesomeIcon className={styles.icon_} icon={faLongArrowLeft} />
          Back to Users
        </button>
        <div className={styles.header_}>
          <h1>User Details</h1>
          <div>
            <button className={styles.blacklist}>Blacklist User</button>
            <button className={styles.activate}>Activate User</button>
          </div>
        </div>
        <SingleUserHeader
          user={singleUser}
          currenTab={currenTab}
          setCurrentTab={setCurrentTab}
          icon={faStar}
        />

        {currenTab === 0 && <PersonalInfo user={singleUser} />}
        {currenTab === 1 && <div></div>}
        {currenTab === 2 && <div></div>}
        {currenTab === 3 && <div></div>}
        {currenTab === 4 && <div></div>}
        {currenTab === 5 && <div></div>}
      </Layout>
    </Suspense>
  );
};

export default Index;
