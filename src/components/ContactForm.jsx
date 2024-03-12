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
    socialmedia: [],
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
        publicKey: "test_1sqisZJuG1Eyp-fqX",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );

    navigate("/cerere-trimisa", {
      state: {
        name: formData.user_name,
        email: formData.user_email,
        number: formData.user_phone,
        socialmedia: formData.socialmedia,
      },
    });
  };

  return (
    <section className="w-full mb-10">
      <div
        className="text-center mx-[30px] border-t-2 mb-5"
        id="redirectButtonLanding"
      >
        <h2 className="mb-4 mt-10">AFLĂ MAI MULTE!</h2>
        <p className="text-xl">Programează-te gratuit completând formularul.</p>
      </div>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex max-w-2xl p-10 rounded-xl mx-auto flex-col gap-4 bg-energy-red"
      >
        <div>
          <div className="mb-2">
            <Label
              htmlFor="name"
              value="Nume si prenume"
              className="text-white text-lg"
            />
          </div>
          <TextInput
            id="name"
            name="user_name"
            type="text"
            placeholder="Introdu numele tau"
            value={formData.user_name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <div className="mb-2">
            <Label
              htmlFor="email"
              value="Adresa de e-mail"
              className="text-white text-lg"
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
              value="Numar de telefon"
              className="text-white text-lg"
            />
          </div>
          <TextInput
            id="telefon"
            type="tel"
            name="user_phone"
            placeholder="Introdu numarul tau de telefon"
            value={formData.user_phone}
            onChange={handleInputChange}
            required
          />
        </div>
        <fieldset className="flex max-w-md flex-col gap-4" required>
          <legend className="mb-4 text-white text-lg">
            Cum ai aflat de noi?
          </legend>
          <div className="flex items-center gap-2">
            <Checkbox
              id="facebook"
              name="socialmedia"
              value="Facebook"
              onChange={handleCheckboxChange}
            />
            <Label htmlFor="facebook" className="text-white text-md">
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
            <Label htmlFor="google" className="text-white text-md">
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
            <Label htmlFor="recomandare" className="text-white text-md">
              Recomandare
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox
              id="ariston"
              name="socialmedia"
              value="Ariston"
              onChange={handleCheckboxChange}
            />
            <Label htmlFor="ariston" className="text-white text-md">
              Sunt deja client Ariston
            </Label>
          </div>
        </fieldset>
        <div className="flex items-center gap-2 p-2">
          <Checkbox id="cookies" required />
          <Label htmlFor="cookies" className="text-white text-md">
            Sunt de acord cu gestionarea datelor mele personale în conformitate
            cu Politica de confidențialitate ABC ENERGY
          </Label>
        </div>
        <Button className=" bg-energy-blue" type="submit">
          <p className="text-lg">Trimite</p>
        </Button>
        {formSubmitted && !isChecked && (
          <p className="text-white text-center">
            Va rugam sa ne spuneti cum ati aflat de noi. Va multumim!
          </p>
        )}
      </form>
    </section>
  );
};

export default ContactForm;
