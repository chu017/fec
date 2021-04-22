/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react';
// eslint-disable-next-line import/extensions
import styles from '../../styled.js';

const ModalCompare = ({ toggleModal }) => (
  <styles.modalDiv>
    <div onClick={() => { toggleModal(); }}>X</div>
    <styles.table id="table">
      <tbody>
        <tr>
          <styles.tableHeader scope="col">Main Product</styles.tableHeader>
          <styles.tableHeader scope="col">Feature</styles.tableHeader>
          <styles.tableHeader scope="col">Card Product</styles.tableHeader>
        </tr>
        <tr>
          <styles.tableData>$1</styles.tableData>
          <styles.tableHeader scope="row">Price</styles.tableHeader>
          <styles.tableData>$100,000</styles.tableData>
        </tr>
        <tr>
          <styles.tableData>false</styles.tableData>
          <styles.tableHeader scope="row">BoojiBlingBling</styles.tableHeader>
          <styles.tableData>true</styles.tableData>
        </tr>
      </tbody>
    </styles.table>
  </styles.modalDiv>
);

export default ModalCompare;
