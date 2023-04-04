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

export interface IHeaderInfoProps {
  user: IUser | null;
  onSignOut: () => void;
}

export interface IUser {
  nome: string;
  email: string;
}
