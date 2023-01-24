const SelectFilter = ({ setOptions }) => {
  const optionses = [
    { value: "", label: "همه دسته بندی" },
    { value: "tablet-mobile", label: "تبلت و موبایل" },
    { value: "pc-laptop", label: "رایانه و لپتاپ" },
    { value: "clothes", label: "پوشاک" },
    { value: "home-appliances", label: "لوازم خانگی" },
  ];

  return (
    <select
      onChange={(e) => setOptions(e.target.value)}
      className="text-xs  cursor-pointer hidden sm:block"
    >
      {optionses.map((opt) => (
        <option key={opt.label} value={opt.value}  className="h-12">
          {opt.label}
        </option>
      ))}
    </select>
  );
};

export default SelectFilter;
