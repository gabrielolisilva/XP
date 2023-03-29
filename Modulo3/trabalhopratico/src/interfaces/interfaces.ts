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
  currentDespesas: IDespesas[];
  yearInfo: string;
  monthInfo: string;
  setYearInfo: React.Dispatch<React.SetStateAction<string>>;
  setMonthInfo: React.Dispatch<React.SetStateAction<string>>;
}

export interface ITableProps {
  currentDespesas: IDespesas[];
}
