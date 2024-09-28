import CatalogSliderCard from './components/CatalogSliderCard/CatalogSliderCard';
import Title from './UI/Title/Title';

function App() {
  return (
    <div className="container">
      <Title n={1}>Хиты продаж</Title>
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '10px' }}>
        <CatalogSliderCard />
        <CatalogSliderCard />
        <CatalogSliderCard />
        <CatalogSliderCard />
      </div>
    </div>
  );
}

export default App;
