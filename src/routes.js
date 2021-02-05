/*!

=========================================================
* Material Dashboard React - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
// import LibraryBooks from "@material-ui/icons/LibraryBooks";
// import BubbleChart from "@material-ui/icons/BubbleChart";
// import LocationOn from "@material-ui/icons/LocationOn";
// import Notifications from "@material-ui/icons/Notifications";
// import Unarchive from "@material-ui/icons/Unarchive";
// import Language from "@material-ui/icons/Language";

// core components/views for Admin layout
import DashboardPage from "./views/Dashboard";
// import Customer from "./views/Customer";
// import Complaint from "./views/Complaint";
// import Verification from "./views/Customer/Verification";
// import VerificationRekening from "./views/Customer/Verification/verificationRekening.js";
// import Icons from "./views/Icons/Icons.js";
// import Maps from "./views/Maps/Maps.js";
// import NotificationsPage from "./views/Notifications/Notifications.js";
// import UpgradeToPro from "./views/UpgradeToPro/UpgradeToPro.js";

// core components/views for RTL layout
// import RTLPage from "views/RTLPage/RTLPage.js";

// cash and bank
import CashBank from "./views/CashBank";
import TransferFounds from "./views/CashBank/Transaction/TransferFounds";
import ReceiveMoney from "./views/CashBank/Transaction/ReceiveMoney";
import PayMoney from "./views/CashBank/Transaction/PayMoney";

// import Home from './views/Home';
// import CashierTransaction from './views/CashierTransaction';
// import Expenses from './views/expenses/Expenses';
// import AddExpenses from './views/expenses/AddExpenses';
// import ManagementUser from './views/ManagementUser';
// import Contacts from './views/contacts/Contacts';
// import AddContacts from './views/contacts/AddContacts';
// import Coopra from './views/sales/Coopra';
// import AddCoopraSale from './views/sales/AddCoopraSale';
// import AddCoopraContract from './views/sales/AddCoopraContract';
// import Goods from './views/sales/Goods';
// import AddGoodsSale from './views/sales/AddGoodsSale';
// import PurchasesCoopra from './views/purchases/PurchasesCoopra';
// import AddCoopraPurchases from './views/purchases/AddCoopraPurchases';
// import AddPurchasesContact from './views/purchases/AddPurchasesContact';
// import PurchasesGoods from './views/purchases/PurchasesGoods';
// import AddPurchasesGoods from './views/purchases/AddPurchasesGoods';
// import Login from './views/Login';
// import Logout from './views/Logout';
// import MenuAssets from './views/assets/menuAssets';

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin",
  },
  {
    path: "/cashbank",
    name: "Cash and Bank",
    icon: Person,
    component: CashBank,
    layout: "/admin",
  },
  {
    path: "/transferfounds",
    name: "Transfer Founds",
    icon: Person,
    component: TransferFounds,
    layout: "/submenu",
  },
  {
    path: "/receivemoney",
    name: "Recaive Money",
    icon: Person,
    component: ReceiveMoney,
    layout: "/submenu",
  },
  {
    path: "/paymoney",
    name: "Pay Money",
    icon: Person,
    component: PayMoney,
    layout: "/submenu",
  },
];

export default dashboardRoutes;
