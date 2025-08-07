import React from "react";

const features = [
  {
    title: "🧠 Mood Tracking",
    description: "Log your emotions daily and see your growth.",
  },
  {
    title: "📓 Journaling",
    description: "Write your thoughts. Discover your patterns.",
  },
  {
    title: "🎧 Music Vibes",
    description: "Get songs that match your mood with Spotify.",
  },
];

const FeatureCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 py-12">
      {features.map((feature, index) => (
        <div
          key={index}
          className="bg-black text-white border border-pink-500 p-6 rounded-2xl shadow-lg glitch-box relative overflow-hidden"
        >
          <h3 className="text-2xl font-bold mb-3 glitch-text">{feature.title}</h3>
          <p className="text-base text-gray-300">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FeatureCards;
