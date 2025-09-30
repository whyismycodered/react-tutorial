import { useState } from 'react'
import './App.css'

// Profile data array
const profiles = [
  {
    id: 1,
    name: "Alicia Kelsey O. Reyes",
    image: "https://scontent.fmnl9-4.fna.fbcdn.net/v/t39.30808-6/505642450_4089663797944120_8748242569728211651_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGQL409gOL-HjPiUxdIkxSAyKPfCAlgjsTIo98ICWCOxOj5viwkFqeb18fA_eJNAbAlmHK_sxVAAYb7KrBhkfDA&_nc_ohc=hp1tpvCbKSoQ7kNvwG2uoEA&_nc_oc=AdnSqDMcPQZwWpeHe4uziAdvTZlKylBpKbLa2KNSclUo_uNQw7LrIAikweLkqkG1g18&_nc_zt=23&_nc_ht=scontent.fmnl9-4.fna&_nc_gid=O4wgAzKjDBvCWW6Yj1EdnQ&oh=00_AfblH84c1Cn0bMDBkn6fv7GCmHC4DGpyw1xQ9MMCuSfqsQ&oe=68E1492E",
    description: "Alicia Kelsey O. Reyes is a dedicated student known for her passion for learning and her collaborative spirit. She excels in academic pursuits and actively contributes to group projects, demonstrating leadership and teamwork."
  },
  {
    id: 2,
    name: "Christian Paulo Argete",
    image: "https://scontent.fmnl9-6.fna.fbcdn.net/v/t39.30808-6/537267020_4215682095418241_5359867385706555068_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeF4ggfDa7klLMCxAbi9N7f2QvfeorpRCNBC996iulEI0Eui1_ueh7EgVSK0h_3I7vP7Ue8df9xFtw8wPqFfhQzc&_nc_ohc=EIt1jL4M-pUQ7kNvwH_Z8S7&_nc_oc=AdmNEskMgORsWELhqDfLZudReFY5WrBDEcoh7KDZgJbuh6FFNFLpc3BUDsk_eHZj-iI&_nc_zt=23&_nc_ht=scontent.fmnl9-6.fna&_nc_gid=LD8zInmNQuygFAJVqBVc8g&oh=00_AfaRj2M3JqlxyzXGaK1TJ3NJPgw3KJY8uBSshq8lC-FoTg&oe=68E16ACA",
    description: "Christian Paulo Argete is a skilled software developer with a strong background in web development and a passion for creating user-friendly applications. He is known for his attention to detail and his ability to work effectively in team settings."
  },
  {
    id: 3,
    name: "Arron Acasio",
    image: "https://scontent.fmnl9-4.fna.fbcdn.net/v/t39.30808-6/476158204_2191354557945847_3162373267853935530_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGCejmpE8vwdzb9PMYj9rzguRscDUM_haa5GxwNQz-FpslRZNSXkfleI_FcK1dFc6LO0giQvDHs61PjLENcD7_c&_nc_ohc=4DRfpNtrCCQQ7kNvwFuKmVp&_nc_oc=AdkZemufrMn68zifW0HzvWpyQAH1OfeRwvHqJHvZ0qriHmMDaBRZDsSpiKaLP8cW5s8&_nc_zt=23&_nc_ht=scontent.fmnl9-4.fna&_nc_gid=v01Jg1vs24xBEODvlKRZdg&oh=00_AfZhE2yfZiP91O2G8vnnB07TV0dNa1QtFnQEEwBpnsdquw&oe=68E159A6",
    description: "Arron Acasio is a talented graphic designer with a keen eye for aesthetics and a passion for creating visually stunning designs. He has a strong background in both digital and print design, and is known for his ability to bring ideas to life through his artwork."
  },
  {
    id: 4,
    name: "Sahara Clear Nedia",
    image: "https://scontent.fmnl9-3.fna.fbcdn.net/v/t39.30808-6/487812131_2329213370805537_7504087213890820062_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeFiO4UhaKmEyY4Q4-0GjZaM7JxAeKv3bT_snEB4q_dtP3CTFmRZG17wjEvfQyVd7JBcAtvBWKzHKPrW_skUtvyJ&_nc_ohc=1y_-6X4gtCQQ7kNvwFonupk&_nc_oc=AdkvXorsjPTmjTA_M9IktveqlMU92rvdqCwOl7yYFQ410wd-Q5CxXhyZdWK__nG5o3c&_nc_zt=23&_nc_ht=scontent.fmnl9-3.fna&_nc_gid=_NIvuQDgwoBk8FVpgEpUqQ&oh=00_AfYe6RwMyySSbwan-dHAgt_-ibS2bwlIqoqizvFYrI2UHw&oe=68E14E3C",
    description: "Sahara Clear Nedia is a prominent environmental activist known for her efforts in promoting sustainable practices and raising awareness about climate change. She has been involved in various initiatives aimed at protecting natural resources and advocating for policy changes."
  },
  {
    id: 5,
    name: "Tristan Trinanes",
    image: "https://scontent.fmnl9-3.fna.fbcdn.net/v/t39.30808-6/486604103_2332590603779840_7850716192100491354_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeEJIL6gJkpaUXMjZ6HrdQAUwr_QVnXzzFnCv9BWdfPMWa-lKzsUDvMarz_qfAROXvYQp4K1gSf9JIhz8zjftpsL&_nc_ohc=U6bcVexOd8QQ7kNvwFEop7u&_nc_oc=AdntbFvRcEvDQizD8FZZAaM_pB4K5xmfYsM_0NDbu7LU9-hf3JWZzjdAHDM2Hgxy500&_nc_zt=23&_nc_ht=scontent.fmnl9-3.fna&_nc_gid=3LdST02Umv-7Zc1Hhtzfuw&oh=00_AfbUbhI8pb6QgcL2hUpeULae6S8EEdIkFKHdUAv-S0tR7Q&oe=68E1538E",
    description: "Tristan Trinanes is a professional crypto trader who's portfolio is as outstanding as his poise. He can work collaboratively in team environments."
  }
];

function Profile({ profile }) {
  return (
    <div className="profile-container">
      <img
        src={profile.image}
        alt={profile.name}
        className="profile-image"
      />
    </div>
  );
}

function App() {
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);
  const currentProfile = profiles[currentProfileIndex];

  const goToNextProfile = () => {
    setCurrentProfileIndex((prevIndex) => 
      prevIndex === profiles.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPreviousProfile = () => {
    setCurrentProfileIndex((prevIndex) => 
      prevIndex === 0 ? profiles.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <h1 className="app-title">Profile Slideshow</h1>
      <div className="app-container">
        <div className="slideshow-container">
          <button className="nav-button prev-button" onClick={goToPreviousProfile}>
            ‹
          </button>
          
          <div className="content-container">
            <Profile profile={currentProfile} />
            <div className="profile-info">
              <h1 className="profile-name">{currentProfile.name}</h1>
              <p className="profile-description">{currentProfile.description}</p>
            </div>
          </div>
          
          <button className="nav-button next-button" onClick={goToNextProfile}>
            ›
          </button>
        </div>
        
        <div className="profile-counter">
          {currentProfileIndex + 1} of {profiles.length}
        </div>
      </div>
    </>
  )
}

export default App
