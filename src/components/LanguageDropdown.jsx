import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import { BiChevronDown } from "react-icons/bi";

const LanguageDropdown = () => {
  const [languages, setLanguages] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    async function fetchLanguages() {
      try {
        const response = await axios.get("https://restcountries.com/v2/all");
        const data = await response.data;
        const allLanguages = data.reduce((acc, country) => {
          country.languages.forEach((language) => {
            if (!acc.find((l) => l.iso639_1 === language.iso639_1)) {
              acc.push(language);
            }
          });
          return acc;
        }, []);
        setLanguages(allLanguages);
        setSelectedLanguage(allLanguages[0]);
      } catch (error) {
        console.log(error);
      }
    }
    fetchLanguages();
  }, []);

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  function selectLanguage(language) {
    setSelectedLanguage(language);
    setIsOpen(false);
  }

  //   function handleClickOutside(event) {
  //     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
  //       setIsOpen(false);
  //     }
  //   }

  //   useEffect(() => {
  //     document.addEventListener("mousedown", handleClickOutside);
  //     return () => {
  //       document.removeEventListener("mousedown", handleClickOutside);
  //     };
  //   }, []);

  return (
    <div className="relative">
      {selectedLanguage && (
        <div
          className="flex items-center px-3 py-2 rounded-md border-gray-300"
          onClick={toggleDropdown}
          ref={dropdownRef}
        >
          <div className="overflow-ellipsis whitespace-nowrap">
            {selectedLanguage.name}
          </div>
          <span className="text-2xl text-gray-500">
            <BiChevronDown />
          </span>
        </div>
      )}
      {isOpen && (
        <div className="absolute z-10 mt-1 w-full bg-white  text-sm  shadow-lg max-h-44 overflow-y-auto overflow-x-hidden">
          {languages.map((language) => (
            <div
              key={language.iso639_2}
              className="px-3 py-2 hover:bg-gray-200 cursor-pointer "
              onClick={() => selectLanguage(language)}
            >
              <span>{language.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;
