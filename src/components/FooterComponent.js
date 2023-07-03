import React, { useEffect } from 'react';

const FooterComponent = () => {
  const testDeployedAPI = async () => {
    try {
      let apiResults = await fetch('https://saulceja08-flatiron-phase-2-json-server.onrender.com/toys')
        .then(r => r.json())
        .then(data => data);
      console.log(apiResults);
    } catch (error) {
      console.log('did not work', error);
    }
  };

  useEffect(() => {
    testDeployedAPI();
  }, []);

  return (
    <div>FooterComponent</div>
  );
};

export default FooterComponent;
