export default function Tours() {
  return (
    <main style={{padding:"40px"}}>

      <h1>Cebu Tours</h1>

      {/* ISLAND HOPPING */}
      <section>
        <h2>Cebu Island Hopping</h2>

        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px,1fr))",gap:"10px"}}>
          <img src="/images/island-hopping/1.jpg" style={{width:"100%"}}/>
          <img src="/images/island-hopping/2.jpg" style={{width:"100%"}}/>
          <img src="/images/island-hopping/3.jpg" style={{width:"100%"}}/>
        </div>

      </section>

      {/* KAWASAN */}
      <section>
        <h2>Kawasan Falls</h2>

        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px,1fr))",gap:"10px"}}>
          <img src="/images/kawasan/1.jpg" style={{width:"100%"}}/>
          <img src="/images/kawasan/2.jpg" style={{width:"100%"}}/>
        </div>

      </section>

      {/* OSLOB */}
      <section>
        <h2>Oslob Whale Shark</h2>

        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px,1fr))",gap:"10px"}}>
          <img src="/images/oslob/1.jpg" style={{width:"100%"}}/>
          <img src="/images/oslob/2.jpg" style={{width:"100%"}}/>
        </div>

      </section>

    </main>
  );
}