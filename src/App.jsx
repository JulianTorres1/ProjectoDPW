//componets
import Navbar from './components/navbar'
import Footer
 from './components/footer'
function App() {

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />
      <main className="flex-grow container mx-auto p-4">
        <p className="text-center text-2xl font-bold mb-4">Bienvenido a Futbol Cartagenero</p>
        <p className="text-center text-lg mb-4">Aquí encontrarás toda la información sobre el fútbol en Cartagena.</p>
        <p className="text-center text-lg mb-4">Desde noticias hasta resultados y más.</p>
        <p className="text-center text-lg mb-4">¡Disfruta de la pasión del fútbol!</p>
        <p className="text-center text-lg mb-4">¡Visítanos regularmente para mantenerte actualizado!</p>
        <p className="text-center text-lg mb-4">¡Vamos, Cartagena!</p>
      </main>
      <Footer />
    </div>
  )
}

export default App