const OrderModel = require("../models/order.model");

const getOrders = async (req, res, next) => {
  try {
    const {
      cursor,
      limit = 50,
      sort = "createdAt",
      sortDirection = "asc",
      status,
    } = req.query;

    const query = {};
    if (status) {
      query.status = status;
    }

    const sortOrder = sortDirection === "asc" ? 1 : -1;

    if (cursor) {
      const cursorObj = JSON.parse(cursor);

      if (cursorObj[sort]) {
        query[sort] =
          sortDirection === "asc"
            ? { $gt: cursorObj[sort] }
            : { $lt: cursorObj[sort] };
      }

      query.createdAt =
        sortDirection === "asc"
          ? { $gt: cursorObj.createdAt }
          : { $lt: cursorObj.createdAt };
    }

    const orders = await OrderModel.find(query)
      .sort({ [sort]: sortOrder, createdAt: sortOrder })
      .limit(parseInt(limit))
      .exec();

    const nextCursor =
      orders.length > 0
        ? JSON.stringify({
            [sort]: orders[orders.length - 1][sort],
            createdAt: orders[orders.length - 1].createdAt,
          })
        : null;

    const totalCount = await OrderModel.countDocuments();

    res.status(200).json({ data: orders, nextCursor, totalCount });
  } catch (error) {
    next(error);
  }
};

module.exports = { getOrders };
