import Navbar from "../components/navigation/navbar";

export default function MainLayout({ children }) {
	return (
	  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
		<Navbar />
		<div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
		  {children}
		</div>
	  </div>
	);
  }
  



