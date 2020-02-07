import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MenuList from "../components/MenuItem";
import AdminMenu from "../components/AdminMenu";
import AppTitle from "../components/AppTitle";
import UserInfo from "../components/UserInfo";
import DatePicker from "../components/Calendar";
import PoItem from "../components/PoItem";
import PoStatus from "../components/PoStatus";
import DashboardContent from "../components/DashboardContent";
import DashboardScreen from "../components/DashboardScreen";
import {
  menu,
  statusReport,
  poList,
  hisList,
  genDetailList
} from "../data/mockData";
import StatusReportItem from "../components/StatusReportItem";
import StatusReportList from "../components/Status";
import HistoryItem from "../components/HistoryItem";
import GenDetails from "../components/GenDetails";

export default {
  title: "DashboardScreen"
};

export const MenuDefault = () => <MenuList menuItem={[menu[0]]} />;

export const HeaderTitleDefault = () => (
  <AppTitle title="POTS" desc="Purchase Order Tracking System" />
);

export const MenuNavBarDefault = () => <MenuList menuItem={menu} />;

export const MenuNavBarWithHeader = () => (
  <AdminMenu
    title="POTS"
    desc="Purchase Order Tracking System"
    menuItem={menu}
  />
);

export const UserInfoDefault = () => (
  <UserInfo user="Mark Nabablit" date="February 5, 2020" />
);

export const StatusItemDefault = () => (
  <StatusReportItem status={[statusReport[0]]} />
);

export const StatusDefault = () => (
  <StatusReportList title="Today’s Status" status={statusReport} />
);

export const CalendarDefault = () => <DatePicker />;

export const PoItemDefault = () => <PoItem list={[poList[0]]} />;

export const PoStatusDefault = () => <PoStatus list={poList} />;

export const DashboardContentDefault = () => (
  <DashboardContent status={statusReport} list={poList} />
);

export const DashboardScreenDefault = () => <DashboardScreen />;

export const HistoryReportDefault = () => (
  <HistoryItem list={hisList} buttonTitle="View" />
);

export const GeneralDetailsDefault = () => (
  <GenDetails
    buttonTitle="Modify Supplier Detail"
    list={genDetailList}
    title="General Details"
  />
);
