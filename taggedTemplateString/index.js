function Title(css, ...content) {
  console.log(css);
  console.log(content.map((value) => (value)));
  return `<h1 style="${css.map((value) => (value))}">${content.map((value) => (value))}</h1>`;
}

const title = Title`
  color: red;
  font-size: 50px;
  ${'Teste'};
  ${'Teste2'};
`;

document.querySelector('#root').insertAdjacentHTML("afterbegin", title);