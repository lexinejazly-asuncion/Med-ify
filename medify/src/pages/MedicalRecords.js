export default function MedicalRecords() {
  return (
    <div>
      <h2>Medical Records</h2>

      <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
        <select style={{ padding: 8 }}>
          <option>All Patients</option>
          <option>John Doe</option>
        </select>

        <select style={{ padding: 8 }}>
          <option>All Doctors</option>
          <option>Dr. Patel</option>
        </select>

        <input type="date" style={{ padding: 8 }} />
        <input type="date" style={{ padding: 8 }} />
      </div>

      <table className="table" style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>Patient</th>
            <th>Doctor</th>
            <th>Visit Date</th>
            <th>Prescription ID</th>
            <th>Details</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>John Doe</td>
            <td>Dr. Patel</td>
            <td>2025-02-01</td>
            <td>P-402</td>
            <td><button>View</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
