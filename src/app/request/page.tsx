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
        pageName="Contact Page"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />

      <Request />
    </>
  );
};

export default RequestPage;
