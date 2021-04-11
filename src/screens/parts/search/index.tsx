import React, { useState } from "react";

import driver from "../../../api/parts";

import { MainContainer } from "../../mainContainer";
import { Input, Button } from "../../../components";

import "./parts.scss";

export const PartSearch: React.FC = () => {
  const [part, setPart] = useState<PartResponse>({
    id: "",
    name: "",
    secondName: "",
    document: "",
    phone: {
      ddd: "",
      number: "",
    },
    email: "",
  });

  const [document, setDocument] = useState("");

  const handleSearch = async () => {
    try {
      const part = await driver.getParts(document);
      if (part) {
        console.log(part.phone);
        setPart(part);
      }
    } catch (error) {
      console.log("Erro ao buscar parte", error);
    }
  };
  return (
    <MainContainer>
      <div className="part-container">
        <h1 className="part-title">Procurar Parte</h1>
        <div className="part-form">
          <div className="search-form">
            <Input
              label="Documento"
              placeholder="CPF da Parte"
              value={document}
              onChange={(event) => {
                setDocument(event.target?.value);
              }}
            />
            <Button
              width="100px"
              buttonTitle="Pesquisar"
              id="contract-save-button"
              onClick={handleSearch}
              disabled={!document}
            />
          </div>
          <Input
            label="Nome"
            placeholder="Nome da parte"
            value={part["name"]}
            disabled
          />
          <Input
            label="Sobrenome"
            placeholder="Sobrenome da parte"
            value={part["secondName"]}
            disabled
          />
          <Input
            label="CPF"
            placeholder="CPF da parte"
            value={part["document"]}
            disabled
          />
          <Input
            label="Email"
            placeholder="Email da parte"
            value={part["email"]}
            disabled
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
                value={part.phone["ddd"]}
                disabled
              />
            </div>
            <div>
              <Input
                label="Número"
                placeholder="Número do telefone"
                value={part.phone["number"]}
                disabled
              />
            </div>
          </div>
        </div>
      </div>
    </MainContainer>
  );
};
