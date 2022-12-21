import React from "react";
import { AiOutlineCalendar, AiOutlineMessage } from "react-icons/ai";
import { FiCreditCard } from "react-icons/fi";
import { HiOutlineHome } from "react-icons/hi";
import { SlNote } from "react-icons/sl";
import { BsCurrencyDollar, BsShield } from "react-icons/bs";
import { ImLab } from "react-icons/im";
import { TbReportMedical } from "react-icons/tb";
import { GiMedicines } from "react-icons/gi";
import { GrLocation } from "react-icons/gr";
import avatar from "./avatar.jpg";
import avatar2 from "./avatar2.jpg";
import avatar3 from "./avatar3.png";
import avatar4 from "./avatar4.jpg";

export const gridOrderImage = (props) => (
  <div>
    <img
      className='rounded-xl h-20 md:ml-3'
      src={props.ProductImage}
      alt='order-item'
    />
  </div>
);

export const gridAppointmentStatus = (props) => {
  const status = props.Status;
  let color;
  if (status === "pending") {
    color = "#03C9D7";
  } else if (status === "Due") {
    color = "#FB9678";
  } else if (status === "Completed") {
    color = "#8BE78B";
  } else if (status === "Postponed") {
    color = "#FF5C8E";
  } else {
    color = "red";
  }
  return (
    <button
      type='button'
      style={{ background: color }}
      className='text-white py-1 px-2 capitalize rounded-2xl text-md'>
      {props.Status}
    </button>
  );
};

export const kanbanGrid = [
  { headerText: "To Do", keyField: "Open", allowToggle: true },

  { headerText: "In Progress", keyField: "InProgress", allowToggle: true },

  {
    headerText: "Testing",
    keyField: "Testing",
    allowToggle: true,
    isExpanded: false,
  },

  { headerText: "Done", keyField: "Close", allowToggle: true },
];
const gridDoctorProfile = (props) => (
  <div className='flex items-center gap-2'>
    <img
      className='rounded-full w-10 h-10'
      src={props.EmployeeImage}
      alt='employee'
    />
    <p>{props.Name}</p>
  </div>
);

const gridAppointmentLocation = (props) => (
  <div className='flex items-center justify-center gap-2'>
    <GrLocation />
    <span>{props.Location}</span>
  </div>
);

export const appointmentGrid = [
  {
    headerText: "Consultant",
    width: "150",
    template: gridDoctorProfile,
    textAlign: "Center",
  },
  { field: "Name", headerText: "", width: "0", textAlign: "Center" },
  {
    field: "Type",
    headerText: "Type",
    width: "170",
    textAlign: "Center",
  },
  {
    field: "Location",
    headerText: "Location",
    width: "120",
    textAlign: "Center",
    template: gridAppointmentLocation,
  },
  {
    field: "Date",
    headerText: "Date",
    width: "135",
    format: "yMd",
    textAlign: "Center",
  },

  {
    field: "Reference",
    headerText: "Reference No.",
    width: "120",
    textAlign: "Center",
  },
  {
    field: "Status",
    headerText: "Status",
    width: "125",
    textAlign: "Center",
    template: gridAppointmentStatus,
  },
];

export const links = [
  {
    title: "Dashboard",
    links: [
      {
        name: "Home",
        icon: <HiOutlineHome />,
        link: "dashboard/home",
      },
      {
        name: "Appointments",
        icon: <AiOutlineCalendar />,
        link: "dashboard/appointments",
      },
      {
        name: "Messages",
        icon: <AiOutlineMessage />,
        link: "dashboard/messages",
      },
      {
        name: "Calendar",
        icon: <AiOutlineCalendar />,
        link: "dashboard/calendar",
      },
    ],
  },

  {
    title: "Medical",
    links: [
      {
        name: "Lab Results",
        icon: <ImLab />,
        link: "dashboard/results",
      },
      {
        name: "Medical Records",
        icon: <SlNote />,
        link: "dashboard/records",
      },
      {
        name: "Prescriptions",
        icon: <GiMedicines />,
        link: "dashboard/prescriptions",
      },
      {
        name: "Reports",
        icon: <TbReportMedical />,
        link: "dashboard/reports",
      },
    ],
  },
];

