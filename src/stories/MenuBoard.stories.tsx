import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MenuList from "../components/MenuList";
import AdminMenu from "../components/AdminMenu";
import HeaderTitle from "../components/HeaderTitle";
import UserInfo from "../components/UserInfo";
import StatusItem from "../components/StatusItem";
import StatusList from "../components/Status";
import DatePicker from "../components/Calendar";
import PoItem from "../components/PoItem";
import PoStatus from "../components/PoStatus";
import DashboardContent from "../components/DashboardContent";
import DashboardScreen from "../components/DashboardScreen";

export default {
  title: "DashboardScreen"
};

export const MenuDefault = () => <MenuList menuOption="My Dashboard" />;

export const HeaderTitleDefault = () => (
  <HeaderTitle title="POTS" desc="Purchase Order Tracking System" />
);

export const MenuNavBarDefault = () => <AdminMenu />;

export const MenuNavBarWithHeader = () => (
  <AdminMenu title="POTS" desc="Purchase Order Tracking System" />
);

export const UserInfoDefault = () => (
  <UserInfo user="Mark Nabablit" date="February 5, 2020" />
);

export const StatusItemDefault = () => (
  <StatusItem number="3" statOption="Orders Received" />
);

export const StatusDefault = () => <StatusList title="Today’s Status" />;

export const CalendarDefault = () => <DatePicker />;

export const PoItemDefault = () => (
  <PoItem
    poNumber="OTN 20202121E565656"
    poStatus="Delivered and is on now in the facility"
  />
);

export const PoStatusDefault = () => <PoStatus />;

export const DashboardContentDefault = () => <DashboardContent />;

export const DashboardScreenDefault = () => <DashboardScreen />;
