import AuthPage from '../components/Auth';

export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  }
}

export default function Home(props) {
  return (
    <AuthPage />
  );
}
