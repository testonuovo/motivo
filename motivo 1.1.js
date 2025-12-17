<style>
button {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 19px;
  background: red;
  color: white;
  transition: background 0.3s, transform 0.2s;
  transition: background 0,5s, transform 0.3s;
}

button:hover {
  background: orange;
  transform: scale(1.1) rotate(-2deg);
  animation: shake 0.3s;
}

@keyframes shake {
  0% { transform: scale(1.1) rotate(-2deg);}
  50% { transform: scale(1.1) rotate(2deg);}
  100% { transform: scale(1.1) rotate(-2deg);}
}

#orario {
  font-weight: bold;
  transition: color 0.5s;
}
</style>
<script>
function aggiornaOrario() {
  const ora = new Date();
  const ore = ora.getHours().toString().padStart(2,'0');
  const minuti = ora.getMinutes().toString().padStart(2,'0');
  const secondi = ora.getSeconds().toString().padStart(2,'0');
  const elementoOrario = document.getElementById("orario");
  elementoOrario.textContent = `Ora: ${ore}:${minuti}:${secondi}`;
  
  // Cambio colore dinamico
  const colori = ["yellow", "lightgreen", "orange", "pink", "cyan"];
  elementoOrario.style.color = colori[Math.floor(Math.random() * colori.length)];
}

setInterval(aggiornaOrario, 1000);
</script>