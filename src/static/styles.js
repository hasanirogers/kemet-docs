import { css } from 'lit';

export const stylesBase = css`
  input[type="text"] {
    font-size: 1rem;
    box-sizing: border-box;
    color: var(--kemet-color-primary);
    width: 100%;
    height: 4rem;
    padding: 0.8rem 1.2rem;
    border-radius: 0.4rem;
    transition: box-shadow .3s ease;
    border: 1px solid var(--docs-search-foreground);
    background-color: var(--docs-search-background);
  }
  table {
    width: 99%;
    border-collapse: collapse;
  }
  th,
  td {
    font-size: 1rem;
    text-align: left;
    vertical-align: top;
    padding: 0.5rem;
  }
  td:first-child {
    white-space: nowrap;
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
