import axios from 'axios';

import { useCallback, useState } from 'react';

export const useCompanyAllGet = () => {
  const [loading, setLoading] = useState(false);
  const [companys, setCompanys] = useState([]);

  const getCompanys = useCallback(() => {
    setLoading(true);

    axios
      .get('https://my-json-server.typicode.com/kiyo7/sampledata/company/')
      .then((res) => {
        setCompanys(res.data);
        // console.log(res)
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return { getCompanys, loading, companys };
};
