export default function InfoPanel({
    isBattling,
battleInfo,
  player,
  playerKey,
  growthMap,
  target,
  buyUnit,
  attack,
  getUnitCost,
  getEffectivePower
}) {
  if (!player) return <div>⚠️ Player missing</div>;

  const growth = growthMap[playerKey] || 0;
let chance = "Unknown";

if (target) {
  const ratio =
    getEffectivePower(player) /
    getEffectivePower(target);

  if (ratio > 1.5) chance = "🟢 Very High";
  else if (ratio > 1.2) chance = "🟡 High";
  else if (ratio > 0.9) chance = "🟠 Risky";
  else if (ratio > 0.6) chance = "🔴 Low";
  else chance = "⚫ Very Low";
}

if (isBattling && battleInfo) {
  return (
    <div style={{ textAlign: "center" }}>
      <h2>⚔️ Battle in Progress...</h2>

      <img
        src="https://media.tenor.com/bho-3cikCToAAAAM/attack-on-titan-cat-cat-stare.gif"
        alt="battle"
        style={{ width: "200px", borderRadius: "10px" }}
      />

      <h3>
        {battleInfo.attacker} vs {battleInfo.defender}
      </h3>

      <p>Battle resolving...</p>
    </div>
  );
}
  return (
    <div>
      <h2>YOU</h2>

      Economy: {Math.floor(player.economy)} <br />
      GDP: {Math.floor(player.baseGDP)} <br />
      Growth: +{growth.toFixed(2)} / tick <br />
      Army: {player.army} <br />
      Air: {player.air} <br />
      Naval: {player.naval} <br />
      Stability: {Math.max(100 - player.integration, 0)}%

      <h3>Costs</h3>
      <button onClick={() => buyUnit("army")}>
        Army ({getUnitCost("army", player)})
      </button>
      <button onClick={() => buyUnit("air")}>
        Air ({getUnitCost("air", player)})
      </button>
      <button onClick={() => buyUnit("naval")}>
        Naval ({getUnitCost("naval", player)})
      </button>

      {target && (
        <>
          <h3>Target: {target.name}</h3>
          Economy: {Math.floor(target.economy)} <br />
          Army: {target.army} <br />
          Air: {target.air} <br />
          Naval: {target.naval} <br />

          <h4>Battle Prediction</h4>
Win Chance: {chance} <br />
          Your Power: {Math.floor(getEffectivePower(player))} <br />
          Enemy Power: {Math.floor(getEffectivePower(target))} <br />

          <button onClick={attack}>⚔️ Attack</button>
        </>
      )}
    </div>
  );
}