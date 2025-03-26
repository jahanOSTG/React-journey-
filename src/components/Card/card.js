
const todoTitle = "Hello World";
const todoData = "Hi, I am Faria Jahan Janie.";
const date = new Date();
const dateName = date.getDate();
const monthName = date.getMonth() + 1; // Fix: Add 1 to get the correct month number
const currentYear = date.getFullYear();

// Inline CSS
// const headingStyle = {
//   backgroundColor: "purple", // Fix: Use backgroundColor instead of backGround
//   color: "white",
//   textAlign: "center", // Fix: Use textAlign instead of textLine
//   padding: "15px"
// }
function Card() {
  return (
    <div className='card'>
      <h3 className='cardTitle'>{todoTitle}</h3>
      <p className='carddesc'>{todoData}</p>
      <p className='cardfooter'>{dateName + "/" + monthName + "/" + currentYear}</p>
    </div>
  );
}

export default Card;