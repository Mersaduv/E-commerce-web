import { useState } from "react";
// import { Checkbox } from "@material-tailwind/react";
import { BiChevronUp } from "react-icons/bi";
import PriceRangeSlider from "../components/PriceRangeSlider";

import Rate from "./Rate";
const AsideListCategory = () => {
  // State for brands
  const [brands, setBrands] = useState({
    samsung: false,
    apple: false,
    poco: false,
    lenovo: false,
    asus: false,
  });
  const [features, setFeatures] = useState({
    metallic: false,
    plastic: false,
    superpower: false,
    largememory: false,
  });
  const [showCategories, setShowCategories] = useState(true);
  const [showBrands, setShowBrands] = useState(true);
  const [showFeatures, setShowFeatures] = useState(true);
  const [rateShow, setRateShow] = useState(true);
  const [conditionShow, setConditionShow] = useState(true);
  const [rangShow, setRangeShow] = useState(true);

  const [condition, setCondition] = useState("any");

  const handleCategoriesClick = () => {
    setShowCategories(!showCategories);
  };

  const handleBrandsClick = () => {
    setShowBrands(!showBrands);
  };

  const handleFeaturesClick = () => {
    setShowFeatures(!showFeatures);
  };
  const handleRateShowClick = () => {
    setRateShow(!rateShow);
  };
  const handleConditionShowClick = () => {
    setConditionShow(!conditionShow);
  };
  const handleRangeShowClick = () => {
    setRangeShow(!rangShow);
  };
  // Function to handle brand changes
  const handleBrandChange = (event) => {
    const { name, checked } = event.target;
    setBrands((prevBrands) => ({ ...prevBrands, [name]: checked }));
  };

  const handleFeatureChange = (e) => {
    setFeatures({ ...features, [e.target.name]: e.target.checked });
  };

  const handleConditionChange = (e) => {
    setCondition(e.target.value);
  };

  return (
    <div className="z-10 pb-10 px-2  w-full">
      <div className="w-full  gap-y-4">
        <hr className="border" />
        {/* Section 1: Categories */}
        <div className="my-4  ">
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={handleCategoriesClick}
          >
            <h2 className="  text-lg font-semibold w-52">دسته بندی ها</h2>
            <BiChevronUp className={showCategories ? "" : "rotate-180"} />
          </div>
          {showCategories && (
            <div className="text-sm text-gray-600 mt-3 ">
              <div className=" py-1 pr-1 cursor-pointer rounded hover:font-semibold w-52 hover:bg-[#E5F1FF]">
                پوشاک و لباس
              </div>
              <div className=" py-1 pr-1 cursor-pointer rounded hover:font-semibold w-52 hover:bg-[#E5F1FF]">
                لوازم خانگی
              </div>
              <div className=" py-1 pr-1 cursor-pointer rounded hover:font-semibold w-52 hover:bg-[#E5F1FF]">
                رایانه رومیزی
              </div>
              <div className="line-through py-1 pr-1 cursor-pointer rounded hover:font-semibold w-52 ">
                لوازم تعمیری
              </div>
              <div className="line-through py-1 pr-1 cursor-pointer rounded hover:font-semibold w-52 ">
                ورزشی
              </div>
              <div className="line-through py-1 pr-1 cursor-pointer rounded hover:font-semibold w-52 ">
                لوازم مکانیکی
              </div>
              <div className="line-through py-1 pr-1 cursor-pointer rounded hover:font-semibold w-52 ">
                ادامه دسته بندی....
              </div>
            </div>
          )}
        </div>
        <hr className="border" />
        {/* Section 2: Brands */}
        <div className="my-4   ">
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={handleBrandsClick}
          >
            <h2 className="  text-lg font-semibold w-52">برند ها</h2>
            <BiChevronUp className={showBrands ? "" : "rotate-180"} />
          </div>
          {showBrands && (
            <div className="flex flex-col text-sm text-gray-600 mt-3">
              <label className=" inline-flex items-center mb-2">
                <input
                  type="checkbox"
                  className="form-checkbox rounded  text-blue-500"
                  name="samsung"
                  checked={brands.samsung}
                  onChange={handleBrandChange}
                />
                <span className="mr-2">Samsung</span>
              </label>
              <label className=" inline-flex items-center mb-2">
                <input
                  type="checkbox"
                  className="form-checkbox rounded  text-blue-500"
                  name="apple"
                  checked={brands.apple}
                  onChange={handleBrandChange}
                />
                <span className="mr-2">Apple</span>
              </label>
              <label className=" inline-flex items-center mb-2">
                <input
                  type="checkbox"
                  className="form-checkbox rounded  text-blue-500"
                  name="poco"
                  checked={brands.poco}
                  onChange={handleBrandChange}
                />
                <span className="mr-2">Pocco</span>
              </label>
              <label className=" inline-flex items-center mb-2">
                <input
                  type="checkbox"
                  className="form-checkbox rounded  text-blue-500"
                  name="lenovo"
                  checked={brands.lenovo}
                  onChange={handleBrandChange}
                />
                <span className="mr-2">Lenovo</span>
              </label>
              <label className=" inline-flex items-center mb-2">
                <input
                  type="checkbox"
                  className="form-checkbox rounded  text-blue-500"
                  name="asus"
                  checked={brands.asus}
                  onChange={handleBrandChange}
                />
                <span className="mr-2">Asus</span>
              </label>
            </div>
          )}
        </div>
        <hr className="border" />
        {/* Section 3: Features */}
        <div className="my-4 ">
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={handleFeaturesClick}
          >
            <h2 className="  text-lg font-semibold w-52">ویژگی ها</h2>
            <BiChevronUp className={showFeatures ? "" : "rotate-180"} />
          </div>
          {showFeatures && (
            <div className="flex flex-col text-sm text-gray-600 mt-3">
              <label className=" inline-flex items-center mb-2">
                <input
                  type="checkbox"
                  className="form-checkbox rounded  text-blue-500"
                  name="metallic"
                  checked={features.metallic}
                  onChange={handleFeatureChange}
                />
                <span className="mr-2">Metallic Cover</span>
              </label>
              <label className=" inline-flex items-center mb-2">
                <input
                  type="checkbox"
                  className="form-checkbox rounded  text-blue-500"
                  name="plastic"
                  checked={features.plastic}
                  onChange={handleFeatureChange}
                />
                <span className="mr-2">Plastic Cover</span>
              </label>
              <label className=" inline-flex items-center mb-2">
                <input
                  type="checkbox"
                  className="form-checkbox rounded  text-blue-500"
                  name="superpower"
                  checked={features.superpower}
                  onChange={handleFeatureChange}
                />
                <span className="mr-2">Super Power</span>
              </label>
              <label className=" inline-flex items-center mb-2">
                <input
                  type="checkbox"
                  className="form-checkbox rounded  text-blue-500"
                  name="largememory"
                  checked={features.largememory}
                  onChange={handleFeatureChange}
                />
                <span className="mr-2">Large Memory</span>
              </label>
            </div>
          )}
        </div>
        <hr className="border" />
        {/* Section 4: PriceRange */}
        <div className="my-4">
          <div
            onClick={handleRangeShowClick}
            className="flex cursor-pointer items-center mb-1 justify-between"
          >
            <h2 className=" font-bold text-lg">تعیین قیمت</h2>
            <BiChevronUp className={rangShow ? "" : "rotate-180"} />
          </div>
          {rangShow && <PriceRangeSlider />}
        </div>
        <hr />
        {/* Section 5: Condition */}
        <div className="my-4">
          <div
            onClick={handleConditionShowClick}
            className="flex cursor-pointer items-center justify-between"
          >
            <h2 className="text-lg font-semibold">رده تولید</h2>
            <BiChevronUp className={conditionShow ? "" : "rotate-180"} />
          </div>
          {conditionShow && (
            <div className="flex flex-col text-sm text-gray-600 mt-3">
              <label className=" inline-flex items-center mb-2">
                <input
                  type="radio"
                  className="form-radio rounded text-blue-500"
                  name="condition"
                  value="any"
                  checked={condition === "any"}
                  onChange={handleConditionChange}
                />
                <span className="mr-2">Any</span>
              </label>
              <label className=" inline-flex items-center mb-2">
                <input
                  type="radio"
                  className="form-radio rounded text-blue-500"
                  name="condition"
                  value="brandnew"
                  checked={condition === "brandnew"}
                  onChange={handleConditionChange}
                />
                <span className="mr-2">Brand new</span>
              </label>
              <label className=" inline-flex items-center mb-2">
                <input
                  type="radio"
                  className="form-radio rounded text-blue-500"
                  name="condition"
                  value="old"
                  checked={condition === "old"}
                  onChange={handleConditionChange}
                />
                <span className="mr-2">Old items</span>
              </label>
            </div>
          )}
        </div>
        <hr />
        {/* Section 5: Rating */}
        <div className="my-4">
          <div className="flex flex-col i cursor-pointer">
            <div onClick={handleRateShowClick} className="flex items-center">
              <h2 className="text-lg font-semibold w-52">امتیازات مشتریان</h2>
              <BiChevronUp className={rateShow ? "" : "rotate-180"} />
            </div>
            {rateShow && (
              <div className="mt-3 ">
                <h3 className="mb-1">بر اساس</h3>
                <Rate />
              </div>
            )}
          </div>
        </div>
      </div>
      {/*meterial tailwind  */}
      {/* <div className="max-w-md mx-auto">
        <div className="my-4">
          <h2 className="  text-lg font-semibold w-52 mb-2">Category</h2>
        </div>

        <div className="my-4">
          <h2 className="  text-lg font-semibold w-52 mb-2">Brands</h2>
          <div className="flex flex-col">
            <Checkbox
              color="blue"
              id="samsung"
              name="samsung"
              checked={brands.samsung}
              onChange={handleBrandChange}
              label="Samsung"
            />
            <Checkbox
              color="blue"
              id="apple"
              name="apple"
              checked={brands.apple}
              onChange={handleBrandChange}
              label="Apple"
            />
            <Checkbox
              color="blue"
              id="poco"
              name="poco"
              checked={brands.poco}
              onChange={handleBrandChange}
              label="Pocco"
            />
            <Checkbox
              color="blue"
              id="lenovo"
              name="lenovo"
              checked={brands.lenovo}
              onChange={handleBrandChange}
              label="Lenovo"
            />
            <Checkbox
              color="blue"
              id="asus"
              name="asus"
              checked={brands.asus}
              onChange={handleBrandChange}
              label="Asus"
            />
          </div>
        </div>

        <div className="my-4">
          <h2 className="  text-lg font-semibold w-52 mb-2">Features</h2>
          <div className="flex flex-col">
            <Checkbox
              color="blue"
              id="metallic"
              name="metallic"
              checked={features.metallic}
              onChange={handleFeatureChange}
              label="Metallic Cover"
            />
            <Checkbox
              color="blue"
              id="plastic"
              name="plastic"
              checked={features.plastic}
              onChange={handleFeatureChange}
              label="Plastic Cover"
            />
            <Checkbox
              color="blue"
              id="superpower"
              name="superpower"
              checked={features.superpower}
              onChange={handleFeatureChange}
              label="SuperPower"
            />
            <Checkbox
              color="blue"
              id="largememory"
              name="largememory"
              checked={features.largememory}
              onChange={handleFeatureChange}
              label="Large Memory"
            />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default AsideListCategory;
