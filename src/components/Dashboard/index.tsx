import React, { useEffect, lazy, Suspense, useState } from "react";
import { getUsers } from "../../reducers/users";
import { useAppDispatch, useAppSelector } from "../../hooks";
const Tables = lazy(() => import("../Tables"));
const Layout = lazy(() => import("../Layout"));
const Spinner = lazy(() => import("../Spinner"));
const Users = lazy(() => import("../Users"));
const Paginate = lazy(() => import("../Paginate"));
const statuses = ["pending", "inactive", "blacklisted", "active"];
const Index = () => {
  const dispatch = useAppDispatch();
  const { users } = useAppSelector((state) => state.user);
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  const newArr = users?.map((item) => ({
    ...item,
    status: statuses[Math.floor(Math.random() * statuses.length)],
  }));

  const activeUsers = newArr?.filter((item) => item.status === "active");

  const organizations = newArr?.map(({ orgName }) => ({
    orgName,
  }));

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postsPerPage] = useState<number>(9);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = newArr?.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage !== Math.ceil(newArr ? newArr?.length : 0 / postsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };
  return (
    <Suspense fallback={<Spinner />}>
      <Layout>
        <Users
          users={newArr ? newArr?.length : 0}
          activeUsers={activeUsers ? activeUsers.length : 0}
        />
        {newArr && (
          <>
            <Tables array={currentPosts} />
            <Paginate
              postsPerPage={postsPerPage}
              totalPosts={newArr ? newArr?.length : 0}
              paginate={paginate}
              previousPage={previousPage}
              nextPage={nextPage}
              currentPage={currentPage}
              organizations={organizations ? organizations : []}
            />
          </>
        )}
      </Layout>
    </Suspense>
  );
};

export default Index;
