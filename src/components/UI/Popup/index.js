import React, { useState } from "react";
import Button from "../Button";

const Index = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const handleClose = (e) => {
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
            <div className="w-[600px] h-[600px] bg-white p-4 rounded">
                <div class="flex flex-shrink-0 items-center justify-between rounded-t-md border-b border-neutral-200 p-4 dark:border-neutral-500">
                    <h5
                        class="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200"
                        id="leftBottomModalLabel"
                    >
                        Je suis intéressé par ce produits
                    </h5>
                    <button
                        type="button"
                        class="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none place-self-end"
                        data-te-modal-dismiss
                        aria-label="Close"
                        onClick={onClose}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="h-6 w-6"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
                <div className="flex flex-col items-center justify-start px-6 py-4 space-y-4 h-full">
                    <div class="relative flex-auto p-4" data-te-modal-body-ref>
                        <div class="flex flex-col items-center justify-center">
                            <p class="text-center text-neutral-800 flex justify-center mb-4">
                                Inscrivez vous a notre newsletter pour recevoir
                                des infos de nouveau produits similaires a ce
                                produit.
                            </p>
                        </div>
                        <form className="p-2 judtify-center">
                            <div class="flex flex-wrap -mx-3 mb-6">
                                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label
                                        class="block uppercase text-gray-700 text-xs font-bold mb-2"
                                        for="grid-first-name"
                                    >
                                        Nom
                                    </label>
                                    <input
                                        class="appearance-none block w-full bg-transparent-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        id="grid-first-name"
                                        type="text"
                                        placeholder="Jane"
                                    />
                                </div>
                                <div class="w-full md:w-1/2 px-3">
                                    <label
                                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        for="grid-last-name"
                                    >
                                        Prenom
                                    </label>
                                    <input
                                        class="appearance-none block w-full border bg-transparent-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        id="grid-last-name"
                                        type="text"
                                        placeholder="Doe"
                                    />
                                </div>
                            </div>
                            <div class="flex flex-wrap -mx-3 mb-6">
                                <div class="w-full px-3">
                                    <label
                                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        for="grid-password"
                                    >
                                        Email
                                    </label>
                                    <input
                                        class="appearance-none block w-full bg-transparent-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        id="grid-password"
                                        type="email"
                                        placeholder="Address mail"
                                    />
                                </div>
                            </div>

                            {/*<!--Default checked checkbox-->*/}
                            <div class="mb-6 my-4 p-4 flex min-h-[1.5rem] items-center justify-center pl-[1.5rem]">
                                <input
                                    class="relative float-left -ml-[1.5rem] mr-[6px] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                                    type="checkbox"
                                    value=""
                                    required
                                    id="exampleCheck11"
                                />
                                <label
                                    class="inline-block pl-[0.15rem] hover:cursor-pointer"
                                    for="exampleCheck11"
                                >
                                    J'accepte de recevoir des mails de
                                    marchandises
                                </label>
                            </div>

                            {/*<!--Submit button-->*/}
                            <div className="my-4 mx-6 p-4 flex justify-center">
                                <Button text={"Souscrire"} buttonAction={"#"} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;
