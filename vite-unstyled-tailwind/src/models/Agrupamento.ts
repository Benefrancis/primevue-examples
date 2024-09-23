import Parametro from "./Parametro";

export default interface Agrupamento {
    code: number;
    name: string;
    elementos: Omit<Parametro, 'nome'>[]; // Exclui o campo 'nome' dos itens de 'analises'
}