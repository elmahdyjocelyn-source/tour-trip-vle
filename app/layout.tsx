export const metadata = {
  title: "Tour Trip VLE",
  description: "Cebu and Bohol Private Tours",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif" }}>

        {/* NAVBAR */}
        <nav
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "15px 40px",
            background: "#ffffff",
            borderBottom: "1px solid #eee",
            position: "sticky",
            top: 0,
            zIndex: 1000,
          }}
        >
          <h2 style={{ margin: 0 }}>🌴 Tour Trip VLE</h2>

          <div style={{ display: "flex", gap: "25px" }}>
            <a href="/" style={{ textDecoration: "none", color: "#333" }}>
              Home
            </a>
            <a href="#tours" style={{ textDecoration: "none", color: "#333" }}>
              Tours
            </a>
            <a href="#contact" style={{ textDecoration: "none", color: "#333" }}>
              Contact
            </a>
          </div>
        </nav>

        {children}

      </body>
    </html>
  );
}