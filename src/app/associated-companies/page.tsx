import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import SearchServices from "@/components/SearchServices";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Pagina de Asociados",
    description: "Listado de empresas asociadas",
    // other metadata
};

const AssocietedCompaniesPage = () => {
    return (
        <>
            <Breadcrumb
                pageName="Asociados"
                description="Listado de empresas asociadas a CEIPA y sus servicios."
            />
            <SearchServices />

        </>
    );
};

export default AssocietedCompaniesPage;
