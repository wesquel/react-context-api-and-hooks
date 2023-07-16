/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { useCounterContext } from "../../contexts/CounterContext";
import { Button } from "../../components/Button";
import { Heading } from "../../components/Heading";

export const Home = () => {
  const [state, actions] = useCounterContext();

  return (
    <div>
      <Heading />
      <div>
        <Button onButtonClick={actions.increase}>Increase</Button>
        <Button onButtonClick={actions.decrease}>decrease</Button>
        <Button onButtonClick={() => actions.setCounter({ counter: 10 })}>setCounter</Button>
        <Button onButtonClick={actions.async_increase_start}>async_increase_start</Button>
        <Button onButtonClick={actions.async_increase_error}>async_increase_error</Button>
      </div>
    </div>
  );
};

export default Home;
