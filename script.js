const SUPABASE_URL = "https://hpmvfhsulwydddvmplbp.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhwbXZmaHN1bHd5ZGRkdm1wbGJwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUyOTMyMDgsImV4cCI6MjA4MDg2OTIwOH0.wtcI5MZ-cXNSj_msrezc4LjkTI8deMoNrAursOfshiE";

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function loadData() {
  const statusEl = document.getElementById("status");
  const listEl = document.getElementById("data-list");

  statusEl.textContent = "Ielādē datus no Supabase...";

  const { data, error } = await supabaseClient
    .from("tabula") // Tavas tabulas nosaukums
    .select("*")
    .order("created_at", { ascending: true });

  if (error) {
    console.error(error);
    statusEl.textContent = "Radās kļūda, ielādējot datus.";
    return;
  }

  if (!data || data.length === 0) {
    statusEl.textContent = "Nav datu, ko parādīt.";
    return;
  }

  statusEl.textContent = "Dati ielādēti:";
  listEl.innerHTML = "";

  data.forEach((row) => {
    const li = document.createElement("li");
    li.textContent = `${row.name} – ${row.created_at}`;
    listEl.appendChild(li);
  });
}

document.addEventListener("DOMContentLoaded", loadData);




