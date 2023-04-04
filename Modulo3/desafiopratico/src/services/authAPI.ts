import { IDespesas, IUser } from "../interfaces/interfaces";

function handleResponse(resp: Response) {
  if (resp.ok) {
    return resp.json();
  } else {
    throw new Error(resp.statusText);
  }
}

export async function getDespesasEndPoint(date: string): Promise<IDespesas[]> {
  return await fetch(`http://localhost:3500/despesas?mes=${date}&_sort=dia`, {
    credentials: "include",
  }).then(handleResponse);
}

export async function getUserEndPoint(): Promise<IUser> {
  return await fetch("http://localhost:3500/sessao/usuario", {
    credentials: "include",
  }).then(handleResponse);
}

export async function signInEndPoint(
  email: string,
  senha: string
): Promise<IUser> {
  return await fetch("http://localhost:3500/sessao/criar", {
    credentials: "include",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, senha }),
  }).then(handleResponse);
}

export async function signOutEndPoint() {
  return await fetch(`http://localhost:3500/sessao/finalizar`, {
    credentials: "include",
    method: "POST",
  }).then(handleResponse);
}
