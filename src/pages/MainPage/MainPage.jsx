import React, { useEffect, useCallback } from 'react';
import { useCompanyAllGet } from '../../hooks/useCompanyAllGet';
import { useSelectCompany } from '../../hooks/useSelectCompany';
import styled from 'styled-components';

import { useHistory } from 'react-router-dom';

import { CompanyCards } from './CompanyCard';

import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

export const MainPage = () => {
  const { getCompanys, loading, companys } = useCompanyAllGet();
  const { onSelectCompany, selectCompany } = useSelectCompany();

  const history = useHistory();

  useEffect(() => {
    getCompanys()
  }, []);

  const onClickCompany = useCallback(
    (id) => {
      onSelectCompany({ id, companys });
      history.push(`/company/${id.id}`, { state: companys });
    },
    [companys, onSelectCompany]
  );

  return (
    <>
      <SH1>企業一覧</SH1>
      {loading ? (
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={loading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : (
        <SContentsWrapper>
          {companys.map((company) => (
            <SNavItem key={company.id}>
              <CompanyCards
                id={company.id}
                image={company.image}
                name={company.name}
                onClick={() => onClickCompany(company)}
              />
            </SNavItem>
          ))}
        </SContentsWrapper>
      )}
    </>
  );
};

const SH1 = styled.h1`
  text-align: center;
  color: #647878;
  margin-bottom: 0;
`;

const SContentsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: space-between;
  gap: 3em;
  padding: 6%;
  text-align: center;
`;

const SNavItem = styled.div`
  width: 98%;
`;
