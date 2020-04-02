import React from 'react'
import { action } from '@storybook/addon-actions'
import 'bootstrap/dist/css/bootstrap.min.css'
import MenuList from '../components/MenuItem'
import AdminMenu from '../components/AdminMenu'
import AppTitle from '../components/AppTitle'
import UserInfo from '../components/UserInfo'
import DatePicker from '../components/Calendar'
import PoItem from '../components/PoItem'
import PoStatus from '../components/PoStatus'
import DashboardContent from '../components/DashboardContent'
import DashboardScreen from '../components/DashboardScreen'
import {
  menu,
  statusReport,
  poList,
  hisList,
  genDetailList,
} from '../data/mockData'
import StatusReportItem from '../components/StatusReportItem'
import StatusReportList from '../components/Status'
import HistoryItem from '../components/HistoryItem'
import GenDetails from '../components/GenDetails'
import AccordionContent from '../components/AccordionContent'
import '../App.css'

export default {
  title: 'DashboardScreen',
}

export const MenuDefault = () => <MenuList menuItem={[menu[0]]} />

MenuDefault.story = {
  parameters: {
    notes: 'A Single Menu Item',
  },
}

export const HeaderTitleDefault = () => (
  <AppTitle
    title="POTS"
    desc="Purchase Order Tracking System"
    onClick={action('Clicked')}
  />
)

HeaderTitleDefault.story = {
  parameters: {
    notes: 'Header title Wrap in Card with a Click Action',
  },
}

export const MenuNavBarDefault = () => (
  <MenuList menuItem={menu} onClick={action('Clicked')} />
)

MenuNavBarDefault.story = {
  parameters: {
    notes: 'Menu Navigation Bar Composed of List Group Item',
  },
}

export const MenuNavBarWithHeader = () => (
  <AdminMenu
    title="POTS"
    desc="Purchase Order Tracking System"
    menuItem={menu}
    onClick={action('Clicked')}
  />
)

MenuNavBarWithHeader.story = {
  parameters: {
    notes: 'Menu Navigation Bar With Header composed of 2 different component',
  },
}

export const UserInfoDefault = () => (
  <UserInfo user="Mark Nabablit" date="February 5, 2020" />
)

UserInfoDefault.story = {
  parameters: {
    notes: 'Basic User Info for App Header consist of two components',
  },
}

export const StatusItemDefault = () => (
  <StatusReportItem status={[statusReport[0]]} onCLick={action('Clicked')} />
)

StatusItemDefault.story = {
  parameters: {
    notes: 'Status Badge that shows depend on title and number fields',
  },
}

export const StatusDefault = () => (
  <StatusReportList
    title="Today’s Status"
    status={statusReport}
    onClick={action('Clicked')}
  />
)

StatusDefault.story = {
  parameters: {
    notes: 'Status Badge that shows depend on title and number fields',
  },
}

export const CalendarDefault = () => <DatePicker onChange={action('Change')} />

CalendarDefault.story = {
  parameters: {
    notes: 'Default Calendar Date Picker',
  },
}

export const PoItemDefault = () => <PoItem list={[poList[0]]} />

PoItemDefault.story = {
  parameters: {
    notes: 'A Single Line Item',
  },
}

export const PoStatusDefault = () => <PoStatus list={poList} />

PoStatusDefault.story = {
  parameters: {
    notes: 'A Multi Line Item or List Item',
  },
}

export const DashboardContentDefault = () => <DashboardContent />

export const DashboardScreenDefault = () => <DashboardScreen />

export const HistoryReportDefault = () => (
  <HistoryItem list={hisList} buttonTitle="View" onClick={action('Clicked')} />
)

HistoryReportDefault.story = {
  parameters: {
    notes: 'A History Report with View Button Action',
  },
}

export const GeneralDetailsDefault = () => (
  <GenDetails
    buttonTitle="Modify Supplier Detail"
    list={genDetailList}
    title="General Details"
    onClick={action('Clicked')}
  />
)

GeneralDetailsDefault.story = {
  parameters: {
    notes: 'Detail List With Modify Button Action Clicked',
  },
}

export const AccordionContentDefault = () => (
  <AccordionContent onClick={action('Clicked')} />
)

AccordionContentDefault.story = {
  parameters: {
    notes: 'A List with Click Action',
  },
}
