import React from "react";
//import { ColorPickerComponent } from "@syncfusion/ej2-react-inputs";

import Header from "../../components/Header";

// const change = (args) => {
//   document.getElementById("preview").style.backgroundColor =
//     args.currentValue.hex;
// };

// const CustomColorPicker = ({ id, mode }) => (
//   <ColorPickerComponent
//     id={id}
//     mode={mode}
//     modeSwitcher={false}
//     inline
//     showButtons={false}
//     change={change}
//   />
// );

const DoctorProfile = () => (
  <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
    <Header category='User Profile' title='Chaitanya Vishnu Bhatt' />
  </div>
);

export default DoctorProfile;
