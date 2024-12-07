import React, { useState } from 'react';

function ListarTarefa() {
  const [tarefas, setTarefas] = useState(['Tarefa 1', 'Tarefa 2', 'Tarefa 3']);
  const [novaTarefa, setNovaTarefa] = useState('');

  const adicionarTarefa = () => {
    if (novaTarefa) {
      setTarefas([...tarefas, novaTarefa]);
      setNovaTarefa(''); // Limpa o campo de input
    }
  };

  return (
    <div>
      <h2>Lista de Tarefas</h2>
      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={index}>{tarefa}</li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)}
          placeholder="Digite uma nova tarefa"
        />
        <button onClick={adicionarTarefa}>Adicionar Tarefa</button>
      </div>
    </div>
  );
}

export default ListarTarefa;
