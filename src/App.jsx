import { useState } from "react"

export default function App() {
  return (
    <div style={{ fontFamily:"serif", background:"#f5f0e8", minHeight:"100vh", display:"flex", alignItems:"center", justifyContent:"center" }}>
      <div style={{ textAlign:"center" }}>
        <h1 style={{ fontSize:48, color:"#4a3728" }}>Raftul Amintirilor</h1>
        <p style={{ color:"#8b6f4e", fontSize:18, fontStyle:"italic" }}>Cărți cu suflet · România 📚</p>
        <p style={{ color:"#b5652a", marginTop:20 }}>În curând...</p>
      </div>
    </div>
  )
}
