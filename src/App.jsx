import { useState, useMemo } from "react";
import imagenes from "./data/imagenes.json";
import "./App.css";

function App() {
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todas");
    const [imagenActiva, setImagenActiva] = useState(null);

    const categorias = useMemo(() => {
        const distinct = Array.from(new Set(imagenes.map((img) => img.categoria)));
        return ["Todas", ...distinct];
    }, []);

    const imagenesFiltradas = useMemo(() => {
        if (categoriaSeleccionada === "Todas") return imagenes;
        return imagenes.filter((img) => img.categoria === categoriaSeleccionada);
    }, [categoriaSeleccionada]);

    const abrirModal = (img) => {
        setImagenActiva(img);
    };

    const cerrarModal = () => {
        setImagenActiva(null);
    };

    return (
        <div className="bg-light min-vh-100">
            <div className="container py-4">
                {/* Encabezado */}
                <header className="mb-4 text-center">
                    <h1 className="fw-bold">Galeria de Imagenes</h1>
                    <p className="text-muted mb-0">
                        Muestra imagenes con titulo y categoria, permite filtrar por
                        categoria y ampliar la imagen en un modal.
                    </p>
                </header>

                {/* Filtros */}
                <section className="mb-4">
                    <div className="d-flex flex-wrap gap-2 justify-content-center">
                        {categorias.map((cat) => (
                            <button
                                key={cat}
                                type="button"
                                className={
                                    "btn btn-sm " +
                                    (categoriaSeleccionada === cat
                                        ? "btn-primary"
                                        : "btn-outline-primary")
                                }
                                onClick={() => setCategoriaSeleccionada(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </section>

                {/* Galeria */}
                <section>
                    <div className="row g-3">
                        {imagenesFiltradas.map((img) => (
                            <div key={img.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
                                <div
                                    className="card h-100 shadow-sm"
                                    role="button"
                                    onClick={() => abrirModal(img)}
                                >
                                    <img src={img.url} alt={img.titulo} className="card-img-top" />
                                    <div className="card-body">
                                        <h5 className="card-title">{img.titulo}</h5>
                                        <span className="badge bg-secondary">{img.categoria}</span>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {imagenesFiltradas.length === 0 && (
                            <div className="col-12 text-center text-muted">
                                No hay imagenes para la categoria seleccionada.
                            </div>
                        )}
                    </div>
                </section>

                {/* Modal */}
                {imagenActiva && (
                    <div className="modal-backdrop-custom" onClick={cerrarModal}>
                        <div
                            className="modal-dialog-custom"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <div>
                                    <h5 className="mb-0">{imagenActiva.titulo}</h5>
                                    <small className="text-muted">
                                        Categoria: {imagenActiva.categoria}
                                    </small>
                                </div>
                                <button
                                    type="button"
                                    className="btn btn-outline-secondary btn-sm"
                                    onClick={cerrarModal}
                                >
                                    Cerrar
                                </button>
                            </div>

                            <img
                                src={imagenActiva.url}
                                alt={imagenActiva.titulo}
                                className="img-fluid rounded modal-image"
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;
