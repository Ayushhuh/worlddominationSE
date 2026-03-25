import { useState, useEffect } from "react";
import { countriesData } from "../data/countries";

export function useGameLogic() {
  const [countries, setCountries] = useState(countriesData);
  const [playerKey] = useState("india");
  const [selected, setSelected] = useState(null);
  const [logs, setLogs] = useState([]);
  const [growthMap, setGrowthMap] = useState({});
  const [isBattling, setIsBattling] = useState(false);
const [battleInfo, setBattleInfo] = useState(null);

  const log = (t) => setLogs(prev => [t, ...prev]);

  const getPlayer = () => countries[playerKey];

  const getPower = (c) =>
    (c?.army || 0) + (c?.air || 0) * 1.5 + (c?.naval || 0) * 1.3;

  const getEffectivePower = (c) => {
    if (!c) return 0;
    return getPower(c) * (1 + Math.log10((c.economy || 0) + 1) * 0.2);
  };

  const randomFactor = () => 0.9 + Math.random() * 0.2;

  const getUnitCost = (type, c) => {
    if (!c) return 0;

    const base = { army: 50, air: 120, naval: 90 }[type];
    const scaling = Math.pow(1.06, (c[type] || 0) / 50);
    const ecoFactor = 1 - Math.min(Math.log10(c.economy || 1) * 0.05, 0.3);

    return Math.floor(base * scaling * ecoFactor);
  };

  const buyUnit = (type) => {
    const p = getPlayer();
    const cost = getUnitCost(type, p);

    if (p.economy < cost) return log("❌ Not enough money");

    setCountries(prev => ({
      ...prev,
      [playerKey]: {
        ...p,
        economy: p.economy - cost,
        [type]: p[type] + (type === "army" ? 15 : 8)
      }
    }));

    log(`✅ Bought ${type}`);
  };

  const attack = () => {
  const p = getPlayer();
  const e = countries[selected];

  if (!p || !e) return;

  if (e.owner === "player") {
    log("❌ Already owned");
    return;
  }

  setIsBattling(true);
  setBattleInfo({
    attacker: p.name,
    defender: e.name
  });

  setTimeout(() => {
    const pPower = getEffectivePower(p) * randomFactor();
    const ePower = getEffectivePower(e) * randomFactor();

    const win = pPower > ePower;

    const pLoss = win ? 0.25 : 0.5;
    const eLoss = win ? 0.5 : 0.2;

    let newPlayer = {
      ...p,
      army: Math.floor(p.army * (1 - pLoss)),
      air: Math.floor(p.air * (1 - pLoss)),
      naval: Math.floor(p.naval * (1 - pLoss))
    };

    let newEnemy = {
      ...e,
      owner: win ? "player" : e.owner,
      army: Math.floor(e.army * (1 - eLoss)),
      air: Math.floor(e.air * (1 - eLoss)),
      naval: Math.floor(e.naval * (1 - eLoss))
    };

   if (win) {
  const ecoGain = e.economy * 0.25;
  const gdpGain = Math.max(e.baseGDP * 0.5, 15);

  newPlayer.economy += ecoGain;
  newPlayer.baseGDP += gdpGain;
  newPlayer.integration += 20;

  log(`
✅ VICTORY! Captured ${e.name}
+${Math.floor(ecoGain)} Economy
+${Math.floor(gdpGain)} GDP
⚠️ Instability Increased
----------------
⚔️ ${p.name} vs ${e.name}
Power: ${Math.floor(pPower)} vs ${Math.floor(ePower)}
Loss: You ${Math.floor(pLoss * 100)}% | Enemy ${Math.floor(eLoss * 100)}%
  `);
}else {
      log(`❌ Lost battle vs ${e.name}`);
    }

    setCountries(prev => ({
      ...prev,
      [playerKey]: newPlayer,
      [selected]: newEnemy
    }));

    setIsBattling(false);
    setBattleInfo(null);

  }, 5000); 
};

  useEffect(() => {
    const interval = setInterval(() => {
      setCountries(prev => {
        const updated = { ...prev };
        const newGrowth = {};

        Object.keys(updated).forEach(k => {
          const c = updated[k];

          const growth =
            c.baseGDP * 0.05 -
            Math.sqrt(c.economy) * 0.01 -
            c.integration * 0.02;

          const final = Math.max(growth, 1);

          updated[k] = {
            ...c,
            economy: c.economy + final,
            integration: Math.max(c.integration - 1, 0)
          };

          newGrowth[k] = final;
        });

        setGrowthMap(newGrowth);
        return updated;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return {
    isBattling,
battleInfo,
    countries,
    playerKey,
    selected,
    setSelected,
    buyUnit,
    attack,
    logs,
    getPlayer,
    getUnitCost,
    getEffectivePower,
    growthMap
  };
}