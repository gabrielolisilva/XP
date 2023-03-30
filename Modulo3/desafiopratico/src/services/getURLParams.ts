import { useLocation } from "react-router-dom";

export function GetURLParams(param: string): string {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const data = params.get(param);
  return data || "";
}
