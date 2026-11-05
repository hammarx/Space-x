const GITHUB_RAW =
  "https://raw.githubusercontent.com/JP-juniorr/space-x/main/src/assets";

export const navLinks = [
  { label: "Falcon 9", href: "#falcon-9" },
  { label: "Falcon Heavy", href: "#falcon-heavy" },
  { label: "Dragon", href: "#dragon" },
  { label: "Starship", href: "#starship" },
  { label: "Human Spaceflight", href: "#human-spaceflight" },
  { label: "Rideshare", href: "#rideshare" },
  { label: "Starshield", href: "#starshield" },
  { label: "Starlink", href: "#starlink" },
];

export const missions = [
  {
    id: "starship",
    tagline: "UPCOMING FLIGHT TEST",
    title: "STARSHIP",
    subtitle:
      "SpaceX’s Starship spacecraft and Super Heavy rocket – collectively referred to as Starship – represent a fully reusable transportation system designed to carry both crew and cargo to Earth orbit, the Moon, Mars and beyond.",
    ctaText: "LEARN MORE",
    mediaType: "video",
    mediaSrc: `${GITHUB_RAW}/video/SpaceX.mp4`,
    posterSrc:
      "https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&w=2000&q=85",
    specs: [
      { label: "HEIGHT", value: "121 m / 397 ft" },
      { label: "DIAMETER", value: "9 m / 29.5 ft" },
      { label: "PAYLOAD TO LEO", value: "100 – 150 t" },
      { label: "PROPULSION", value: "33 Raptor Engines" },
    ],
  },
  {
    id: "falcon-9",
    tagline: "RECENT LAUNCH",
    title: "FALCON 9",
    subtitle:
      "First orbital class rocket capable of reflight. Falcon 9 is a reusable, two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of people and payloads into Earth orbit and beyond.",
    ctaText: "REWATCH",
    mediaType: "image",
    mediaSrc:
      "https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&w=2000&q=85",
    specs: [
      { label: "HEIGHT", value: "70 m / 229.6 ft" },
      { label: "DIAMETER", value: "3.7 m / 12 ft" },
      { label: "MASS", value: "549,054 kg" },
      { label: "PAYLOAD TO LEO", value: "22,800 kg" },
    ],
  },
  {
    id: "falcon-heavy",
    tagline: "OVER 5 MILLION POUNDS OF THRUST",
    title: "FALCON HEAVY",
    subtitle:
      "Falcon Heavy is composed of three Falcon 9 nine-engine cores whose 27 Merlin engines together generate more than 5 million pounds of thrust at liftoff, equal to approximately eighteen 747 aircraft.",
    ctaText: "LEARN MORE",
    mediaType: "image",
    mediaSrc:
      "https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?auto=format&fit=crop&w=2000&q=85",
    specs: [
      { label: "HEIGHT", value: "70 m / 229.6 ft" },
      { label: "WIDTH", value: "12.2 m / 39.9 ft" },
      { label: "THRUST AT LIFTOFF", value: "22,819 kN" },
      { label: "PAYLOAD TO LEO", value: "63,800 kg" },
    ],
  },
  {
    id: "dragon",
    tagline: "SENDING HUMANS AND CARGO INTO SPACE",
    title: "DRAGON",
    subtitle:
      "The Dragon spacecraft is capable of carrying up to 7 passengers to and from Earth orbit, and beyond. It is the only spacecraft currently flying that is capable of returning significant amounts of cargo to Earth.",
    ctaText: "EXPLORE DRAGON",
    mediaType: "image",
    mediaSrc:
      "https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&w=2000&q=85",
    specs: [
      { label: "HEIGHT", value: "8.1 m / 26.7 ft" },
      { label: "DIAMETER", value: "4 m / 13 ft" },
      { label: "LAUNCH PAYLOAD", value: "6,000 kg" },
      { label: "RETURN PAYLOAD", value: "3,000 kg" },
    ],
  },
  {
    id: "human-spaceflight",
    tagline: "ADVANCING HUMAN SPACEFLIGHT",
    title: "EVA SUIT & CREW MISSIONS",
    subtitle:
      "Destinations include Earth Orbit, the International Space Station, the Moon, and Mars. Designed for intravehicular and extravehicular activity in the vacuum of space.",
    ctaText: "EXPLORE MISSIONS",
    mediaType: "image",
    mediaSrc:
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=2000&q=85",
    specs: [
      { label: "DESTINATIONS", value: "Earth • ISS • Moon • Mars" },
      { label: "HUD HELMET", value: "3D-Printed Visor + HUD" },
      { label: "MOBILITY", value: "Pressurized Joint Rotators" },
      { label: "LIFE SUPPORT", value: "Redundant Umbilical" },
    ],
  },
  {
    id: "rideshare",
    tagline: "DEDICATED SMALLSAT RIDESHARE PROGRAM",
    title: "SMALLSAT RIDESHARE",
    subtitle:
      "Reliable, affordable launch services for small satellites to Sun-Synchronous Orbit (SSO), Mid-Inclination Orbit, and Geostationary Transfer Orbit.",
    ctaText: "BOOK A RIDE",
    mediaType: "image",
    mediaSrc:
      "https://images.unsplash.com/photo-1457364559154-aa2644600ebb?auto=format&fit=crop&w=2000&q=85",
    specs: [
      { label: "CADENCE", value: "4x Yearly to SSO" },
      { label: "PORT SIZES", value: '15" and 24" ESPA Ports' },
      { label: "VEHICLE", value: "Flight-Proven Falcon 9" },
      { label: "RELIABILITY", value: "99.5%+ Mission Success" },
    ],
  },
  {
    id: "starshield",
    tagline: "SUPPORTING NATIONAL SECURITY",
    title: "STARSHIELD",
    subtitle:
      "Starshield leverages SpaceX’s Starlink technology and launch capability to support national security efforts with Earth observation, communications, and hosted payloads.",
    ctaText: "LEARN MORE",
    mediaType: "image",
    mediaSrc:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=85",
    specs: [
      { label: "CRYPTOGRAPHY", value: "High-Assurance Encryption" },
      { label: "INTER-SATELLITE", value: "Optical Laser Mesh" },
      { label: "ARCHITECTURE", value: "Modular Payload Bus" },
      { label: "DEPLOYMENT", value: "Rapid Launch Cadence" },
    ],
  },
  {
    id: "starlink",
    tagline: "HIGH-SPEED INTERNET AROUND THE GLOBE",
    title: "STARLINK",
    subtitle:
      "Starlink is the world’s first and largest satellite constellation using a low Earth orbit to deliver broadband internet capable of supporting streaming, online gaming, video calls and more.",
    ctaText: "VIEW CONSTELLATION",
    mediaType: "image",
    mediaSrc:
      "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=2000&q=85",
    specs: [
      { label: "ORBIT ALTITUDE", value: "550 km (LEO)" },
      { label: "LATENCY", value: "~25 ms" },
      { label: "OPTICAL LINKS", value: "Space Laser Mesh" },
      { label: "COVERAGE", value: "100+ Countries & Markets" },
    ],
  },
];

export const galleryItems = [
  {
    id: 1,
    category: "Starship",
    title: "Super Heavy Mechazilla Catch & Liftoff",
    location: "Starbase • Boca Chica, TX",
    image:
      "https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 2,
    category: "Falcon Heavy",
    title: "Simultaneous Twin Booster Touchdown",
    location: "LZ-1 & LZ-2 • Cape Canaveral, FL",
    image:
      "https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 3,
    category: "Dragon",
    title: "Crew Dragon Autonomous ISS Approach",
    location: "Low Earth Orbit • 408 km",
    image:
      "https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 4,
    category: "Human Spaceflight",
    title: "Commercial Extravehicular Spacewalk",
    location: "Orbital Apogee • 1,400 km",
    image:
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 5,
    category: "Starlink",
    title: "V2 Mini Orbital Laser Constellation",
    location: "Low Earth Orbit • 550 km",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 6,
    category: "Mars Architecture",
    title: "Making Humanity Multiplanetary",
    location: "Arcadia Planitia • Mars",
    image:
      "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=1200&q=85",
  },
];

export const telemetryStats = [
  { label: "Total Launches", value: 420 },
  { label: "Total Landings", value: 382 },
  { label: "Total Reflights", value: 354 },
];
