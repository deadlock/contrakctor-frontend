import React, { useState } from "react";

import driver from "../../../api/contracts";
import save from "save-file";
import { MainContainer } from "../../mainContainer";
import { Input, Button } from "../../../components";

import "./contracts.scss";

export const ContractSearch: React.FC = () => {
  const initialState = {
    id: "",
    expiration: "",
    file: "",
    startDate: "",
    title: "",
    parts: [
      {
        document: "",
        email: "",
        name: "",
        secondName: "",
        phone: {
          ddd: 0,
          number: 0,
        },
      },
    ],
  };
  const [contract, setContract] = useState<ContractResponse>(initialState);

  const [title, setTitle] = useState("");

  const handleSearch = async () => {
    try {
      const contract = await driver.getContracts(title);
      window.open("http://localhost:8080/rest/v1/modelo.pdf");
      if (contract) {
        setContract(contract);
      }
    } catch (error) {
      console.log("Erro ao buscar parte", error);
    }
  };

  const handleDelete = async () => {
    try {
      console.log("id", contract);
      await driver.deleteContract(contract.id);
      setContract(initialState);
      setTitle("");
    } catch (error) {
      console.log("Erro ao buscar contrato", error);
    }
  };

  return (
    <MainContainer>
      <div className="search-contract-container">
        <h1 className="search-contract-title">Procurar Contrato</h1>
        <div className="search-contract-form">
          <div className="search-form">
            <Input
              label="Título"
              placeholder="Título do contrato"
              value={title}
              onChange={(event) => {
                setTitle(event.target?.value);
              }}
            />

            <Button
              width="100px"
              buttonTitle="Pesquisar"
              id="contract-save-button"
              onClick={handleSearch}
              disabled={!title}
            />
          </div>
          <Input
            label="Título"
            placeholder="Título do contrato"
            value={contract.title}
            disabled
          />
          <Input
            label="Data de início"
            placeholder="Data de início do contrato"
            value={contract.startDate}
            disabled
          />
          <Input
            label="Data de expiração"
            placeholder="Data de expiração do contrato"
            value={contract.expiration}
            disabled
          />
          <Input
            label="Arquivo"
            placeholder="Arquivo do contrato"
            value={contract.file}
            disabled
          />
          <Input
            label="Partes associadas"
            placeholder="Quantidade de partes associadas"
            value={`Total de partes associadas:  ${
              contract.title ? contract.parts?.length : 0
            }`}
            disabled
          />
          <div className="button-container">
            <Button
              buttonTitle="Excluir"
              id="contract-save-button"
              onClick={handleDelete}
              type="cancel"
            />
          </div>
        </div>
      </div>
    </MainContainer>
  );
};
