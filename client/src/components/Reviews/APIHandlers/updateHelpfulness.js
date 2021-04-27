const UpdateHelpfulness = (review_id, cb) => {
  $.ajax({
    url: `/reviews/${review_id}/helpful`,
    type: 'PUT',
    success: (data) => cb(data),
  });
};

export default UpdateHelpfulness;
