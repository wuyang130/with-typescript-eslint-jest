// import Head from 'next/head';
// import Image from 'next/image';
import { GetServerSideProps } from 'next';

// eslint-disable-next-line no-undef

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: { test: 'aa' },
  };
};

export const Home = (props) => (
  <>
    <div>test{props.test}</div>
  </>
);

export default Home;
