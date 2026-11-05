export const navLinks = [
  { label: "Falcon 9", href: "#falcon-9" },
  { label: "Falcon Heavy", href: "#falcon-heavy" },
  { label: "Dragon", href: "#dragon" },
  { label: "Starship", href: "#starship" },
  { label: "Human Spaceflight", href: "#human-spaceflight" },
];

export const missions = [
  {
    id: "starship",
    tagline: "UPCOMING LAUNCH",
    title: "STARSHIP FLIGHT TEST",
    ctaText: "WATCH",
    ctaLink: "#watch",
    mediaType: "video", // Supports 'video' or 'image'
    mediaSrc: "/assets/starship-video.mp4",
    posterSrc: "/assets/starship-poster.jpg",
  },
  {
    id: "falcon-9",
    tagline: "RECENT LAUNCH",
    title: "STARLINK MISSION",
    ctaText: "REWATCH",
    ctaLink: "#rewatch",
    mediaType: "image",
    mediaSrc: "/assets/falcon9.jpg",
  },
  {
    id: "dragon",
    tagline: "COMPLETED MISSION",
    title: "DRAGON AND CREW RETURN TO EARTH",
    ctaText: "LEARN MORE",
    ctaLink: "#dragon-details",
    mediaType: "image",
    mediaSrc: "/assets/dragon.jpg",
  },
  {
    id: "human-spaceflight",
    tagline: "ADVANCING HUMAN SPACEFLIGHT",
    title: "MAKING LIFE MULTIPLANETARY",
    ctaText: "EXPLORE",
    ctaLink: "#explore",
    mediaType: "video",
    mediaSrc: "/assets/mars-video.mp4",
  },
];

export const telemetryStats = [
  { label: "Total Launches", value: 385 },
  { label: "Total Landings", value: 348 },
  { label: "Total Reflights", value: 318 },
];
