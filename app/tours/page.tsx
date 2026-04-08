const tours = [
  {
    name: "Sirao Flower Garden",
    images: [
      "/images/sirao/sirao-1.jpg",
      "/images/sirao/sirao-2.jpg",
      "/images/sirao/sirao-3.jpg"
    ]
  },
  {
    name: "Whale Shark Dive",
    images: [
      "/images/whaleshark-dive/whaleshark-dive.jpg"
    ]
  },
  {
    name: "Moalboal Sardine Dive",
    images: [
      "/images/moalboal-sardine-tour/sardine-dive.jpg"
    ]
  },
  {
    name: "Thousand Roses",
    images: [
      "/images/thousand-roses/thousand-roses.jpg"
    ]
  }
];
=======
"use client";
import { useState } from "react";

export default function Tours() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const Gallery = ({ images }: { images: string[] }) => (
    <div style={{
      display:"grid",
      gridTemplateColumns:"repeat(auto-fit, minmax(200px,1fr))",
      gap:"10px"
    }}>
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          style={{width:"100%", cursor:"pointer", borderRadius:"8px"}}
          onClick={() => setSelectedImage(img)}
        />
      ))}
    </div>
  );

  return (
    <main style={{padding:"40px"}}>

      <h1>Cebu Tours</h1>

      {/* Island Hopping */}
      <section>
        <h2>Cebu Island Hopping</h2>
        <Gallery images={[
          "/images/island-hopping/1.jpg",
          "/images/island-hopping/2.jpg",
          "/images/island-hopping/3.jpg"
        ]}/>
      </section>

      {/* Kawasan */}
      <section>
        <h2>Kawasan Falls</h2>
        <Gallery images={[
          "/images/kawasan/1.jpg",
          "/images/kawasan/2.jpg"
        ]}/>
      </section>

      {/* Oslob */}
      <section>
        <h2>Oslob Whale Shark</h2>
        <Gallery images={[
          "/images/oslob/1.jpg",
          "/images/oslob/2.jpg"
        ]}/>
      </section>

      {/* LIGHTBOX */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          style={{
            position:"fixed",
            top:0,
            left:0,
            width:"100%",
            height:"100%",
            background:"rgba(0,0,0,0.9)",
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            zIndex:1000
          }}
        >
          <img
            src={selectedImage}
            style={{maxWidth:"90%", maxHeight:"90%", borderRadius:"10px"}}
          />
        </div>
      )}

    </main>
  );
}
>>>>>>> 705d825764c9271ce9da5fc56de540bc902d0f49
