import { AxiosInstance } from "axios";
import HttpClient from "./config";

class ContractDriver {
  constructor(private readonly httpClient: AxiosInstance = HttpClient) {}

  public async getContracts(title: string): Promise<ContractResponse> {
    const result = await this.httpClient.get<ContractResponse>(
      `/contract/${title}`
    );
    return result.data;
  }

  public async registerContract(contract: Contract): Promise<void> {
    await this.httpClient.post(`/contract`, contract);
  }

  public async updateContract(associate: AssociatePart): Promise<void> {
    await this.httpClient.put(`/contract`, associate);
  }

  public async deleteContract(id: string): Promise<void> {
    await this.httpClient.delete(`/contract/${id}`);
  }
}

export default new ContractDriver();
