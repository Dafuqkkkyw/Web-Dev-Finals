
function isLoggedIn() {
  return !!localStorage.getItem("currentUser");
}


// ====== AGENT DATA ======
// Add all 28 agents here
const agentsData = {
  "agent-jett": {
    name: "Jett",
    role: "Duelist",
    passive: "Drift: Jett can glide by holding the jump key while airborne, slowing her descent and avoiding fall damage.",
    skills: ["  [C] Cloudburst: 	Throws a vision-blocking smoke cloud that can be curved.",
              " [Q] Updraft:  Propels Jett high into the air for vertical positioning.",
              " [E] Tailwind: Her signature ability; dash instantly in her movement direction.",
              " [X] Blade Storm: Her ultimate; equips highly accurate throwing knives that recharge on kills."
            ],
    img: "agents photo/jett.webp"
  },
  "agent-yoru": {
    name: "Yoru",
    role: "Duelist",
    passive: "Yoru does not have a unique passive ability like Jett's Drift. His gameplay centers entirely on his active skills.",
    skills: [ " [C] Fakeout: 	Creates a clone that walks and flashes enemies when destroyed." ,
            "   [Q] Blindside: 	Throws a fragment that creates a short-duration flash after bouncing.", 
            "   [E] Gatecrash(Signature): 	Sends out a tether and activates to teleport to its location.", 
            "   [X] Dimensional Drift(Ultimate): 	Becomes invisible and invulnerable for a short time within a different dimension."],
    img: "agents photo/yoru.webp"
  },
  "agent-raze": {
    name: "Raze",
    role: "Duelist",
    passive: "Raze does not have a unique passive ability. Her gameplay is entirely based on using her active, damage-dealing skills effectively.",
    skills: [" [C] Boom Bot: Deploys a bot that moves in a straight line, locks onto enemies, and explodes upon reaching them.",
              " [Q] Blast Pack: 	Throws an explosive pack that sticks to surfaces. (satcheling).",
             " [E] Paint Shells(Signature): Cluster grenades that explodes.", 
             " [X] Showstopper(Ultimate): 	Equips a powerful rocket launcher that deals massive area damage on impact."],
    img: "agents photo/raze.webp"
  },
  "agent-sova": {
    name: "Sova",
    role: "Initiator",
    passive: "Sova does not have a unique passive ability. His gameplay focuses entirely on precise information gathering and utility usage. ",
    skills: [ " [C] Owl Drone: Deploys a controllable drone to scout and tag enemies.",
              " [Q] Shock Bolt: Fires an explosive arrow that deals damage in a small area.", 
              " [E] Recon Bolt(Signature): 	Fires a sonar arrow that reveals nearby enemies' locations.", 
              " [X] Hunter's Fury(Ultimate): 	Fires up to three wall-piercing energy blasts across the map."],
    img: "agents photo/sova.webp"
  },
  "agent-fade": {
    name: "Fade",
    role: "Initiator",
    passive: "Terror Trail: Tracks enemies revealed by her Haunt or Nightfall with visible trails. ",
    skills: ["[C] Prowler: 	Deploys a creature that chases and nearsights enemies.", 
             "[Q] Sieze: Tethers enemies in an area, deafening and decaying them.", 
             "[E] Haunt(Signature): Throws a watcher orb that reveals and marks enemies.", 
             "[X] Nightfall(Ultimate): 	Unleashes a wave that marks, deafens, and decays enemies."
            ],
    img: "agents photo/fade.webp"
  },
  "agent-clove": {
    name: "Clove",
    role: "Controller",
    passive: "Supports team from beyond the grave.",
    skills: [ " [C] Pick-Me-Up: Heals and speeds up after a kill or assist.",
            "   [Q] Meddle: Throws a fragment that applies temporary decay damage.", 
            " [E] Ruse(Signature): Deploys smoke clouds; usable while dead.", 
            "[X] Not Dead Yet(Ultimate): Self-revive ability; requires a kill or assist soon after."],
    img: "agents photo/clove.webp"
  },
  "agent-chamber": {
    name: "Chamber",
    role: "Sentinel",
    passive: "Chamber has no unique passive ability; his kits focus on using his custom weapons and mobility. ",
    skills: [ " [C] Trademark: Deploys a trap that scans for enemies and slows them.",
              " [Q] Headhunter: Equips a custom heavy pistol with high accuracy and ADS.",
              " [E] Rendezvous(Signature): Places a teleporter anchor to instantly reposition within range.",
              " [X] Tour De Force(Ultimate): Summons a powerful sniper rifle; kills create a slowing field."],
    img: "agents photo/chamber.webp"
  },
  "agent-waylay": {
    name: "Waylay",
    role: "Duelist",
    passive: "Waylay has no unique passive ability.",
    skills: [" [C] Saturate: Throws a light cluster that Hinders enemies in an area.", 
            "  [Q] Lightspeed: Dashes forward up to twice; first dash can go upward.", 
            "  [E] Refract(Signature): Teleports back to a placed beacon while invulnerable.",
            "  [X] Convergent Paths(Ultimate): Fires a beam that speeds Waylay and Hinders foes."
    ],
    img: "agents photo/waylay.webp"
  },
  "agent-neon": {
    name: "Neon",
    role: "Duelist",
    passive: "Neon has no unique passive ability. Her kit is focused entirely on speed management and utility.",
    skills: [ "[C] Fast Lane: Creates two parallel walls of electric fire.",
             " [Q] Relat Bolt: Throws a bolt that stuns two circular areas after bouncing.",
             " [E] High Gear(Signature): Toggles sprint and allows for an electric slide movement.", 
             " [X] Overdrive(Ultimate): Fires a lethal, high-speed lightning beam while sprinting."],
    img: "agents photo/neon.webp"
  },
  "agent-reyna": {
    name: "Reyna",
    role: "Duelist",
    passive: "Gains Soul Orbs from enemies she kills.",
    skills: [" [C ]Leer: Throws a destructible eye that Nearsights enemies looking at it.", 
             " [Q ]Devour: Consumes a Soul Orb to rapidly heal health/armor.", 
             " [E] Dismiss(Signature): Consumes a Soul Orb to become briefly invulnerable and invisible.",
             " [X] Empress(Ultimate): Enters a high-speed, rapid-fire ultimate state."],
    img: "agents photo/reyna.webp"
  },
  "agent-skye": {
    name: "Skye",
    role: "Initiator",
    passive: "Skye has no unique passive ability; her utility focuses entirely on team support.",
    skills: [" [C] Regrowth: Heals all teammates within range.", 
             " [Q] Trailblazer: Controls a Tasmanian tiger to scout and concuss.",
             " [E] Guiding Light(Signature): A hawk that flashes enemies and gives location info.", 
             " [X] Seekers(Ultimate): Three trackers that Nearsight targeted enemies."],
    img: "agents photo/skye.webp"
  },
  "agent-kay-o": {
    name: "KAY/O",
    role: "Initiator",
    passive: "KAY/O has no unique passive ability; his utility focuses on shutting down enemy skills.",
    skills: [" [C] FRAG/ment: Throws a multi-pulse explosive grenade.",
             " [Q] FLASH/drive: Throws a powerful, short-fuse flash grenade.", 
             " [E]ZERO/point(Signature): Throws a knife that suppresses enemy abilities in a radius.", 
             " [X] NULL/cmd(Ultimate): Suppresses all enemies in an area and allows self-revive."],
    img: "agents photo/kay-o.webp"
  },
  "agent-omen": {
    name: "Omen",
    role: "Controller",
    passive: "Omen has no unique passive ability; his utility focuses on misdirection.",
    skills: [ " [C] Shrouded Step: Teleports a short distance after a brief channel.",
              " [Q] Paranoia: Fires a shadow projectile that nearsights and deafens enemies through walls.", 
              " [E] Dark Cover(Signature): Deploys a vision-blocking smoke sphere globally.", 
              " [X] From the Shadows(Ultimate): Teleports anywhere on the map; can be canceled or destroyed."],
    img: "agents photo/omen.webp"
  },
  "agent-cypher": {
    name: "Cypher",
    role: "Sentinel",
    passive: "Cypher has no unique passive ability; his utility focuses on intel gathering.",
    skills: [" [C] Cyber Cage: Creates a cage that blocks vision and slows foes.", 
             " [Q] Spycam: Places a camera to scout and tag enemies.", 
             " [E] Tripwire(Signature): Sets a wire trap that restrains and reveals enemies.", 
             " [X] Neural Theft(Ultimate): Extracts enemy locations from a nearby corpse."],
    img: "agents photo/cypher.webp"
  },
  "agent-killjoy": {
    name: "Killjoy",
    role: "Sentinel",
    passive: "Killjoy has no unique passive ability; her utility focuses on area denial.",
    skills: [" [C] Nanoswarm: Throws a grenade that activates to deal area damage.",
             " [Q] Alarmbot: Deploys a bot that chases enemies and applies a debuff.", 
             " [E] Turret(Signature): Places an automated turret that fires at enemies in range.", 
             " [X] Lockdown(Ultimate): Deploys a device that detains all enemies in a large radius."],
    img: "agents photo/killjoy.webp"
  },
  "agent-iso": {
    name: "Iso",
    role: "Duelist",
    passive: "Iso has no unique passive ability; his utility focuses on dueling and self-protection.",
    skills: [" [C] Contingency: Fires a moving bulletproof energy wall.", 
             " [Q] Undercut: Throws a bolt that applies Fragile/Suppress through walls.",
             " [E] Double Tap(Signature): Activates a one-hit shield after a kill/assist.",
             " [X] Kill Contract(Ultimate): Traps himself and one enemy in a 1v1 arena."],
    img: "agents photo/iso.webp"
  },
  "agent-breach": {
    name: "Breach",
    role: "Initiator",
    passive: "Breach has no unique passive ability; his utility focuses entirely on stunning and concussing enemies through terrain. ",
    skills: [" [C] Aftershock: Fires a slow, lingering explosive charge through walls.",
             " [Q] Flashpoint: Fires a blinding charge through walls.", 
             " [E] Fault Line(Signature): Creates a large, concussive quake through walls.", 
             " [X] Rolling Thunder(Ultimate): Fires a massive, multi-hit concussive blast across a wide area."],
    img: "agents photo/breach.webp"
  },
  "agent-astra": {
    name: "Astra",
    role: "Controller",
    passive: "Gravity WellAstra has no unique passive ability; her gameplay uses the Astral Form dimension to place utility globally.",
    skills: [" [C] Gravity Well: Creates a well that pulls in and weakens enemies. ",
             " [Q] Nova Pulse: Concusses all enemies in its area.", 
             " [E] Nebula/Dissipate(Signature): Creates a smoke or dissipates a star.", 
             " [X] Cosmic Divide(Ultimate): Creates a massive sound/vision blocking wall."],
    img: "agents photo/astra.webp"
  },
  "agent-brimstone": {
    name: "Brimstone",
    role: "Controller",
    passive: "Brimstone has no unique passive ability; his utility focuses on area control.",
    skills: [" [C] Stim Beacon: Drops a field that buffs speed/fire rate.",
             " [Q] Incendiary: Fires a bouncing incendiary grenade.",
             " [E] Sky Smoke(Signature): Calls down vision-blocking smokes globally.", 
             " [X] Orbital Strike(Ultimate): Fires a massive damage beam from the sky."],
    img: "agents photo/brimstone.webp"
  },
  "agent-vyse": {
    name: "Vyse",
    role: "Sentinel",
    passive: "Vyse has no unique passive ability; her utility focuses on traps and area control.",
    skills: [" [C] Razorvine: Deploys a nest that slows and damages moving enemies.", 
             " [Q] Shear: Places a trap that creates an indestructible wall behind enemies.",
             " [E] Arc Rose(Signature): Places a stealthed flash that blinds enemies when activated.", 
             " [X] Steel garden(Ultimate): Jams enemies' primary weapons in a large area."],
    img: "agents photo/vyse.webp"
  },
  "agent-sage": {
    name: "Sage",
    role: "Sentinel",
    passive: "Sage has no unique passive ability; her utility focuses on team sustain.",
    skills: [" [C] Barrier Orb: Creates a large, solid ice wall.",
             " [Q] Slow Orb: Creates a field that slows all enemies.", 
             " [E] Healing Orb(Signature): Heals a single teammate or herself.", 
             " [X] Resurrection(Ultimate): Revives a single dead teammate."],
    img: "agents photo/sage.webp"
  },
  "agent-veto": {
    name: "Veto",
    role: "Sentinel",
    passive: "Veto has no unique passive ability.",
    skills: [" [C] Crosscut: 	Teleports to a placed beacon within range.", 
             " [Q] Chokehold: Places a trap that deafens, decays, and holds enemies.", 
             " [E] Interceptor(Signature): Deploys a device to destroy incoming enemy utility.",
             " [X] Evolution(Ultimate): Becomes immune to debuffs, gains stim/regen."],
    img: "agents photo/veto.webp"
  },
  "agent-deadlock": {
    name: "Deadlock",
    role: "Sentinel",
    passive: "Deadlock has no unique passive ability; her utility focuses on area denial. ",
    skills: [" [C] Barrier Mesh: Creates X-shaped wall blocking enemy movement.", 
             " [Q] Sonic Sensor: Deploys a sensor that concusses noisy enemies.", 
             " [E] GravNet(Signature): Throws a grenade that forces enemies to crouch and slow.",
             " [X] Annihilation(Ultimate): Captures first enemy hit in a deadly cocoon."],
    img: "agents photo/deadlock.webp"
  },
  "agent-phoenix": {
    name: "Phoenix",
    role: "Duelist",
    passive: "Heals himself when standing in any of his fire abilities. ",
    skills: [" [C] Blaze: Creates a wall of fire that blocks vision and damages/heals.",
             " [Q] Hot Hands: Throws a fire orb that creates a damaging/healing zone.", 
             " [E] Curveball(Signature): Throws a flare that flashes around corners.", 
             " [X] Run It Back(Ultimate): Creates a marker and revives at that spot if killed."],
    img: "agents photo/phoenix.webp"
  },
  "agent-tejo": {
    name: "Tejo",
    role: "Initiator",
    passive: "Tejo has no unique passive ability. His utility focuses on information and area denial. ",
    skills: [" [C] Stealth Drone: Controllable drone suppresses and reveals enemies.", 
             " [Q] Special Delivery: Sticky grenade concusses enemies after impact.", 
             " [E] Guided Salvo(Signature): Fires area-denial missiles at target locations.",
             " [X] Armageddon(Ultimate): Calls down a powerful, long-range airstrike."],
    img: "agents photo/tejo.webp"
  },
  "agent-gekko": {
    name: "Gekko",
    role: "Initiator",
    passive: "Retrieves used creatures to reuse. ",
    skills: [" [C] Mosh Pit: Places an area damage device.", 
             " [Q] Wingman: Throws a creature that flashes or plants spike.", 
             " [E] Dizzy(Signature): Deploys a creature that flashes." ,
             " [X] Thrash(Ultimate): Controls creature that detains enemies."],
    img: "agents photo/gekko.webp"
  },
  "agent-viper": {
    name: "Viper",
    role: "Controller",
    passive: "Applies Decay and Fragile debuffs with her abilities. ",
    skills: [" [C] Snake Bite: Throws acid that damages/weakens enemies.",
             " [Q] Poison Cloud: Deployable orb for a toxic smoke area.", 
             " [E] Toxic Screen(Signature): Creates a long wall of toxic gas.", 
             " [X] Viper's Pit(Ultimate): Forms a massive toxic cloud area."],
    img: "agents photo/viper.webp"
  },
  "agent-harbor": {
    name: "Harbor",
    role: "Controller",
    passive: "Harbor has no unique passive ability; his utility focuses on area control.",
    skills: [" [C] Temporal: It is a projectile that causes temporary blindness (Nearsight) to enemies within its space.", 
             " [Q] High Tide: Creates a long guided water wall.", 
             " [E] Cove(Signature): Deploys a shieldable smoke sphere. The Shield can be destroyed.",
             " [X] Reckoning(Ultimate): Launches a wave that advances, causing Nearsight and Slow to enemies it hits."],
    img: "agents photo/harbor.webp"
  }
};

