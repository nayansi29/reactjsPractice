import React from "react";
import "./Booking.css";
function Booking() {

  return (
    <>
      <header className="header ">
        <div className="head">
          <h2 className="heading">Booking Confirmation</h2>
          <p className="para">
            Here comes your booking confirmation.Let us know if you need any help.
          </p>
        </div>
      </header>
      <hr />
      <center>
        <h2>Booking details</h2>
      </center>
      <section>
        <div className="booking">
          <h6>
            <i className="fa fa-wrench"></i>&nbsp; &nbsp;Booking
          </h6>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pianting</p>
        </div>
        <div className="dateTime">
          <h6>
            <i className="fa fa-calendar"></i> &nbsp; Date/Time
          </h6>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2022-04-20 - 08:00</p>
        </div>
      </section>
      <hr />
      <section className="Painting">
        <div className="Painting-left">
          <h5>Painting and cleaning services</h5>
          <h4>1 st</h4>
          <p>RUT-Painting services</p>
          <p>Discount-10%</p>
          <br />
        </div>
        <div className="Painting-right">
          <p>100:-</p>
        </div>
      </section>
      <hr />
      <section className="Pay">
        <div className="Pay-left"></div>
        <div className="Pay-right">
          <table>
            <thead></thead>
            <tbody>
              <tr>
                <td>VAT</td>
                <td>20:-</td>
              </tr>
              <tr>
                <td>RUT/ROT</td>
                <td>45:-</td>
              </tr>
              <tr>
                <td>Discount</td>
                <td>10:-</td>
              </tr>
              <tr>
                <td>Total</td>
                <td>100:-</td>
              </tr>
              <tr>
                <td>
                  <b>To Pay</b>
                </td>
                <td>
                  <b>45:-</b>
                </td>
              </tr>
            </tbody>
          </table>
          <br />
        </div>
      </section>
      <hr />

      <section className="contact ">

        <div className="contact-left">
          <h5>Contact Information</h5>
          <div className="common">
            <p>John Smith Andersson</p>
            <p>076 777 14 23</p>
            <p>08 21 22 58</p>
            <p>B+1258</p>
          </div>
          <br />
        </div>

        <div className="contact-right">
          <h5>Invoice details</h5>
          <div className="common">
            <p>Payment terms:20 Days</p>
            <p>Our Reference: Obed Samuel</p>
            <p>Your Refrence:John Smith</p>
          </div>
        </div>
      </section>

      <footer className="inner-footer">
        <div className="common">
          <p>Behover du hjalp?</p>
          <p>Ring eller mejla oss sa hjalper vi dig</p>
          <p> 08 21 22 58</p>
          <p>info@birdvision.se</p>
        </div>
      </footer>
    </>
  );
}
export default Booking;
