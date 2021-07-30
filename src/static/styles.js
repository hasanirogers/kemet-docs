import { css } from 'lit';

export const stylesBase = css`
  input[type="text"] {
    font-size: var(--fds-type__size--body1);
    box-sizing: border-box;
    color: var(--kemet-color-primary);
    width: 100%;
    height: 5rem;
    padding: 0.8rem 1.2rem;
    border: 0.1rem solid var(--fds-color--disabled-dark);
    border-radius: 0.4rem;
    transition: box-shadow .3s ease;
    background-color: var(--fds-color--white);
  }

  table {
    width: 99%;
    border-collapse: collapse;
  }

  th,
  td {
    font-size: var(--fds-type__size--body2);
    text-align: left;
    vertical-align: top;
    padding: 0.5rem;
  }

  td:first-child {
    white-space: nowrap;
  }

  td em {
    color: var(--fds-color--disabled-light)
  }

  .select-box {
    position: relative;
    background: #ffffff;
    box-shadow: 0 15px 30px -10px rgba(0,0,0,0.1);
  }

  .select-box select {
    cursor: pointer;
    font-size: 1.6rem;
    width: 100%;
    border: none;
    padding: 2rem;
    box-shadow: none;
    appearance: none;
    background-image: none;
    background-color: transparent;
  }

  .select-box::after {
    content: "╲╱";
    font-size: 0.5rem;
    font-weight: bold;
    display: block;
    position: absolute;
    top: 50%;
    right: 2rem;
    pointer-events: none;
    transform: translateY(-50%) scaleX(1.25);
  }

`;

export const stylesFDSColors = css`
  .fds-color__bg--primary {
    background-color: var(--kemet-color-primary);
  }

  .fds-color__text--primary {
    color: var(--kemet-color-primary);
  }

  .fds-color__bg--secondary {
    background-color: var(--fds-color--secondary);
  }

  .fds-color__text--secondary {
    color: var(--fds-color--secondary);
  }

  .fds-color__bg--tertiary {
    background-color: var(--fds-color--tertiary);
  }

  .fds-color__text--tertiary {
    color: var(--fds-color--tertiary);
  }

  .fds-color__bg--white {
    background-color: var(--fds-color--white);
  }

  .fds-color__text--white {
    color: var(--fds-color--white);
  }

  .fds-color__bg--black {
    background-color: var(--fds-color--black);
  }

  .fds-color__text--black {
    color: var(--fds-color--black);
  }

  .fds-color__bg--dark-gray {
    background-color: var(--fds-color--dark-gray);
  }

  .fds-color__text--dark-gray {
    color: var(--fds-color--dark-gray);
  }

  .fds-color__bg--medium-gray {
    background-color: var(--fds-color--medium-gray);
  }

  .fds-color__text--medium-gray {
    color: var(--fds-color--medium-gray);
  }

  .fds-color__bg--light-gray {
    background-color: var(--fds-color--light-gray);
  }

  .fds-color__text--light-gray {
    color: var(--fds-color--light-gray);
  }

  .fds-color__bg--disabled-light {
    background-color: var(--fds-color--disabled-light);
  }

  .fds-color__text--disabled-light {
    color: var(--fds-color--disabled-light);
  }

  .fds-color__bg--disabled-dark {
    background-color: var(--fds-color--disabled-dark);
  }

  .fds-color__text--disabled-dark {
    color: var(--fds-color--disabled-dark);
  }

  .fds-color__bg--disabled-text {
    background-color: var(--fds-color--disabled-text);
  }

  .fds-color__text--disabled-text {
    color: var(--fds-color--disabled-text);
  }

  .fds-color__bg--error {
    background-color: var(--fds-color--error);
  }

  .fds-color__text--error {
    color: var(--fds-color--error);
  }

  .fds-color__bg--caution {
    background-color: var(--fds-color--caution);
  }

  .fds-color__text--caution {
    color: var(--fds-color--caution);
  }

  .fds-color__bg--success {
    background-color: var(--fds-color--success);
  }

  .fds-color__text--success {
    color: var(--fds-color--success);
  }

  .fds-color__bg--surface {
    background-color: var(--fds-color--surface);
  }

  .fds-color__text--surface {
    color: var(--fds-color--surface);
  }
`;
