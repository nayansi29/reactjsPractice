import "./Booking.css";
function Booking() {
  return (
    <>
      <header className="header ">
        <div className="head">
          <h2 className="heading">Booking Confirmation</h2>
          <p className="para">
            Here comes your booking confirmation.Let us know if you need any
            help.
          </p>
        </div>
      </header>
      <hr className="transition" />
      <section className="content inner-para inner-heading">
        <h3 className="common">Booking details</h3>
        <h2>
          <i className="fa fa-wrench"></i>&nbsp; &nbsp;Booking
        </h2>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Painting</p>
        <h2>
          <br />
          <i className="fa fa-calendar"></i>&nbsp; &nbsp;Date/Time
        </h2>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2022-44-20 -08:00</p>
      </section>
      <hr className="transition" />
      <section className="Painting inner-para inner-heading">
        <div className="Painting-left">
          <h2>Painting and cleaning services</h2>
          <h4>1 st</h4>
          <p>RUT-Painting services</p>
          <p>Discount-10%</p>
          <br />
        </div>
        <div className="Painting-right">
          <p>100:-</p>
        </div>
      </section>
      <hr className="transition" />
      <div className="Pay">
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
      </div>

      <hr className="transition" />
      <section className="contact inner-para inner-heading">
        <div className="contact-left">
          <h2>Contact Information</h2>
          <p>John Smith Andersson</p>
          <p>076 777 14 23</p>
          <p>08 21 22 58</p>
          <p>B+1258</p>
          <br />
        </div>
        <div className="contact-right">
          <h2>Invoice details</h2>
          <p>Payment terms:20 Days</p>
          <p>Our Reference: Obed Samuel</p>
          <p>Your Refrence:John Smith</p>
        </div>
      </section>
      {/* <hr className="transition"> */}
      <footer className="inner-footer">
        <p>Behover du hjalp?</p>
        <p>Ring eller mejla oss sa hjalper vi dig</p>
        <p> 08 21 22 58</p>
        <p>info@birdvision.se</p>
      </footer>
    </>
  );
}
export default Booking;
