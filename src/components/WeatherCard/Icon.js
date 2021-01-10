import styled from "@emotion/styled";

const Icon = ({ condition }) => {
  var icon = `./img/${condition}.png`;

  const Icon = styled.img`
    width: 40%;
  `;
  try {
    return <Icon src={icon} alt="Weather Icon" />;
  } catch {
    return <Icon src="./img/Fog.png" alt="Weather Icon" />;
  }
};

export default Icon;
