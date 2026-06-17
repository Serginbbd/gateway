const token = localStorage.getItem("token");

async function carregarSaldo() {
  try {
    const response = await fetch("http://localhost:3000/me", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    const data = await response.json();

    if (data.user) {
      document.getElementById("balance").innerText =
        Number(data.user.balance).toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL"
        });
    }
  } catch (error) {
    console.log("Erro ao carregar saldo", error);
  }
}

carregarSaldo();