import React, { ChangeEvent, useState } from "react";

import driver from "../../../api/contracts";

import { MainContainer } from "../../mainContainer";
import { Input, Button } from "../../../components";
import "./contracts.scss";

export const Associate: React.FC = () => {
  const initialState = {
    contractTitle: "",
    partDocument: "",
  };
  const [form, setForm] = useState<AssociatePart>(initialState);

  const handleChange = (
    key: keyof AssociatePart,
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setForm((prev) => ({
      ...prev,
      [key]: event.target.value,
    }));
  };

  const handleSave = async () => {
    try {
      await driver.updateContract(form);
      setForm(initialState);
    } catch (error) {
      console.log("error", { ...error });
    }
  };

  return (
    <MainContainer>
      <div className="associate-container">
        <h1 className="associate-title">Associar parte à contrato</h1>
        <div className="associate-form">
          <Input
            label="Título"
            placeholder="Título do contrato"
            onChange={(event) => handleChange("contractTitle", event)}
            value={form.contractTitle}
          />
          <Input
            label="Documento"
            placeholder="CPF da parte a ser associada"
            onChange={(event) => handleChange("partDocument", event)}
            value={form.partDocument}
          />
          <div className="button-container">
            <Button
              buttonTitle="Associar"
              id="contract-save-button"
              onClick={handleSave}
              disabled={!form.contractTitle || !form.partDocument}
            />
          </div>
        </div>
      </div>
    </MainContainer>
  );
};
