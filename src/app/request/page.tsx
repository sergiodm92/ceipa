import Breadcrumb from "@/components/Common/Breadcrumb";
import Request from "@/components/Request";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solicitud de ingreso",
  description: "Formulario para solicitar ingreso",
  // other metadata
};

const RequestPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Solicitud de ingreso"
        description="Complete el formulario para solicitar ingreso, nos pondremos en contacto con usted lo antes posible."
      />

      <Request />
    </>
  );
};

export default RequestPage;
