"use client";

import React from "react";
import Scene from "@/components/Scene";

const games = [
  {
    title: "God of War",
    url: "https://upload.wikimedia.org/wikipedia/en/a/a7/God_of_War_4_cover.jpg",
  },
  {
    title: "GTA V",
    url: "https://upload.wikimedia.org/wikipedia/en/a/a5/Grand_Theft_Auto_V.png",
  },
  {
    title: "Thief",
    url: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/239160/capsule_616x353.jpg?t=1726596864",
  },
  {
    title: "Counter-Strike",
    url: "https://cdn.akamai.steamstatic.com/apps/csgo/images/csgo_react/social/cs2.jpg",
  },
  {
    title: "Valorant",
    url: "https://images.livemint.com/img/2020/06/03/600x338/Valorant_1591218052835_1591218061187.jpg",
  },
  {
    title: "Resident Evil -4",
    url: "https://game.capcom.com/residentevil/pc/img/lineup/en/lineup-re4-ge.jpg",
  },
  {
    title: "Granny",
    url: "https://static.gameloop.com/img/b15134ff319cd11cab4e04bc3b06f3e3.jpg?imageMogr2/thumbnail/undefinedx266/format/webp",
  },
  {
    title: "Call of Duty: Modern Warfare",
    url: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2000950/capsule_616x353.jpg?t=1678294805",
  },
];

const Page = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          backgroundColor: "#0b0b0b",
          color: "#f1f1f1",
          fontFamily: "serif",
          minHeight: "100vh",
          overflowX: "hidden",
        }}
      >
        <main
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            zIndex: 1,
          }}
        >
          <div
            style={{
              padding: "3rem 2rem",
              width: "100%",
              maxWidth: "1000px",
              textAlign: "center",
              background: "rgba(0, 0, 0, 0.6)",
              borderRadius: "16px",
              boxShadow: "0 0 30px rgba(226, 224, 224, 0.3)",
              backdropFilter: "blur(4px)",
              margin: "6rem auto 3rem auto",
            }}
          >
            <h1 style={{ fontSize: "3.5rem", color: "#ccffee" }}>
              Welcome to PaatalLok
            </h1>
            <p style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>
              Where the screen fades... and your legend begins.
            </p>
            <p
              style={{
                fontSize: "1.15rem",
                marginBottom: "1rem",
                color: "#ddd",
              }}
            >
              Enter a world stitched from shadows and glory — where every game
              is a story, and every viewer becomes part of the realm.
            </p>
            <p
              style={{ fontSize: "1.1rem", fontStyle: "italic", color: "#bbb" }}
            >
              Stream louder. Watch deeper. Rule harder. Welcome to the
              underworld of gaming.
            </p>
          </div>

          <div
            style={{
              width: "100%",
              overflow: "hidden",
              marginTop: "3rem",
              maxWidth: "1000px",
              position: "relative",
            }}
          >
            <h2
              style={{
                color: "#ccffee",
                fontSize: "1.8rem",
                marginBottom: "1rem",
                textAlign: "left",
                paddingLeft: "1rem",
              }}
            >
              Featured Realms
            </h2>

            <div
              style={{
                display: "flex",
                gap: "1rem",
                animation: "scroll 40s linear infinite",
                width: "max-content",
              }}
            >
              {[...games, ...games].map((game, index) => (
                <div
                  key={index}
                  style={{
                    background: "#111",
                    borderRadius: "12px",
                    overflow: "hidden",
                    minWidth: "250px",
                    boxShadow: "0 0 20px rgba(255,255,255,0.05)",
                    transition: "transform 0.3s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.05)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                >
                  <img
                    src={game.url}
                    alt={game.title}
                    style={{
                      width: "100%",
                      height: "160px",
                      objectFit: "cover",
                    }}
                  />
                  <p
                    style={{
                      padding: "0.75rem",
                      color: "#ccc",
                      fontSize: "1rem",
                      textAlign: "center",
                    }}
                  >
                    {game.title}
                  </p>
                </div>
              ))}
            </div>

            {/* New content below game slider */}
            <div
              style={{
                marginTop: "3rem",
                backgroundColor: "#141414",
                padding: "2rem",
                borderRadius: "12px",
                boxShadow: "0 0 20px rgba(255, 255, 255, 0.05)",
              }}
            >
              <h3 style={{ fontSize: "1.6rem", color: "#ccffee" }}>
                What is PaatalLok?
              </h3>
              <p
                style={{ color: "#ddd", marginTop: "1rem", fontSize: "1.1rem" }}
              >
                PaatalLok is more than just a streaming platform — it's an
                underground battlefield where top creators and passionate gamers
                showcase their skills, stories, and strategies. Whether you love
                adrenaline-pumping FPS, immersive RPGs, or indie horrors, you'll
                find your domain here.
              </p>
              <p style={{ color: "#ccc", marginTop: "1rem" }}>
                Our platform is a gateway to:
              </p>
              <ul style={{ paddingLeft: "1.5rem", color: "#bbb" }}>
                <li>🔥 Legendary streamers with unique gameplays</li>
                <li>👥 Community chats and viewer interaction</li>
                <li>🧩 Deep dives into game lore and hidden secrets</li>
                <li>🌌 Discovering new games every week</li>
              </ul>
              <p style={{ marginTop: "1rem", color: "#ccc" }}>
                Join us as we journey through forgotten dungeons, future
                battlefields, and mysterious haunted lands — all from one home:
                <strong> PaatalLok</strong>.
              </p>
            </div>
          </div>
        </main>

        <div
          style={{
            width: "40vw",
            minHeight: "100vh",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "sticky",
              top: 0,
              width: "100%",
              height: "120vh",
              zIndex: 0,
            }}
          >
            <Scene />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
