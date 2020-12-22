import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/sveikinimai";

class ComponentService {
  getComponent() {
    return axios.get(EMPLOYEE_API_BASE_URL);
  }

  createComponent(sveikinmas) {
    return axios.post(EMPLOYEE_API_BASE_URL, sveikinmas);
  }

  getComponentByID(sveikinmasId) {
    return axios.get(EMPLOYEE_API_BASE_URL + "/" + sveikinmasId);
  }

  updateComponent(sveikinmas, sveikinmasId) {
    return axios.put(EMPLOYEE_API_BASE_URL + "/" + sveikinmasId, sveikinmas);
  }

  deleteComponent(sveikinmasId) {
    return axios.delete(EMPLOYEE_API_BASE_URL + "/" + sveikinmasId);
  }
}

export default new ComponentService();
