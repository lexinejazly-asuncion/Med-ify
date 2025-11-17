export default function Appointments() {
  return (
    <div>
      <h2>Appointments</h2>

      <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
        <input type="date" style={{ padding: 8 }} />
        <select style={{ padding: 8 }}>
          <option>All Doctors</option>
          <option>Dr. Kim</option>
          <option>Dr. Patel</option>
        </select>
        <select style={{ padding: 8 }}>
          <option>All Status</option>
          <option>Confirmed</option>
          <option>Pending</option>
          <option>Completed</option>
        </select>

        <button className="button" style={{ marginLeft: "auto" }}>
          New Appointment
        </button>
      </div>

      <table className="table" style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>Appointment ID</th>
            <th>Date</th>
            <th>Start</th>
            <th>End</th>
            <th>Patient</th>
            <th>Doctor</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>A1001</td>
            <td>2025-02-12</td>
            <td>10:00 AM</td>
            <td>10:30 AM</td>
            <td>John Doe</td>
            <td>Dr. Kim</td>
            <td>Confirmed</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
