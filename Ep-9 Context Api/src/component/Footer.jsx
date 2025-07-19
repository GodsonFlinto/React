import { useContext } from "react";
import { Context } from "../App";

function Footer() {
  return (
    <>
      <h1>Footer</h1>
      {/* //for consumer function is must to get the value from the consumer, so function is must in consumer*/}
      <Context.Consumer>
        {({ user }) => {
          let date = new Date();
          return (
            <h1>
              {user.name} - {date.getFullYear()}
            </h1>
          );
        }}
      </Context.Consumer>
    </>
  );
}
export default Footer;
