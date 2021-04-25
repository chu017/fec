/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react';
// eslint-disable-next-line import/extensions
import styles from '../../styled.js';

const ModalCompare = ({ toggleModal, overviewFeatures, cardProductFeatures }) => {
  console.log(overviewFeatures, cardProductFeatures);
  return (
    <styles.modalDiv>
      <styles.closeModal onClick={() => { toggleModal(); }}>X</styles.closeModal>
      <styles.modalTitle>Comparison</styles.modalTitle>
      <styles.table id="table">
        <tbody>
          <tr>
            <styles.modalFirstRow scope="col">Main Product</styles.modalFirstRow>
            <styles.modalFirstRow scope="col">Feature</styles.modalFirstRow>
            <styles.modalFirstRow scope="col">Card Product</styles.modalFirstRow>
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
};

export default ModalCompare;
