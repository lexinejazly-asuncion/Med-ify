export default function Prescriptions() {
  return (
    <div>
      <h2>Prescriptions</h2>

      <div style={{ marginTop: 20 }}>
        <select style={{ padding: 8 }}>
          <option>All Status</option>
          <option>Pending</option>
          <option>Dispensed</option>
        </select>
      </div>

      <table className="table" style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>Prescription ID</th>
            <th>Patient</th>
            <th>Date</th>
            <th>Doctor</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>P-402</td>
            <td>John Doe</td>
            <td>2025-02-01</td>
            <td>Dr. Patel</td>
            <td>Pending</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
