import "./App.css";
import { useGameLogic } from "./hooks/useGameLogic";
import MapView from "./components/mapview";
import InfoPanel from "./components/InfoPanel";

function App() {
  const game = useGameLogic();

  const player = game.getPlayer();
  const target = game.selected ? game.countries[game.selected] : null;

  if (!player) {
    return (
      <div className="app">
        <h2 style={{ color: "red" }}>⚠️ Player not initialized</h2>
      </div>
    );
  }

  return (
    <div className="app">
      <h1>World Domination</h1>

      <div className="layout">

        {/* LEFT - INFO PANEL */}
        <div className="panel">
            <InfoPanel
  player={player}
  playerKey={game.playerKey}
  growthMap={game.growthMap}
  target={target}
  buyUnit={game.buyUnit}
  attack={game.attack}
  getUnitCost={game.getUnitCost}
  getEffectivePower={game.getEffectivePower}
  isBattling={game.isBattling}
  battleInfo={game.battleInfo}
/>
          
        </div>

        {/* CENTER - MAP */}
        <MapView
          countries={game.countries}
          setSelected={game.setSelected}
        />

        {/* RIGHT - LOG */}
        <div className="panel">
          <h2>Battle Log</h2>
          <div className="log">
            {game.logs.map((l, i) => (
              <div key={i}>{l}</div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;