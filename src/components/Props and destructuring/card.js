const date = new Date();
const dateName = date.getDate();
const monthName = date.getMonth() + 1; // Fix: Add 1 to get the correct month number
const currentYear = date.getFullYear();

function Card(props) {
  const{titleText,descText}=props;
  return (
    <div className='card'>
      <h3 className='cardTitle'>{props.titleText}</h3>
      <p className='cardDesc'>{props.descText}</p> {/* Fixed the closing tag */}
      <p className='cardFooter'>{dateName + "/" + monthName + "/" + currentYear}</p>
    </div>
  );
}

export default Card;
