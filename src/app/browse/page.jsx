"use client";
import React from "react";

const Page = () => {
  const channels = [
    {
      name: "MrBeast Gaming",
      url: "https://www.youtube.com/@MrBeastGaming",
      logo: "https://yt3.googleusercontent.com/ytc/AIdro_lMiSL6eHqg2dVxvll6mVMeXo1qVak4TZ4_7mEWdobRRCk=s160-c-k-c0x00ffffff-no-rj",
    },
    {
      name: "CarryMinati",
      url: "https://www.youtube.com/@CarryMinati",
      logo: "https://yt3.googleusercontent.com/cxE8FStJktJ2oiuv1f-7OHMfJI7ZlMby4NgPDkfJTyV3sOsvdo5pmsAb8TAcJVNor6gNT2h_0w=s160-c-k-c0x00ffffff-no-rj",
    },
    {
      name: "Techno Gamerz",
      url: "https://www.youtube.com/@TechnoGamerzOfficial",
      logo: "https://yt3.googleusercontent.com/ytc/AIdro_mSh0doIgogNhhpzLcRYEMRorZefkBUe_6LYOWnLgzSyFc=s160-c-k-c0x00ffffff-no-rj",
    },
    {
      name: "Dynamo Gaming",
      url: "https://www.youtube.com/@DynamoGaming",
      logo: "https://yt3.googleusercontent.com/ytc/AIdro_kCNu8QCIYlhtbGOmcJdRbEo4WZ9b7MrPly8mmZJdbBfP4=s160-c-k-c0x00ffffff-no-rj",
    },
    {
      name: "CarryisLive",
      url: "https://www.youtube.com/@CarryisLive",
      logo: "https://yt3.googleusercontent.com/ytc/AIdro_m-ZGYEhrhbHr9wR202q4kf33QEh8vB7uI9ZDf8hjwYal4=s160-c-k-c0x00ffffff-no-rj",
    },
    {
      name: "Jacksepticeye",
      url: "https://www.youtube.com/@jacksepticeye",
      logo: "https://yt3.googleusercontent.com/ytc/AIdro_m7K306sLhJfQqGAMnuHdEBTwdqBA4gVTGa_FtEmarXd34=s160-c-k-c0x00ffffff-no-rj",
    },
    {
      name: "Markiplier",
      url: "https://www.youtube.com/@Markiplier",
      logo: "https://yt3.googleusercontent.com/ytc/AIdro_nfDvwu14-iN5YZcaLIomwno1_3oFcYTmG5_kn7SMj_nec=s160-c-k-c0x00ffffff-no-rj",
    },
    {
      name: "PewDiePie",
      url: "https://www.youtube.com/@PewDiePie",
      logo: "https://yt3.ggpht.com/vik8mAiwHQbXiFyKfZ3__p55_VBdGvwxPpuPJBBwdbF0PjJxikXhrP-C3nLQAMAxGNd_-xQCIg=s176-c-k-c0x00ffffff-no-rj-mo",
    },
    {
      name: "VanossGaming",
      url: "https://www.youtube.com/@VanossGaming",
      logo: "https://yt3.googleusercontent.com/ytc/AIdro_mrzXEes8j0Li9x1M2wO0dif1mW10t_lmgrDcxllRfaJNE=s176-c-k-c0x00ffffff-no-rj-mo",
    },
    {
      name: "DanTDM",
      url: "https://www.youtube.com/@DanTDM",
      logo: "https://yt3.googleusercontent.com/1IPv4TRdl3RaT1HEsqdvjzqA0OvBHbVxZFt2U5QZHKDgbEGosdazeBqyJH9ZU5rhs9kfC8dGXRc=s160-c-k-c0x00ffffff-no-rj",
    },
    {
      name: "SSundee",
      url: "https://www.youtube.com/@SSundee",
      logo: "https://yt3.googleusercontent.com/ytc/AIdro_m8dGmeU2bqMcUcJqK6j_CNescTudYadR4uWPsL9U62qlQ=s176-c-k-c0x00ffffff-no-rj-mo",
    },
    {
      name: "PrestonPlayz",
      url: "https://www.youtube.com/@PrestonPlayz",
      logo: "https://yt3.googleusercontent.com/ytc/AIdro_lsdcmmUcwdYIBXTz4H3bae3QalHQcbCHg9aJs6ve4HZZM=s176-c-k-c0x00ffffff-no-rj-mo",
    },
    {
      name: "Ali-A",
      url: "https://www.youtube.com/@Matroix",
      logo: "https://yt3.ggpht.com/PEWUpS4lfXweWds1DtbHnlVA0eVXmqypfHZe8-Hatzu_7Evzp3Efgf515TmeCXd_0po2Ypi08g=s176-c-k-c0x00ffffff-no-rj-mo",
    },
    {
      name: "Ninja",
      url: "https://www.youtube.com/@Ninja",
      logo: "https://yt3.ggpht.com/U1fckzNGBn8FcM29b2TkMMzWPb_AZaFFme90rACZA_rux_aZczVzDMLpTkmu1GroycEcbcgM=s176-c-k-c0x00ffffff-no-rj-mo",
    },
    {
      name: "Pokimane",
      url: "https://www.youtube.com/@Pokimane",
      logo: "https://yt3.googleusercontent.com/ytc/AIdro_kApSLBAz__1TGRopBW8sc0ORPUVkp3io3J7DO7PK0QCXY=s160-c-k-c0x00ffffff-no-rj",
    },
    {
      name: "Valkyrae",
      url: "https://www.youtube.com/@Valkyrae",
      logo: "https://yt3.ggpht.com/-DBQKq2jcd6CcTu1O4B8Q4bR3bq_lbSb3Cwj5YRjK2sBYViqW37cxSD7GdfOEbmneFdFdy-f7w=s176-c-k-c0x00ffffff-no-rj-mo",
    },
    {
      name: "Shroud",
      url: "https://www.youtube.com/@Shroud",
      logo: "https://yt3.googleusercontent.com/ytc/AIdro_kv84HtHyu2amfByzSRAlp6tIXK7oiYSTdrpqZ9uHqwPd8=s176-c-k-c0x00ffffff-no-rj-mo",
    },
    {
      name: "Dr Disrespect",
      url: "https://www.youtube.com/@DrDisrespect",
      logo: "https://yt3.ggpht.com/_0_SuenjzMocr2OTOHbGjEin5FcHOy-vRroLcEZtj0WfUMEQXVQqbtEuRaa-tIewyjbAkffR=s176-c-k-c0x00ffffff-no-rj-mo",
    },
    {
      name: "BeastBoyShub",
      url: "https://www.youtube.com/@BeastBoyShub",
      logo: "https://yt3.googleusercontent.com/kKLvEl3-qLD8tS8uy7CXR0nZRNg41Tr0E6iZ5erM7FCdXyCvWfijBGz-jfn3Sm_bBGFc8BFpieU=s160-c-k-c0x00ffffff-no-rj",
    },
    {
      name: "LilyPichu",
      url: "https://www.youtube.com/@LilyPichu",
      logo: "https://yt3.googleusercontent.com/YkD_kVlwT7Uv8bzQ2Rj93_Z38hNkinTGGZ9RQah_w3hOqQAr3x2mPepkBddW38HJohqpb4YSrcg=s160-c-k-c0x00ffffff-no-rj",
    },
    {
      name: "TheRadBrad",
      url: "https://www.youtube.com/@TheRadBrad",
      logo: "https://yt3.googleusercontent.com/ytc/AIdro_mT4HHtSX-gR2mdZMq-YW7dyIc7lxY1utemKl2ahomnsW8=s160-c-k-c0x00ffffff-no-rj",
    },
    {
      name: "Mikecrack",
      url: "https://www.youtube.com/@Mikecrack",
      logo: "https://yt3.ggpht.com/fuDBmMf8vPJYWpka58XVVY9Y2g8C9XaZMQtEoFUY05VLFP-Dz64A_-n_XvWfUPb_W79NB3Xz5g=s176-c-k-c0x00ffffff-no-rj-mo",
    },
    {
      name: "Jess No Limit",
      url: "https://www.youtube.com/@JessNoLimit",
      logo: "https://yt3.googleusercontent.com/72jGosJaua07u-qA8mROVLpQNII_pdx6hKuBhu-jcxejUWnkfvpLxX5raPy79l7VTSSP3uUx2g=s160-c-k-c0x00ffffff-no-rj",
    },
    {
      name: "JuegaGerman",
      url: "https://www.youtube.com/@JuegaGerman",
      logo: "https://yt3.googleusercontent.com/vOsrLzWD4z1dbr470nEXydi3Kb55jW6YqcpQiq1LHyj9IvElga7zBHEfqFZvC26BRKmQimEbiA=s160-c-k-c0x00ffffff-no-rj",
    },
    {
      name: "Fernanfloo",
      url: "https://www.youtube.com/@Fernanfloo",
      logo: "https://yt3.googleusercontent.com/ytc/AIdro_krZWidm2ZqWJuhvJ-tD054MwbRpjzt6tubu0JFx0L6ZD0=s160-c-k-c0x00ffffff-no-rj",
    },
    {
      name: "TheDonato",
      url: "https://www.youtube.com/@TheDonato",
      logo: "https://yt3.googleusercontent.com/65e_P6PF3xfbp2YZhS-MPrBoWvGXlTpNalK6Y9wz_1Gz5fyEUnxzEWHFo_am0s784VumAIEV=s160-c-k-c0x00ffffff-no-rj",
    },
    {
      name: "VEGETTA777",
      url: "https://www.youtube.com/@VEGETTA777",
      logo: "https://yt3.googleusercontent.com/hHrNKyAZYQuWOeu4ta8bkV12DXH7ytaR1HOaC3MTUcT9rLjuut-AZs909zoC0s3pgCUJKUgGhw=s160-c-k-c0x00ffffff-no-rj",
    },
  ];

  return (
    <>
      <h1
        style={{
          fontSize: "2.5rem",
          textAlign: "center",
          margin: "30px 0 10px",
          color: "white",
          fontWeight: "bold",
          textShadow: "2px 2px 10px rgba(0,0,0,0.4)",
        }}
      >
        Discover Your Next Favorite Gaming Creator 🎮
      </h1>
      <p
        style={{
          textAlign: "center",
          color: "#D1D5DB",
          fontSize: "1.1rem",
          marginBottom: "20px",
        }}
      >
        Welcome to our creator spotlight! Click on a card to jump into the world
        of your favorite gaming personalities.
      </p>
      <div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
            gap: "20px",
            background: "linear-gradient(to bottom right, #111827, #000000)",
            padding: "20px",
            minHeight: "100vh",
            fontFamily: "Arial, sans-serif",
          }}
        >
          {channels.map((channel) => (
            <a
              key={channel.name}
              href={channel.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: "#1f2937",
                borderRadius: "12px",
                overflow: "hidden",
                textDecoration: "none",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                display: "block",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow =
                  "0 8px 20px rgba(128, 90, 213, 0.4)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div style={{ height: "200px", overflow: "hidden" }}>
                <img
                  src={channel.logo}
                  alt={channel.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>
              <div
                style={{
                  textAlign: "center",
                  padding: "10px",
                  fontWeight: "bold",
                  color: "white",
                  fontSize: "14px",
                }}
              >
                {channel.name}
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Page;
