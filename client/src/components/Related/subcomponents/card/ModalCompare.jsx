/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react';
// eslint-disable-next-line import/extensions
import styles from '../../styled.js';

const ModalCompare = ({ toggleModal, comparisonData }) => (
  <styles.modalDiv>
    <styles.closeModal onClick={() => { toggleModal(); }}>X</styles.closeModal>
    <styles.modalTitle>Comparing</styles.modalTitle>
    <styles.table id="table">
      <tbody>
        <tr>
          <styles.modalFirstRow scope="col">Overview Product</styles.modalFirstRow>
          <styles.modalFirstRow scope="col">Feature</styles.modalFirstRow>
          <styles.modalFirstRow scope="col">This Product</styles.modalFirstRow>
        </tr>
        {comparisonData.map(({ featureToCompare, overviewValue, cardValue }) => (
          <tr>
            <styles.tableData>{overviewValue && overviewValue.toString() === 'true' ? <i class="far fa-check-circle"></i> : overviewValue}</styles.tableData>
            <styles.tableHeader>{featureToCompare}</styles.tableHeader>
            <styles.tableData>{cardValue && cardValue.toString() === 'true' ? <i class="far fa-check-circle"></i> : cardValue}</styles.tableData>
          </tr>
        ))}
      </tbody>
    </styles.table>
  </styles.modalDiv>
);

export default ModalCompare;
