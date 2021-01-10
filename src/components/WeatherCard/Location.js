import styled from "@emotion/styled";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const Location = ({ city, country, getWeather }) => {
  const [query, setQuery] = useState("");
  const [inputMode, setInputMode] = useState(false);
  const inputRef = useRef("");

  useEffect(() => {
    if (inputMode) {
      inputRef.current.focus();
    }
  }, [inputMode]);

  if (inputMode) {
    return (
      <Container>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <FormElement
            onSubmit={(e) => {
              e.preventDefault();
              getWeather(query);
            }}
          >
            <InputField
              ref={inputRef}
              required
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <SearchButton type="submit">Search</SearchButton>
            <CancelButton onClick={() => setInputMode(false)}>X</CancelButton>
          </FormElement>
        </motion.div>
      </Container>
    );
  }

  return (
    <Container>
      <City onClick={() => setInputMode(true)}>{city}</City>
      <Country>{country}</Country>
    </Container>
  );
};

export default Location;

const Container = styled.div`
  text-align: center;
`;

const FormElement = styled.form`
  display: flex;
  position: relative;
  background: #46618b;
  border-radius: 4px;
`;
const InputField = styled.input`
  background: transparent;
  color: white;
  border: none;
  padding: 4px;
  width: 80px;
  &:focus {
    outline: 0;
  }
`;

const SearchButton = styled.button`
  padding: 4px;
  background: #394e70;
  border: none;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  color: white;
  cursor: pointer;
`;

const CancelButton = styled.span`
  position: absolute;
  background: #557fc2;
  cursor: pointer;
  width: 17px;
  height: 17px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  top: -8px;
  right: -10px;
  font-size: 0.8rem;
  box-shadow: 1px 0px 2px rgba(0, 0, 0, 0.4);
`;

const City = styled.h2`
  font-family: "Merriweather", sans-serif;
  font-size: 1.6rem;
  position: relative;
  cursor: pointer;
  &:hover {
    top: -5px;
  }
`;
const Country = styled.h1`
  font-family: "Fira Sans", sans-serif;
  font-size: 1.1rem;
`;
