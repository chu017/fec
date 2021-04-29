/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react';
// eslint-disable-next-line import/extensions
import styles from '../../styled.js';

const ModalCompare = ({
  toggleModal, comparisonData, name, overviewProduct,
}) => (
  <styles.modalDiv>
    <styles.closeModal onClick={() => { toggleModal(); }}>X</styles.closeModal>
    <styles.modalTitle>Comparing</styles.modalTitle>
    <styles.table id="table">
      <tbody>
        <tr>
          <styles.modalFirstRow scope="col">{overviewProduct}</styles.modalFirstRow>
          <styles.modalFirstRow scope="col">Feature</styles.modalFirstRow>
          <styles.modalFirstRow scope="col">{name}</styles.modalFirstRow>
        </tr>
        {comparisonData.map(({ featureToCompare, overviewValue, cardValue }) => (
          <tr>
            <styles.tableData>{overviewValue}</styles.tableData>
            <styles.tableHeader>{featureToCompare}</styles.tableHeader>
            <styles.tableData>{cardValue}</styles.tableData>
          </tr>
        ))}
      </tbody>
    </styles.table>
  </styles.modalDiv>
);

export default ModalCompare;
