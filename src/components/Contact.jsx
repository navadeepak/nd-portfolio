import React from "react";

function Contact() {
  return (
    <div className="p-5 flex flex-col items-center">
      <div className="flex flex-col gap-5 w-full">
        <p className="font-semibold text-4xl border-b border-[--green-color] py-2">
          Contact
        </p>
      </div>
      <div className="bg-white p-5 mt-10 rounded-lg shadow-lg bg-opacity-10 w-[500px]">
        <div>
          <p className="font-semibold text-2xl">
            If you have any questions or inquiries, please feel free to contact
            me at:
          </p>
          <hr className="my-2" />
          <p className="font-semibold text-2xl flex flex-col">
            Email:{" "}
            <a
              href="mailto:navadeepakaswin007@gmail.com"
              className="text-[--green-color] hover:underline"
            >
              navadeepakaswin007@gmail.com
            </a>
          </p>
          <p className="font-semibold text-2xl flex flex-col">
            Phone:{" "}
            <a
              href="tel:+917603857110"
              className="text-[--green-color] hover:underline"
            >
              +91 76038 57110
            </a>
          </p>
        </div>
        <div className="mt-5">
          <div className="flex flex-col gap-2">
            <p className="font-semibold border-b border-[--green-color] w-fit">Links</p>
            <div>
              <p>
                Linkedin{" "}
                <a
                  href="https://www.linkedin.com/in/navadeepak-c-7b35741b6/"
                  className="text-[--green-color] hover:underline"
                >
                  Link
                </a>
              </p>
              <p>
                Instagram{" "}
                <a
                  href="https://www.instagram.com/____out____of____control____/"
                  className="text-[--green-color] hover:underline"
                >
                  Link
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
