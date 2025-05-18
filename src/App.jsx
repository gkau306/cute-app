import { useState } from 'react';
import './App.css';

const sentences = [
  "You are a sprinkle of magic in the world! 💖",
  "Your smile can light up any room! 🌸",
  "You are blooming beautifully, just like a flower! 🌷",
  "You make the world a kinder place! 🦋",
  "You are as sweet as strawberry cake! 🍰",
  "Shine bright, lovely star! ✨",
  "You are loved more than you know! 💚",
  "Keep sparkling, gorgeous! 💎",
  "You are a ray of sunshine! ☀️",
  "You are pure joy wrapped in cuteness! 🎀",
  "You're doing amazing, sweetie! 💅",
  "Even the stars are proud of you! 🌠",
  "You're the rainbow after the storm! 🌈",
  "You're small but mighty! 🐣",
  "You make everything a little more magical! 🪄",
  "You glow different, bestie. 💫",
  "You’re a pixel-perfect angel! 👾",
  "You're more powerful than you think! 💥",
  "You add sparkle to everyone's life! ✨",
  "You’re the coziest vibe on the internet. 🧸",
  "You're cuter than a baby duck in socks. 🐤🧦",
  "Your energy = aesthetic overload. 🦄",
  "You radiate main character energy. 🎬",
  "You deserve good things—always. 🍀",
  "You’ve got this. And I’ve got you. 🤝",
  "Your softness is your strength. 🍓",
  "You make the pixels in my heart light up. ❤️‍🔥",
  "You're the final boss of kindness. 👑",
  "You’re not just cute—you’re legendary. 🌟",
  "You're built different—in the best way. 🧱",
  "You’re like a cozy game with lo-fi music. 🎧",
  "Hug? You deserve like 12. 🤗",
  "You’re the glitch in the matrix that makes it better. 🖤",
  "You’ve unlocked a new level of cuteness! 🕹️",
  "You’re brave, bold, and beautiful. 🐯",
  "You're not late. You're blooming in your season. 🌼",
  "You’re soft-coded but hard-core. 💻💗",
  "You're pixel art perfection. 🧶",
  "You’re a masterpiece in progress. 🎨",
  "You bring peace like pastel skies. ☁️",
  "You sparkle like soda and stardust. 🥤✨",
  "You are enough. More than enough. 🌷",
  "You’re the hero in your own story. 🧚‍♀️",
  "You’ve got the power-up energy today! 🔋",
  "You’re sweet like peach tea and playlists. 🍑🎵",
  "You're not just vibing—you're healing. 🩷",
  "You matter more than any algorithm ever will. 🤖❤️",
  "You’re like a good book: comforting, unique, and magical. 📖",
  "You radiate gentle strength. 🍃",
  "You are stardust and serotonin. 🌌💞"
];


function App() {
  const [sentence, setSentence] = useState("");

  const showSentence = () => {
    const random = sentences[Math.floor(Math.random() * sentences.length)];
    setSentence(random);
  };

  return (
    <div className="container">
      <h1 className="title">🌸 CUTE KINDNESS APP 🌸</h1>
      <button className="cute-button" onClick={showSentence}>
        Show me something cute!
      </button>
      {sentence && <div className="sentence-box">{sentence}</div>}
    </div>
  );
}

export default App;