export const chatData = [
  {
    image: avatar2,
    message: "Roman Joined the Team!",
    desc: "Congratulate him",
    time: "9:08 AM",
  },
  {
    image: avatar3,
    message: "New message received",
    desc: "Salma sent you new message",
    time: "11:56 AM",
  },
  {
    image: avatar4,
    message: "New Payment received",
    desc: "Check your earnings",
    time: "4:39 AM",
  },
  {
    image: avatar,
    message: "Jolly completed tasks",
    desc: "Assign her new tasks",
    time: "1:12 AM",
  },
];

export const themeColors = [
  {
    name: "blue-theme",
    color: "#1A97F5",
  },
  {
    name: "green-theme",
    color: "#03C9D7",
  },
  {
    name: "purple-theme",
    color: "#7352FF",
  },
  {
    name: "red-theme",
    color: "#FF5C8E",
  },
  {
    name: "indigo-theme",
    color: "#1E4DB7",
  },
  {
    color: "#FB9678",
    name: "orange-theme",
  },
];

export const userProfileData = [
  {
    icon: <BsCurrencyDollar />,
    title: "My Profile",
    desc: "Account Settings",
    iconColor: "#03C9D7",
    iconBg: "#E5FAFB",
  },
  {
    icon: <BsShield />,
    title: "My Inbox",
    desc: "Messages & Emails",
    iconColor: "rgb(0, 194, 146)",
    iconBg: "rgb(235, 250, 242)",
  },
  {
    icon: <FiCreditCard />,
    title: "My Tasks",
    desc: "To-do and Daily Tasks",
    iconColor: "rgb(255, 244, 229)",
    iconBg: "rgb(254, 201, 15)",
  },
];

export const ordersGrid = [
  {
    headerText: "Image",
    template: gridOrderImage,
    textAlign: "Center",
    width: "120",
  },
  {
    field: "OrderItems",
    headerText: "Item",
    width: "150",
    editType: "dropdownedit",
    textAlign: "Center",
  },
  {
    field: "CustomerName",
    headerText: "Customer Name",
    width: "150",
    textAlign: "Center",
  },
  {
    field: "TotalAmount",
    headerText: "Total Amount",
    format: "C2",
    textAlign: "Center",
    editType: "numericedit",
    width: "150",
  },
  {
    headerText: "Status",
    template: gridAppointmentStatus,
    field: "OrderItems",
    textAlign: "Center",
    width: "120",
  },
  {
    field: "OrderID",
    headerText: "Order ID",
    width: "120",
    textAlign: "Center",
  },

  {
    field: "Location",
    headerText: "Location",
    width: "150",
    textAlign: "Center",
  },
];

