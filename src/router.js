import { createWebHistory, createRouter } from "vue-router";
import ParentLanding from "./components/Layouts/ParentLanding.vue";
import LandingComponent from "./components/Pages/Landing.vue";
import AboutComponent from "./components/Pages/About.vue";
import LoginComponent from "./components/Pages/Auth/Login.vue";
import RegisterComponent from "./components/Pages/Auth/Register.vue";
import ResetPasswordComponent from "./components/Pages/Auth/PasswordReset.vue";
import BookGameTicketComponent from "./components/Pages/Dashboard/Client/BookGameTicketComponent.vue";
import ResultsComponent from "./components/Pages/Dashboard/Result.vue";
import ClientDashboard from "./components/Pages/Dashboard/Client/Dashboard.vue";
import AdminDashboard from "./components/Pages/Dashboard/Admin/Dashboard.vue";
import AgentDashboard from "./components/Pages/Dashboard/Agent/Dashboard.vue";
import AgentTickets from "./components/Pages/Dashboard/Agent/Tickets.vue";
import AgentResult from "./components/Pages/Dashboard/Agent/Result.vue";
import MyTickets from "./components/Pages/Dashboard/Client/MyTickets.vue";
import DashboardIndex from "./components/Pages/Dashboard/Index.vue";
import SettingsComponent from "./components/Pages/Dashboard/Client/Settings.vue";
// import ParentDashboard from "./components/Pages/Dashboard/ParentDashboard.vue";
import LotteryResult from "./components/Pages/Dashboard/Admin/LotteryResult.vue";
import LotteryTicket from "./components/Pages/Dashboard/Admin/LotteryTicket.vue";
import ManageAgent from "./components/Pages/Dashboard/Admin/ManageAgent.vue";
import ListTickets from "./components/Pages/Dashboard/Admin/ListTickets.vue";

const routes = [
  {
    path: "/",
    name: "landing",
    component: ParentLanding,
    children: [
      {
        path: "/",
        name: "home",
        component: LandingComponent
      },
      {
        path: "/about",
        name: "about",
        component: AboutComponent
      },
      {
        path: "/games",
        name: "play_games",
        component: BookGameTicketComponent
      },
      {
        path: "/results",
        name: "results",
        component: ResultsComponent
      },
      {
        path: "/dashboard",
        name: "dashboard",
        component: DashboardIndex,
        children: [
          {
            path: "",
            name: "dashboard_v1",
            component: getUserDashboard() // Client Dashboard
          },
          {
            path: "tickets",
            name: "my_tickets",
            component: MyTickets // Client Dashboard
          },
          {
            path: "settings",
            name: "settings",
            component: SettingsComponent // All Account Groups
          },
          {
            path: "/lottery/result",
            name: "lottery_results",
            component: LotteryResult
          },
          {
            path: "/agents/tickets",
            name: "agent_tickets",
            component: AgentTickets
          },
          {
            path: "/agents/results",
            name: "agent_tickets_result",
            component: AgentResult
          },
          {
            path: "/participants/agents",
            name: "manage_agents",
            component: ManageAgent
          },
          {
            path: "/lottery/tickets",
            name: "admin_list_tickets",
            component: ListTickets
          }
        ]
      },
      {
        path: "/lottery",
        name: "lottery_ticket",
        component: LotteryTicket
      }
    ]
  },
  {
    path: "/login",
    name: "login",
    component: LoginComponent
  },
  {
    path: "/register",
    name: "register",
    component: RegisterComponent
  },
  {
    path: "/password-reset",
    name: "password_reset",
    component: ResetPasswordComponent
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

function getUserDashboard() {
  var prop = JSON.parse(localStorage.getItem("_prop"));
  if (prop == null) {
    return ClientDashboard;
  }
  if (prop.level) {
    var level = prop.level;
    switch (level) {
      case "4":
        return AdminDashboard;
      case "3":
        return AgentDashboard;
      default:
        break;
    }
  } else {
    return ClientDashboard;
  }
}

export default router;
