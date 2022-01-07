import { useRouter } from "next/router";
import {
  DASHBOARD_PAGE,
  HOME_PAGE,
  LOGIN_PAGE,
  NETWORKS_PAGE,
  NETWORKS_REGISTER,
  PROJECTS_PAGE,
  REGISTER_PAGE,
} from "./paths";

const route = useRouter();

export function navigateToLogin() {
  route.push(HOME_PAGE);
}

export function navigateToLogin() {
  route.push(LOGIN_PAGE);
}

export function navigateToRegister() {
  route.push(REGISTER_PAGE);
}

export function navigateToNetworks() {
  route.push(NETWORKS_PAGE);
}

export function navigateToNetworksRegister() {
  route.push(NETWORKS_REGISTER);
}

export function navigateToDashboard() {
  route.push(DASHBOARD_PAGE);
}

export function navigateToProjects() {
  route.push(PROJECTS_PAGE);
}
