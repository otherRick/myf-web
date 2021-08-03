import Input from "../../components/Input/Input";
import DatePicker from "../../components/DatePicker/DatePicker";

function Dashboard() {
  return (
    <div>
      <Input label="exemplo" placeholder="o que eu quiser" />
      <DatePicker label="Foi hoje ?" />
      {/* select - futuro */}
    </div>
  );
}

export default Dashboard;
