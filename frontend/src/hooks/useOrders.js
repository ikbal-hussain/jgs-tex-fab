import { useInfiniteQuery } from "react-query";
import axios from "axios";

const fetchOrders = async ({ pageParam = null }) => {
  const response = await axios.get("http://localhost:5010/api/orders", {
    params: {
      cursor: pageParam,
      limit: 50,
      sort: "createdAt",
      sortDirection: "asc",
    },
  });
  return response.data;
};

const useOrders = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetching: isLoading,
    isError,
  } = useInfiniteQuery("orders", fetchOrders, {
    getNextPageParam: (lastPage) => lastPage.nextCursor || null,
  });

  const orders = data?.pages.flatMap((page) => page.data) || [];

  return { orders, fetchNextPage, hasNextPage, isLoading, isError };
};

export default useOrders;
