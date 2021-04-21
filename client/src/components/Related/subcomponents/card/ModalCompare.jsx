/* eslint-disable react/prop-types */
import React from 'react';
// eslint-disable-next-line import/extensions
import styles from '../../styled.js';

const ModalCompare = ({ toggleModal }) => (
  <styles.modalDiv>
    <div onClick={() => { toggleModal(); }}>X</div>
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
  </styles.modalDiv>
);

export default ModalCompare;