export const customersData = [
  {
    CustomerID: 1001,
    CustomerName: "Nirav Joshi",
    CustomerEmail: "nirav@gmail.com",
    CustomerImage: avatar2,
    ProjectName: "Hosting Press HTML",
    Status: "Active",
    StatusBg: "#8BE78B",
    Weeks: "40",
    Budget: "$2.4k",
    Location: "India",
  },
  {
    CustomerID: 1002,

    CustomerName: "Sunil Joshi",
    CustomerEmail: "sunil@gmail.com",
    ProjectName: "Elite Admin",
    Status: "Active",
    CustomerImage: avatar3,

    StatusBg: "#8BE78B",
    Weeks: "11",
    Budget: "$3.9k",
    Location: "India",
  },
  {
    CustomerID: 1003,

    CustomerName: "Andrew McDownland",
    CustomerEmail: "andrew@gmail.com",
    ProjectName: "Real Homes WP Theme",
    Status: "Pending",
    CustomerImage: avatar4,
    StatusBg: "#FEC90F",
    Weeks: "19",
    Budget: "$24.5k",
    Location: "USA",
  },
  {
    CustomerID: 1004,

    CustomerName: "Christopher Jamil",
    CustomerEmail: "jamil@gmail.com",
    ProjectName: "MedicalPro WP Theme",
    Status: "Completed",
    CustomerImage: avatar,
    StatusBg: "#8BE78B",
    Weeks: "34",
    Budget: "$16.5k",
    Location: "USA",
  },
  {
    CustomerID: 1005,

    CustomerName: "Michael",
    CustomerEmail: "michael@gmail.com",
    ProjectName: "Weekly WP Theme",
    Status: "Cancel",
    CustomerImage: avatar2,
    StatusBg: "red",
    Weeks: "34",
    Budget: "$16.5k",
    Location: "USA",
  },
  {
    CustomerID: 1006,
    CustomerName: "Nirav Joshi",
    CustomerEmail: "nirav@gmail.com",
    CustomerImage: avatar2,
    ProjectName: "Hosting Press HTML",
    Status: "Active",
    StatusBg: "#8BE78B",
    Weeks: "40",
    Budget: "$2.4k",
    Location: "India",
  },
  {
    CustomerID: 1007,

    CustomerName: "Sunil Joshi",
    CustomerEmail: "sunil@gmail.com",
    ProjectName: "Elite Admin",
    Status: "Active",
    CustomerImage: avatar3,

    StatusBg: "#8BE78B",
    Weeks: "11",
    Budget: "$3.9k",
    Location: "India",
  },
  {
    CustomerID: 1008,

    CustomerName: "Andrew McDownland",
    CustomerEmail: "andrew@gmail.com",
    ProjectName: "Real Homes WP Theme",
    Status: "Pending",
    CustomerImage: avatar4,
    StatusBg: "#FEC90F",
    Weeks: "19",
    Budget: "$24.5k",
    Location: "USA",
  },
  {
    CustomerID: 1009,

    CustomerName: "Christopher Jamil",
    CustomerEmail: "jamil@gmail.com",
    ProjectName: "MedicalPro WP Theme",
    Status: "Completed",
    CustomerImage: avatar,
    StatusBg: "#8BE78B",
    Weeks: "34",
    Budget: "$16.5k",
    Location: "USA",
  },
  {
    CustomerID: 1010,

    CustomerName: "Michael",
    CustomerEmail: "michael@gmail.com",
    ProjectName: "Weekly WP Theme",
    Status: "Cancel",
    CustomerImage: avatar2,
    StatusBg: "red",
    Weeks: "34",
    Budget: "$16.5k",
    Location: "USA",
  },
  {
    CustomerID: 1011,
    CustomerName: "Nirav Joshi",
    CustomerEmail: "nirav@gmail.com",
    CustomerImage: avatar2,
    ProjectName: "Hosting Press HTML",
    Status: "Active",
    StatusBg: "#8BE78B",
    Weeks: "40",
    Budget: "$2.4k",
    Location: "India",
  },
  {
    CustomerID: 1012,

    CustomerName: "Sunil Joshi",
    CustomerEmail: "sunil@gmail.com",
    ProjectName: "Elite Admin",
    Status: "Active",
    CustomerImage: avatar3,

    StatusBg: "#8BE78B",
    Weeks: "11",
    Budget: "$3.9k",
    Location: "India",
  },
  {
    CustomerID: 1013,

    CustomerName: "Andrew McDownland",
    CustomerEmail: "andrew@gmail.com",
    ProjectName: "Real Homes WP Theme",
    Status: "Pending",
    CustomerImage: avatar4,
    StatusBg: "#FEC90F",
    Weeks: "19",
    Budget: "$24.5k",
    Location: "USA",
  },
  {
    CustomerID: 1014,

    CustomerName: "Christopher Jamil",
    CustomerEmail: "jamil@gmail.com",
    ProjectName: "MedicalPro WP Theme",
    Status: "Completed",
    CustomerImage: avatar,
    StatusBg: "#8BE78B",
    Weeks: "34",
    Budget: "$16.5k",
    Location: "USA",
  },
  {
    CustomerID: 1015,

    CustomerName: "Michael",
    CustomerEmail: "michael@gmail.com",
    ProjectName: "Weekly WP Theme",
    Status: "Cancel",
    CustomerImage: avatar2,
    StatusBg: "red",
    Weeks: "34",
    Budget: "$16.5k",
    Location: "USA",
  },
  {
    CustomerID: 1016,
    CustomerName: "Nirav Joshi",
    CustomerEmail: "nirav@gmail.com",
    CustomerImage: avatar2,
    ProjectName: "Hosting Press HTML",
    Status: "Active",
    StatusBg: "#8BE78B",
    Weeks: "40",
    Budget: "$2.4k",
    Location: "India",
  },
  {
    CustomerID: 1017,

    CustomerName: "Sunil Joshi",
    CustomerEmail: "sunil@gmail.com",
    ProjectName: "Elite Admin",
    Status: "Active",
    CustomerImage: avatar3,

    StatusBg: "#8BE78B",
    Weeks: "11",
    Budget: "$3.9k",
    Location: "India",
  },
  {
    CustomerID: 1018,

    CustomerName: "Andrew McDownland",
    CustomerEmail: "andrew@gmail.com",
    ProjectName: "Real Homes WP Theme",
    Status: "Pending",
    CustomerImage: avatar4,
    StatusBg: "#FEC90F",
    Weeks: "19",
    Budget: "$24.5k",
    Location: "USA",
  },
  {
    CustomerID: 1019,

    CustomerName: "Christopher Jamil",
    CustomerEmail: "jamil@gmail.com",
    ProjectName: "MedicalPro WP Theme",
    Status: "Completed",
    CustomerImage: avatar,
    StatusBg: "#8BE78B",
    Weeks: "34",
    Budget: "$16.5k",
    Location: "USA",
  },
  {
    CustomerID: 1020,

    CustomerName: "Michael",
    CustomerEmail: "michael@gmail.com",
    ProjectName: "Weekly WP Theme",
    Status: "Cancel",
    CustomerImage: avatar2,
    StatusBg: "red",
    Weeks: "34",
    Budget: "$16.5k",
    Location: "USA",
  },
  {
    CustomerID: 1021,
    CustomerName: "Nirav Joshi",
    CustomerEmail: "nirav@gmail.com",
    CustomerImage: avatar2,
    ProjectName: "Hosting Press HTML",
    Status: "Active",
    StatusBg: "#8BE78B",
    Weeks: "40",
    Budget: "$2.4k",
    Location: "India",
  },
  {
    CustomerID: 1022,

    CustomerName: "Sunil Joshi",
    CustomerEmail: "sunil@gmail.com",
    ProjectName: "Elite Admin",
    Status: "Active",
    CustomerImage: avatar3,

    StatusBg: "#8BE78B",
    Weeks: "11",
    Budget: "$3.9k",
    Location: "India",
  },
  {
    CustomerID: 1023,

    CustomerName: "Andrew McDownland",
    CustomerEmail: "andrew@gmail.com",
    ProjectName: "Real Homes WP Theme",
    Status: "Pending",
    CustomerImage: avatar4,
    StatusBg: "#FEC90F",
    Weeks: "19",
    Budget: "$24.5k",
    Location: "USA",
  },
  {
    CustomerID: 1024,

    CustomerName: "Christopher Jamil",
    CustomerEmail: "jamil@gmail.com",
    ProjectName: "MedicalPro WP Theme",
    Status: "Completed",
    CustomerImage: avatar,
    StatusBg: "#8BE78B",
    Weeks: "34",
    Budget: "$16.5k",
    Location: "USA",
  },
  {
    CustomerID: 1025,

    CustomerName: "Michael",
    CustomerEmail: "michael@gmail.com",
    ProjectName: "Weekly WP Theme",
    Status: "Cancel",
    CustomerImage: avatar2,
    StatusBg: "red",
    Weeks: "34",
    Budget: "$16.5k",
    Location: "USA",
  },
  {
    CustomerID: 1026,
    CustomerName: "Nirav Joshi",
    CustomerEmail: "nirav@gmail.com",
    CustomerImage: avatar2,
    ProjectName: "Hosting Press HTML",
    Status: "Active",
    StatusBg: "#8BE78B",
    Weeks: "40",
    Budget: "$2.4k",
    Location: "India",
  },
  {
    CustomerID: 1027,

    CustomerName: "Sunil Joshi",
    CustomerEmail: "sunil@gmail.com",
    ProjectName: "Elite Admin",
    Status: "Active",
    CustomerImage: avatar3,

    StatusBg: "#8BE78B",
    Weeks: "11",
    Budget: "$3.9k",
    Location: "India",
  },
  {
    CustomerID: 1028,

    CustomerName: "Andrew McDownland",
    CustomerEmail: "andrew@gmail.com",
    ProjectName: "Real Homes WP Theme",
    Status: "Pending",
    CustomerImage: avatar4,
    StatusBg: "#FEC90F",
    Weeks: "19",
    Budget: "$24.5k",
    Location: "USA",
  },
  {
    CustomerID: 1029,

    CustomerName: "Christopher Jamil",
    CustomerEmail: "jamil@gmail.com",
    ProjectName: "MedicalPro WP Theme",
    Status: "Completed",
    CustomerImage: avatar,
    StatusBg: "#8BE78B",
    Weeks: "34",
    Budget: "$16.5k",
    Location: "USA",
  },
  {
    CustomerID: 1030,

    CustomerName: "Michael",
    CustomerEmail: "michael@gmail.com",
    ProjectName: "Weekly WP Theme",
    Status: "Cancel",
    CustomerImage: avatar2,
    StatusBg: "red",
    Weeks: "34",
    Budget: "$16.5k",
    Location: "USA",
  },
  {
    CustomerID: 1031,
    CustomerName: "Nirav Joshi",
    CustomerEmail: "nirav@gmail.com",
    CustomerImage: avatar2,
    ProjectName: "Hosting Press HTML",
    Status: "Active",
    StatusBg: "#8BE78B",
    Weeks: "40",
    Budget: "$2.4k",
    Location: "India",
  },
  {
    CustomerID: 1032,

    CustomerName: "Sunil Joshi",
    CustomerEmail: "sunil@gmail.com",
    ProjectName: "Elite Admin",
    Status: "Active",
    CustomerImage: avatar3,

    StatusBg: "#8BE78B",
    Weeks: "11",
    Budget: "$3.9k",
    Location: "India",
  },
  {
    CustomerID: 1033,

    CustomerName: "Andrew McDownland",
    CustomerEmail: "andrew@gmail.com",
    ProjectName: "Real Homes WP Theme",
    Status: "Pending",
    CustomerImage: avatar4,
    StatusBg: "#FEC90F",
    Weeks: "19",
    Budget: "$24.5k",
    Location: "USA",
  },
  {
    CustomerID: 1034,

    CustomerName: "Christopher Jamil",
    CustomerEmail: "jamil@gmail.com",
    ProjectName: "MedicalPro WP Theme",
    Status: "Completed",
    CustomerImage: avatar,
    StatusBg: "#8BE78B",
    Weeks: "34",
    Budget: "$16.5k",
    Location: "USA",
  },
  {
    CustomerID: 1035,

    CustomerName: "Michael",
    CustomerEmail: "michael@gmail.com",
    ProjectName: "Weekly WP Theme",
    Status: "Cancel",
    CustomerImage: avatar2,
    StatusBg: "red",
    Weeks: "34",
    Budget: "$16.5k",
    Location: "USA",
  },
  {
    CustomerID: 1036,
    CustomerName: "Nirav Joshi",
    CustomerEmail: "nirav@gmail.com",
    CustomerImage: avatar2,
    ProjectName: "Hosting Press HTML",
    Status: "Active",
    StatusBg: "#8BE78B",
    Weeks: "40",
    Budget: "$2.4k",
    Location: "India",
  },
  {
    CustomerID: 1037,

    CustomerName: "Sunil Joshi",
    CustomerEmail: "sunil@gmail.com",
    ProjectName: "Elite Admin",
    Status: "Active",
    CustomerImage: avatar3,

    StatusBg: "#8BE78B",
    Weeks: "11",
    Budget: "$3.9k",
    Location: "India",
  },
  {
    CustomerID: 1038,

    CustomerName: "Andrew McDownland",
    CustomerEmail: "andrew@gmail.com",
    ProjectName: "Real Homes WP Theme",
    Status: "Pending",
    CustomerImage: avatar4,
    StatusBg: "#FEC90F",
    Weeks: "19",
    Budget: "$24.5k",
    Location: "USA",
  },
  {
    CustomerID: 1039,
    CustomerName: "Christopher Jamil",
    CustomerEmail: "jamil@gmail.com",
    ProjectName: "MedicalPro WP Theme",
    Status: "Completed",
    CustomerImage: avatar,
    StatusBg: "#8BE78B",
    Weeks: "34",
    Budget: "$16.5k",
    Location: "USA",
  },
  {
    CustomerID: 1040,
    CustomerName: "Michael",
    CustomerEmail: "michael@gmail.com",
    ProjectName: "Weekly WP Theme",
    Status: "Cancel",
    CustomerImage: avatar2,
    StatusBg: "red",
    Weeks: "34",
    Budget: "$16.5k",
    Location: "USA",
  },
];

