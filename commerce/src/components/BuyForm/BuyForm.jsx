import "./BuyForm.css";
import { useForm } from "react-hook-form";
import axios from "axios";

function BuyForm() {
  const { register, handleSubmit } = useForm();

  async function onSubmit(formData) {
    const route = "http://localhost:8000/api/orders/new";
    formData = { ...formData, user_id: 1 };
    console.log(formData);
    try {
      await axios.post(route, formData);
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <div className="BuyForm">
      <label>
        Nome Completo
        <input type="text" {...register("user_name")}></input>
      </label>
      <label>
        CEP
        <input type="text" {...register("address")}></input>
      </label>
      <label>
        Número do Cartão
        <input type="text" {...register("cardNumber")}></input>
      </label>
      <label>
        Data de Validade
        <input type="text" {...register("cardValidity")}></input>
      </label>
      <label>
        Código de Segurança
        <input type="text" {...register("cardSecurityCode")}></input>
      </label>
      <button onClick={() => handleSubmit(onSubmit)()}>Enviar</button>
    </div>
  );
}

export default BuyForm;
