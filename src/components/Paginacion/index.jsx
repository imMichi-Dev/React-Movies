import React from "react";
import { Pagination } from "react-bootstrap";
import "./Styles.css"

// Componente funcional Paginacion
// Props:
// - actual: número de página actual
// - total: cantidad total de páginas
// - onChange: función que se ejecuta al cambiar de página
export const Paginacion = ({ actual, total, onChange }) => {
    // Número máximo de páginas visibles en el paginador
    const maxPaginas = 5;

    // Función que calcula el rango de páginas a mostrar en el paginador
    const getPaginas = () => {
        // Se calcula la página inicial (no puede ser menor que 1)
        let start = Math.max(1, actual - 2);

        // Se calcula la página final (no puede ser mayor que el total de páginas)
        let end = Math.min(total, start + maxPaginas - 1);

        // Ajuste para asegurar que siempre se muestren 5 páginas cuando sea posible
        if (end - start < maxPaginas - 1) {
            start = Math.max(1, end - maxPaginas + 1);
        }

        // Retorna un arreglo con los números de página a mostrar
        return Array.from({ length: end - start + 1 }, (_, i) => start + i);
    };

    return (
        // Componente de paginación centrado con margen superior
        <Pagination className="justify-content-center mt-4">

            {/* Botón para ir a la primera página */}
            <Pagination.First
                onClick={() => onChange(1)}
                disabled={actual === 1} // Se desactiva si ya estamos en la primera página
            />

            {/* Botón para ir a la página anterior */}
            <Pagination.Prev
                onClick={() => onChange(actual - 1)}
                disabled={actual === 1} // Se desactiva en la primera página
            />

            {/* Elipsis al inicio cuando la página actual está más allá de la 3 */}
            {actual > 3 && <Pagination.Ellipsis disabled />}

            {/* Renderiza las páginas calculadas dinámicamente */}
            {getPaginas().map((num) => (
                <Pagination.Item
                    key={num}
                    active={num === actual} // Marca la página activa
                    onClick={() => onChange(num)} // Cambia de página al hacer clic
                >
                    {num}
                </Pagination.Item>
            ))}

            {/* Elipsis al final cuando la página actual está lejos del total */}
            {actual < total - 2 && <Pagination.Ellipsis disabled />}

            {/* Botón para ir a la página siguiente */}
            <Pagination.Next
                onClick={() => onChange(actual + 1)}
                disabled={actual === total} // Se desactiva en la última página
            />

            {/* Botón para ir a la última página */}
            <Pagination.Last
                onClick={() => onChange(total)}
                disabled={actual === total} // Se desactiva en la última página
            />
        </Pagination>
    );
};
