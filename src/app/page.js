"use client";
import React, { useRef, useEffect } from "react";
import Scene from "@/components/Scene";

const fontLink = (
  <link
    href="https://fonts.googleapis.com/css2?family=UnifrakturCook:wght@700&family=Orbitron:wght@400;700&family=Space+Grotesk:wght@400;700&display=swap"
    rel="stylesheet"
  />
);

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

const floatingSVGs = [
  { src: "/skull.svg", style: { top: "10%", left: "5%", width: 60 } },
  { src: "/gamepad.svg", style: { top: "70%", left: "80%", width: 80 } },
  { src: "/rune.svg", style: { top: "40%", left: "60%", width: 40 } },
];

const Page = () => {
  const parallaxRef = useRef([]);
  useEffect(() => {
    const handleMouseMove = (e) => {
      parallaxRef.current.forEach((el, i) => {
        if (el) {
          const speed = 10 + i * 5;
          el.style.transform = `translate(${
            (e.clientX - window.innerWidth / 2) / speed
          }px, ${(e.clientY - window.innerHeight / 2) / speed}px)`;
        }
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {fontLink}
      <canvas
        id="particles"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      {floatingSVGs.map((svg, i) => (
        <img
          key={i}
          src={svg.src}
          ref={(el) => (parallaxRef.current[i] = el)}
          style={{
            position: "fixed",
            pointerEvents: "none",
            zIndex: 2,
            opacity: 0.5,
            ...svg.style,
          }}
          alt=""
        />
      ))}
      <style>{`
        @keyframes glow {
          0% { text-shadow: 0 0 8px #0ff, 0 0 24px #0ff, 0 0 32px #0ff; }
          50% { text-shadow: 0 0 12px #0ff, 0 0 32px #0ff, 0 0 48px #0ff; }
          100% { text-shadow: 0 0 8px #0ff, 0 0 24px #0ff, 0 0 32px #0ff; }
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        @keyframes pulse {
          0% { opacity: 0.5; }
          50% { opacity: 1; }
          100% { opacity: 0.5; }
        }
        body {
          background: linear-gradient(135deg, #0b0b0b 0%, #1a1a2e 100%);
          overflow-x: hidden;
          font-family: 'Space Grotesk', sans-serif;
        }
        .neon {
          font-family: 'UnifrakturCook', cursive;
          color: #ccffee;
          animation: glow 3s infinite;
          letter-spacing: 2px;
          position: relative;
        }
        .neon::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(0, 255, 255, 0.1), transparent);
          animation: scanline 2s linear infinite;
        }
        .grunge-border {
          border: 4px solid transparent;
          border-image: url('/grunge-border.png') 30 stretch;
          border-radius: 18px;
          box-shadow: 0 0 30px rgba(0, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          position: relative;
          overflow: hidden;
        }
        .grunge-border::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(45deg, transparent, rgba(0, 255, 255, 0.05), transparent);
          animation: pulse 4s ease-in-out infinite;
        }
        .game-card {
          background: rgba(20,20,20,0.8);
          border-radius: 18px;
          box-shadow: 0 0 24px #0ff2;
          border: 2px solid #222;
          overflow: hidden;
          position: relative;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          cursor: pointer;
          perspective: 800px;
          animation: float 6s ease-in-out infinite;
        }
        .game-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(45deg, transparent, rgba(0, 255, 255, 0.1), transparent);
          z-index: 1;
          pointer-events: none;
        }
        .game-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 0 40px #0ff4;
        }
        .game-card-inner {
          transition: transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          transform-style: preserve-3d;
        }
        .game-card:hover .game-card-inner {
          transform: rotateY(180deg);
        }
        .game-card-front, .game-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
        }
        .game-card-back {
          background: linear-gradient(135deg, #111 0%, #1a1a2e 100%);
          color: #ccffee;
          display: flex;
          align-items: center;
          justify-content: center;
          transform: rotateY(180deg);
          padding: 1rem;
          font-size: 1.1rem;
          text-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
        }
        .cta-btn {
          background: linear-gradient(90deg, #ccffee 0%, #0ff 100%);
          color: #111;
          font-family: 'Orbitron', sans-serif;
          font-size: 1.5rem;
          padding: 0.8rem 2.5rem;
          border: none;
          border-radius: 32px;
          box-shadow: 0 0 24px #0ff8;
          margin-top: 2rem;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
          overflow: hidden;
          text-transform: uppercase;
          letter-spacing: 2px;
        }
        .cta-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: 0.5s;
        }
        .cta-btn:hover {
          background: #0ff;
          color: #000;
          box-shadow: 0 0 48px #ccffee99;
          transform: scale(1.05);
        }
        .cta-btn:hover::before {
          left: 100%;
        }
        .tech-grid {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px);
          background-size: 20px 20px;
          pointer-events: none;
          opacity: 0.3;
        }
        .binary-code {
          position: absolute;
          color: rgba(0, 255, 255, 0.1);
          font-family: monospace;
          font-size: 12px;
          white-space: pre;
          pointer-events: none;
          animation: pulse 4s ease-in-out infinite;
        }
      `}</style>
      <div
        style={{
          display: "flex",
          minHeight: "100vh",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div className="tech-grid" />
        <div className="binary-code" style={{ top: "10%", left: "5%" }}>
          10101010
        </div>
        <div className="binary-code" style={{ top: "30%", right: "5%" }}>
          01010101
        </div>
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
            className="grunge-border"
            style={{
              padding: "3rem 2rem",
              width: "100%",
              maxWidth: "1000px",
              textAlign: "center",
              background: "rgba(0, 0, 0, 0.7)",
              margin: "6rem auto 3rem auto",
              position: "relative",
              animation: "float 6s ease-in-out infinite",
            }}
          >
            <h1
              className="neon"
              style={{ fontSize: "3.5rem", fontFamily: "inherit" }}
            >
              Welcome to PaatalLok
            </h1>
            <p
              style={{
                fontSize: "1.25rem",
                marginBottom: "1rem",
                color: "#ccffee",
                textShadow: "0 0 10px rgba(0, 255, 255, 0.5)",
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              Where the screen fades... and your legend begins.
            </p>
            <p
              style={{
                fontSize: "1.15rem",
                marginBottom: "1rem",
                color: "#ddd",
                textShadow: "0 0 5px rgba(0, 255, 255, 0.3)",
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              Enter a world stitched from shadows and glory — where every game
              is a story, and every viewer becomes part of the realm.
            </p>
            <p
              style={{
                fontSize: "1.1rem",
                fontStyle: "italic",
                color: "#bbb",
                marginBottom: "2rem",
                textShadow: "0 0 5px rgba(0, 255, 255, 0.2)",
                fontFamily: "'Space Grotesk', sans-serif",
              }}
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
              className="neon"
              style={{
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
                gap: "1.2rem",
                width: "100%",
                overflowX: "auto",
                paddingBottom: "1rem",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {games.map((game, index) => (
                <div
                  key={index}
                  className="game-card"
                  style={{
                    minWidth: "250px",
                    height: "260px",
                    animationDelay: `${index * 0.2}s`,
                  }}
                >
                  <div
                    className="game-card-inner"
                    style={{ width: "100%", height: "100%" }}
                  >
                    <div className="game-card-front">
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
                          color: "#ccffee",
                          fontSize: "1.08rem",
                          textAlign: "center",
                          fontWeight: "bold",
                          letterSpacing: "0.5px",
                          textShadow: "0 0 10px rgba(0, 255, 255, 0.5)",
                          fontFamily: "'Space Grotesk', sans-serif",
                        }}
                      >
                        {game.title}
                      </p>
                    </div>
                    <div className="game-card-back">
                      <span>
                        {game.title} <br />
                        <em>
                          "A legend forged in the shadows. Click to watch the
                          saga unfold."
                        </em>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div
              className="grunge-border"
              style={{
                marginTop: "3rem",
                backgroundColor: "#141414",
                padding: "2rem",
                borderRadius: "12px",
                position: "relative",
                animation: "float 6s ease-in-out infinite",
              }}
            >
              <h3 className="neon" style={{ fontSize: "1.6rem" }}>
                What is PaatalLok?
              </h3>
              <p
                style={{
                  color: "#ddd",
                  marginTop: "1rem",
                  fontSize: "1.1rem",
                  zIndex: 1,
                  position: "relative",
                  textShadow: "0 0 5px rgba(0, 255, 255, 0.3)",
                  fontFamily: "'Space Grotesk', sans-serif",
                }}
              >
                PaatalLok is your gateway to the underground world of game
                streaming — where rising creators and top-tier gamers come
                alive. Dive in, discover, and watch the best in action.
              </p>
              <p
                style={{
                  color: "#ccc",
                  marginTop: "1rem",
                  zIndex: 1,
                  position: "relative",
                  textShadow: "0 0 5px rgba(0, 255, 255, 0.2)",
                  fontFamily: "'Space Grotesk', sans-serif",
                }}
              >
                Our platform is a gateway to:
              </p>
              <ul
                style={{
                  paddingLeft: "1.5rem",
                  color: "#bbb",
                  zIndex: 1,
                  position: "relative",
                  textShadow: "0 0 5px rgba(0, 255, 255, 0.2)",
                  fontFamily: "'Space Grotesk', sans-serif",
                }}
              >
                <li>
                  Renowned streamers delivering unique gameplay experiences
                </li>
                <li>
                  Live community interaction with seamless chat integration
                </li>
                <li>In-depth analysis of game lore and hidden narratives</li>
                <li>Weekly highlights of new and trending game titles</li>
              </ul>
              <p
                style={{
                  marginTop: "1rem",
                  color: "#ccc",
                  zIndex: 1,
                  position: "relative",
                  textShadow: "0 0 5px rgba(0, 255, 255, 0.2)",
                  fontFamily: "'Space Grotesk', sans-serif",
                }}
              >
                "Discover diverse gaming realms — from dungeons to futuristic
                battlefields — all in one place: <strong>PaatalLok</strong>."
              </p>
            </div>
          </div>
        </main>
        <div
          className="side-scene"
          style={{
            width: "40vw",
            minHeight: "100vh",
            position: "relative",
            zIndex: 1,
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
