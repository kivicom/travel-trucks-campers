import { Suspense } from 'react';
import Loader from '../Loader/Loader';
import Header from '../Header/Header';

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}> {children} </Suspense>
    </>
  );
};
