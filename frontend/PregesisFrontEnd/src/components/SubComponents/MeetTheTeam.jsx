import React from 'react'

const MeetTheTeam = ({screenSize}) => {
  return (
    <div className='About_landing_page' style={{
                    marginLeft: "8vw",
                    
                }}>
        <p className='main_title_landing_page' >Meet The Team</p>
        <div style={{
            display:'flex',
            justifyContent:  `${screenSize >900 ? "space-around" :"center"}`,
            
            marginTop:"5vh",
            flexDirection:`${screenSize > 900 ? "row":"column"}`
        }}>
            <Team_member screenSize={screenSize} name={"Charbel El Haddad"} role={"Lead Software Engineer"} github={"https://github.com/CHCICH"} image={"/charbel_photo.png"}/>
            <Team_member screenSize={screenSize} name={"Ali Sobh"} role={"Lead Software Engineer"} github={"https://github.com/Alouchis"} image={"/ali_photo.png"}/>
            <Team_member screenSize={screenSize} name={"Joe Germany"} role={"ML Expert"} github={"https://github.com/joeGermany"} image={"/Joe_photo.png"}/>

        </div>
    </div>
  )
}

const Team_member = ({name, role, github,image,screenSize}) =>{

    return (
        <div style={{
            color:"black",
            width: `${screenSize >900 ? "20vw":"60vw"}`,
            height: "45vh",
            backgroundColor: "#D9D9D9",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "12px",
            padding: "1rem",
            marginTop:"4vh",

        }}>
            <img
                src={image}
                alt={name}
                style={{
                    margin:"2vh",
                    width: `${screenSize >900 ? "15vw":"40vw"}`,

                    height: "30vh",
                    borderRadius: "30px",
                    objectFit: "cover",
                    backgroundColor: "#fff",
                    marginBottom: "0.7rem"
                }}
            />
            <div style={{ display: "flex", alignItems: "center", width: "100%", justifyContent: "center"}}></div>
                <span style={{ color: "#fff", fontWeight: "bold", fontSize: "1.1rem",color:"black" }}>{name}</span>
            <span style={{ color: "#eee", fontSize: "0.95rem", marginTop: "0.3rem",color:"black" }}>{role}</span>
                <a href={github} target="_blank" rel="noopener noreferrer" style={{ marginLeft: "0.5rem" }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="0" style={{ verticalAlign: "middle" }}>
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.113.793-.262.793-.582 0-.287-.012-1.243-.017-2.252-3.338.726-4.042-1.415-4.042-1.415-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.606-2.665-.304-5.466-1.332-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.5 11.5 0 0 1 3.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.553 3.297-1.23 3.297-1.23.654 1.653.243 2.873.12 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.804 5.625-5.475 5.921.43.372.823 1.104.823 2.226 0 1.606-.015 2.898-.015 3.293 0 .322.192.699.8.58C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                </a>
            </div>
            )
    
}

export default MeetTheTeam