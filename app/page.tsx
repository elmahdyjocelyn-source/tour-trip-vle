export default function Home() {
  return (
    <main style={{fontFamily:"Arial",padding:"0",margin:"0"}}>

      {/* Navigation */}
      <nav style={{display:"flex",justifyContent:"space-between",padding:"20px",background:"#0b3d91",color:"white"}}>
        <h2>Cebu Island Tours</h2>
        <div>
          <a href="#" style={{margin:"10px",color:"white"}}>Home</a>
          <a href="#" style={{margin:"10px",color:"white"}}>Tours</a>
          <a href="#" style={{margin:"10px",color:"white"}}>Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{textAlign:"center",padding:"60px",background:"#e6f2ff"}}>
        <h1>Explore Beautiful Cebu</h1>
        <p>Discover waterfalls, island hopping, and whale sharks</p>
      </section>

      {/* Tour Photos */}
      <section style={{padding:"40px",textAlign:"center"}}>
        <h2>Popular Cebu Tours</h2>

        <div style={{display:"flex",gap:"20px",justifyContent:"center",flexWrap:"wrap"}}>

          <div>
            <img src="https://images.unsplash.com/photo-1605538883669-825dbe96c5c5" width="300"/>
            <p>Oslob Whale Shark</p>
          </div>

          <div>
            <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e" width="300"/>
            <p>Cebu Island Hopping</p>
          </div>

          <div>
            <img src="https://images.unsplash.com/photo-1526779259212-939e64788e3c" width="300"/>
            <p>Kawasan Falls Adventure</p>
          </div>

        </div>
      </section>

    </main>
  );
}