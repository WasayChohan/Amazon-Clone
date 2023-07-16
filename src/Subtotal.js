import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { useHistory } from "react-router-dom";

function Subtotal() {
  const history = useHistory();
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* HomeWork */}
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} // HomeWork
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <a href="/payment">
        <button className="btn" onClick={(e) => history.push("/payment")}>
          Proceed to Checkout
        </button>
      </a>
    </div>
  );
}

export default Subtotal;
