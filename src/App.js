import CatalogSliderCard from './components/CatalogSliderCard/CatalogSliderCard';
import Title from './UI/Title/Title';
import data from './data.json';

function App() {
  return (
    <div className="container">
      <Title n={1}>Хиты продаж</Title>
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '10px' }}>
        {data.wheels.map((wheel) => (
          <CatalogSliderCard key={wheel.id} product={wheel} />
        ))}
      </div>
    </div>
  );
}

export default App;
