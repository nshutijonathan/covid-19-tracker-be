export const getPagination = async (req, model, condition = {}) => {
  const totalItems = await model.count(condition);
  let limit = Number(req.query.limit) || 10;
  const page = Number(req.query.page) || 1;
  if (page === 1 && !req.query.limit) {
    limit = totalItems;
  }
  const offset = page > 0 ? (page - 1) * limit : 0;

  return {
    limit,
    page,
    offset,
    totalItems,
    totalPages: Math.ceil(totalItems / limit),
    currentPage: page,
  };
};
