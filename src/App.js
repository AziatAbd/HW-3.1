import './App.css';
import { Card } from './components/Card';

const data = [
  {
    title: 'Pen',
    price: 20,
    color: 'blue',
    date: new Date(2022, 7, 5),
  },
  {
    title: 'Paper',
    price: 20,
    color: 'green',
    date: new Date(2020, 3, 14),
  },
  {
    title: 'Apple',
    price: 20,
    color: 'red',
    date: new Date(2021, 7, 24),
  },
];

function App() {
  return (
    <div className="App">
      <Card
        title={data[0].title}
        price={data[0].price}
        color={data[0].color}
        date={data[0].date}
      />
      <Card
        title={data[1].title}
        price={data[1].price}
        color={data[1].color}
        date={data[1].date}
      />
      <Card
        title={data[2].title}
        price={data[2].price}
        color={data[2].color}
        date={data[2].date}
      />
    </div>
  );
}

export default App;
