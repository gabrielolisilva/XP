import Container from "@mui/material/Container/Container";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useState } from "react";
import { signInEndPoint } from "../services/authAPI";
import { IUser } from "../interfaces/interfaces";

interface ILoginScreenProps {
  onSignIn: (user: IUser) => void;
}

const LoginScreen = (props: ILoginScreenProps) => {
  const [email, setEmail] = useState("usuario@email.com");
  const [senha, setSenha] = useState("1234");
  const [error, setError] = useState("");
  function signIn(e: React.FormEvent) {
    e.preventDefault();
    signInEndPoint(email, senha).then(props.onSignIn, () => {
      setError("Email não encontrado ou senha incorreta");
    });
  }

  return (
    <Container maxWidth="md">
      <h1>Despesas React</h1>
      <p>Para teste digite usuário usuario@email.com e senha 1234</p>
      <form onSubmit={signIn}>
        <TextField
          margin="normal"
          label="E-mail"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          type="password"
          margin="normal"
          label="Senha"
          fullWidth
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        {error && (
          <Box
            bgcolor="rbg(253,236,234)"
            borderRadius="4px"
            padding="16px"
            margin="16px 0"
          >
            {error}
          </Box>
        )}

        <Box marginTop="16px" textAlign="right">
          <Button type="submit" variant="contained" color="primary">
            Entrar
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default LoginScreen;
