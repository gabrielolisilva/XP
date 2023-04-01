export interface IDespesas {
  categoria: string;
  descricao: string;
  dia: string;
  id: number;
  mes: string;
  valor: number;
}

export interface IHeaderProps {
  currentDespesas: IDespesas[];
  anoMes: string;
  handleDateUpdate: (date: string) => void;
}

export interface ITableProps {
  currentDespesas: IDespesas[];
}
