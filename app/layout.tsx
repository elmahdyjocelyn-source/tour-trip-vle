export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>

        <nav style={{
          display:"flex",
          justifyContent:"space-between",
          padding:"20px",
          background:"#0b3d91",
          color:"white"
        }}>
          <h2>Cebu Island Tours</h2>

          <div>
            <a href="/" style={{marginRight:"20px",color:"white"}}>Home</a>
            <a href="/tours" style={{marginRight:"20px",color:"white"}}>Tours</a>
            <a href="/contact" style={{color:"white"}}>Contact</a>
          </div>
        </nav>

        {children}

      </body>
    </html>
  );
}