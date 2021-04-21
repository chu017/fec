<<<<<<< HEAD
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
=======
>>>>>>> workd on cards, scroll buttons, and related products modal. Modal needs work, and I need a place to store outfit data
/* eslint-disable react/prop-types */
import React from 'react';
// eslint-disable-next-line import/extensions
import styles from '../../styled.js';

const ModalCompare = ({ toggleModal }) => (
  <styles.modalDiv>
    <div onClick={() => { toggleModal(); }}>X</div>
<<<<<<< HEAD
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
=======
    <table>
      <tbody>
        <tr>
          <th scope="col">Main Product</th>
          <th scope="col">Feature</th>
          <th scope="col">Card Product</th>
        </tr>
        <tr>
          <td>$1</td>
          <th scope="row">Price</th>
          <td>$100,000</td>
        </tr>
        <tr>
          <td>false</td>
          <th scope="row">BoojiBlingBling</th>
          <td>true</td>
        </tr>
      </tbody>
    </table>
>>>>>>> workd on cards, scroll buttons, and related products modal. Modal needs work, and I need a place to store outfit data
  </styles.modalDiv>
);

export default ModalCompare;
