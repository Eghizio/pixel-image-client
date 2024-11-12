import { RestClient } from "./RestClient";
import { Pixel } from "../models/Pixel";
import { PixelEntry } from "../models/PixelEntry";

export class PixelsService {
  private readonly client: RestClient;

  constructor() {
    this.client = new RestClient(
      `/api/pixels`,
      {
        "Content-Type": "application/json",
      },
      { credentials: "include" }
    );
  }

  async getAllPixels(): Promise<Pixel[]> {
    try {
      const pixels = await this.client.get(`/`);
      return pixels;
    } catch (error) {
      console.error(error);
      throw error; // Todo: figure out handling
    }
  }

  async getPixelByID(id: string): Promise<Pixel> {
    try {
      const { pixel } = await this.client.get(`/id/${id}`);
      return pixel;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async createPixel(name: string): Promise<Pixel["id"]> {
    try {
      const { id } = await this.client.post(`/`, { name });
      return id;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async deletePixel(id: string): Promise<void> {
    try {
      await this.client.delete(`/${id}`);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async getEntriesForPixel(id: string): Promise<PixelEntry[]> {
    try {
      const entries = await this.client.get(`/id/${id}/entries`);
      return entries;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
