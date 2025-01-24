"use client";
import React, { useState, useEffect } from "react";
import SectionTitle from "../Common/SectionTitle";
import SingleCompany from "./SingleCompany";
import Pagination from "../Common/Pagination";
import dataJson from "../../data/companies.json";
import { Company } from "@/types/search";

const SearchServices = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState(""); // Estado para el término de búsqueda
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]); // Tipos seleccionados
  const [itemsPerPage, setItemsPerPage] = useState(3); // Número de elementos por página

  // Ajustar el número de elementos por página según el tamaño de la pantalla
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1200) {
        setItemsPerPage(3);
      } else if (window.innerWidth < 1200 && window.innerWidth >= 768) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const mapper = () => {
    return dataJson.data.map((item, index) => {
      const { company, type, cuit, contact_name, phone, email, description } = item;

      return {
        id: index,
        name: company || "Empresa",
        logo: "https://gingersauce.co/wp-content/uploads/2020/12/pasted-image-0-2-3-1024x950.png",
        industry: type || "Industria",
        description: description || "Descripción",
        phone: phone?.toString() || "Teléfono",
        website: email || "Email",
      };
    });
  };

  const companyData: Company[] = mapper();

  // Obtener tipos únicos para el select
  const uniqueTypes = Array.from(new Set(companyData.map((company) => company.industry)));

  // Filtrar las empresas por término de búsqueda y tipos seleccionados
  const filteredData = companyData.filter((company) => {
    const matchesSearchTerm =
      company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      company.industry.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesType =
      selectedTypes.length === 0 || selectedTypes.includes(company.industry);

    return matchesSearchTerm && matchesType;
  });

  // Calcular los índices de los elementos a mostrar según la página actual
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  // Manejar el cambio de página
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Manejar el cambio del input de búsqueda
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  // Manejar la selección de un tipo
  const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    if (selectedValue && !selectedTypes.includes(selectedValue)) {
      setSelectedTypes([...selectedTypes, selectedValue]);
    }
    event.target.value = ""; // Resetear el select
    setCurrentPage(1);
  };

  // Eliminar un tag (tipo seleccionado)
  const handleRemoveTag = (type: string) => {
    setSelectedTypes(selectedTypes.filter((t) => t !== type));
    setCurrentPage(1);
  };

  return (
    <section
      id="blog"
      className="bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-20"
    >
      <div className="container">
        <SectionTitle
          title="Buscador de servicios"
          mb="50px"
          paragraph="Aquí podrás buscar entre las empresas asociadas a nuestro grupo"
          center
        />
        <div className="flex flex-col items-center justify-center md:flex-row md:gap-x-8 md:gap-y-0 lg:gap-x-6">
          {/* Input de búsqueda */}
          <div className="w-full md:w-1/2">
            <input
              type="text"
              placeholder="Buscar por nombre o industria"
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-full h-12 px-4 text-sm text-gray-dark dark:text-gray-light bg-white dark:bg-bg-color-dark border border-gray-light dark:border-gray-dark rounded-lg"
            />
          </div>

          {/* Select de tipos */}
          <div className="w-full md:w-1/2 mt-4 md:mt-0">
            <select
              value=""
              onChange={handleTypeChange}
              className="w-full h-12 px-4 text-sm text-gray-dark dark:text-gray-light bg-white dark:bg-bg-color-dark border border-gray-light dark:border-gray-dark rounded-lg"
            >
              <option value="">Seleccionar tipo</option>
              {uniqueTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Tags para los tipos seleccionados */}
        <div className="mt-4 flex flex-wrap gap-2">
          {selectedTypes.map((type) => (
            <div
              key={type}
              className="px-2 py-1 bg-primary text-white rounded-full flex items-center cursor-pointer"
              onClick={() => handleRemoveTag(type)}
            >
              {type}
              <span className="ml-2 text-sm font-bold">×</span>
            </div>
          ))}
        </div>

        {/* Mostrar las compañías filtradas con paginación */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3 mt-10">
          {currentItems.map((company) => (
            <div key={company.id} className="w-full">
              <SingleCompany company={company} />
            </div>
          ))}
        </div>

        {/* Paginación */}
        <Pagination
          totalPages={Math.ceil(filteredData.length / itemsPerPage)}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </section>
  );
};

export default SearchServices;
