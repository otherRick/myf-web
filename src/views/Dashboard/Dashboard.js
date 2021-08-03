import Input from "../../components/Input/Input";
import DatePicker from "../../components/DatePicker/DatePicker";
import Link from "../../components/Link/Link";

function Dashboard() {
  return (
    <div>
      <Input label="exemplo" placeholder="o que eu quiser" />
      <DatePicker label="Foi hoje ?" />
      <Link to="/category">Criar Categoria</Link>
      {/* select - futuro */}
    </div>
  );
}

export default Dashboard;
