export default function Home() {
  return (
    <>
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .fade-in-text {
          animation: fadeIn 3s ease-in;
        }
      `}</style>
      <div style={{width: "auto", height: "100vh", margin: 0, display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#131313"}}>
        <h1 className="fade-in-text" style={{"fontFamily": "sans-serif", color: "#fff"}}>Jorge é um nome muito bom pra um cachorro</h1>
      </div>
    </>
  )
}