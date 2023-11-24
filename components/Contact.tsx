import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
interface Inputs {
  example: string;
  exampleRequired: string;
}

type Props = {};

function Contact({}: Props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <div className="relative h-screen flex flex-col justify-center items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-xl sm:text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          I have got just what you need.{" "}
          <span className="underline decoration-[#F7AB0A]/50">Lets Talk</span>
        </h4>

        <div className="space-y-10">
          <div className="flex item-center space-x-5 justify-center">
            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse " />
            <p>+92 341 4307524</p>
          </div>
          <div className="flex item-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse " />
            <p>akdevjs@outlook.com</p>
          </div>
          <div className="flex item-center space-x-5 justify-center">
            <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse " />
            <p>Kahuta, Rwp, Pakistan</p>
          </div>
        </div>

        <form className="flex flex-col space-y-2 w-fit mx-auto">
          <div className="flex space-x-2">
            <input placeholder="Name" className="contact-input" type="text" />
            <input placeholder="Email" className="contact-input" type="email" />
          </div>
          <input placeholder="subject" className="contact-input" type="text" />
          <textarea placeholder="Message" className="contact-input" />
          <button
            type="submit"
            className="bg-[#f7ab0a] py-5 px-10 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
