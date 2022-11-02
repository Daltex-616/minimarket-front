import { useMemo, useState } from "react";
import React from "react";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  useAsyncDebounce,
  usePagination,
} from "react-table";
import axios from "axios";
import { BiFirstPage, BiLastPage } from "react-icons/bi";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import "./styles.css";

export const TablaProductos = (parametros) => {
  const [productos, setProductos] = useState([]);

  React.useEffect(() => {
    axios
      .get("http://localhost:4000/productos", {
        headers: { Authorization: "Bearer " + parametros.credencial.token },
      })
      .then((response) => setProductos(response.data));
  }, [parametros.credencial.token]);

  const columns = useMemo(
    () => [
      {
        Header: "Nombre",
        accessor: "nombre",
      },
      {
        Header: "Precio compra",
        accessor: "precio_compra",
      },
      {
        Header: "Precio venta",
        accessor: "precio_venta",
      },
      {
        Header: "Codigo de barra",
        accessor: "codigo_barra",
      },
      {
        Header: "Stock Salon",
        accessor: "salon",
      },
      {
        Header: "Stock Deposito",
        accessor: "deposito",
      },
      {
        Header: "Total",
        accessor: "total",
      },
      {
        Header: "Acciones",
      },
    ],
    []
  );
  const data = useMemo(() => productos, [productos]);
  const table = useTable(
    {
      columns,
      data,
      initialState: {
        pageSize: 10,
        pageIndex: 0,
      },
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    preGlobalFilteredRows,
    setGlobalFilter,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize, globalFilter },
  } = table;

  return (
    <>
      <Filter
        preGlobalFilteredRows={preGlobalFilteredRows}
        setGlobalFilter={setGlobalFilter}
        globalFilter={globalFilter}
      />
      <table {...getTableProps()} className="m-4 table table-dark table-hover">
        <thead>
          {
            // Recorremos las columnas que previamente definimos
            headerGroups.map((headerGroup) => (
              // Añadimos las propiedades al conjunto de columnas
              <tr {...headerGroup.getHeaderGroupProps()}>
                {
                  // Recorremos cada columna del conjunto para acceder a su información
                  headerGroup.headers.map((column) => (
                    // Añadimos las propiedades a cada celda de la cabecera
                    <th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                      className={
                        column.isSorted
                          ? column.isSortedDesc
                            ? "desc"
                            : "asc"
                          : ""
                      }
                    >
                      {column.render("Header")}
                    </th>
                  ))
                }
              </tr>
            ))
          }
        </thead>
        <tbody {...getTableBodyProps()}>
          {
            // Recorremos las filas
            page.map((row) => {
              // Llamamos a la función que prepara la fila previo renderizado
              prepareRow(row);
              return (
                // Añadimos las propiedades a la fila
                // eslint-disable-next-line jsx-a11y/anchor-is-valid
                <>
                <tr {...row.getRowProps()}>
                  {
                    // Recorremos cada celda de la fila
                    row.cells.map((cell) => {
                      // Añadimos las propiedades a cada celda de la fila
                      return (
                        <>
                        
                        <td {...cell.getCellProps()} id="celda">
                            {cell.render("Cell")}
                            
                        </td>
                        
                        </>
                      );
                    })
                  
                  }
                  
                </tr>

                </>
              );
            })
          }
        </tbody>
      </table>
      <div className="pagination m-4">
        <span>
          <strong>
            Página {pageIndex + 1} de {pageOptions.length}
          </strong>
        </span>
        <div className="controls">
          <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
            <BiFirstPage className="page-controller" />
          </button>
          <button onClick={() => previousPage()} disabled={!canPreviousPage}>
            <MdKeyboardArrowLeft className="page-controller" />
          </button>
          <button onClick={() => nextPage()} disabled={!canNextPage}>
            <MdKeyboardArrowRight className="page-controller" />
          </button>
          <button
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
          >
            <BiLastPage className="page-controller" />
          </button>
        </div>
        <select
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
        >
          {[5, 10, 15].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Mostrar {pageSize}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

function Filter({ preGlobalFilteredRows, globalFilter, setGlobalFilter }) {
  const totalProductosDisponibles = preGlobalFilteredRows.length;
  const [value, setValue] = useState(globalFilter);

  const onFilterChange = useAsyncDebounce(
    (value) => setGlobalFilter(value || undefined),
    200
  );

  const handleInputChange = (e) => {
    setValue(e.target.value);
    onFilterChange(e.target.value);
  };

  return (
    <span>
      <input
        className="form-control m-4 mb-0"
        size={50}
        value={value || ""}
        onChange={handleInputChange}
        placeholder={`${totalProductosDisponibles} productos disponibles...`}
      />
    </span>
  );
}
