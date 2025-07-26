document.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const antwort = btn.value === "komme" ? "Ich komme" : "Ich komme nicht";

    if (!name) {
      alert("Bitte gib deinen Namen ein./ Ju lutem shkruani emrin tuaj");
      return;
    }

    const csvContent = `Name,Antwort\n${name},${antwort}`;
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `verlobung_antwort_${name.replace(/\s+/g, "_")}.csv`;
    link.click();
  });
});
