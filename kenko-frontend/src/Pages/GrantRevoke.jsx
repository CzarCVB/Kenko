import React from "react";
import {
  GridComponent,
  Inject,
  ColumnDirective,
  ColumnsDirective,
  Search,
  Page,
} from "@syncfusion/ej2-react-grids";

import Header from "../components/Header";
import { accessData, accessGrid } from "../data/dummy";

const GrantRevoke = () => {
  const toolbarOptions = ["Search"];

  const editing = { allowDeleting: true, allowEditing: true };

  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category='Page' title='Grant/Revoke Access' />
      <GridComponent
        dataSource={accessData}
        loadingIndicator={{ indicatorType: "Shimmer" }}
        width='auto'
        allowPaging
        allowSorting
        pageSettings={{ pageCount: 5 }}
        editSettings={editing}
        toolbar={toolbarOptions}>
        <ColumnsDirective>
          {accessGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Search, Page]} />
      </GridComponent>
    </div>
  );
};

export default GrantRevoke;
