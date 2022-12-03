import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";

const ContactMe = () => {
  return (
    <div id="contact" className="px-4 sm:px-6 lg:px-8">
      <div className="lg:relative bg-[#F4F4F4] m-4 rounded-3xl overflow-hidden max-w-7xl mx-auto p-4 px-11">
        <div>
          <h1 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            contact me
          </h1>
          <div className="flex items-center gap-2 mt-6 hover:underline cursor-pointer">
            <PhoneIcon className="w-4 h-4 text-primary" />
            <span>+1 647-864-9720</span>
          </div>
          <div className="flex items-center gap-2 mt-4 hover:underline cursor-pointer">
            <EnvelopeIcon className="w-4 h-4 text-primary" />
            <span>vishrutvashisht001gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
