import React from "react";
import "./style.css";

class Card extends React.Component {
  render() {
    return (
      <div className="main-card">
        <h1>CREDIT CARD</h1>
        <div class="chip">
          <img src="https://seeklogo.com/images/C/Chip-logo-3C162A3B9B-seeklogo.com.png" />
        </div>
        <div class="confid-num">
          <div class="items">
            <div>
              <span>7253 3256 7895 1245</span>
            </div>
            <div class="num-valid">
              <div class="num">5422</div>
              <div class="">
                <p class="valid-trhu">
                  VALID<br />
                  TRHU
                </p>
              </div>
              <div class="date-validity">
                <div class="valid">MONTH/YEAR</div>
                <div class="code">11/50</div>
              </div>
            </div>
            <div class="card-holder">CARDHOLDER</div>
          </div>
          <div class="img-item">
            <img src="https://uploads.codesandbox.io/uploads/user/02c1fad2-0532-44af-b8df-286f9d7f3524/Yw4V-master-Visa.PNG" />
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
