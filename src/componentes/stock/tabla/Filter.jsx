function Filter({ preGlobalFilteredRows, globalFilter, setGlobalFilter }) {
    const totalCarsAvailable = preGlobalFilteredRows.length;
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
  <span className="cars-filter">
    Encuentra tu coche favorito
    <input
      size={50}
      value={value || ""}
      onChange={handleInputChange}
      placeholder={`${totalCarsAvailable} modelos disponibles...`}
    />
  </span>
);
}