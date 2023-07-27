import styled from "styled-components";

export const Wrapper = styled.div`
  flex: 4;
  padding: 5px 20px 20px;
  overflow-y: scroll;
`;

export const Title = styled.h1`
  text-transform: capitalize;
  font-weight: 600;
`;

export const Form = styled.form``;

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 10px;
`;

export const Label = styled.label`
  font-weight: ${(props) => props.type === "bold" && 600};
  display: ${(props) => props.htmlFor === "file" && "flex"};
  flex-direction: ${(props) => props.htmlFor === "file" && "column"};
  width: ${(props) => props.htmlFor === "file" && "fit-content"};
  cursor: ${(props) => props.htmlFor === "file" && "pointer"};
  color: gray;
`;

export const InputWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const Input = styled.input`
  width: 260px;
  padding: 5px;
  display: ${(props) => props.type === "file" && "none"};

  @media (max-width: 290px) {
    width: 100%;
  }
`;

export const Image = styled.img`
  width: 200px;
  aspect-ratio: 2/1;
  object-fit: cover;
`;

export const IconButton = styled.button`
  border: none;
  cursor: pointer;
  color: #fff;
  background-color: ${(props) => props.bg};
`;

export const TextWrapper = styled.div`
  width: 260px;
  margin-bottom: ${(props) => props.margin === "yes" && "10px"};
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;

export const Text = styled.span`
  font-style: italic;
  color: orange;
`;

export const Select = styled.select`
  width: 250px;
  padding: 5px;

  @media (max-width: 290px) {
    width: 100%;
  }
`;

export const Option = styled.option``;

export const Button = styled.button`
  margin-top: 5px;
  padding: 10px 50px;
  border-radius: 10px;
  border: none;
  font-weight: 600;
  color: #fff;
  background-color: darkblue;
  cursor: pointer;
`;

export const Error = styled.p`
  color: red;
`;
