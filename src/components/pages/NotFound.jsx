import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div>
      <h2>
        This page doesn't exist.
        <br /> Go <Link to="/">Home</Link>
      </h2>
    </div>
  );
};
