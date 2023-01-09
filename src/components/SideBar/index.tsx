import React from "react";
import { useMediaQuery } from "react-responsive";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faChevronDown,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
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
  { imgSrc: Users, name: "Users" },
  { imgSrc: Guarantors, name: "Guarantors" },
  { imgSrc: Loan, name: "Loans" },
  { imgSrc: Shake, name: "Decision Models" },
  { imgSrc: Savings, name: "Savings" },
  { imgSrc: LoanRequest, name: "Loan Requests" },
  { imgSrc: WhiteList, name: "Whitelist" },
  { imgSrc: Karma, name: "Karma" },
];

const business = [
  { imgSrc: Organization, name: "Organization" },
  { imgSrc: LoanRequest, name: "Loan Products" },
  { imgSrc: SavingsProduct, name: "Savings Products" },
  { imgSrc: FeesandCharges, name: "Fees and Charges" },
  { imgSrc: Transaction, name: "Transactions" },
  { imgSrc: Services, name: "Services" },
  { imgSrc: SavingsAccount, name: "Service Account" },
  { imgSrc: Settlements, name: "Settlements" },
  { imgSrc: Reports, name: "Reports" },
];

const settings = [
  { imgSrc: Preferences, name: "Preferences" },
  { imgSrc: FeeAndPricing, name: "Fees and Pricing" },
  { imgSrc: AuditLogo, name: "Audit Logs" },
  { imgSrc: SystemMessages, name: "Systems Messages" },
];

const Index: React.FC<Props> = ({ mobileNav }) => {
  const isMobile: boolean = useMediaQuery({ query: `(max-width: 768px)` });
  const activeStyle: {
    background: string;
  } = {
    background: "#54A800",
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
            <Link to="/dashboard/users">
              {" "}
              <span>
                {" "}
                <FontAwesomeIcon icon={faHome} />
              </span>
              <h3>Dashboard</h3>
            </Link>
          </li>
        </ul>

        <h3 className={Styles.title}>CUSTOMERS</h3>
        <div className="w-full">
          <ul className="w-full">
            {customers.map((item, i) => (
              <li key={i} className={Styles.link}>
                <Link to="/dashboard/users">
                  {" "}
                  <img src={item.imgSrc} alt={item.imgSrc} />
                  <h3>{item.name}</h3>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <h3 className={Styles.title}>BUSINESSES</h3>
        <div className="w-full">
          <ul className="w-full">
            {business.map((item, i) => (
              <li key={i} className={Styles.link}>
                <Link to="/dashboard/users">
                  {" "}
                  <img src={item.imgSrc} alt={item.imgSrc} />
                  <h3>{item.name}</h3>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <h3 className={Styles.title}>SETTINGS</h3>
        <div className="w-full">
          <ul className="w-full">
            {settings.map((item, i) => (
              <li key={i} className={Styles.link}>
                <Link to="/dashboard/users">
                  {" "}
                  <img src={item.imgSrc} alt={item.imgSrc} />
                  <h3>{item.name}</h3>
                </Link>
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
