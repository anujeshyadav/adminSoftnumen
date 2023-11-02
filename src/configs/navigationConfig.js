import React from "react";
import {
  FaRegFileAlt,
  FaStream,
  FaStar,
  FaGopuram,
  FaPodcast,
  FaFileSignature,
  FaBell,
  FaShoppingBag,
  FaWallet,
  FaHome,
  FaUserEdit,
  FaAdversal,
  FaStore,
  FaUsers,
  FaCircle,
  FaCog,
  FaQuestionCircle,
  FaSlidersH,
  FaUser,
  FaShoppingCart,
  FaGift,
  FaProductHunt,
  FaList,
  FaCode,
  FaCodeBranch,
  FaCircleNotch,
} from "react-icons/fa";
import * as Icon from "react-feather";
import { BsImage } from "react-icons/bs";
import { MdOutlineFolderSpecial } from "react-icons/md";
import { GiWantedReward } from "react-icons/gi";
import { CiDiscount1 } from "react-icons/ci";
import { TbTruckDelivery } from "react-icons/tb";
import { AiFillBell } from "react-icons/ai";
import { FiBarChart2 } from "react-icons/fi";

// eslint-disable-next-line no-sparse-arrays
const navigationConfig = [
  {
    id: "dashboard",
    title: "Dashboard",
    type: "item",
    icon: <FaHome size={15} />,
    permissions: ["admin", "editor"],
    navLink: "/dashboard",
  },
  {
    id: "Account",
    title: "Account",
    type: "collapse",
    icon: <FaUsers size={15} />,
    children: [
      {
        id: "AccountCreation",
        title: "Account Creation",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/SoftNumen/account/CreateAccount",
      },

      {
        id: "AccountSearch",
        title: "Account Search",
        type: "item",
        icon: <FaList size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/SoftNumen/userlist",
      },

      // {
      //   id: "Assign Role",
      //   title: "Assign Role",
      //   type: "item",
      //   icon: <FaCircle size={8} />,
      //   permissions: ["admin", "editor"],
      //   navLink: "/app/freshlist/account/addRoleNew",
      // },
      // {
      //   id: "Role Search",
      //   title: "Role List",
      //   type: "item",
      //   icon: <FaUsers size={8} />,
      //   permissions: ["admin", "editor"],
      //   navLink: "/app/Trupee/account/RoleList",
      // },
    ],
  },
  {
    id: "order",
    title: "Orders",
    type: "collapse",
    icon: <FaShoppingCart size={15} />,
    children: [
      {
        id: "CreateOrder",
        title: "Create Order",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/softnumen/order/createorder",
      },
      {
        id: "OrderSearch",
        title: "Order Search",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/softNumen/order/placeorder",
      },
    ],
  },
  {
    id: "Product Managment",
    title: "Product Managment",
    type: "collapse",
    icon: <FaProductHunt size={15} />,
    children: [
      {
        id: "Product Registration",
        title: "Product Registration",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/SoftNumen/product/ProductRegistration",
      },
      {
        id: "Product Search",
        title: "Product Search",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/SoftNumen/product/ProductSearch",
      },
      {
        id: "createCampaign",
        title: "Campaign Creation",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/softNumen/warranty/createCampaign",
      },
      {
        id: "CampaignList",
        title: "Campaign Search",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/softNumen/warranty/Campaignlist",
      },
    ],
  },
  {
    id: "Parts Managment",
    title: "Parts Managment",
    type: "collapse",
    icon: <FaList size={15} />,
    children: [
      {
        id: "Parts Catalogue",
        title: "Parts Catalogue",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/SoftNumen/parts/PartCatalougue",
      },
      {
        id: "Parts Search",
        title: "Parts Search",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/SoftNumen/parts/PartList",
      },
    ],
  },
  {
    id: "Warranty Management",
    title: "Warranty Management",
    type: "collapse",
    icon: <FaShoppingCart size={15} />,
    children: [
      {
        id: "CreateWarrenty",
        title: "Create Warranty",
        type: "item",
        icon: <FaList size={15} />,
        permissions: ["admin", "editor"],
        navLink: "/app/softNumen/warranty/createWarrenty",
      },
      {
        id: "Warranty Search",
        title: "Warranty Search",
        type: "item",
        icon: <FaList size={15} />,
        permissions: ["admin", "editor"],
        navLink: "/app/softNumen/warranty/SearchWarrenty",
      },
    ],
  },
  {
    id: "Ticket",
    title: "Ticket",
    type: "collapse",
    icon: <FaShoppingCart size={15} />,
    children: [
      {
        id: "CreateTicket",
        title: "Create Ticket",
        type: "item",
        icon: <FaList size={15} />,
        permissions: ["admin", "editor"],
        navLink: "/app/SoftNumen/ticket/CreateTicket",
      },
      {
        id: "TicketSearch",
        title: "Ticket Search",
        type: "item",
        icon: <FaList size={15} />,
        permissions: ["admin", "editor"],
        navLink: "/app/SoftNumen/ticket/TicketSearch",
      },
    ],
  },
  {
    id: "Inspections",
    title: "Scrutiny/Inspections",
    type: "collapse",
    icon: <FaShoppingCart size={15} />,
    children: [
      {
        id: "Create Inspections",
        title: "Create Inspections",
        type: "item",
        icon: <FaCode size={15} />,
        permissions: ["admin", "editor"],
        navLink: "/app/SoftNumen/Inspections/CreateInspections",
      },

      {
        id: "InspectionsSearch",
        title: "Inspections Search",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/SoftNumen/Inspections/InspectionsSearch",
      },
    ],
  },
  {
    id: "Product",
    title: "Product WIKI",
    type: "collapse",
    icon: <FaShoppingCart size={15} />,
    children: [
      {
        id: "Publish WIKI",
        title: "Publish WIKI",
        type: "item",
        icon: <FaCode size={15} />,
        permissions: ["admin", "editor"],
        navLink: "/app/softNumen/warranty/CreateWiki",
      },
      {
        id: "WIKI Search",
        title: "WIKI Search",
        type: "item",
        icon: <FaCode size={15} />,
        permissions: ["admin", "editor"],
        navLink: "/app/softNumen/warranty/WikiList",
      },
    ],
  },
  {
    id: "WAREHOUSE",
    title: "WAREHOUSE",
    type: "collapse",
    icon: <FaProductHunt size={15} />,
    children: [
      {
        id: "CreateWarehouse",
        title: " Create Warehouse",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/softNumen/system/WareHouseListSoft",
      },
      {
        id: "WarehouseSearch",
        title: " Warehouse Search",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/softNumen/system/WareHouseListSoft",
      },
    ],
  },
  {
    id: "Quotation",
    title: "Quotation",
    type: "collapse",
    icon: <FaProductHunt size={15} />,
    children: [
      {
        id: "Add Supplier",
        title: "Add Supplier",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/softNumen/system/AddSupplier",
      },
      {
        id: "Create Quote",
        title: "Create Quote",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/softNumen/system/CreateQuote",
      },
      {
        id: "Create Notes",
        title: "Create Notes",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/softNumen/system/CreateNotes",
      },
      {
        id: "Debit Notes",
        title: " Debit Notes",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/softNumen/system/DebitNotes",
      },
    ],
  },
  {
    id: "systemManagment",
    title: "System Managment",
    type: "collapse",
    icon: <FaProductHunt size={15} />,
    children: [
      {
        id: "import",
        title: "Import",
        type: "item",
        icon: <MdOutlineFolderSpecial size={15} />,
        permissions: ["admin", "editor"],
        navLink: "/app/SoftNumen/parts/SchedulerTime",
      },

      {
        id: "Spare Part",
        title: "Spare Part",
        type: "item",
        icon: <FaList size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/softNumen/system/SparePartsSystem",
      },

      {
        id: "orders",
        title: "Orders",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/softNumen/system/OrdersSystem",
      },

      {
        id: "PartsCatelog",
        title: "Parts Catelogue",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/SoftNumen/parts/PartCatalougue",
      },

      {
        id: "Invoice/Billing",
        title: "Invoice/Billing",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/softNumen/system/InVoiceSystem",
      },
      {
        id: "supports",
        title: "Supports",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/softNumen/system/SupportsSystem",
      },
      {
        id: "service",
        title: "Service",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/softNumen/system/ServiceSystem",
      },
    ],
  },
  {
    id: "Reports Management",
    title: "Reports Management",
    type: "collapse",
    icon: <FaShoppingCart size={15} />,
    children: [
      {
        id: "AdminReport",
        title: "Admin Report",
        type: "item",
        icon: <BsImage size={15} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/cart/DateWiseReport",
      },
      {
        id: "Customer Report",
        title: "Customer Report",
        type: "item",
        icon: <BsImage size={15} />,
        permissions: ["admin", "editor"],
        navLink: "/app/softNumen/report/CustomerReports",
      },
      {
        id: "Staff Report",
        title: "Staff Report",
        type: "item",
        icon: <BsImage size={15} />,
        permissions: ["admin", "editor"],
        navLink: "/app/softNumen/report/StaffReport",
      },

      {
        id: "Product Report",
        title: "Product Report",
        type: "item",
        icon: <FaProductHunt size={15} />,
        permissions: ["admin", "editor"],
        navLink: "/app/softNumen/report/ProductReports",
      },
      {
        id: "Transaction Report",
        title: "Transaction Report",
        type: "item",
        icon: <FaCodeBranch size={15} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/cart/BranchwiseReport",
      },
    ],
  },
  {
    id: "Stock Management",
    title: "Stock Management",
    type: "collapse",
    icon: <FaShoppingCart size={15} />,
    children: [
      {
        id: "Stock Report",
        title: "Stock Report",
        type: "item",
        icon: <FaProductHunt size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/softNumen/report/stockReport",
      },

      {
        id: "Stock Transfer",
        title: "Stock Transfer",
        type: "item",
        icon: <FaProductHunt size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/softNumen/report/StockTransfer",
      },
    ],
  },
  {
    id: "BILLINGS",
    title: "BILLINGS",
    type: "collapse",
    icon: <FaShoppingCart size={15} />,
    children: [
      {
        id: "addtax",
        title: "Add tax",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/softnumen/AddTaxSoft",
      },
      {
        id: "Courier/Shipping Charges",
        title: "Courier/Shipping Charges",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/softnumen/CourierShipping",
      },
    ],
  },

  {
    id: "Policy",
    title: " Policy",
    type: "collapse",
    icon: <FaProductHunt size={8} />,
    children: [
      {
        id: "CreatePolicy",
        title: "Create Policy",
        type: "item",
        icon: <FaPodcast size={15} />,
        permissions: ["admin", "editor"],
        navLink: "/app/SoftNumen/policy/CreatePolicy",
      },
      {
        id: "SearchPolicy",
        title: "Search Policy",
        type: "item",
        icon: <FaPodcast size={15} />,
        permissions: ["admin", "editor"],
        navLink: "/app/SoftNumen/policy/SearchPolicy",
      },
      {
        id: "ExtendedPolicy",
        title: "Extended Policy",
        type: "item",
        icon: <BsImage size={15} />,
        permissions: ["admin", "editor"],
        // navLink: "/app/softNumen/ticketing/PendingService",
      },
      {
        id: "AMC",
        title: "AMC",
        type: "item",
        icon: <BsImage size={15} />,
        permissions: ["admin", "editor"],
        // navLink: "/app/softNumen/ticketing/PendingService",
      },
    ],
  },

  // {
  //   id: "Promotion Management",
  //   title: "Promotion Management",
  //   type: "collapse",
  //   icon: <FaShoppingCart size={15} />,
  //   children: [
  //     {
  //       id: "Promotion",
  //       title: "Promotion",
  //       type: "item",
  //       icon: <FaCode size={15} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/app/softNumen/promotion/Promotion",
  //     },
  //     {
  //       id: "Discount&Coupon",
  //       title: "Discount&Coupon",
  //       type: "item",
  //       icon: <FaCode size={15} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/app/softNumen/promotion/DiscountCoupon",
  //     },
  //   ],
  // },

  // {
  //   id: "Supportcreate",
  //   title: "Support Create",
  //   type: "item",
  //   icon: <FaCog size={15} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/softNumen/warranty/CreateSupport",
  // },
  // {
  //   id: "Supportsearch",
  //   title: "Support search",
  //   type: "item",
  //   icon: <FaCog size={15} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/softNumen/warranty/SupportSearch",
  // },
  // {
  //   id: "helpAndSupport",
  //   title: "Help And Support",
  //   type: "item",
  //   icon: <FaQuestionCircle size={15} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/softNumen/support/HelpandSupports",
  // },
  {
    id: "logout",
    title: "Logout",
    type: "item",
    icon: <Icon.ArrowRight size={15} />,
    permissions: ["admin", "editor"],
  },
];
export default navigationConfig;
