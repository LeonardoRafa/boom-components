import styled from "styled-components";

export const Container = styled.label`
  display: flex;
  align-items: center;
  position: relative;
  user-select: none;
  color: #565656;

  input:checked ~ .radioContainer .checkmark:after {
    display: block;
  }

  input:disabled ~ .radioContainer {
    cursor: default;
    opacity: 0.5;
  }

  input:disabled ~ .radioLabel {
    cursor: default;
    opacity: 0.5;
  }

  .radioLabel {
    display: flex;
    align-items: center;
    position: relative;
    cursor: pointer;
  }

  .radioContainer {
    cursor: pointer;

    .checkmark {
      margin-right: 10px;
      height: 16px;
      width: 16px;
      border-radius: 50%;
      border: 1px solid #bbb;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #ffffff;
    }
    .checkmark:after {
      content: "";
      position: absolute;
      display: none;
    }
    .checkmark:after {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #50aff4;
    }
  }

  > input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
`;
