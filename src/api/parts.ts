import { AxiosInstance } from "axios";
import HttpClient from "./config";

class PartDriver {
  constructor(private readonly httpClient: AxiosInstance = HttpClient) {}

  public async getParts(document: string): Promise<PartResponse> {
    const result = await this.httpClient.get<PartResponse>(`/part/${document}`);
    return result.data;
  }

  public async registerPart(part: Part): Promise<void> {
    await this.httpClient.post(`/part`, part);
  }

  public async updatePart(id: string, part: Part): Promise<void> {
    await this.httpClient.put(`/part/${id}`, part);
  }

  public async deletePart(id: string): Promise<void> {
    await this.httpClient.delete(`/part/${id}`);
  }
}

export default new PartDriver();
