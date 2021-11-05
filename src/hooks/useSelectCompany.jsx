import { useCallback, useState } from 'react';

export const useSelectCompany = () => {
  const [selectCompany, setSelectCompany] = useState('');

  const onSelectCompany = useCallback((props) => {
    const { id, companys } = props;

    const targetCompany = companys.find((company) => company.id.id === id.id);
    setSelectCompany(targetCompany);
  }, []);
  return { onSelectCompany, selectCompany };
};
