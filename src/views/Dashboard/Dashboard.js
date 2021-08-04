import Input from "../../components/Input/Input";
import DatePicker from "../../components/DatePicker/DatePicker";
import Link from "../../components/Link/Link";

import "./styles.css";

function Dashboard() {
  return (
    <div className="MB">
      <Input label="O que movimentamos ?" placeholder="o que eu quiser" />
      <DatePicker label="Foi hoje ?" />
      <p className="LK">
        <Link to="/category">Criar Categoria</Link>
      </p>
      {/* select - futuro */}
    </div>
  );
}

export default Dashboard;
