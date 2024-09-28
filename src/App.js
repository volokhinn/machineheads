import Title from './UI/Title/Title';
import data from './data.json';
import CatalogSlider from './components/CatalogSlider/CatalogSlider';

function App() {
  return (
    <div className="container">
      <Title n={1}>Хиты продаж</Title>
      <CatalogSlider data={data} />
    </div>
  );
}

export default App;
