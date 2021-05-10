// import Head from 'next/head';
// import Image from 'next/image';
import { GetStaticProps } from 'next';

// eslint-disable-next-line no-undef

export const getStaticProps: GetStaticProps = async () => {
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
