var abilities = {
    abilityThief: {
        name: "Ability Thief",
        description: "When this Loomian makes contact with the foe, it copies their ability."
    },

    ace: {
        name: "Ace",
        description: "This Loomian's Attack Type Bonus is increased from 25% to 100%."
    },

    adaptable: {
        name: "Adaptable",
        description: "This Loomian's type changes based on the current weather present on the field."
    },

    adorable: {
        name: "Adorable",
        description: "On switch-in, this Loomian lowers the foes' Melee Defense by 1 stage."
    },

    aggresive: {
        name: "Aggresive",
        description: "Upon defeating a Loomian, this Loomian's Melee Attack is increased by one stage."
    },
    
    allSeeing: {
        name: "All Seeing",
        description: "This Loomian's attacking moves are now 'Sure Hit' moves and can also bypass Scapegoat, Far Enchantment, and Near Enchantment."
    },

    ambush: {
        name: "Ambush",
        description: "This Loomian attacks with double power against a foe that switched in this turn."
    },

    analyze: {
        name: "Analyze",
        description: "On switch-in, this Loomian's Melee Attack or Ranged Attack is raised by 1 stage based on the foe's weaker Defense."
    },

    anomaly: {
        name: "Anomaly",
        description: "If the Loomian's stats are lowered, they instead increase, and vice versa."
    },

    appetite: {
        name: "Appetite",
        description: "This Loomian loses 1/16th of its maximum Health to increase two random stats by one stage each."
    },

    appliedFrustration: {
        name: "Applied Frustration",
        description: "This Loomian's Ranged Attack is raised by 2 stages for each of its stats that is lowered by a foe."
    },

    apprehension: {
        name: "Apprehension",
        description: "On switch-in, this Loomian shudders if any foe has a supereffective move."
    },

    aquaBody: {
        name: "Aqua Body",
        description: "This Loomian is granted increased resistance to Fire-type moves and cannot be burned."
    },

    assertive: {
        name: "Assertive",
        description: "This Loomian's Brawler-type moves does neutral damage to the Spirit Type."
    },

    awakening: {
        name: "Awakening",
        description: "This Loomian's same-type attack bonus is 50% instead of 25%."
    },

    baneful: {
        name: "Baneful",
        description: "This Loomian deals 20% more damage against poisoned foes."
    },

    battleArmor: {
        name: "Battle Armor",
        description: "This Loomian is immune to secondary effects of moves that target it and their Metal-type Moves are boosted in Strength by 25%."
    },

    berserk: {
        name: "Berserk",
        description: "This Loomian's Melee moves deal 50% more damage at the cost of only being able to use the first move selected in battle."
    },

    bitterTouch: {
        name: "Bitter Touch",
        description: "When this Loomian is hit by a contact move, the attacker will be unable to use that move for a few turns."
    },

    blisteringHeat: {
        name: "Blistering Heat",
        description: "This Loomian can poison any Loomian regardless of Type, and its Fire-type Moves have a 10% chance to poison."
    },

    bloodsucker: {
        name: "Bloodsucker",
        description: "This Loomian's health-draining moves deal 25% more damage."
    },

    boast: {
        name: "Boast",
        description: "On switch-in, this Loomian's Melee Attack is raised by 1 stage if this Loomian's Melee Attack is higher than the foe's, and is lowered by 1 stage otherwise."
    },

    brutalWrath: {
        name: "Brutal Wrath",
        description: "This Loomian's attacking moves will always land a critical hit if the opponent is poisoned or badly poisoned."
    },

    bruteForce: {
        name: "Brute Force",
        description: "This Loomian's attacks with secondary effects have 30% more power; nullifies the effects."
    },

    bugFever: {
        name: "Bug Fever",
        description: "This Loomian's Melee Attack is raised by 1 stage if it attacks and KOs another Loomian with a Bug-type attack."
    },

    bully: {
        name: "Bully",
        description: "This Loomian ignores the opponent's ability or positive stat changes when its height is less than the Loomian."
    },

    burglar: {
        name: "Burglar",
        description: "When this Loomian makes contact with the foe, if this Loomian is not already holding an item, it will steal the foe's, otherwise it will knock off their item."
    },

    burningRage: {
        name: "Burning Rage",
        description: "This Loomian's Fire-type attacks deal 50% more damage, but cost 25% more energy to use."
    },

    burstingSeams: {
        name: "Bursting Seams",
        description: "When this Loomian uses its held item, it has a 50% chance of regaining it at the end of each turn."
    },

    caddie: {
        name: "Caddie",
        description: "When an ally's item is used or lost, this Loomian's item is given to the ally."
    },

    captivating: {
        name: "Captivating",
        description: "This Loomian draws all of the opponent's moves to it at the first turn after entering the battle"
    },

    carol: {
        name: "Carol",
        description: "When this Loomian is in the first slot, all Loomians in the party gain 10% more experience."
    },

    chaperone: {
        name: "Chaperone",
        description: "TAllies that share the same types with the Loomian can't have their stats lowered or status inflicted by other Loomian."
    },

    chargedArc: {
        name: "Charged Arc",
        description: "When an opponent uses a Ranged attack on the Loomian, it has a 20% chance to be paralyzed."
    },

    chill: {
        name: "Chill",
        description: "This Loomian's Simple-type attacking moves become Ice-types and is boosted by 20%."
    },

    circadian: {
        name: "Circadian",
        description: "If Tiklipse, this Loomian's type will alternate between Light and Dark every turn."
    },

    clutch: {
        name: "Clutch",
        description: "If this Loomian is at full HP, it survives one hit with at least 1 HP."
    },

    combative: {
        name: "Combative",
        description: "If this Loomian's stats are lowered, it raises its attack by two stages."
    },

    combustible: {
        name: "Combustible",
        description: "This Loomian's Fire-type attacks do 1.5x damage if hit by one Fire-type move; Fire immunity."
    },

    communication: {
        name: "Communication",
        description: "This Loomian does not take damage from attacks made by its allies."
    },

    compliant: {
        name: "Compliant",
        description: "This Loomian will always perform its chosen move no matter what."
    },

    confidence: {
        name: "Confidence",
        description: "This Loomian does not flinch."
    },

    conspire: {
        name: "Conspire",
        description: "The power of the second attacker's move is boosted by 50% when this Loomian and the ally attack the same opponent."
    },

    contactCurse: {
        name: "Contact Curse",
        description: "When an opponent makes contact with this Loomian, they lose 1/16 of their maximum energy."
    },

    cosmicPressure: {
        name: "Cosmic Pressure",
        description: "All Ancient-type moves will deal 25% more damage and weather effects are nullified when this Loomian is present."
    },

    coursingVenom: {
        name: "Coursing Venom",
        description: "This Loomian's Toxic-type attacks do 1.5x damage if hit by one Toxic-type move; Toxic immunity."
    },

    dauntless: {
        name: "Dauntless",
        description: "When this Loomian has a move that is super effective against an opponent, raise its Melee Attack by 1 stat rank."
    },

    dawn: {
        name: "Dawn",
        description: "If an active ally has this Ability or the Dusk Ability, this Loomian's Ranged Attack is 1.5x."
    },

    deepFrostbite: {
        name: "Deep Frostbite",
        description: "This Loomian's moves have a 10% chance to give the opponent frostbite and doubles frostbite damage."
    },

    defensivePriority: {
        name: "Defensive Priority",
        description: "On switch-in, this Loomian's Speed is lowered by 2 stages and its Melee Defense and Ranged Defense are both increased by 1 stage."
    },

    demanding: {
        name: "Demanding",
        description: "This Loomian's moves heal it for 25% of its damage dealt."
    },

    depthsBorne: {
        name: "Depths-Borne",
        description: "This Loomian's Water-type moves deal 25% more damage."
    },

    designatedChompers: {
        name: "Designated Chompers",
        description: "This Loomian's biting moves does not make contact with the opponent."
    },

    devious: {
        name: "Devious",
        description: "This Loomian's moves bypass all abilities."
    },

    disenchant: {
        name: "Disenchant",
        description: "This Loomian removes Near and Far Enchantments when entering the battle."
    },
   
    doOrDie: {
        name: "Do or Die",
        description: "This Loomian's attacking moves deal 30% more damage, but loses 10% of its max health per attack used."
    },

    doubleStrike: {
        name: "Double Strike",
        description: "This Loomian's attacking moves hit twice; second hit deals 25% of the first hit."
    },

    drainage: {
        name: "Drainage",
        description: "This Loomian gains 1.5x HP from moves that drain a foe's HP."
    },

    driven: {
        name: "Driven",
        description: "This Loomian's speed is raised by one stage when it flinches."
    },

    dummy: {
        name: "Dummy",
        description: "This Loomian cannot use moves."
    },

    dusk: {
        name: "Dusk",
        description: "If an active ally has this Ability or the Dawn Ability, this Loomian's Melee Attack is 1.5x."
    },

    eager: {
        name: "Eager",
        description: "This Loomian's Melee moves deal 50% more damage at the cost of only being able to use the first move selected in battle."
    },

    earlyBird: {
        name: "Early Bird",
        description: "This Loomian's sleep counter drops by 2 instead of 1."
    },

    effulgent: {
        name: "Effulgent",
        description: "Opponents cannot use consumable items when this Loomian is present."
    },

    earlyBird: {
        name: "Early Bird",
        description: "This Loomian's sleep counter drops by 2 instead of 1."
    },

    enchant: {
        name: "Enchant",
        description: "This Loomian's damaging attacks have a 10% chance to daze the foe."
    },

    enchantedCoat: {
        name: "Enchanted Coat",
        description: "This Loomian's takes 25% less damage from supereffective attacks."
    },

    expertise: {
        name: "Expertise",
        description: "This Loomian's energy cost for moves is decreased by 25%."
    },

    facade: {
        name: "Facade",
        description: "This Loomian's takes on another Loomian's appearance and gains their Attack-type bonus, but loses it when it gets hit."
    },

    fanningFlame: {
        name: "Fanning Flame",
        description: "This Loomian takes 50% less damage from Air-type moves when and its Ranged Attack is increased by one stage when hit by it."
    },

    festiveSpirit: {
        name: "Festive Spirit",
        description: "This Loomian's ranged attack stat is the same as its current energy and it cannot passively regenerate energy."
    },

    finesse: {
        name: "Finesse",
        description: "This Loomian 's moves bypass blocking moves."
    },

    flutter: {
        name: "Flutter",
        description: "This Loomian is immune to powder moves and damage from weather. Entry hazards are removed when Strong Gusts are active."
    },

    fogSummon: {
        name: "Fog Summon",
        description: "This Loomian summons Dense Fog for 5 turns when it enters the battle."
    },

    foresight: {
        name: "Foresight",
        description: "This Loomian's Mind-type moves gain +1 priority when their health is above half."
    },

    forge: {
        name: "Forge",
        description: "This Loomian takes 50% less damage from Fire-type moves and its Melee attack is increased by 1 stat rank if hit by a Fire-type move."
    },

    fortissimo: {
        name: "Fortissimo",
        description: "This Loomian is immune to Sound-based moves."
    },

    frailArmor: {
        name: "Frail Armor",
        description: "When hit by a Melee attack, this Loomian's Melee Defense is lowered by 1 stage and its Speed is raised by 1 stage."
    },

    frenzy: {
        name: "Frenzy",
        description: "This Loomian gains the opponent's remaining energy when an opponent is fainted by the Loomian."
    },

    glide: {
        name: "Glide",
        description: "This Loomian's Speed is raised by one stat rank if any Loomian on the field use an Air-type move."
    },

    gloomy: {
        name: "Gloomy",
        description: "This Loomian's moves deal 30% more damage if Dense Fog is present."
    },

    glutton: {
        name: "Glutton",
        description: "Certain consumable items such as Milkshake's effects are boosted."
    },

    gorge: {
        name: "Gorge",
        description: "This Loomian removes opponent's enchantments and entry hazards on the field and recovers 20% of its max HP."
    },
    
    guardian: {
        name: "Guardian",
        description: "Allies takes 25% less damage in Double Battles if the user is present."
    },

    gummy: {
        name: "Gummy",
        description: "This Loomian is immune to Explosive moves."
    },

    guru: {
        name: "Guru",
        description: "This Loomian's moves that have 70 or less base power will have a 50% damage boost."
    },

    hag: {
        name: "Hag",
        description: "This Loomian's Mind-type moves have their strength increased by 25% and their cost decreased by 25%."
    },

    handy: {
        name: "Handy",
        description: "Support moves have +1 priority."
    },

    hardCandy: {
        name: "Hard Candy",
        description: "This Loomian's Melee Defense is boosted by 50%, but is weak to Water-type moves."
    },

    harmonize: {
        name: "Harmonize",
        description: "If another Loomian inflicts a status condition on this Loomian, it also gets that status."
    },

    hasty: {
        name: "Hasty",
        description: "This Loomian's Melee Attack is 50% boosted and accuracy of its melee attacks is decreased by 20%."
    },

    heatSummon: {
        name: "Heat Summon",
        description: "This Loomian summons Smoldering Heat for five turns when entering the battle."
    },

    heavyFists: {
        name: "Heavy Fists",
        description: "Punching and slapping moves have 50% more power."
    },

    herdBehavior: {
        name: "Herd Behavior",
        description: "This Loomian copies an ally's stat changes in a Double Battle."
    },

    highExplosive: {
        name: "High Explosive",
        description: "Explosive moves deal 50% more damage and have their secondary effects removed."
    },

    hotfoot: {
        name: "Hotfoot",
        description: "This Loomian's speed is doubled in Smoldering Heat."
    },

    hover: {
        name: "Hover",
        description: "This Loomian is immune to Earth-type moves and ground entry hazards."
    },

    hydrate: {
        name: "Hydrate",
        description: "This user is immune to Water-type moves and restores their energy if hit by one."
    },

    hydroVortex: {
        name: "Hydro Vortex",
        description: "This user is immune to Water-type moves, redirects them in a Double Battle and raises their Melee Attack by one stat rank."
    },

    idiosyncratic: {
        name: "Idiosyncratic",
        description: "This Loomian's Melee and Ranged stats are swapped compared to other members of their species."
    },

    ignorant: {
        name: "Ignorant",
        description: "This Loomian ignores positive stat changes when attacking or attacked by an opponent."
    },

    illuminate: {
        name: "Illuminate",
        description: "This Loomian's Simple-type moves become Light type and have 20% more power alongside bypassing Total Eclipse."
    },

    immunized: {
        name: "Immunized",
        description: "This Loomian is immune to status ailments."
    },

    impose: {
        name: "Impose",
        description: "This Loomian recovers and gives its status ailment to the ally upon switching out."
    },

    incandescent: {
        name: "Incandescent",
        description: "This Loomian's Light-type moves deal 50% more damage and cost 25% more energy to use."
    },

    inferno: {
        name: "Inferno",
        description: "This Loomian's Ranged Attack is boosted by 50% and loses 1/8th of its HP when Smoldering Heat is active."
    },

    insulated: {
        name: "Insulated",
        description: "This Loomian takes 50% less damage from Fire and Ice-type moves."
    },

    intern: {
        name: "Intern",
        description: "This Loomian's energy is used instead when an ally uses a move if enough."
    },

    landBorne: {
        name: "Land-Borne",
        description: "This Loomian's Earth-type moves deal 25% more damage."
    },

    lazy: {
        name: "Lazy",
        description: "This Loomian moves last among Loomian using the same or greater priority moves."
    },

    lifeForce: {
        name: "Life Force",
        description: "This Loomian's moves cost 10 health to use."
    },

    lightningRod: {
        name: "Lightning Rod",
        description: "This Loomian draws Electric moves to itself to raise its Ranged Attack by 1 stage; Electric immunity."
    },

    luckofTheSea: {
        name: "Luck Of The Sea",
        description: "This Loomian's critical hit rate is increased and damage dealt by it is increased to 225%."
    },

    lucky: {
        name: "Lucky",
        description: "This Loomian's moves's secondary effects are more likely to happen."
    },

    madcap: {
        name: "Madcap",
        description: "Recoil moves deal 20% more damage."
    },

    marksman: {
        name: "Marksman",
        description: "This Loomian's critical hit damage is increased to 225%."
    },

    malware: {
        name: "Malware",
        description: "The opponent's ability changes to Malware if this Loomian is hit by a contact move."
    },

    maskSwap: {
        name: "Mask Swap",
        description: "This Loomian's secondary typing changes to the move's type before using a move."
    },

    master: {
        name: "Master",
        description: "This Loomian's best stat is increased by one stat rank when it knocks out an opponent."
    },

    meanSpirited: {
        name: "Mean Spirited",
        description: "This Loomian deals 1.2x more damage against sleeping foes."
    },

    mesmerizing: {
        name: "Mesmerizing",
        description: "This Loomian prevents opponents using priority moves.."
    },

    metamorphosis: {
        name: "Metamorphosis",
        description: "This Loomian's Simple-type moves become Bug-type and gain a 20% strength boost."
    },

    mimic: {
        name: "Mimic",
        description: "This Loomian will copy an ally's stat boost when it enters the battle."
    },

    motivational: {
        name: "Motivational",
        description: "When this Loomian enters the battle, all allies' moves cost 10% less energy until the Loomian faints."
    },

    mycotic: {
        name: "Mycotic",
        description: "This Loomian sets up Fungus Curse for five turns at the end of the turn."
    },

    mysteriousCloak: {
        name: "Mysterious Cloak",
        description: "This Loomian only takes direct damage from moves."
    },

    mysteryToxins: {
        name: "Mystery Toxins",
        description: "There is a 30% chance of poison/paralysis/sleep on others making contact with this Loomian."
    },

    mysticTone: {
        name: "Mystic Tone",
        description: "When this Loomian is attacked, it summons a random allies' move and attacks the opponent."
    },

    neutralize: {
        name: "Neutralize",
        description: "This Loomian's moves are changed to be Simple type and have 1.2x power."
    },

    nightmarish: {
        name: "Nightmarish",
        description: "When this Loomian is present, any asleep opponents will lose 1/8 of their max Health each turn."
    },

    noxiousWeeds: {
        name: "Noxious Weeds",
        description: "This Loomian's Plant-type attacks do 1.5x damage if hit by one Plant-type move; Plant immunity."
    },

    obsidianHeart: {
        name: "Obsidian Heart",
        description: "Ancient-type moves have 50% more power, but cost 10% more energy to use."
    },

    oddHusk: {
        name: "Odd Husk",
        description: "This Loomian is protected from the secondary effects of moves that hit it."
    },

    oneofMany: {
        name: "One of Many",
        description: "This Loomian removes any status ailments, stat drops, and Support move effects on itself at the end of every turn."
    },

    overcharged: {
        name: "Overcharged",
        description: "Electric-type moves are boosded by 30% when this Loomian is present."
    },

    overclock: {
        name: "Overclock",
        description: "This Loomian's speed is doubled if Severe Thunderstorms are present."
    },

    overshadow: {
        name: "Overshadow",
        description: "This Loomian's Simple-type moves become Dark type and have 20% more power."
    },

    oxidize: {
        name: "Oxidize",
        description: "This Loomian's Ranged Defense is increased by 50% during Heavy Rainfall or Strong Gusts."
    },

    partingGift: {
        name: "Parting Gift",
        description: "When this Loomian is knocked out, this Loomian deals a random amount of damage to the foe that knocked it out; 20% chance to deal 1/16 of their max HP, 50% chance to deal 1/8 of their max HP, 20% chance to deal 1/4 of their max HP, 10% chance to deal 1/2 of their max HP."
    },

    partyTrick: {
        name: "Party Trick",
        description: "Cast Bane of Haste at the end of the turn after you enter the battle."
    },

    persistence: {
        name: "Persistence",
        description: "When this Loomian is present, field effects caused by moves last an extra turn."
    },

    petrifying: {
        name: "Petrifying",
        description: "When this Loomian enters the battle, it lowers the Ranged Attack of all opponents present by one stat rank."
    },

    pincerTrap: {
        name: "Pincer Trap",
        description: "This Loomian's biting moves trap the foe until the end of the next turn, or until this Loomian switches."
    },

    pitchBlack: {
        name: "Pitch-Black",
        description: "Dark-type moves have 50% more power, but cost 25% more energy to use."
    },

    playful: {
        name: "Playful",
        description: "This Loomian's stat changes is shared with allies in a Double Battle."
    },

    pluvial: {
        name: "Pluvial",
        description: "This Loomian heals 1/16th of its max Health during Heavy Rainfall."
    },

    powerJaw: {
        name: "Power Jaw",
        description: "Biting attacks have 50% more power."
    },

    powerNapper: {
        name: "Power Napper",
        description: "This Loomian restores 1/3 of its lost health, rounded down, when it switches out."
    },

    premonition: {
        name: "Premonition",
        description: "On switch-in, this Loomian is alerted to the foes' move with the highest power."
    },

    prismatic: {
        name: "Prismatic",
        description: "This Loomian's Light-type attacks do 1.5x damage if hit by one Light-type move; Light immunity."
    },

    protectiveShell: {
        name: "Protective Shell",
        description: "This Loomian cannot be critically hit."
    },

    prowler: {
        name: "Prowler",
        description: "This Loomian's speed is doubled during Dense Fog."
    },

    puncture: {
        name: "Puncture",
        description: "This Loomian's biting attacks bypasses the target's Melee Defense boosts, Defense-boosting abilities and items."
    },

    pyro: {
        name: "Pyro",
        description: "This Loomian's Fire-type attacks do 50%x damage and cost 25% more energy."
    },

    pyroPro: {
        name: "Pyro Pro",
        description: "This Loomian's Fire-type attacks do 50% more damage and cost 10% more energy."
    },

    quickRecovery: {
        name: "Quick Recovery",
        description: "This Loomian recovers from status conditions when it switches out."
    },

    radiance: {
        name: "Radiance",
        description: "This Loomian's Light-type attacks have a 10% chance to daze the foe."
    },

    ragingFire: {
        name: "Raging Fire",
        description: "1/4 of this Loomian's max Energy is restored if hit by a Fire-type attack; Fire immunity."
    },

    railgun: {
        name: "Railgun",
        description: "Electric-type moves have 50% more power, but cost 10% more energy to use."
    },

    rainRush: {
        name: "Rain Rush",
        description: "This Loomian's Speed is doubled while it is raining."
    },
    
    rainSummon: {
        name: "Rain Summon",
        description: "Summons rain for 5 turns when the Loomian enters battle."
    },
    
    ravenous: {
        name: "Ravenous",
        description: "Before attacking, this Loomian removes all positive stat boosts from its target."
    },
    
    razorSharp: {
        name: "Razor Sharp",
        description: "This Loomian's Melee attacks have an increased critical hit rate."
    },
    
    reaper: {
        name: "Reaper",
        description: "When this Loomian knocks out an opponent, it restores 25% of its max Health; if the opponent is Light-type, it restores 50% instead."
    },

    rechargeable: {
        name: "Rechargeable",
        description: "This Loomian's Speed is raised 1 stage if hit by an Electric-type attack; Electric immunity."
    },

    recurrent: {
        name: "Recurrent",
        description: "Electric type attacks when used consecutively by the Loomian has its strength raised by 20%, up to 100%; resets if the Loomian uses a non-Electric type attack or a Support move."
    },

    reflective: {
        name: "Reflective",
        description: "This Loomian is immune to Light-type moves and will redirect them to an ally."
    },

    regift: {
        name: "Regift",
        description: "This Loomian reflects all effects of support moves back to the attacker if it is hit by one."
    },

    regurgitate: {
        name: "Regurgitate",
        description: "This Loomian lowers the Melee and Ranged Defense of opponents by one stat rank each if it is knocked out."
    },

    reign: {
        name: "Reign",
        description: "When this Loomian is present on the battlefield, allies' moves cost 10% less while opponents' moves cost 10% more energy."
    },

    replicate: {
        name: "Replicate",
        description: "This Loomian copies the foe's ability when it enters battle."
    },

    repugnant: {
        name: "Repugnant",
        description: "This Loomian takes less damage from biting moves and poisons the attacker."
    },

    resentful: {
        name: "Resentful",
        description: "When this Loomian is knocked out by the opponent, the opponent takes damage equal to the 50% of the damage it dealt in that turn."
    },

    resilience: {
        name: "Resilience",
        description: "This Loomian's Melee Defense is raised by 1 stat rank after it is damaged by a move."
    },

    revUp: {
        name: "Rev Up",
        description: "This Loomian's Speed is raised 1 stat rank at the end of each full turn on the field."
    },

    reverberate: {
        name: "Reverberate",
        description: "This Loomian is immune to sound-based moves and when this Loomian is present, all Loomians cannot fall asleep."
    },

    royalDecree: {
        name: "Rev Up",
        description: "This Loomian's Electric-type moves deal neutral damage to Earth-types."
    },

    rushHour: {
        name: "Rush Hour",
        description: "This Loomian's Speed is increased by 50% after entering the field."
    },

    safetyPot: {
        name: "Safety Pot",
        description: "This Loomian's Melee and Ranged Defenses are increased by 50% and its Speed is decreased by 33%."
    },

    salvage: {
        name: "Salvage",
        description: "If this Loomian has no item, it finds one used by an adjacent Loomian this turn."
    },

    scorchingSkin: {
        name: "Scorching Skin",
        description: "There is a 30% chance that a Loomian making contact with this Loomian will be burned."
    },

    seize: {
        name: "Seize",
        description: "When this Loomian is present in the field, opponents cannot use pivot moves."
    },

    sendoff: {
        name: "Sendoff",
        description: "When this Loomian faints, next ally who switches in gains 25% of max HP."
    },

    shakedown: {
        name: "Shakedown",
        description: "Reveals an opponent's held item."
    },

    sharpClaws: {
        name: "Sharp Claws",
        description: "This Loomian's contact moves have their power multiplied by 1.3."
    },

    sharpEdges: {
        name: "Sharp Edges",
        description: "Loomian making contact with this Loomian lose 1/8 of their max HP."
    },

    sharpFocus: {
        name: "Sharp Focus",
        description: "Moves this Loomian uses that have less than 100% Accuracy are boosted to 100% Accuracy and cost 10% more Energy."
    },

    skyBorne: {
        name: "Sky-Borne",
        description: "This Loomian's Air-type moves deal 25% more damage."
    },

    slickShell: {
        name: "Slick Shell",
        description: "This Loomian's Ranged Defense is doubled."
    },

    slimy: {
        name: "Slimy",
        description: "Loomian making contact with this Loomian have their Speed lowered by 1 stage."
    },

    sly: {
        name: "Sly",
        description: "This Loomian ignores all opponents held items; attacking or attacked."
    },

    sob: {
        name: "Sob",
        description: "This Loomian resets all stat changes when entering the field."
    },

    soulSiphon: {
        name: "Soul Siphon",
        description: "This Loomian raises their Ranged Attack by one stat rank if it knocks out an opponent."
    },

    specialization: {
        name: "Specialization",
        description: "The fewer moves this Loomian knows, the more power they have; 200% for 1 move, 150% for 2 moves, 125% for 3 moves."
    },

    spineBreak: {
        name: "Spine Break",
        description: "This Loomian sets up Poison Barbs when it is hit by a contact move."
    },

    sponge: {
        name: "Sponge",
        description: "This user is immune to Water-type attacks and heals 25% of its max HP when hit by one."
    },

    staunch: {
        name: "Staunch",
        description: "Prevents other Loomian from lowering this Loomian's stat ranks."
    },

    sugarRush: {
        name: "Sugar Rush",
        description: "When this Loomian's item is consumed or lost, its speed is doubled."
    },

    surrogate: {
        name: "Surrogate",
        description: "When an ally faints, this Loomian inherits its ability; applies in Single Battles when this Loomian is sent out after fainting."
    },

    swampy: {
        name: "Swampy",
        description: "This Loomian's Plant-type attacks lowers the target's speed by one stat rank."
    },

    sweetAroma: {
        name: "Sweet Aroma",
        description: "When the target uses a contact move on this Loomian, it cannot escape until next turn."
    },

    sweetTouch: {
        name: "Sweet Touch",
        description: "When this Loomian is hit by a contact move, the attacker has a chance to be locked to that move for three turns."
    },

    tank: {
        name: "Tank",
        description: "This Loomian takes half damage on the first turn every time it is switched into battle, including entry hazards."
    },

    temper: {
        name: "Temper",
        description: "This Loomian's Ranged Attack is raised by 1 stage when it reaches 1/2 or less of its max HP."
    },

    terrifying: {
        name: "Terrifying",
        description: "On switch-in, this Loomian lowers the Melee Attack of adjacent opponents by one stat rank."
    },

    territorial: {
        name: "Territorial",
        description: "This Loomian's moves have their power boosted by 25% when attacking Loomians of the same gender, but are 25% weaker against Loomians of the opposite gender."
    },

    thirdDegreeBurn: {
        name: "Third-degree burn",
        description: "This Loomian's attacks have a 10% chance to burn; burned opponents lose twice the amount of Health per turn."
    },

    thrivingPace: {
        name: "Thriving Pace",
        description: "If this Loomian is statused, its Speed is boosted by 50%; ignores Speed drop from paralysis."
    },

    thunderSummon: {
        name: "Thunder Summon",
        description: "This Loomian summons Severe Thunderstorm when it enters the battlefield."
    },

    toneDeaf: {
        name: "Tone Deaf",
        description: "This Loomian's sound moves have their power increased by 10%."
    },

    totalEclipse: {
        name: "Total Eclipse",
        description: "This Loomian's Speed is raised 1 stage if hit by a Light-type or Dark-type attack; Light and Dark immunity."
    },

    toxicFilter: {
        name: "Toxic Filter",
        description: "This Loomian's next Air-type attack has 50% more power when hit by a Toxic-type move; Toxic immunity."
    },

    toxicSac: {
        name: "Toxic Sac",
        description: "This Loomian's attacks have a 30% chance to poison the target; overwrites all status conditions."
    },

    toxicSpines: {
        name: "Toxic Spines",
        description: "When this Loomian is hit by a contact move, it has a chance to be poisoned."
    },

    toxicTouch: {
        name: "Toxic Touch",
        description: "When this Loomian is hit by a contact move, it has a chance to be poisoned."
    },

    trader: {
        name: "Trader",
        description: "This Loomian swaps items with its opponent at the end of the turn."
    },

    trashArmor: {
        name: "Trash Armor",
        description: "This Loomian's Melee Defense is increased by 50%."
    },

    triumph: {
        name: "Triumph",
        description: "After this Loomian knocks out a foe, it and its allies use no Energy on their next turn."
    },

    tumultuous: {
        name: "Tumultuous",
        description: "While Strong Gusts are active, this Loomian's attacks deal 30% more damage."
    },
    
    turbulent: {
        name: "Turbulent",
        description: "Simple-type moves used by this Loomian become Air-type and gain 20% more power."
    },
    
    twoFace: {
        name: "Two Face",
        description: "When this Loomian enters battle, it transforms into the opposing Loomian directly across from it."
    },
    
    ungraciousHost: {
        name: "Ungracious Host",
        description: "This Loomian damages those draining HP from it for as much as they would heal."
    },

    upperHand: {
        name: "Upper Hand",
        description: "If this Loomian moves first, its moves deal 30% more damage."
    },    

    vengeance: {
        name: "Vengeance",
        description: "If an ally was knocked out last turn, this Loomian's attacks have 2x power."
    },

    venomous: {
        name: "Venomous",
        description: "This Loomian's contact moves have a chance to poison the target."
    },
    
    vicious: {
        name: "Vicious",
        description: "While poisoned, this Loomian's moves are 50% stronger."
    },
    
    vigilant: {
        name: "Vigilant",
        description: "Prevents this Loomian and its allies from falling asleep."
    },
    
    vigorous: {
        name: "Vigorous",
        description: "If this Loomian has a non-volatile status condition, its Melee Attack is increased by 50%."
    },

    virtuoso: {
        name: "Virtuoso",
        description: "This Loomian's sound moves have their energy cost reduced by 25%."
    },
    
    viscid: {
        name: "Viscid",
        description: "This Loomian cannot be forced out by effects like Driving Force."
    },
    
    vividSight: {
        name: "Vivid Sight",
        description: "This Loomian's moves are 30% more accurate."
    },

    volcanic: {
        name: "Volcanic",
        description: "This Loomian's Fire-type attacks do 2x damage; cannot act the next turn if a Fire-type attack was used."
    },

    wail: {
        name: "Wail",
        description: "This Loomian's moves gain 10% more power for each fainted ally."
    },

    watcher: {
    name: "Watcher",
        description: "If this Loomian moves last, its moves are 30% stronger."
    },

    webbing: {
        name: "Webbing",
        description: "Loomian making contact with this Loomian have their Speed lowered by 1 stage."
    },
    
    wholesome: {
        name: "Wholesome",
        description: "Brawler and Mind-type moves deal half damage to this Loomian."
    },
    
    wildfire: {
        name: "Wildfire",
        description: "If this Loomian is at or above half Health, its Fire-type moves have +1 priority."
    },
    
    wise: {
        name: "Wise",
        description: "If this Loomian uses a move that is resisted, the move's power is doubled."
    },

    windSummon: {
        name: "Wind Summon",
        description: "Summons Strong Gusts for 5 turns when the possessor enters battle."
    },    

    woodsman: {
        name: "Woodsman",
        description: "This Loomian's Melee Attack is raised by 1 stage if hit by a Plant-type attack; Plant immunity."
    }
};