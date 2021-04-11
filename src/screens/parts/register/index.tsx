import React, { ChangeEvent, useEffect, useState } from "react";

import driver from "../../../api/parts";

import { MainContainer } from "../../mainContainer";
import { Input, Button } from "../../../components";

import "./parts.scss";

export const Parts: React.FC = () => {
  const initialState = {
    name: "",
    secondName: "",
    document: "",
    phone: {
      ddd: 0,
      number: 0,
    },
    email: "",
  };

  const [form, setForm] = useState<Part>(initialState);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const handleChange = (
    key: keyof Part,
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setForm((prev) => ({
      ...prev,
      [key]: event.target.value,
    }));
  };

  const handlePhoneChange = (
    key: keyof Phone,
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setForm((prev) => ({
      ...prev,
      phone: {
        ...prev.phone,
        [key]: event.target.value,
      },
    }));
  };

  const handleSave = async () => {
    try {
      await driver.registerPart(form);
      setForm(initialState);
    } catch (error) {
      console.log("error", { ...error });
    }
  };

  const handleDisabled = () => {
    const values = Object.values(form);
    for (const value of values) {
      console.log(typeof value);
      if (!value) {
        return true;
      }
    }
    return false;
  };

  useEffect(() => {
    console.log(form);
    setButtonDisabled(handleDisabled());
  }, [form]);

  return (
    <MainContainer>
      <div className="part-container">
        <h1 className="part-title">Parte</h1>
        <div className="part-form">
          <Input
            label="Nome"
            placeholder="Nome da parte"
            onChange={(event) => handleChange("name", event)}
            value={form["name"]}
          />
          <Input
            label="Sobrenome"
            placeholder="Sobrenome da parte"
            onChange={(event) => handleChange("secondName", event)}
            value={form["secondName"]}
          />
          <Input
            label="CPF"
            placeholder="CPF da parte"
            onChange={(event) => handleChange("document", event)}
            value={form["document"]}
          />
          <Input
            label="Email"
            placeholder="Email da parte"
            onChange={(event) => handleChange("email", event)}
            value={form["email"]}
          />
          <div
            style={{
              display: "flex",
            }}
          >
            <div
              style={{
                maxWidth: 40,
                marginRight: 5,
              }}
            >
              <Input
                label="DDD"
                placeholder="( )"
                onChange={(event) => handlePhoneChange("ddd", event)}
                value={form.phone["ddd"].toString()}
                maxLength={2}
              />
            </div>
            <div>
              <Input
                label="Número"
                placeholder="Número do telefone"
                onChange={(event) => handlePhoneChange("number", event)}
                value={form.phone["number"].toString()}
                maxLength={9}
              />
            </div>
          </div>
          <div className="button-container">
            <Button
              buttonTitle="Cadastrar"
              id="contract-save-button"
              onClick={handleSave}
              disabled={buttonDisabled || !form.phone.ddd || !form.phone.number}
            />
          </div>
        </div>
      </div>
    </MainContainer>
  );
};