export const appointmentData = [
  {
    Status: "pending",
    Name: "Dr. Nancy Davolio",
    Type: "Emergency",
    Date: "01/02/2021",
    Location: "Room no. 403",
    Reference: 98765432,
  },
  {
    Status: "Completed",
    Name: "Dr. Nancy Davolio",
    Type: "Emergency",
    Date: "01/02/2021",
    Location: "Room no. 403",
    Reference: 98765432,
  },
  {
    Status: "Due",
    Name: "Dr. Nancy Davolio",
    Type: "Emergency",
    Date: "01/02/2021",
    Location: "Room no. 403",
    Reference: 98765432,
  },
  {
    Status: "pending",
    Name: "Dr. Nancy Davolio",
    Type: "Emergency",
    Date: "01/02/2021",
    Location: "Room no. 403",
    Reference: 98765432,
  },
  {
    Status: "pending",
    Name: "Dr. Nancy Davolio",
    Type: "Emergency",
    Date: "01/02/2021",
    Location: "Room no. 403",
    Reference: 98765432,
  },
  {
    Status: "Completed",
    Name: "Dr. Nasimiyu Danai",
    Type: "Emergency",
    Date: "01/02/2021",
    Location: "Room no. 403",
    Reference: 98765432,
  },
  {
    Status: "Postponed",
    Name: "Dr. Nasimiyu Danai",
    Type: "Emergency",
    Date: "01/02/2021",
    Location: "Room no. 403",
    Reference: 98765432,
  },
  {
    Status: "Completed",
    Name: "Dr. Nasimiyu Danai",
    Type: "Emergency",
    Date: "01/02/2021",
    Location: "Room no. 403",
    Reference: 98765432,
  },
  {
    Status: "Due",
    Name: "Dr. Nasimiyu Danai",
    Type: "Emergency",
    Date: "01/02/2021",
    Location: "Room no. 403",
    Reference: 98765432,
  },
  {
    Status: "Completed",
    Name: "Dr. Nasimiyu Danai",
    Type: "Emergency",
    Date: "01/02/2021",
    Location: "Room no. 403",
    Reference: 98765432,
  },
  {
    Status: "Completed",
    Name: "Dr. Nasimiyu Danai",
    Type: "Emergency",
    Date: "01/02/2021",
    Location: "Room no. 403",
    Reference: 98765432,
  },
  {
    Status: "Completed",
    Name: "Dr. Nasimiyu Danai",
    Type: "Emergency",
    Date: "01/02/2021",
    Location: "Room no. 403",
    Reference: 98765432,
  },
  {
    Status: "Completed",
    Name: "Dr. Nasimiyu Danai",
    Type: "Emergency",
    Date: "01/02/2021",
    Location: "Room no. 403",
    Reference: 98765432,
  },
  {
    Status: "Completed",
    Name: "Dr. Nasimiyu Danai",
    Type: "Emergency",
    Date: "01/02/2021",
    Location: "Room no. 403",
    Reference: 98765432,
  },
  {
    Status: "Completed",
    Name: "Dr. Nasimiyu Danai",
    Type: "Emergency",
    Date: "01/02/2021",
    Location: "Room no. 403",
    Reference: 98765432,
  },
  {
    Status: "Completed",
    Name: "Dr. Nasimiyu Danai",
    Type: "Emergency",
    Date: "01/02/2021",
    Location: "Room no. 403",
    Reference: 98765432,
  },
];

