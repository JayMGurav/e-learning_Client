/**@jsx jsx */
import { jsx, css } from '@emotion/core';
import { ReactComponent as Logo } from '../images/play.svg';

function LogoDiv() {
  return (
    <div
      css={css`
        width: 40px;
        height: 40px;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        border-radius: 8px;
        background: red;
        margin: 3vh 0.5rem;
      `}
    >
      <Logo />
    </div>
  );
}

export default LogoDiv;
