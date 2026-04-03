import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === "Pantanal2024") {
      localStorage.setItem("admin_auth", "true");
      navigate("/admin-grao-duque/panel");
    } else {
      setError("Senha incorreta!");
    }
  };

  return (
    <S.LoginContainer>
      <S.LoginCard>
        <S.LoginTitle>Acesso Restrito</S.LoginTitle>
        <S.LoginForm onSubmit={handleLogin}>
          <S.LoginInput
            type="password"
            placeholder="Digite a senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <S.LoginError>{error}</S.LoginError>}
          <S.LoginButton type="submit">Entrar</S.LoginButton>
        </S.LoginForm>
      </S.LoginCard>
    </S.LoginContainer>
  );
}