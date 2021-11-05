import styled from 'styled-components';

export const CompanyCards = (props) => {
  const { image, name, onClick } = props;
  // console.log(props);

  return (
    <SCard onClick={onClick}>
      <SImage src={image} alt="会社名" />
      <SCompanyDescriptionWrapper>
        <SIconWithName>
          <SCompanyName>{name}</SCompanyName>
        </SIconWithName>
      </SCompanyDescriptionWrapper>
    </SCard>
  );
};

const SCard = styled.div`
  width: 100%;
  height: 100%;
  :hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;

const SImage = styled.img`
  width: 100%;
  height: 80%;
  border-radius: 20px;
  border: 7px solid #85848f;
`;

const SIconWithName = styled.div`
  display: flex;
`;

const SCompanyDescriptionWrapper = styled.div``;

const SCompanyName = styled.p`
  font-size: 1.24rem;
  font-family: 'Noto Sans JP', sans-serif;
  background-image: linear-gradient(#6d5f65 0%, #544e4e 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;
