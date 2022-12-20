import { Link } from '@remix-run/react';

const Index = () => {
  return (
    <>
      <h1>Index page</h1>
      <Link to="/notes">Go to Notes Page</Link>
    </>
  );
};

export default Index;
