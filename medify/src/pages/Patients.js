export default function Patients() {
  return (
    <div>
      <h2>Patients</h2>

      <div style={{
        display: "flex",
        justifyContent: "space-between",
        marginTop: 20
      }}>
        <input
          placeholder="Search patients..."
          style={{ padding: 8, width: "250px" }}
        />
        <button className="button">Add Patient</button>
      </div>

      <table className="table" style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>DOB</th>
            <th>Gender</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>John Doe</td>
            <td>1990-01-10</td>
            <td>Male</td>
            <td>123 Main St</td>
            <td>
              <button>View</button>
              <button style={{ marginLeft: 8 }}>Edit</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
