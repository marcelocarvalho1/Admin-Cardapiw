import React, { useState } from "react";

interface Lojista {
  id: number;
  nome: string;
  email: string;
  status: "ativo" | "inativo";
}

export const LojistasPage: React.FC = () => {
  const [lojistas, setLojistas] = useState<Lojista[]>([
    { id: 1, nome: "Loja Exemplo 1", email: "loja1@email.com", status: "ativo" },
    { id: 2, nome: "Loja Exemplo 2", email: "loja2@email.com", status: "inativo" },
  ]);

  const toggleStatus = (id: number) => {
    setLojistas((prev) =>
      prev.map((lojista) =>
        lojista.id === id
          ? {
              ...lojista,
              status: lojista.status === "ativo" ? "inativo" : "ativo",
            }
          : lojista
      )
    );
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Usuários → Lojistas</h2>
      <button
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        onClick={() => alert("Abrir modal de cadastro")}
      >
        + Cadastrar Lojista
      </button>

      <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border">ID</th>
            <th className="p-2 border">Nome</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Status</th>
            <th className="p-2 border">Ações</th>
          </tr>
        </thead>
        <tbody>
          {lojistas.map((lojista) => (
            <tr key={lojista.id} className="text-center">
              <td className="p-2 border">{lojista.id}</td>
              <td className="p-2 border">{lojista.nome}</td>
              <td className="p-2 border">{lojista.email}</td>
              <td className="p-2 border">
                <span
                  className={`px-2 py-1 rounded text-white ${
                    lojista.status === "ativo" ? "bg-green-500" : "bg-red-500"
                  }`}
                >
                  {lojista.status}
                </span>
              </td>
              <td className="p-2 border flex gap-2 justify-center">
                <button
                  className="px-2 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                  onClick={() => alert("Editar " + lojista.nome)}
                >
                  Editar
                </button>
                <button
                  className="px-2 py-1 bg-indigo-500 text-white rounded hover:bg-indigo-600"
                  onClick={() => alert("Gerenciar " + lojista.nome)}
                >
                  Gerenciar
                </button>
                <button
                  className="px-2 py-1 bg-gray-500 text-white rounded hover:bg-gray-600"
                  onClick={() => toggleStatus(lojista.id)}
                >
                  Ativar/Inativar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
