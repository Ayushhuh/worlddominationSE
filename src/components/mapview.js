export default function MapView({ countries, setSelected }) {
  return (
    <div className="panel">
      <h2>World</h2>
      <div className="country-grid">
        {Object.entries(countries).map(([id, c]) => (
          <button
            key={id}
            onClick={() => setSelected(id)}
            className={`country-btn ${
              c.owner === "player"
                ? "owned"
                : c.owner === "ai"
                ? "enemy"
                : "neutral"
            }`}
          >
            {c.name}
          </button>
        ))}
      </div>
    </div>
  );
}