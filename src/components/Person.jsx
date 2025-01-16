function Person(props) {
  return <h1 onClick={props.changeName}>Hello, {props.name}</h1>;
}

export default Person;
