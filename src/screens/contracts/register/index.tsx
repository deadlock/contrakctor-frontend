import React, { ChangeEvent, useEffect, useState } from "react";

import driver from "../../../api/contracts";

import { MainContainer } from "../../mainContainer";
import { Input, Button } from "../../../components";

import "./contracts.scss";

export const Contracts: React.FC = () => {
  const initialState = {
    title: "",
    expiration: "",
    startDate: "",
    file: "",
  };
  const [form, setForm] = useState<Contract>(initialState);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const handleChange = async (
    key: keyof Contract,
    event: ChangeEvent<HTMLInputElement>
  ) => {
    let value = event.currentTarget.value;
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  useEffect(() => {
    setButtonDisabled(handleDisabled());
  }, [form]);

  const handleSave = async () => {
    try {
      await driver.registerContract(form);
      setForm(initialState);
    } catch (error) {
      console.log("error", { ...error });
    }
  };

  const handleDisabled = () => {
    const values = Object.values(form);
    console.log(values);
    for (const value of values) {
      if (!value) {
        return true;
      }
    }
    return false;
  };

  return (
    <MainContainer>
      <div className="contract-container">
        <h1 className="contract-title">Contrato</h1>
        <div className="contract-form">
          <Input
            label="Título"
            placeholder="Título do contrato"
            onChange={(event) => handleChange("title", event)}
          />
          <Input
            label="Data de início"
            placeholder="Data de início do contrato"
            onChange={(event) => handleChange("startDate", event)}
          />
          <Input
            label="Data de expiração"
            placeholder="Data de expiração do contrato"
            onChange={(event) => handleChange("expiration", event)}
          />
          <Input
            type="file"
            label="Arquivo"
            placeholder="Anexar pdf do contrato"
            onChange={(event) => handleChange("file", event)}
          />
          <div className="button-container">
            <Button
              buttonTitle="Cadastrar"
              id="contract-save-button"
              onClick={handleSave}
              disabled={buttonDisabled}
            />
          </div>
        </div>
      </div>
    </MainContainer>
  );
};