export const scheduleData = [
  {
    Id: 1,
    Subject: "Explosion of Betelgeuse Star",
    Location: "Space Center USA",
    StartTime: "2021-01-10T04:00:00.000Z",
    EndTime: "2021-01-10T05:30:00.000Z",
    CategoryColor: "#1aaa55",
  },
  {
    Id: 2,
    Subject: "Thule Air Crash Report",
    Location: "Newyork City",
    StartTime: "2021-01-11T06:30:00.000Z",
    EndTime: "2021-01-11T08:30:00.000Z",
    CategoryColor: "#357cd2",
  },
  {
    Id: 3,
    Subject: "Blue Moon Eclipse",
    Location: "Space Center USA",
    StartTime: "2021-01-12T04:00:00.000Z",
    EndTime: "2021-01-12T05:30:00.000Z",
    CategoryColor: "#7fa900",
  },
  {
    Id: 4,
    Subject: "Meteor Showers in 2021",
    Location: "Space Center USA",
    StartTime: "2021-01-13T07:30:00.000Z",
    EndTime: "2021-01-13T09:00:00.000Z",
    CategoryColor: "#ea7a57",
  },
  {
    Id: 5,
    Subject: "Milky Way as Melting pot",
    Location: "Space Center USA",
    StartTime: "2021-01-14T06:30:00.000Z",
    EndTime: "2021-01-14T08:30:00.000Z",
    CategoryColor: "#00bdae",
  },
  {
    Id: 6,
    Subject: "Mysteries of Bermuda Triangle",
    Location: "Bermuda",
    StartTime: "2021-01-14T04:00:00.000Z",
    EndTime: "2021-01-14T05:30:00.000Z",
    CategoryColor: "#f57f17",
  },
  {
    Id: 7,
    Subject: "Glaciers and Snowflakes",
    Location: "Himalayas",
    StartTime: "2021-01-15T05:30:00.000Z",
    EndTime: "2021-01-15T07:00:00.000Z",
    CategoryColor: "#1aaa55",
  },
  {
    Id: 8,
    Subject: "Life on Mars",
    Location: "Space Center USA",
    StartTime: "2021-01-16T03:30:00.000Z",
    EndTime: "2021-01-16T04:30:00.000Z",
    CategoryColor: "#357cd2",
  },
  {
    Id: 9,
    Subject: "Alien Civilization",
    Location: "Space Center USA",
    StartTime: "2021-01-18T05:30:00.000Z",
    EndTime: "2021-01-18T07:30:00.000Z",
    CategoryColor: "#7fa900",
  },
  {
    Id: 10,
    Subject: "Wildlife Galleries",
    Location: "Africa",
    StartTime: "2021-01-20T05:30:00.000Z",
    EndTime: "2021-01-20T07:30:00.000Z",
    CategoryColor: "#ea7a57",
  },
  {
    Id: 11,
    Subject: "Best Photography 2021",
    Location: "London",
    StartTime: "2021-01-21T04:00:00.000Z",
    EndTime: "2021-01-21T05:30:00.000Z",
    CategoryColor: "#00bdae",
  },
  {
    Id: 12,
    Subject: "Smarter Puppies",
    Location: "Sweden",
    StartTime: "2021-01-08T04:30:00.000Z",
    EndTime: "2021-01-08T06:00:00.000Z",
    CategoryColor: "#f57f17",
  },
  {
    Id: 13,
    Subject: "Myths of Andromeda Galaxy",
    Location: "Space Center USA",
    StartTime: "2021-01-06T05:00:00.000Z",
    EndTime: "2021-01-06T07:00:00.000Z",
    CategoryColor: "#1aaa55",
  },
  {
    Id: 14,
    Subject: "Aliens vs Humans",
    Location: "Research Center of USA",
    StartTime: "2021-01-05T04:30:00.000Z",
    EndTime: "2021-01-05T06:00:00.000Z",
    CategoryColor: "#357cd2",
  },
  {
    Id: 15,
    Subject: "Facts of Humming Birds",
    Location: "California",
    StartTime: "2021-01-19T04:00:00.000Z",
    EndTime: "2021-01-19T05:30:00.000Z",
    CategoryColor: "#7fa900",
  },
  {
    Id: 16,
    Subject: "Sky Gazers",
    Location: "Alaska",
    StartTime: "2021-01-22T05:30:00.000Z",
    EndTime: "2021-01-22T07:30:00.000Z",
    CategoryColor: "#ea7a57",
  },
  {
    Id: 17,
    Subject: "The Cycle of Seasons",
    Location: "Research Center of USA",
    StartTime: "2021-01-11T00:00:00.000Z",
    EndTime: "2021-01-11T02:00:00.000Z",
    CategoryColor: "#00bdae",
  },
  {
    Id: 18,
    Subject: "Space Galaxies and Planets",
    Location: "Space Center USA",
    StartTime: "2021-01-11T11:30:00.000Z",
    EndTime: "2021-01-11T13:00:00.000Z",
    CategoryColor: "#f57f17",
  },
  {
    Id: 19,
    Subject: "Lifecycle of Bumblebee",
    Location: "San Fransisco",
    StartTime: "2021-01-14T00:30:00.000Z",
    EndTime: "2021-01-14T02:00:00.000Z",
    CategoryColor: "#7fa900",
  },
  {
    Id: 20,
    Subject: "Alien Civilization",
    Location: "Space Center USA",
    StartTime: "2021-01-14T10:30:00.000Z",
    EndTime: "2021-01-14T12:30:00.000Z",
    CategoryColor: "#ea7a57",
  },
  {
    Id: 21,
    Subject: "Alien Civilization",
    Location: "Space Center USA",
    StartTime: "2021-01-10T08:30:00.000Z",
    EndTime: "2021-01-10T10:30:00.000Z",
    CategoryColor: "#ea7a57",
  },
  {
    Id: 22,
    Subject: "The Cycle of Seasons",
    Location: "Research Center of USA",
    StartTime: "2021-01-12T09:00:00.000Z",
    EndTime: "2021-01-12T10:30:00.000Z",
    CategoryColor: "#00bdae",
  },
  {
    Id: 23,
    Subject: "Sky Gazers",
    Location: "Greenland",
    StartTime: "2021-01-15T09:00:00.000Z",
    EndTime: "2021-01-15T10:30:00.000Z",
    CategoryColor: "#ea7a57",
  },
  {
    Id: 24,
    Subject: "Facts of Humming Birds",
    Location: "California",
    StartTime: "2021-01-16T07:00:00.000Z",
    EndTime: "2021-01-16T09:00:00.000Z",
    CategoryColor: "#7fa900",
  },
];
