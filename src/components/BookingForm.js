import { useState } from "react";

function BookingForm() {

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!date || !time) {
      setError("Please select date and time");
      return;
    }

    if (guests < 1 || guests > 10) {
      setError("Guests must be between 1 and 10");
      return;
    }

    setError("");
    alert("Booking Successful!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Book a Table</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <label htmlFor="date">Date</label>
      <input
        id="date"
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <label htmlFor="time">Time</label>
      <input
        id="time"
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />

      <label htmlFor="guests">Guests</label>
      <input
        id="guests"
        type="number"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
      />

      <button type="submit">Book Now</button>
    </form>
  );
}

export default BookingForm;
