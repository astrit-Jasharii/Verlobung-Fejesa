document.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("click", async function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const personen = document.getElementById("anzahl").value;
    const antwort = btn.value === "komme" ? "Ich komme" : "Ich komme nicht";

    if (!name || !personen) {
      alert("Bitte gib deinen Namen und die Anzahl Personen an. / Ju lutem shkruani emrin dhe numrin e personave");
      return;
    }

    // ➕ Daten an Supabase senden
    const { error } = await supabase.from("Gäste").insert([
      { name, antwort, Personen: parseInt(personen) }
    ]);

    if (error) {
      alert("Fehler beim Speichern! / Gabim gjatë ruajtjes!");
      console.error(error);
    } else {
      alert("Antwort gespeichert! / Përgjigjja u ruajt me sukses!");
      document.getElementById("replyForm").reset();
    }
  });
});
