import './Card.css';
import Date from './Date';

export function Card(props) {
  return (
    <div className="container">
      <div className="Card">
        <div>{props.title}</div>
        <div>{props.price}</div>
        <div>{props.color}</div>
        <Date date={props.date}></Date>
      </div>
    </div>
  );
}

// export default Card
