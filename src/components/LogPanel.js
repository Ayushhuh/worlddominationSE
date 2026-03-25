export default function LogPanel({ logs }) {
  return (
    <div>
      <h2>Logs</h2>
      <div style={{ maxHeight: 200, overflow: "auto" }}>
        {logs.map((l, i) => (
          <div key={i}>{l}</div>
        ))}
      </div>
    </div>
  );
}