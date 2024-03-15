import React, { useRef, useState } from "react";
import { Button, Checkbox, Label, TextInput, Radio } from "flowbite-react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";

const ContactForm = () => {
  const form = useRef();
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_phone: "",
  });

  const handleCheckboxChange = () => {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    let atLeastOneChecked = false;
    const selectedValues = [];
    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        atLeastOneChecked = true;
        selectedValues.push(checkbox.value);
      }
    });
    setIsChecked(atLeastOneChecked);
    setFormData((prevFormData) => ({
      ...prevFormData,
      socialmedia: selectedValues,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!isChecked) {
      setFormSubmitted(true);
      return;
    }

    emailjs
      .sendForm("service_2by0d8j", "template_8kpkbnc", form.current, {
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      })
      .then(() => {
        navigate("/cerere-trimisa", {
          state: {
            name: formData.user_name,
            email: formData.user_email,
            number: formData.user_phone,
          },
        });
      });
  };

  return (
    <section className="w-full mb-10">
      <div
        className="text-center mx-[30px] border-t-2 mb-5"
        id="redirectButtonLanding"
      >
        <h2 className="mb-4 mt-10">AFLĂ MAI MULTE!</h2>
        <p className="text-[25px]">
          Programează-te gratuit completând formularul.
        </p>
      </div>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex max-w-4xl md:p-10 p-5 rounded-xl mx-auto flex-col gap-4 bg-energy-pink"
      >
        <div>
          <div className="mb-2">
            <Label
              htmlFor="name"
              value="Nume și Prenume*"
              className="text-white text-xl"
            />
          </div>
          <TextInput
            id="name"
            name="user_name"
            type="text"
            placeholder="Introdu numele tău"
            value={formData.user_name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <div className="mb-2">
            <Label
              htmlFor="email"
              value="E-mail*"
              className="text-white text-xl"
            />
          </div>
          <TextInput
            id="email"
            name="user_email"
            type="email"
            placeholder="Introdu adresa ta de e-mail"
            value={formData.user_email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <div className="mb-2 ">
            <Label
              htmlFor="telefon"
              value="Telefon*"
              className="text-white text-xl"
            />
          </div>
          <TextInput
            id="telefon"
            type="tel"
            name="user_phone"
            placeholder="Introdu numărul tău de telefon"
            value={formData.user_phone}
            onChange={handleInputChange}
            required
          />
        </div>
        <fieldset className="flex max-w-md flex-col gap-4" required>
          <legend className="mb-4 text-white text-xl">
            Cum ai aflat de noi?*
            {formSubmitted && !isChecked && (
              <span className="pl-1">(acest câmp este obligatoriu)</span>
            )}
          </legend>
          <div className="flex items-center gap-2">
            <Checkbox
              id="facebook"
              name="socialmedia"
              value="Facebook"
              onChange={handleCheckboxChange}
            />
            <Label htmlFor="facebook" className="text-white text-xl">
              Facebook
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox
              id="google"
              name="socialmedia"
              value="Google"
              onChange={handleCheckboxChange}
            />
            <Label htmlFor="google" className="text-white text-xl">
              Google
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox
              id="recomandare"
              name="socialmedia"
              value="Recomandare"
              onChange={handleCheckboxChange}
            />
            <Label htmlFor="recomandare" className="text-white text-xl">
              Recomandare
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox
              id="checkboxemail"
              name="socialmedia"
              value="E-mail"
              onChange={handleCheckboxChange}
            />
            <Label htmlFor="checkboxemail" className="text-white text-xl">
              E-mail
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox
              id="ariston"
              name="socialmedia"
              value="Sunt deja client Ariston"
              onChange={handleCheckboxChange}
            />
            <Label htmlFor="ariston" className="text-white text-xl">
              Sunt deja client Ariston
            </Label>
          </div>
        </fieldset>
        <div className="flex items-center gap-2 p-2 border-2 rounded-2xl">
          <Checkbox id="cookies" required />
          <Label htmlFor="cookies" className="text-white text-lg">
            Sunt de acord cu gestionarea datelor mele personale în conformitate
            cu{" "}
            <a
              className="text-black"
              href="https://www.abcenergy.ro/politica-de-confidentialitate"
            >
              Politica de confidențialitate ABC ENERGY
            </a>
          </Label>
        </div>
        <Button className=" bg-energy-blue rounded-3xl py-2" type="submit">
          <p className="text-[1.7rem] font-[Jost-Bold]">Trimite</p>
        </Button>
      </form>
    </section>
  );
};

export default ContactForm;
