import { RestClient } from "./RestClient";

// Todo: Move to models.
export type User = {
  readonly id: string;
  readonly email: string;
  readonly name: string;
  readonly createdAt: Date;
};

const isDevelopment = true;
const BASE_URL = isDevelopment
  ? "http://localhost:4000"
  : "https://frog02-40476.wykr.es";

export class AuthService {
  private readonly client: RestClient;

  constructor() {
    this.client = new RestClient(
      `${BASE_URL}/api/users`,
      {
        "Content-Type": "application/json",
      },
      { credentials: "include" }
    );
  }

  async register(email: string, password: string): Promise<User> {
    try {
      const { user } = await this.client.post(`/`, { email, password });
      return user;
    } catch (error) {
      console.error(error);
      throw error; // figure out handling
    }
  }

  async login(email: string, password: string): Promise<User> {
    try {
      const { user } = await this.client.post(`/session`, { email, password });
      return user;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async logout(): Promise<void> {
    try {
      return await this.client.delete(`/session`);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async getCurrentUser(): Promise<User> {
    try {
      const { user } = await this.client.get(`/session`);
      return user;
    } catch (error) {
      // console.error(error);
      throw error;
    }
  }

  async changeUsersName(name: string): Promise<User> {
    try {
      const { user } = await this.client.patch(`/name`, { name });
      return user;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async changeUsersEmail(email: string): Promise<User> {
    try {
      const { user } = await this.client.patch(`/email`, { email });
      return user;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
