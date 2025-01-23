"use client";
import React, { useState, useEffect } from "react";
import SectionTitle from "../Common/SectionTitle";
import SingleCompany from "./SingleCompany";
import Pagination from "../Common/Pagination"; // Asegúrate de importar el componente de paginación
import dataJson from "../../data/companies.json"
import { Company } from "@/types/search";

const SearchServices = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState(""); // Estado para el término de búsqueda
  const [itemsPerPage, setItemsPerPage] = useState(3); // Número de elementos a mostrar por página

  // Detectar el tamaño de la pantalla y ajustar itemsPerPage
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1200) {
        setItemsPerPage(3); // Para pantallas grandes (desktop)
      } else if (window.innerWidth < 1200 && window.innerWidth >= 768) {
        setItemsPerPage(2); // Para pantallas medianas (tablets)
      } else {
        setItemsPerPage(1); // Para pantallas pequeñas (móviles)
      }
    };

      handleResize(); // Ajustar al cargar la página
    window.addEventListener("resize", handleResize); // Escuchar cambios en el tamaño de la ventana

    return () => {
      window.removeEventListener("resize", handleResize); // Limpiar el event listener al desmontar el componente
    };
  }, []);

  const mapper = () => {

    const dataMap = dataJson.data.map((item, index)=>{

      const {company, type, cuit, contact_name, phone, email, description} = item

      return {
        id: index,
        name: company || "Empresa",
        logo: "https://gingersauce.co/wp-content/uploads/2020/12/pasted-image-0-2-3-1024x950.png",
        industry: type || "Industria",
        description: description || "Descripción",
        phone: phone?.toString() || "Teléfono",
        website: email || "Email"
      }

    })

    return dataMap
  }
  const companyData : Company[] = mapper();

  // Filtrar las empresas por nombre o industria en tiempo real según el término de búsqueda
  const filteredData = companyData.filter((company) =>
    company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    company.industry.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calcular los índices de los elementos a mostrar según la página actual
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  // Manejar el cambio de página
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Manejar el cambio del input de búsqueda en tiempo real
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); // Resetear la página a la primera cuando se realiza una búsqueda
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
        <div className="flex flex-col items-center justify-center md:flex-row md:gap-x-8 md:gap-y-0 lg:flex-col lg:gap-x-6 ">
          <div className="w-full md:w-1/2">
            <input
              type="text"
              placeholder="Buscar por nombre o industria"
              value={searchTerm}
              onChange={handleSearchChange} // Actualizar el término de búsqueda en tiempo real
              className="w-full h-12 px-4 text-sm text-gray-dark dark:text-gray-light bg-white dark:bg-bg-color-dark border border-gray-light dark:border-gray-dark rounded-lg"
            />
          </div>
        </div>

        {/* Mostrar las compañías filtradas con paginación */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3 mt-10">
          {currentItems.map((company) => (
            <div key={company.id} className="w-full">
              <SingleCompany company={company} />
            </div>
          ))}
        </div>

        {/* Agregar la paginación aquí */}
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
