import React, { useState } from "react";

export default function App() {
  const [page, setPage] = useState("home");
  const phone = "+2349165493552";

  // Helper to open WhatsApp with pre-filled message
  const getWhatsAppLink = (itemName, price) => {
    const text = encodeURIComponent(
      `Hello Cephas Fresh & Cold, I want to order ${itemName} (${price}).`
    );
    return `https://wa.me/${phone}?text=${text}`;
  };

  return (
    <div
      style={{
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        backgroundColor: "#f8f9fa",
        color: "#333",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* FontAwesome Icons */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />

      {/* Header */}
      <header
        style={{
          backgroundColor: "#0f172a",
          color: "#fff",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem 5%",
          position: "sticky",
          top: 0,
          zIndex: 100,
        }}
      >
        <div
          onClick={() => setPage("home")}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            fontSize: "1.2rem",
            fontWeight: "bold",
            color: "#38bdf8",
            cursor: "pointer",
          }}
        >
          <i className="fa-solid fa-snowflake"></i>
          <span>Cephas Fresh & Cold</span>
        </div>
        <nav style={{ display: "flex", gap: "20px", alignItems: "center" }}>
          <button
            onClick={() => setPage("home")}
            style={{
              background: "none",
              border: "none",
              color: "#fff",
              cursor: "pointer",
              fontSize: "1rem",
            }}
          >
            Home
          </button>
          <button
            onClick={() => setPage("products")}
            style={{
              background: "none",
              border: "none",
              color: "#fff",
              cursor: "pointer",
              fontSize: "1rem",
            }}
          >
            Products
          </button>
          <button
            onClick={() => setPage("about")}
            style={{
              background: "none",
              border: "none",
              color: "#fff",
              cursor: "pointer",
              fontSize: "1rem",
            }}
          >
            About Us
          </button>
          <button
            onClick={() => setPage("contact")}
            style={{
              backgroundColor: "#38bdf8",
              color: "#0f172a",
              padding: "6px 14px",
              borderRadius: "4px",
              fontWeight: "bold",
              border: "none",
              cursor: "pointer",
            }}
          >
            Contact / Order
          </button>
        </nav>
      </header>

      {/* Hero Banner */}
      <section
        style={{
          background:
            "linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.8)), url('https://images.unsplash.com/photo-1588566411975-d3f66c9fca9e?auto=format&fit=crop&w=1200&q=80') center/cover",
          color: "white",
          textAlign: "center",
          padding: "70px 20px",
        }}
      >
        <h1 style={{ fontSize: "2.2rem", marginBottom: "15px" }}>
          Fresh, Clean & Quality Frozen Foods
        </h1>
        <p
          style={{
            fontSize: "1.05rem",
            maxWidth: "600px",
            margin: "0 auto 20px auto",
            color: "#cbd5e1",
          }}
        >
          Meat and sea food specialist in Benin City. Delivering top-grade
          products straight to your doorstep. Wholesale & retail available!
        </p>
        <button
          onClick={() => setPage("products")}
          style={{
            backgroundColor: "#38bdf8",
            color: "#0f172a",
            padding: "10px 22px",
            borderRadius: "5px",
            border: "none",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          View Our Product Categories
        </button>
      </section>

      {/* MAIN CONTENT AREA */}
      <main
        style={{
          padding: "40px 5%",
          maxWidth: "1200px",
          margin: "0 auto",
          flex: 1,
          width: "100%",
        }}
      >
        {/* PAGE 1: HOME / CATEGORIES */}
        {page === "home" && (
          <div>
            <h2
              style={{
                fontSize: "2rem",
                textAlign: "center",
                marginBottom: "10px",
                color: "#0f172a",
              }}
            >
              Our Available Product Categories
            </h2>
            <p
              style={{
                textAlign: "center",
                color: "#64748b",
                marginBottom: "40px",
              }}
            >
              Click on any category below to view detailed items and prices
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "30px",
              }}
            >
              {/* Chicken Category Card */}
              <div
                onClick={() => setPage("chicken")}
                style={{
                  background: "white",
                  borderRadius: "8px",
                  border: "1px solid #e2e8f0",
                  overflow: "hidden",
                  cursor: "pointer",
                  boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
                  transition: "transform 0.2s",
                }}
              >
                <div style={{ height: "180px", overflow: "hidden" }}>
                  <img
                    src="https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&w=600&q=80"
                    alt="Chicken"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div style={{ padding: "20px" }}>
                  <h3
                    style={{
                      fontSize: "1.2rem",
                      marginBottom: "8px",
                      color: "#1e293b",
                    }}
                  >
                    Chicken (Frozen Chicken)
                  </h3>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: "#64748b",
                      marginBottom: "20px",
                    }}
                  >
                    Whole chicken, wings, laps, breast, gizzard, turkey, and
                    smoked chicken.
                  </p>
                  <span
                    style={{
                      display: "inline-block",
                      backgroundColor: "#0f172a",
                      color: "white",
                      padding: "8px 16px",
                      borderRadius: "5px",
                      fontWeight: "bold",
                      fontSize: "0.9rem",
                    }}
                  >
                    View Products &rarr;
                  </span>
                </div>
              </div>

              {/* Fish Category Card */}
              <div
                onClick={() => setPage("fish")}
                style={{
                  background: "white",
                  borderRadius: "8px",
                  border: "1px solid #e2e8f0",
                  overflow: "hidden",
                  cursor: "pointer",
                  boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
                  transition: "transform 0.2s",
                }}
              >
                <div style={{ height: "180px", overflow: "hidden" }}>
                  <img
                    src="https://i.postimg.cc/k5J2VxV3/Screenshot-2026-10-12-2-19-37-PM.png"
                    alt="Fish"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div style={{ padding: "20px" }}>
                  <h3
                    style={{
                      fontSize: "1.2rem",
                      marginBottom: "8px",
                      color: "#1e293b",
                    }}
                  >
                    Fish (Frozen Fresh Fish)
                  </h3>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: "#64748b",
                      marginBottom: "20px",
                    }}
                  >
                    Cece fish, Melusa, Croaker, Herring, Pula fish, Scubia /
                    Titus.
                  </p>
                  <span
                    style={{
                      display: "inline-block",
                      backgroundColor: "#0f172a",
                      color: "white",
                      padding: "8px 16px",
                      borderRadius: "5px",
                      fontWeight: "bold",
                      fontSize: "0.9rem",
                    }}
                  >
                    View Products &rarr;
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* PAGE 2: PRODUCTS OVERVIEW MENU */}
        {page === "products" && (
          <div>
            <h2
              style={{
                fontSize: "2rem",
                textAlign: "center",
                marginBottom: "10px",
                color: "#0f172a",
              }}
            >
              Select a Category
            </h2>
            <p
              style={{
                textAlign: "center",
                color: "#64748b",
                marginBottom: "40px",
              }}
            >
              Choose what you would like to buy today
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "20px",
                flexWrap: "wrap",
              }}
            >
              <button
                onClick={() => setPage("chicken")}
                style={{
                  backgroundColor: "#2563eb",
                  color: "white",
                  padding: "15px 30px",
                  borderRadius: "8px",
                  border: "none",
                  fontSize: "1.1rem",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                <i className="fa-solid fa-drumstick-bite"></i> Chicken Products
              </button>
              <button
                onClick={() => setPage("fish")}
                style={{
                  backgroundColor: "#2563eb",
                  color: "white",
                  padding: "15px 30px",
                  borderRadius: "8px",
                  border: "none",
                  fontSize: "1.1rem",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                <i className="fa-solid fa-fish"></i> Fish & Seafood Products
              </button>
            </div>
          </div>
        )}

        {/* PAGE 3: CHICKEN PRODUCTS LIST */}
        {page === "chicken" && (
          <div>
            <button
              onClick={() => setPage("home")}
              style={{
                background: "none",
                border: "none",
                color: "#2563eb",
                fontWeight: "bold",
                cursor: "pointer",
                marginBottom: "20px",
                fontSize: "1rem",
              }}
            >
              &larr; Back to Categories
            </button>
            <h2
              style={{
                fontSize: "2rem",
                marginBottom: "5px",
                color: "#0f172a",
              }}
            >
              Chicken Products
            </h2>
            <p style={{ color: "#64748b", marginBottom: "30px" }}>
              All chicken items in stock. Click WhatsApp to order instantly.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "20px",
              }}
            >
              {[
                {
                  name: "Whole Chicken[body]",
                  price: "₦6,000/Kilo",
                  desc: "Cleanly processed whole frozen chicken",
                  img: "https://i.postimg.cc/W17LtpJt/240-F-2114484827-Svtah-OPK8z2t-GUPeh-Xmlse-P8XMkyxg-DH.jpg",
                },
                {
                  name: "Chicken Wings",
                  price: "₦8,000/Kilo",
                  desc: "Fresh frozen chicken wings",
                  img: "https://i.postimg.cc/pTyGBRcP/Gemini-Generated-Image-5jj1p5jj1p5jj1p5.jpg",
                },
                {
                  name: "Chicken Laps (Soft)",
                  price: "₦6,500/Kilo",
                  desc: "Tender and juicy chicken laps",
                  img: "https://i.postimg.cc/XvhjL770/240-F-1282660495-iid0b-Ie-Nilr-Bms-I5g-SXz-EQe-Ee-YEa-Ag-PA.jpg",
                },
                {
                  name: "Strong Chicken Lap",
                  price: "₦7,500/Kilo",
                  desc: "Firm textured chicken laps",
                  img: "https://i.postimg.cc/nLmM9DpZ/Gemini-Generated-Image-gwnf76gwnf76gwnf.jpg",
                },
                {
                  name: "Chicken Feet",
                  price: "₦3,000/piece",
                  desc: "Cleaned and well-packaged chicken feet",
                  img: "https://i.postimg.cc/D00Ts9L5/Gemini-Generated-Image-6lqkcf6lqkcf6lqk.jpg",
                },
                {
                  name: "Turkey",
                  price: "₦10,500/Kilo",
                  desc: "Quality frozen turkey parts",
                  img: "https://i.postimg.cc/q7B446q3/Gemini-Generated-Image-p0jem2p0jem2p0je.jpg",
                },
                {
                  name: "Chicken Breast",
                  price: "₦8,000/Kilo",
                  desc: "Fleshy, boneless chicken breast cuts",
                  img: "https://i.postimg.cc/Dfbqh8tc/image.png",
                },
                {
                  name: "Smoked Chicken",
                  price: "₦9,000/kilo",
                  desc: "Flavorful, nicely smoked chicken",
                  img: "https://i.postimg.cc/T3PsCV4Z/Gemini-Generated-Image-zd111hzd111hzd11.jpg",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  style={{
                    background: "white",
                    borderRadius: "8px",
                    border: "1px solid #e2e8f0",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ height: "150px", overflow: "hidden" }}>
                    <img
                      src={item.img}
                      alt={item.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div style={{ padding: "15px" }}>
                    <h3
                      style={{
                        fontSize: "1.1rem",
                        marginBottom: "6px",
                        color: "#1e293b",
                      }}
                    >
                      {item.name}
                    </h3>
                    <p
                      style={{
                        fontWeight: "bold",
                        color: "#2563eb",
                        marginBottom: "6px",
                        fontSize: "1.1rem",
                      }}
                    >
                      {item.price}
                    </p>
                    <p
                      style={{
                        fontSize: "0.85rem",
                        color: "#64748b",
                        marginBottom: "15px",
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                  <div style={{ padding: "0 15px 15px 15px" }}>
                    <a
                      href={getWhatsAppLink(item.name, item.price)}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        display: "block",
                        textAlign: "center",
                        backgroundColor: "#25d366",
                        color: "white",
                        padding: "10px",
                        borderRadius: "5px",
                        textDecoration: "none",
                        fontWeight: "bold",
                      }}
                    >
                      <i className="fa-brands fa-whatsapp"></i> Order on
                      WhatsApp
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PAGE 4: FISH PRODUCTS LIST */}
        {page === "fish" && (
          <div>
            <button
              onClick={() => setPage("home")}
              style={{
                background: "none",
                border: "none",
                color: "#2563eb",
                fontWeight: "bold",
                cursor: "pointer",
                marginBottom: "20px",
                fontSize: "1rem",
              }}
            >
              &larr; Back to Categories
            </button>
            <h2
              style={{
                fontSize: "2rem",
                marginBottom: "5px",
                color: "#0f172a",
              }}
            >
              Fish & Seafood Products
            </h2>
            <p style={{ color: "#64748b", marginBottom: "30px" }}>
              Fresh frozen fish stock. Click WhatsApp to order instantly.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "20px",
              }}
            >
              {[
                {
                  name: "Cece Fish",
                  price: "₦3,500",
                  desc: "Freshly stocked frozen fish",
                  img: "https://i.postimg.cc/7hHVJVzJ/Gemini-Generated-Image-vgicdcvgicdcvgic.jpg",
                },
                {
                  name: "Cece Kilo",
                  price: "₦5,500 / kilo",
                  desc: "Sold per kilogram",
                  img: "https://i.postimg.cc/DyXF5gkv/240-F-1801845932-7v-Ld-ZBf0Ab-MS4SDhjwo-CURYqar5elafo.jpg",
                },
                {
                  name: "Melusa",
                  price: "₦5,500 / kilo",
                  desc: "Quality frozen Melusa fish",
                  img: "https://i.postimg.cc/FstVkrhq/240-F-412454004-m-H8F0poh-Io-GIqp-Uk-Q3MQRFHpi4Kt8R7k.jpg",
                },
                {
                  name: "Croaker",
                  price: "₦6,500 / kilo",
                  desc: "Fresh Croaker fish",
                  img: "https://i.postimg.cc/zBfp27dy/Screenshot-2026-10-12-2-36-01-PM.png",
                },
                {
                  name: "Herring",
                  price: "₦1,000",
                  desc: "Clean frozen Herring fish",
                  img: "https://i.postimg.cc/3R3ryDdv/240-F-550475721-e-UX9i-ESSo99o-Kr-Ba0i-GAyxi-GKRg4Ye-Vs.jpg",
                },
                {
                  name: "Pala fish",
                  price: "₦1,000",
                  desc: "Fresh Pula fish stock",
                  img: "https://i.postimg.cc/sxLjwN4L/Screenshot-2026-10-12-2-36-38-PM.png",
                },
                {
                  name: "Scubia / Titus",
                  price: "₦6,500",
                  desc: "Fresh frozen Scubia / Titus fish",
                  img: "https://i.postimg.cc/8PsBcfFn/Screenshot-2026-10-12-2-36-50-PM.png",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  style={{
                    background: "white",
                    borderRadius: "8px",
                    border: "1px solid #e2e8f0",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ height: "150px", overflow: "hidden" }}>
                    <img
                      src={item.img}
                      alt={item.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div style={{ padding: "15px" }}>
                    <h3
                      style={{
                        fontSize: "1.1rem",
                        marginBottom: "6px",
                        color: "#1e293b",
                      }}
                    >
                      {item.name}
                    </h3>
                    <p
                      style={{
                        fontWeight: "bold",
                        color: "#2563eb",
                        marginBottom: "6px",
                        fontSize: "1.1rem",
                      }}
                    >
                      {item.price}
                    </p>
                    <p
                      style={{
                        fontSize: "0.85rem",
                        color: "#64748b",
                        marginBottom: "15px",
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                  <div style={{ padding: "0 15px 15px 15px" }}>
                    <a
                      href={getWhatsAppLink(item.name, item.price)}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        display: "block",
                        textAlign: "center",
                        backgroundColor: "#25d366",
                        color: "white",
                        padding: "10px",
                        borderRadius: "5px",
                        textDecoration: "none",
                        fontWeight: "bold",
                      }}
                    >
                      <i className="fa-brands fa-whatsapp"></i> Order on
                      WhatsApp
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PAGE 5: ABOUT US */}
        {page === "about" && (
          <div
            style={{
              maxWidth: "800px",
              margin: "0 auto",
              background: "white",
              padding: "30px",
              borderRadius: "8px",
              border: "1px solid #e2e8f0",
              lineHeight: "1.8",
            }}
          >
            <h2
              style={{
                fontSize: "2rem",
                marginBottom: "20px",
                color: "#0f172a",
              }}
            >
              About Cephas Fresh & Cold
            </h2>
            <p>
              <strong>Cephas Fresh & Cold</strong> is your trusted meat and sea
              food specialist based in Benin City. We offer top-grade frozen
              chicken, fish, turkey, and seafood products straight to your
              doorstep.
            </p>
            <p style={{ marginTop: "15px" }}>
              We cater to both wholesale and retail buyers, ensuring that all
              items are stored and delivered under strict hygienic standards.
            </p>
            <button
              onClick={() => setPage("home")}
              style={{
                marginTop: "25px",
                backgroundColor: "#0f172a",
                color: "white",
                padding: "10px 20px",
                borderRadius: "5px",
                border: "none",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Back to Home
            </button>
          </div>
        )}

        {/* PAGE 6: CONTACT */}
        {page === "contact" && (
          <div
            style={{
              maxWidth: "700px",
              margin: "0 auto",
              background: "white",
              padding: "30px",
              borderRadius: "8px",
              border: "1px solid #e2e8f0",
              textAlign: "center",
            }}
          >
            <h2
              style={{
                fontSize: "2rem",
                marginBottom: "15px",
                color: "#0f172a",
              }}
            >
              Get in Touch With Us
            </h2>
            <p style={{ color: "#64748b", marginBottom: "30px" }}>
              Ready to order or have questions? Reach out directly!
            </p>

            <div style={{ fontSize: "1.1rem", marginBottom: "15px" }}>
              <i
                className="fa-solid fa-location-dot"
                style={{ color: "#2563eb", marginRight: "10px" }}
              ></i>{" "}
              <strong>Location:</strong> Benin City, Edo State, Nigeria
            </div>
            <div style={{ fontSize: "1.1rem", marginBottom: "25px" }}>
              <i
                className="fa-solid fa-phone"
                style={{ color: "#2563eb", marginRight: "10px" }}
              ></i>{" "}
              <strong>Phone / WhatsApp:</strong> +234 916 549 3552
            </div>

            <a
              href={`https://wa.me/${phone}`}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-block",
                backgroundColor: "#25d366",
                color: "white",
                padding: "12px 25px",
                borderRadius: "5px",
                textDecoration: "none",
                fontWeight: "bold",
                fontSize: "1.1rem",
              }}
            >
              <i className="fa-brands fa-whatsapp"></i> Chat on WhatsApp Now
            </a>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: "#0f172a",
          color: "#94a3b8",
          textAlign: "center",
          padding: "25px",
          fontSize: "0.9rem",
          marginTop: "40px",
        }}
      >
        <p>
          &copy; 2026 Cephas Fresh & Cold. Benin City, Nigeria. Phone: +234 916
          549 3552
        </p>
      </footer>
    </div>
  );
}
