

export default function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);
  // if(hour >= openHour && hour <= closeHour) alert("We're currently open!")
  // else alert("Sorry, we're closed");
  return (
    <div>
      <footer className="footer">{new Date().toLocaleTimeString()}. We are currently open!</footer>
    </div>
  );
  
}
