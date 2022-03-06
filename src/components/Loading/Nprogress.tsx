import React, { useEffect } from 'react';
import nprogress from 'nprogress';
import 'nprogress/nprogress.css';

function Nprogress() {
  useEffect(() => {
    nprogress.start();
    return () => {
      nprogress.done();
    };
  });
  return <div />;
}

export default Nprogress;
