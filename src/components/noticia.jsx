export default function Noticias({ noticias }) {
    return (
        <div>
            {noticias.map((noticia) => (
                <div key={noticia.id} className="bg-white p-4 shadow mb-4 max-w-sm mx-auto rounded-2xl">
                    <img src={noticia.portada} alt={noticia.titulo} className="w-full h-48 object-cover mb-4 rounded-sm" />
                    <h2 className="text-lg font-bold mb-2">{noticia.titulo}</h2>
                    <p className="text-gray-600 text-xs mb-2">{noticia.fecha} - {noticia.autor}</p>
                    <p className="text-sm">{noticia.descripcion}</p>
                </div>
            ))}
        </div>
    );
}