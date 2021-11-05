import styled from 'styled-components';

export const PrimaryButton = (props) => {
  const { width = '100%', height = '100%', onClick, children } = props;
  return (
    <>
      <SButton
        style={{ width: `${width}`, height: `${height}`, margin: `20px` }}
        onClick={onClick}
      >
        {children}
      </SButton>
    </>
  );
};

const SButton = styled.button`
  font-size: 2rem;
  font-family: sans-serif;
  color: #fff;
  background-color: tomato;
  border-radius: 40px;
  outline: none;
`;