// ====== CREATE MODAL ELEMENT ======
const modal = document.createElement("div");
modal.id = "agent-modal";
modal.innerHTML = `
  <div class="agent-modal-content">
    <span class="agent-modal-close">&times;</span>
    <img class="agent-modal-img" src="" alt="Agent Image">
    <div class="agent-modal-name"></div>
    <div class="agent-modal-role"></div>
    <div class="agent-modal-passive"></div>
    <ul class="agent-modal-skills"></ul>
  </div>
`;
document.body.appendChild(modal);

// ====== SELECT MODAL ELEMENTS ======
const modalImg = modal.querySelector(".agent-modal-img");
const modalName = modal.querySelector(".agent-modal-name");
const modalRole = modal.querySelector(".agent-modal-role");
const modalPassive = modal.querySelector(".agent-modal-passive");
const modalSkills = modal.querySelector(".agent-modal-skills");
const closeBtn = modal.querySelector(".agent-modal-close");

// ====== OPEN MODAL FUNCTION ======
function openModal(agentId) {
  if (!isLoggedIn()) {
    const tierContainer = document.getElementById("tier-list-container");

    // Avoid duplicating the login message
    if (!document.getElementById("tier-login-msg")) {
      const tierLoginMsg = document.createElement("div");
      tierLoginMsg.id = "tier-login-msg";
      tierLoginMsg.textContent = "Please log in to view the full tier list!";
      tierLoginMsg.style.color = "red";
      tierLoginMsg.style.fontWeight = "bold";
      tierLoginMsg.style.textAlign = "center";
      tierLoginMsg.style.margin = "10px 0";

      // APPEND below tier list instead of prepend
      tierContainer.appendChild(tierLoginMsg);
    }

    return; // stop modal from opening
  }

  const agent = agentsData[agentId];
  if (!agent) return;

  modalImg.src = agent.img;
  modalImg.alt = agent.name + " portrait";
  modalName.textContent = agent.name;
  modalRole.textContent = "Role: " + agent.role;
  modalPassive.textContent = "Passive: " + agent.passive;

  modalSkills.innerHTML = ""; // clear previous skills
  agent.skills.forEach(skill => {
    const li = document.createElement("li"); // FIXED: use li, not ul
    li.textContent = skill;
    modalSkills.appendChild(li);
  });

  modal.style.display = "flex";
}


// ====== CLOSE MODAL FUNCTION ======
function closeModal() {
  modal.style.display = "none";
}

// ====== CLICK EVENT ON AGENTS ======
document.querySelectorAll(".card.agent-card.small").forEach(card => {
  card.addEventListener("click", () => {
    openModal(card.dataset.agentId);
  });
});

// ====== CLOSE EVENTS ======
closeBtn.addEventListener("click", closeModal);
modal.addEventListener("click", e => {
  if (e.target === modal) closeModal();
});


function isLoggedIn() {
  return !!localStorage.getItem("currentUser");
}

window.addEventListener("DOMContentLoaded", () => {
  const loginPrompt = document.getElementById("agentsLoginPrompt");
  if (!isLoggedIn()) {
    loginPrompt.style.display = "block";
  }
});
