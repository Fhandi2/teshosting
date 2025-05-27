    const kata = [
      { kata: "nuhu", arti: "air" },
      { kata: "nair", arti: "matahari" },
      { kata: "ten", arti: "makan" },
      { kata: "rum", arti: "tidur" },
      { kata: "yo", arti: "pergi" },
      { kata: "yo", arti: "pergi" },
      { kata: "yo", arti: "pergi" },
      { kata: "yo", arti: "pergi" },
      { kata: "yo", arti: "pergi" },
      { kata: "yo", arti: "pergi" },
      { kata: "yo", arti: "pergi" },
      { kata: "yo", arti: "pergi" },
      { kata: "yo", arti: "pergi" },
      { kata: "yo", arti: "pergi" },
      { kata: "yo", arti: "pergi" },
      { kata: "yo", arti: "pergi" },
      { kata: "yo", arti: "pergi" },
      { kata: "yo", arti: "pergi" },
      { kata: "yo", arti: "pergi" },
      { kata: "yo", arti: "pergi" },
      { kata: "yo", arti: "pergi" },
      { kata: "yo", arti: "pergi" },
      { kata: "yo", arti: "pergi" },
      { kata: "yo", arti: "pergi" },
      { kata: "yo", arti: "pergi" },
      { kata: "yo", arti: "pergi" },
      { kata: "yo", arti: "pergi" },
      // kamu bisa tambahkan sebanyak mungkin data di sini
    ];

    const card2 = document.getElementById("cards");

    kata.forEach(item => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <h3>${item.kata}</h3>
        <p>Arti: ${item.arti}</p>
      `;
      card2.appendChild(card);
    });


    // ===================================================

    const tomb = document.querySelector(".up");
    const pil = document.querySelector(".pil");


    tomb.addEventListener('click', function() {
      pil.classList.toggle("add");
    });