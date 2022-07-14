import React from "react";

type ButtonProps = {
  handleClick: () => void;
  handleClickWithEvent: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};

function Button(props: ButtonProps) {
  return (
    <>
      <button onClick={props.handleClick}>Click</button>
      <button onClick={(event) => props.handleClickWithEvent(event, 1)}>Another Click</button>
    </>
  );
}

export default Button;
