export default function Home() {
  return (
    <main style={{fontFamily:"Arial, sans-serif"}}>

      {/* HERO SECTION */}
      <section style={{
        backgroundImage:"url('https://images.unsplash.com/photo-1528181304800-259b08848526')",
        backgroundSize:"cover",
        backgroundPosition:"center",
        height:"500px",
        color:"white",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        textAlign:"center"
      }}>
        <div>
          <h1 style={{fontSize:"48px"}}>Explore Cebu & Bohol</h1>
          <p style={{fontSize:"20px"}}>Private Tours • Island Hopping • Airport Transfers</p>
          <button style={{
            padding:"12px 25px",
            fontSize:"18px",
            background:"#ff7a00",
            border:"none",
            color:"white",
            marginTop:"15px",
            borderRadius:"6px"
          }}>
            Book Your Tour
          </button>
        </div>
      </section>

      {/* TOUR PACKAGES */}
      <section style={{padding:"60px", textAlign:"center"}}>
        <h2>Popular Tour Packages</h2>

        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit, minmax(250px,1fr))",
          gap:"20px",
          marginTop:"30px"
        }}>

          <div>
            <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e" width="100%" />
            <h3>Cebu Island Hopping</h3>
            <p>Swim with tropical fish and explore beautiful islands.</p>
          </div>

          <div>
            <img src="https://images.unsplash.com/photo-1544735716-392fe2489ffa" width="100%" />
            <h3>Oslob Whale Shark Tour</h3>
            <p>Experience swimming with whale sharks in Oslob.</p>
          </div>

          <div>
            <img src="https://images.unsplash.com/photo-1587502537104-9f40bce1bde2" width="100%" />
            <h3>Bohol Countryside Tour</h3>
            <p>Visit Chocolate Hills, Tarsier Sanctuary and Loboc River.</p>
          </div>

        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section style={{background:"#f5f5f5", padding:"60px", textAlign:"center"}}>
        <h2>Why Choose Us</h2>

        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit, minmax(200px,1fr))",
          gap:"20px",
          marginTop:"30px"
        }}>
          <div>
            <h3>🚐 Private Tours</h3>
            <p>Comfortable vehicles with professional drivers.</p>
          </div>

          <div>
            <h3>⭐ Top Rated</h3>
            <p>Trusted by hundreds of happy travelers.</p>
          </div>

          <div>
            <h3>💬 24/7 Support</h3>
            <p>Book anytime through WhatsApp or Messenger.</p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section style={{padding:"60px", textAlign:"center"}}>
        <h2>Book Your Adventure</h2>
        <p>Contact us today to reserve your Cebu or Bohol tour.</p>

        <button style={{
          padding:"12px 25px",
          fontSize:"18px",
          background:"#25D366",
          border:"none",
          color:"white",
          borderRadius:"6px"
        }}>
          WhatsApp Booking
        </button>
      </section>

    </main>
  )
}