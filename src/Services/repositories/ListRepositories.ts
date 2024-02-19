import { List } from "../../Types/Types";
import { api } from "../api";

class ListRespositories {
  static async getLists() {
    try {
      const response = await api.get("/lists");
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error("Erro ao localizar listas:", error);
      throw error;
    }
  }

  static async getListById(id: number) {
    try {
      const response = await api.get(`/lists/${id}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error("Erro ao localizar lista:", error);
      throw error;
    }
  }

  static async deleteList(id: number) {
    try {
      const response = await api.delete(`/lists/${id}`);
      console.log(response.data.message);
    } catch (error) {
      console.error("Erro ao deletar lista:", error);
      throw error;
    }
  }

  static async updateList(id: number, bodyJson: {}) {
    try {
      const response = await api.put(`/lists/${id}`, bodyJson);
      console.log(response.data);
    } catch (error) {
      console.error("Erro ao localizar lista:", error);
      throw error;
    }
  }

  static async createList(newList: List) {
    try {
      await api.post("/lists", newList);
      return true;
    } catch (error) {
      console.error("Erro ao criar lista:", error);
      return false;
    }
  }
}

export default ListRespositories;
