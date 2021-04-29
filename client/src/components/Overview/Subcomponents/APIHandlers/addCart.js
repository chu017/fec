import $ from 'jquery';

const AddCart = (skuID, cb) => {
  $.ajax({
    url: `/cart/${skuID}`,
    type: 'POST',
    success: (data) => cb(data),
  });
};

export default AddCart;
