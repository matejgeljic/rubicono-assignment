import React from 'react';
import './Spinner.css';

interface Props {}

const Spinner: React.FC<Props> = (props: Props) => {
  return <div className="loader">Loading...</div>;
};

export default Spinner;
