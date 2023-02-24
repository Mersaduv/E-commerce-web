import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { BsCircleFill } from "react-icons/bs";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { IoFastFoodOutline } from "react-icons/io5";
import { MdFilterList } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { BiMobileAlt, BiLaptop, BiCamera, BiChevronDown } from "react-icons/bi";
const Sidebar = () => {
  const [activeCategory, setActiveCategory] = useState("");
  const [isOpen, setIsOpen] = useState(true);
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };
  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className="hidden md:block col-span-4 row-span-2 lg:col-span-3 xl:col-span-2">
      <div className="bg-white rounded-b-lg max-h-[calc(100vh_-_140px)] sticky top-20 overflow-auto">
        <h1 className="text-orange-400 font-bold p-4">دسته بندی</h1>
        <ul className="p-2">
          <li
            onClick={() => handleCategoryClick("mobile")}
            className={`p-2 cursor-pointer mb-2 hover:bg-gray-50 rounded-md relative ${
              activeCategory === "mobile" ? "text-gray-400" : ""
            }`}
          >
            <div className="flex items-center">
              <BiMobileAlt className="w-5 h-5" />
              <span className="mx-2">تلفن همراه</span>
            </div>
          </li>
          <li
            onClick={() => handleCategoryClick("laptop")}
            className={`p-2 cursor-pointer mb-2 hover:bg-gray-50 rounded-md relative ${
              activeCategory === "laptop" ? "text-gray-400" : ""
            }`}
          >
            <div className="flex items-center">
              <BiLaptop className="w-5 h-5" />
              <span className="mx-2">لپ تاپ</span>
            </div>
          </li>
          <li
            onClick={() => handleCategoryClick("camera")}
            className={`p-2 cursor-pointer mb-2 hover:bg-gray-50 rounded-md relative ${
              activeCategory === "camera" ? "text-gray-400" : ""
            }`}
          >
            <div className="flex items-center">
              <BiCamera className="w-5 h-5" />
              <span className="mx-2">دوربین</span>
            </div>
          </li>
        </ul>
        
        <div>
          <h1 className="text-orange-400 p-4 font-bold">فیلتر</h1>
          {/* Grouping #1 */}
          <div>
            <div
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center justify-between mb-1 rounded-xl text-slate-800 w-full hover:bg-gray-100 cursor-pointer"
            >
              <div className="flex mr-4 py-2 ">
                <HiOutlineOfficeBuilding size={20} />
                <span className=" mx-2 ">برند محصول</span>
              </div>
              <div className="mr-2">
                <BiChevronDown size={20} />
              </div>
            </div>
            {isOpen && (
              <div className="border-b border-gray-200 py-2 px-4">
                <ul>
                  <li className="flex items-center py-2">
                    <IoFastFoodOutline size={20} />
                    <span className="mx-2">برند 1</span>
                    <div className="ml-auto">
                      <IoIosArrowForward size={20} />
                    </div>
                  </li>
                  <li className="flex items-center py-2">
                    <IoFastFoodOutline size={20} />
                    <span className="mx-2">برند 2</span>
                    <div className="ml-auto">
                      <IoIosArrowForward size={20} />
                    </div>
                  </li>
                  <li className="flex items-center py-2">
                    <IoFastFoodOutline size={20} />
                    <span className="mx-2">برند 3</span>
                    <div className="ml-auto">
                      <IoIosArrowForward size={20} />
                    </div>
                  </li>
                </ul>
              </div>
            )}
          </div>
                   {/* Grouping #1 */}
                   <div>
            <div
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center justify-between mb-1 rounded-xl text-slate-800 w-full hover:bg-gray-100 cursor-pointer"
            >
              <div className="flex mr-4 py-2 ">
                <HiOutlineOfficeBuilding size={20} />
                <span className=" mx-2 ">برند محصول</span>
              </div>
              <div className="mr-2">
                <BiChevronDown size={20} />
              </div>
            </div>
            {isOpen && (
              <div className="border-b border-gray-200 py-2 px-4">
                <ul>
                  <li className="flex items-center py-2">
                    <IoFastFoodOutline size={20} />
                    <span className="mx-2">برند 1</span>
                    <div className="ml-auto">
                      <IoIosArrowForward size={20} />
                    </div>
                  </li>
                  <li className="flex items-center py-2">
                    <IoFastFoodOutline size={20} />
                    <span className="mx-2">برند 2</span>
                    <div className="ml-auto">
                      <IoIosArrowForward size={20} />
                    </div>
                  </li>
                  <li className="flex items-center py-2">
                    <IoFastFoodOutline size={20} />
                    <span className="mx-2">برند 3</span>
                    <div className="ml-auto">
                      <IoIosArrowForward size={20} />
                    </div>
                  </li>
                </ul>
              </div>
            )}
          </div>
                   {/* Grouping #1 */}
                   <div>
            <div
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center justify-between mb-1 rounded-xl text-slate-800 w-full hover:bg-gray-100 cursor-pointer"
            >
              <div className="flex mr-4 py-2 ">
                <HiOutlineOfficeBuilding size={20} />
                <span className=" mx-2 ">برند محصول</span>
              </div>
              <div className="mr-2">
                <BiChevronDown size={20} />
              </div>
            </div>
            {isOpen && (
              <div className="border-b border-gray-200 py-2 px-4">
                <ul>
                  <li className="flex items-center py-2">
                    <IoFastFoodOutline size={20} />
                    <span className="mx-2">برند 1</span>
                    <div className="ml-auto">
                      <IoIosArrowForward size={20} />
                    </div>
                  </li>
                  <li className="flex items-center py-2">
                    <IoFastFoodOutline size={20} />
                    <span className="mx-2">برند 2</span>
                    <div className="ml-auto">
                      <IoIosArrowForward size={20} />
                    </div>
                  </li>
                  <li className="flex items-center py-2">
                    <IoFastFoodOutline size={20} />
                    <span className="mx-2">برند 3</span>
                    <div className="ml-auto">
                      <IoIosArrowForward size={20} />
                    </div>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
