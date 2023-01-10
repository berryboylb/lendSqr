import React from "react";
import { useMediaQuery } from "react-responsive";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faChevronDown,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";
import {
  Users,
  AuditLogo,
  FeeAndPricing,
  FeesandCharges,
  Guarantors,
  Karma,
  Loan,
  LoanRequest,
  Organization,
  Preferences,
  Profile,
  SignOut,
  Reports,
  Savings,
  Settlements,
  Shake,
  SystemMessages,
  Transaction,
  WhiteList,
  SavingsProduct,
  SavingsAccount,
  Services,
} from "../../assets";
import Styles from "./css/styles.module.css";
type Props = {
  mobileNav: boolean;
};

const customers = [
  { imgSrc: Users, name: "users" },
  { imgSrc: Guarantors, name: "guarantors" },
  { imgSrc: Loan, name: "loans" },
  { imgSrc: Shake, name: "decision models" },
  { imgSrc: Savings, name: "savings" },
  { imgSrc: LoanRequest, name: "loan requests" },
  { imgSrc: WhiteList, name: "whitelist" },
  { imgSrc: Karma, name: "karma" },
];

const business = [
  { imgSrc: Organization, name: "organization" },
  { imgSrc: LoanRequest, name: "loan products" },
  { imgSrc: SavingsProduct, name: "savings products" },
  { imgSrc: FeesandCharges, name: "fees and charges" },
  { imgSrc: Transaction, name: "transactions" },
  { imgSrc: Services, name: "services" },
  { imgSrc: SavingsAccount, name: "service account" },
  { imgSrc: Settlements, name: "settlements" },
  { imgSrc: Reports, name: "reports" },
];

const settings = [
  { imgSrc: Preferences, name: "preferences" },
  { imgSrc: FeeAndPricing, name: "fees and pricing" },
  { imgSrc: AuditLogo, name: "audit logs" },
  { imgSrc: SystemMessages, name: "systems messages" },
];

const Index: React.FC<Props> = ({ mobileNav }) => {
  const isMobile: boolean = useMediaQuery({ query: `(max-width: 768px)` });
  const activeStyle: {
    background: string;
  } = {
    background: "",
  };
  const emptyStyle: { color: string } = { color: "#fff" };
  return (
    <div
      className={
        isMobile
          ? mobileNav
            ? `${Styles.con} ${Styles.active__}`
            : Styles.con
          : Styles.con
      }
    >
      <button className={Styles.btn}>
        {" "}
        <span className={Styles.first}>
          {" "}
          <FontAwesomeIcon icon={faBriefcase} />
        </span>{" "}
        Switch Organization{" "}
        <span className={Styles.second}>
          {" "}
          <FontAwesomeIcon icon={faChevronDown} />
        </span>
      </button>
      <div className="w-full">
        <ul className="w-full">
          <li className={Styles.link}>
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : {})}
              to="/"
            >
              {" "}
              <span>
                {" "}
                <FontAwesomeIcon icon={faHome} />
              </span>
              <h3>Dashboard</h3>
            </NavLink>
          </li>
        </ul>

        <h3 className={Styles.title}>CUSTOMERS</h3>
        <div className="w-full">
          <ul className="w-full">
            {customers.map((item, i) => (
              <li key={i} className={Styles.link}>
                <NavLink
                  style={({ isActive }) => (isActive ? activeStyle : {})}
                  to={`/dashboard/${item.name}`}
                >
                  {" "}
                  <img src={item.imgSrc} alt={item.imgSrc} />
                  <h3>{item.name}</h3>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <h3 className={Styles.title}>BUSINESSES</h3>
        <div className="w-full">
          <ul className="w-full">
            {business.map((item, i) => (
              <li key={i} className={Styles.link}>
                <NavLink
                  style={({ isActive }) => (isActive ? activeStyle : {})}
                  to={`/dashboard/${item.name}`}
                >
                  {" "}
                  <img src={item.imgSrc} alt={item.imgSrc} />
                  <h3>{item.name}</h3>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <h3 className={Styles.title}>SETTINGS</h3>
        <div className="w-full">
          <ul className="w-full">
            {settings.map((item, i) => (
              <li key={i} className={Styles.link}>
                <NavLink
                  style={({ isActive }) => (isActive ? activeStyle : {})}
                  to={`/dashboard/${item.name}`}
                >
                  {" "}
                  <img src={item.imgSrc} alt={item.imgSrc} />
                  <h3>{item.name}</h3>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={Styles.bottom__}>
        <button>
          {" "}
          <img src={SignOut} alt="Logout" /> Logout
        </button>
        <h6>v1.2.0</h6>
      </div>
    </div>
  );
};

export default Index;
