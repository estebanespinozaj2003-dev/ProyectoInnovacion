function preguntarIA() {
  let pregunta = document.getElementById("pregunta").value;

  // Normalizar: minúsculas y sin tildes
  pregunta = pregunta
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();

  let respuesta = "";

  if (pregunta === "") {
    document.getElementById("respuesta").innerHTML = "🤖 MateIA: Escribe una pregunta primero.";
    return;
  }

  // =========================
  // OPERACIONES DIRECTAS: 5+5
  // =========================
  let operacion = pregunta.match(/(\d+)\s*([\+\-\*x\/])\s*(\d+)/);
  if (operacion) {
    let a = parseInt(operacion[1]);
    let signo = operacion[2];
    let b = parseInt(operacion[3]);
    let resultado = 0;

    if (signo === "+") {
      resultado = a + b;
      respuesta = "➕ SUMA<br>🍎 " + a + " + " + b + " = <b>" + resultado + "</b>";
    } 
    else if (signo === "-") {
      resultado = a - b;
      respuesta = "➖ RESTA<br>🍪 " + a + " - " + b + " = <b>" + resultado + "</b>";
    } 
    else if (signo === "*" || signo === "x") {
      resultado = a * b;
      respuesta = "✖️ MULTIPLICACION<br>⭐ " + a + " x " + b + " = <b>" + resultado + "</b>";
    } 
    else if (signo === "/") {
      resultado = a / b;
      respuesta = "➗ DIVISION<br>🍕 " + a + " ÷ " + b + " = <b>" + resultado + "</b>";
    }

    document.getElementById("respuesta").innerHTML = "MateIA:<br>" + respuesta;
    document.getElementById("pregunta").value = "";
    document.getElementById("pregunta").focus();
    return; // Importante para que no siga evaluando lo de abajo
  }

  // =========================
  // RESPUESTAS RAPIDAS POR TEMA
  // =========================
  if (pregunta === "suma") {
    respuesta = "➕ SUMA<br>La suma sirve para juntar cantidades.<br>Ejemplo: 🍎 2 + 3 = 5.<br>Escribe: 'como se suma' o '5+5'.";
  }
  else if (pregunta === "resta") {
    respuesta = "➖ RESTA<br>La resta sirve para quitar cantidades.<br>Ejemplo: 🍪 5 - 2 = 3.<br>Escribe: 'como se resta' o '8-3'.";
  }
  else if (pregunta === "multiplicacion" || pregunta === "multiplicar") {
    respuesta = "✖️ MULTIPLICACION<br>Multiplicar es sumar muchas veces.<br>Ejemplo: ⭐ 3 x 4 = 12.<br>Escribe: 'tabla del 4' o '6x3'.";
  }
  else if (pregunta === "division" || pregunta === "dividir") {
    respuesta = "➗ DIVISION<br>Dividir es repartir en partes iguales.<br>Ejemplo: 🍕 12 ÷ 3 = 4.<br>Escribe: '12/3'.";
  }
  else if (pregunta === "fracciones" || pregunta === "fraccion") {
    respuesta = "🥧 FRACCIONES<br>Una fraccion es una parte de un todo.<br>Ejemplo: 1/2 es la mitad de algo.";
  }
  else if (pregunta === "tablas") {
    respuesta = "📘 TABLAS<br>Escribe por ejemplo: 'tabla del 5' para ver una tabla completa.";
  }
  else if (pregunta === "problemas") {
    respuesta = "🧠 PROBLEMAS<br>Escribe un problema con numeros.<br>Ejemplo: 'Tengo 5 manzanas y regalo 2. ¿Cuantas me quedan?'";
  }
  else if (pregunta === "problemas con comida") {
    respuesta = "🍕 PROBLEMAS CON COMIDA<br>Ejemplo: 'Tenia 8 galletas y me comi 3. ¿Cuantas quedan?'";
  }

  if (respuesta !== "") {
    document.getElementById("respuesta").innerHTML = "MateIA:<br>" + respuesta;
    document.getElementById("pregunta").value = "";
    document.getElementById("pregunta").focus();
    return;
  }


  // =========================
  // NUMEROS NATURALES
  // =========================
  if (pregunta.includes("numero natural") || pregunta.includes("numeros naturales")) {
    respuesta = "🔢 Los números naturales son los que usamos para contar.<br>Ejemplo: 1, 2, 3, 4, 5...";
  } 
  else if (pregunta.includes("para que sirven los numeros")) {
    respuesta = "🔢 Sirven para contar personas, objetos, animales y cosas.";
  }
  else if (pregunta.includes("ejemplo de numero natural")) {
    respuesta = "🔢 Ejemplos: 3, 7, 10, 25.";
  }

  // SUMA
  else if (pregunta.includes("que es la suma")) {
    respuesta = "➕ La suma es juntar cantidades.<br>🍎 Ejemplo: 2 manzanas + 1 manzana = 3 manzanas.";
  }
  else if (pregunta.includes("como se suma")) {
    respuesta = "➕ Para sumar, unes los números y cuentas el total.<br>Ejemplo: 4 + 2 = 6.";
  }
  else if (pregunta.includes("suma con llevadas")) {
    respuesta = "➕ En la suma con llevadas, cuando pasas de 9, llevas una al siguiente número.<br>Ejemplo: 8 + 5 = 13.";
  }

  // RESTA
  else if (pregunta.includes("que es la resta")) {
    respuesta = "➖ La resta es quitar cantidades.<br>🍪 Ejemplo: 5 galletas - 2 galletas = 3 galletas.";
  }
  else if (pregunta.includes("como se resta")) {
    respuesta = "➖ Para restar, quitas un número del otro.<br>Ejemplo: 7 - 3 = 4.";
  }
  else if (pregunta.includes("resta con llevadas")) {
    respuesta = "➖ En la resta con llevadas, pides prestado al número de al lado.<br>Ejemplo: 12 - 7 = 5.";
  }

  // MULTIPLICACION
  else if (pregunta.includes("que es multiplicar") || pregunta.includes("multiplicacion")) {
    respuesta = "✖️ Multiplicar es sumar varias veces el mismo número.<br>⭐ Ejemplo: 3 x 4 = 4 + 4 + 4.";
  }
  else if (pregunta.includes("para que sirve multiplicar")) {
    respuesta = "✖️ Sirve para sumar rápido cuando hay muchas cantidades iguales.";
  }
  else if (pregunta.includes("tabla del")) {
    let num = pregunta.match(/\d+/);
    if (num) {
      let n = parseInt(num[0]);
      respuesta = "📘 Tabla del " + n + ":<br>";
      for (let i = 1; i <= 10; i++) {
        respuesta += "✏️ " + n + " x " + i + " = " + (n * i) + "<br>";
      }
    } else {
      respuesta = "❓ Dime qué tabla quieres, por ejemplo: tabla del 5.";
    }
  }

  // DIVISION
  else if (pregunta.includes("que es dividir") || pregunta.includes("division")) {
    respuesta = "➗ Dividir es repartir en partes iguales.<br>🍕 Ejemplo: 12 ÷ 3 = 4.";
  }
  else if (pregunta.includes("como se divide")) {
    respuesta = "➗ Para dividir, repartes el número en partes iguales.<br>Ejemplo: 10 ÷ 2 = 5.";
  }
  else if (pregunta.includes("division exacta")) {
    respuesta = "➗ Una división exacta es cuando no sobra nada.<br>Ejemplo: 8 ÷ 4 = 2.";
  }
  else if (pregunta.includes("division inexacta")) {
    respuesta = "➗ Una división inexacta es cuando sobra algo.<br>Ejemplo: 7 ÷ 2 = 3 y sobra 1.";
  }

  // FRACCIONES
  else if (pregunta.includes("que es una fraccion")) {
    respuesta = "🥧 Una fracción es una parte de un todo.<br>Ejemplo: 1/2 es la mitad.";
  }
  else if (pregunta.includes("numerador")) {
    respuesta = "🥧 El numerador es el número de arriba.<br>Dice cuántas partes tomas.";
  }
  else if (pregunta.includes("denominador")) {
    respuesta = "🥧 El denominador es el número de abajo.<br>Dice en cuántas partes se divide el todo.";
  }

  // PROBLEMAS GENERALES
  else if (pregunta.includes("problema")) {
    respuesta = "🧠 Lee el problema, mira qué te piden y elige la operación correcta.";
  }

  // MENSAJES MOTIVADORES
  else if (pregunta.includes("no entiendo")) {
    respuesta = "😊 No te preocupes, vamos paso a paso.<br>Dime qué parte no entiendes.";
  }
  else if (pregunta.includes("es dificil")) {
    respuesta = "💪 Todo parece difícil al inicio, pero practicando se vuelve fácil.";
  }

  // DOCENTE
  else if (pregunta.includes("docente") || pregunta.includes("profesor")) {
    respuesta = "👩‍🏫 Esta plataforma ayuda a reforzar matemáticas con práctica y apoyo.";
  }

  // PROBLEMAS SIMPLES CON PALABRAS
  else if (pregunta.includes("mas") || pregunta.includes("suman") || pregunta.includes("juntan")) {
    let nums = pregunta.match(/\d+/g);
    if (nums && nums.length >= 2) {
      let a = parseInt(nums[0]);
      let b = parseInt(nums[1]);
      respuesta = "➕ Vamos a sumar:<br>🍎 " + a + " + " + b + " = " + (a + b);
    } else {
      respuesta = "✏️ Escribe el problema con números.";
    }
  }

  else if (pregunta.includes("menos") || pregunta.includes("quitan") || pregunta.includes("regalo") || pregunta.includes("gasto")) {
    let nums = pregunta.match(/\d+/g);
    if (nums && nums.length >= 2) {
      let a = parseInt(nums[0]);
      let b = parseInt(nums[1]);
      respuesta = "➖ Vamos a restar:<br>🍪 " + a + " - " + b + " = " + (a - b);
    } else {
      respuesta = "✏️ Escribe el problema con números.";
    }
  }

  else if (pregunta.includes("cada uno") || pregunta.includes("cada") || pregunta.includes("repartir") || pregunta.includes("partes iguales")) {
    let nums = pregunta.match(/\d+/g);
    if (nums && nums.length >= 2) {
      let a = parseInt(nums[0]);
      let b = parseInt(nums[1]);
      respuesta = "➗ Vamos a dividir:<br>🍕 " + a + " ÷ " + b + " = " + (a / b);
    } else {
      respuesta = "✏️ Escribe el problema con números.";
    }
  }

  else if (pregunta.includes("cada caja") || pregunta.includes("cada grupo") || pregunta.includes("veces")) {
    let nums = pregunta.match(/\d+/g);
    if (nums && nums.length >= 2) {
      let a = parseInt(nums[0]);
      let b = parseInt(nums[1]);
      respuesta = "✖️ Vamos a multiplicar:<br>⭐ " + a + " x " + b + " = " + (a * b);
    } else {
      respuesta = "✏️ Escribe el problema con números.";
    }
  }

  // =========================
  // NUEVO: RETROALIMENTACIÓN Y PREGUNTAS FUERA DE CONTEXTO
  // =========================
  if (respuesta === "") {
    const temasRetro = {
      "numeros naturales": "🔢 Números Naturales: Son los números que usamos para contar. Ejemplo: 1,2,3,4...",
      "suma": "➕ Suma: Juntar cantidades. Ejemplo: 2 + 3 = 5",
      "resta": "➖ Resta: Quitar cantidades. Ejemplo: 5 - 2 = 3",
      "multiplicacion": "✖️ Multiplicación: Sumar varias veces el mismo número. Ejemplo: 3 x 4 = 12",
      "division": "➗ División: Repartir en partes iguales. Ejemplo: 12 ÷ 3 = 4",
      "fraccion": "🥧 Fracciones: Una parte de un todo. Ejemplo: 1/2",
      "tablas": "📘 Tablas: Escribe 'tabla del 5' para ver la tabla completa",
      "problemas": "🧠 Problemas: Lee, identifica operación y calcula la respuesta"
    };

    // Ver si el usuario pide retroalimentación
    if (pregunta.includes("resumen") || pregunta.includes("retroalimentacion") || pregunta.includes("repasar")) {
      respuesta = "📚 Retroalimentación de todos los temas:<br>";
      for (let t in temasRetro) {
        respuesta += temasRetro[t] + "<br>";
      }
    } 
    else {
      // Preguntas fuera de tema
      respuesta = "🤖 Esa pregunta no está dentro de los temas. Puedes preguntarme sobre:<br>";
      for (let t in temasRetro) {
        respuesta += "➤ " + t + "<br>";
      }
    }
  }

  document.getElementById("respuesta").innerHTML = "MateIA:<br>" + respuesta;
  document.getElementById("pregunta").value = "";
  document.getElementById("pregunta").focus();
}
