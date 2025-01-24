"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Esquema de validación con Yup
const schema = yup.object().shape({
  companyName: yup.string().required("El nombre de la empresa es requerido"),
  phone: yup.string().required("El teléfono es requerido"),
  mobile: yup.string(),
  address: yup.string().required("La dirección es requerida"),
  email: yup.string().email("Ingrese un email válido").nullable(),
  cuit: yup
    .string()
    .required("El CUIT es requerido")
    .matches(/^[0-9\-]+$/, "El CUIT debe ser un número válido"),
  seniority: yup
    .number()
    .required("La antigüedad es requerida")
    .typeError("La antigüedad debe ser un número"),
  owner: yup.string().required("El titular es requerido"),
  mainClients: yup.string(),
  mainActivities: yup.string(),
  interestReason: yup.string(),
  socialStatute: yup.string(),
  currentAuthorities: yup.string(),
});

const Request = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log("Datos enviados:", data);
    alert("Formulario enviado con éxito");
    reset(); // Resetea el formulario después de enviarlo
  };

  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s"
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Solicitud de Participación
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                Completa los siguientes campos para registrar tu solicitud.
              </p>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="-mx-4 flex flex-wrap">
                  {/* Nombre de la empresa */}
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="companyName"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Nombre de la empresa
                      </label>
                      <input
                        {...register("companyName")}
                        type="text"
                        placeholder="Ingresa el nombre de la empresa"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                      {errors.companyName && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.companyName.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Teléfono */}
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="phone"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Teléfono
                      </label>
                      <input
                        {...register("phone")}
                        type="text"
                        placeholder="Ingresa el teléfono"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.phone.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Celular */}
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="mobile"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Celular
                      </label>
                      <input
                        {...register("mobile")}
                        type="text"
                        placeholder="Ingresa el celular"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>

                  {/* Dirección */}
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="address"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Dirección
                      </label>
                      <input
                        {...register("address")}
                        type="text"
                        placeholder="Ingresa la dirección"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                      {errors.address && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.address.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* CUIT */}
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="cuit"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        CUIT
                      </label>
                      <input
                        {...register("cuit")}
                        type="text"
                        placeholder="Ingresa el CUIT"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                      {errors.cuit && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.cuit.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Antigüedad */}
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="seniority"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Antigüedad
                      </label>
                      <input
                        {...register("seniority")}
                        type="text"
                        placeholder="Ingresa la antigüedad"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                      {errors.seniority && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.seniority.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Titular */}
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="owner"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Titular
                      </label>
                      <input
                        {...register("owner")}
                        type="text"
                        placeholder="Ingresa el titular"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                      {errors.owner && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.owner.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Principales Clientes */}
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="mainClients"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Principales Clientes
                      </label>
                      <textarea
                        {...register("mainClients")}
                        rows={3}
                        placeholder="Ingresa los principales clientes"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>

                  {/* Resto de campos */}
                  {/* Siguiendo el mismo patrón, agrega los campos restantes */}

                  <div className="w-full px-4">
                    <button
                      type="submit"
                      className="rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
                    >
                      Enviar Solicitud
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Request;
