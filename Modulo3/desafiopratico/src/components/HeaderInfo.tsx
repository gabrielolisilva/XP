import { Box, Button } from "@mui/material";
import { IHeaderInfoProps } from "../interfaces/interfaces";
import { signOutEndPoint } from "../services/authAPI";

const HeaderInfo = (props: IHeaderInfoProps) => {
  const { user, onSignOut } = props;

  function sessionSignOut() {
    signOutEndPoint();
    onSignOut();
  }

  return (
    <Box
      padding="2px 40px"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box>
        <h1>Despesas</h1>
      </Box>

      <Box display="flex" alignItems="center" gap="20px">
        <h4>Olá {user?.nome}</h4>

        <Button variant="outlined" onClick={sessionSignOut}>
          Sair
        </Button>
      </Box>
    </Box>
  );
};

export default HeaderInfo;
