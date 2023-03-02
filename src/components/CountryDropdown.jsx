import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import { BiChevronDown } from "react-icons/bi";

const CountryDropdown = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    async function fetchCountries() {
      try {
        const response = await axios.get("https://restcountries.com/v2/all");
        const data = await response.data;
        setCountries(data);
        setSelectedCountry(data[0]);
      } catch (error) {
        console.log(error);
      }
    }
    fetchCountries();
  }, []);

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  function selectCountry(country) {
    setSelectedCountry(country);
    setIsOpen(false); // close dropdown when a country is selected
  }

  // function handleClickOutside(event) {
  //   if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
  //     setIsOpen(false);
  //   }
  // }

  // useEffect(() => {
  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, []);

  return (
    <div className="relative -ml-4 w-40 cursor-pointer">
      {selectedCountry && (
        <div
          className="flex items-center px-3 py-2 rounded-md border-gray-300"
          onClick={toggleDropdown}
          ref={dropdownRef}
        >
          <div className="overflow-ellipsis whitespace-nowrap">کالا به</div>
          <img
            src={selectedCountry.flags.svg}
            alt={`${selectedCountry.name} flag`}
            className="w-10 h-6 mr-2"
          />
          <span className="text-2xl text-gray-500 mr-1">
            <BiChevronDown />
          </span>
        </div>
      )}
      {isOpen && (
        <div className="absolute text-sm  z-10 mt-1 w-40 bg-white shadow-lg max-h-44 overflow-y-auto overflow-x-hidden">
          {countries.map((country) => (
            <div
              key={country.alpha2Code}
              className="px-3 py-2 hover:bg-gray-200 cursor-pointer"
              onClick={() => selectCountry(country)}
            >
              <img
                src={country.flags.svg}
                alt={`${country.name} flag`}
                className="w-6 h-4 mr-2"
              />
              <span>{country.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default CountryDropdown;
