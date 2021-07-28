import http from "./http-common";

class Service {
  constructor() {
    // check again
    // this.baseUrl = "http://localhost/pdamatos/index.php/api";
    this.baseUrl = "https://pdamatos.ltd/v1/public/index.php/api"; //"http://localhost/pdamatos/api"
    this.authorization = "?token=" + localStorage.getItem("_key");

    const token = localStorage.getItem("_key");
    if (token) {
      http.defaults.headers.common["Authorization"] = token;
    }

    http.defaults.headers.common["Accept"] = "application/json";
    http.defaults.headers.common["Content-Type"] = "application/json";
  }

  async login(user) {
    let rUrl = this.baseUrl + "/auth/login";
    return await http.post(rUrl, user);
  }

  async register(user) {
    return await http.post(this.baseUrl + "/auth/register", user);
  }

  async logoutUser() {
    return await http.post(this.baseUrl + "/auth/logout" + this.authorization);
  }

  async availableGames() {
    return await http.get(this.baseUrl + "/games/all");
  }

  async getGameDirects(id) {
    return await http.get(this.baseUrl + "/games/" + id + "/directs");
  }

  async getGameSlot(id) {
    return await http.get(this.baseUrl + "/games/" + id + "/times");
  }

  async getGamePoints() {
    return await http.get(this.baseUrl + "/games/points");
  }

  async getGameTicket(code) {
    return await http.get(
      this.baseUrl + "/play/ticket/" + code + this.authorization
    );
  }

  async AgentProcessGameTicket(data) {
    return await http.post(
      this.baseUrl + "/pay/ticket" + this.authorization,
      data
    );
  }

  async getUserTicketList(query) {
    return await http.get(
      this.baseUrl + "/tickets/user" + this.authorization + "&" + query
    );
  }

  async getUserTicketListOnLastLimit(limit) {
    return await http.get(
      this.baseUrl + "/tickets/user" + this.authorization + "&limit=" + limit
    );
  }

  async getUserDashboardAnalytics() {
    return await http.get(
      this.baseUrl + "/tickets/user/analytics" + this.authorization
    );
  }

  async getUserDashboardCurrentTickets() {
    return await http.get(
      this.baseUrl + "/tickets/user/current" + this.authorization
    );
  }

  async getAdminDashboardAnalytics() {
    return await http.get(
      this.baseUrl + "/admin/analytics" + this.authorization
    );
  }

  async uploadLotteryResult(data) {
    return await http.post(
      this.baseUrl + "/admin/result" + this.authorization,
      data
    );
  }

  async getLotteryResult(data) {
    return await http.get(
      this.baseUrl + "/play/load/result" + this.authorization + "&" + data
    );
  }

  async getLotteryResultChecker(data) {
    return await http.get(
      this.baseUrl + "/game/result/checker" + this.authorization + "&" + data
    );
  }

  async getLotteryTickets(date) {
    date = date !== "" || date != "" ? "&date=" + date : "";
    return await http.get(
      this.baseUrl + "/admin/tickets" + this.authorization + date
    );
  }

  async createGameTicket(data) {
    return await http.post(
      this.baseUrl + "/play/ticket" + this.authorization,
      data
    );
  }

  async updateGameTicket(data) {
    return await http.put(
      this.baseUrl + "/play/ticket" + this.authorization,
      data
    );
  }

  async updateGameTicketStake(data) {
    return await http.put(
      this.baseUrl + "/play/ticket/stake" + this.authorization,
      data
    );
  }

  async DeleteGameTicketItem(code, ticket_games_id) {
    return await http.delete(
      this.baseUrl +
        "/play/ticket/" +
        code +
        "/" +
        ticket_games_id +
        this.authorization
    );
  }

  async PrintGameTicket(code) {
    return await http.get(this.baseUrl + "/report/" + code);
  }
}

let instance = new Service();
export default instance;
