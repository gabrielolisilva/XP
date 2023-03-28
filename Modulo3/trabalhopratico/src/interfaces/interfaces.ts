export interface IDespesas {
  categoria: string;
  descricao: string;
  dia: string;
  id: number;
  mes: string;
  valor: number;
}

export interface IHeaderProps {
  allDespesas: IDespesas[];
}
