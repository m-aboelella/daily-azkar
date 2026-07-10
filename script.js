const morningAzkar = [
  { count: 10, text: "«لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ»" },
  { count: 7, text: "«حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ، عَلَيْهِ تَوَكَّلْتُ، وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ»" },
  { count: 3, text: "«بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ، وَهُوَ السَّمِيعُ الْعَلِيمُ»" },
  { count: 1, text: "«أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ،\nاللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ مَا فِي هَذَا الْيَوْمِ وَخَيْرَ مَا بَعْدَهُ،\nوَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِي هَذَا الْيَوْمِ وَشَرِّ مَا بَعْدَهُ،\nاللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْكَسَلِ وَالْهَرَمِ، وَسُوءِ الْكِبَرِ، وَفِتْنَةِ الدُّنْيَا، وَعَذَابِ الْقَبْرِ»" },
  { count: 1, text: "«اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ،\nوَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ،\nأَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ،\nأَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ بِذَنْبِي،\nفَاغْفِرْ لِي، فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ»" },
  { count: 1, text: "«اللَّهُمَّ بِكَ أَصْبَحْنَا، وَبِكَ أَمْسَيْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ النُّشُورُ»" },
  { count: 1, text: "«اللَّهُمَّ فَاطِرَ السَّمَاوَاتِ وَالْأَرْضِ، عَالِمَ الْغَيْبِ وَالشَّهَادَةِ،\nلَا إِلَهَ إِلَّا أَنْتَ رَبَّ كُلِّ شَيْءٍ وَمَلِيكَهُ،\nأَعُوذُ بِكَ مِنْ شَرِّ نَفْسِي، وَمِنْ شَرِّ الشَّيْطَانِ وَشِرْكِهِ،\nوَأَنْ أَقْتَرِفَ عَلَى نَفْسِي سُوءًا أَوْ أَجُرَّهُ إِلَى مُسْلِمٍ»" },
  { count: 3, text: "«رَضِيتُ بِاللَّهِ رَبًّا، وَبِالْإِسْلَامِ دِينًا، وَبِمُحَمَّدٍ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ نَبِيًّا»" },
  { count: 1, text: "«اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَافِيَةَ فِي الدُّنْيَا وَالْآخِرَةِ،\nاللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي دِينِي وَدُنْيَايَ، وَأَهْلِي وَمَالِي،\nاللَّهُمَّ اسْتُرْ عَوْرَاتِي، وَآمِنْ رَوْعَاتِي،\nاللَّهُمَّ احْفَظْنِي مِنْ بَيْنِ يَدَيَّ وَمِنْ خَلْفِي، وَعَنْ يَمِينِي وَعَنْ شِمَالِي، وَمِنْ فَوْقِي،\nوَأَعُوذُ بِعَظَمَتِكَ أَنْ أُغْتَالَ مِنْ تَحْتِي»" },
  { count: 3, text: "«أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ»" },
  { count: 1, text: "«أَصْبَحْنَا عَلَى فِطْرَةِ الْإِسْلَامِ، وَكَلِمَةِ الْإِخْلَاصِ، وَدِينِ نَبِيِّنَا مُحَمَّدٍ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ،\nوَمِلَّةِ أَبِينَا إِبْرَاهِيمَ حَنِيفًا، وَمَا كَانَ مِنَ الْمُشْرِكِينَ»" },
  { count: 1, text: "«يَا حَيُّ يَا قَيُّومُ، بِرَحْمَتِكَ أَسْتَغِيثُ،\nأَصْلِحْ لِي شَأْنِي كُلَّهُ، وَلَا تَكِلْنِي إِلَى نَفْسِي طَرْفَةَ عَيْنٍ»" }
];

const eveningAzkar = [
  { count: 10, text: morningAzkar[0].text },
  { count: 7, text: morningAzkar[1].text },
  { count: 3, text: morningAzkar[2].text },
  { count: 1, text: "«أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ،\nاللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ مَا فِي هَذِهِ اللَّيْلَةِ، وَخَيْرَ مَا بَعْدَهَا،\nوَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِي هَذِهِ اللَّيْلَةِ، وَشَرِّ مَا بَعْدَهَا،\nاللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْكَسَلِ، وَالْهَرَمِ، وَسُوءِ الْكِبَرِ،\nوَفِتْنَةِ الدُّنْيَا، وَعَذَابِ الْقَبْرِ»" },
  { count: 1, text: morningAzkar[4].text },
  { count: 1, text: "«اللَّهُمَّ بِكَ أَمْسَيْنَا، وَبِكَ أَصْبَحْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ الْمَصِيرُ»" },
  { count: 1, text: morningAzkar[6].text },
  { count: 3, text: morningAzkar[7].text },
  { count: 1, text: morningAzkar[8].text },
  { count: 3, text: morningAzkar[9].text },
  { count: 1, text: "«أَمْسَيْنَا عَلَى فِطْرَةِ الْإِسْلَامِ، وَكَلِمَةِ الْإِخْلَاصِ، وَدِينِ نَبِيِّنَا مُحَمَّدٍ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ،\nوَمِلَّةِ أَبِينَا إِبْرَاهِيمَ حَنِيفًا، وَمَا كَانَ مِنَ الْمُشْرِكِينَ»" },
  { count: 1, text: morningAzkar[11].text }
];

const arabicDigits = new Intl.NumberFormat("ar-EG", { useGrouping: false });
const state = { morning: morningAzkar.map(item => item.count), evening: eveningAzkar.map(item => item.count) };

function repetitionLabel(value) {
  if (value === 1) return "مرة واحدة";
  if (value === 2) return "مرتان";
  if (value >= 3 && value <= 10) return `${arabicDigits.format(value)} مرات`;
  return `${arabicDigits.format(value)} مرة`;
}

function buildCard(item, section, index) {
  const card = document.createElement("article");
  card.className = "zikr-card";
  card.dataset.section = section;
  card.dataset.index = index;

  const number = document.createElement("span");
  number.className = "zikr-number";
  number.textContent = arabicDigits.format(index + 1);
  number.setAttribute("aria-hidden", "true");

  const content = document.createElement("div");
  content.className = "zikr-content";

  const text = document.createElement("p");
  text.className = "zikr-text";
  text.textContent = item.text;
  content.appendChild(text);

  const button = document.createElement("button");
  button.className = "counter";
  button.type = "button";
  button.dataset.initial = item.count;
  button.setAttribute("aria-label", `إنقاص عداد الذكر رقم ${index + 1}. المتبقي ${item.count}`);
  button.innerHTML = `<span class="counter-value">${arabicDigits.format(item.count)}</span><span class="counter-label">${repetitionLabel(item.count)}</span>`;
  button.addEventListener("click", () => decrementCounter(section, index, card, button));

  card.append(number, content, button);
  return card;
}

function renderSection(section, data) {
  const container = document.querySelector(`[data-section="${section}"]`);
  const fragment = document.createDocumentFragment();
  data.forEach((item, index) => fragment.appendChild(buildCard(item, section, index)));
  container.appendChild(fragment);
}

function decrementCounter(section, index, card, button) {
  if (state[section][index] <= 0) return;
  state[section][index] -= 1;
  updateCounter(section, index, card, button);
}

function updateCounter(section, index, card, button) {
  const remaining = state[section][index];
  const value = button.querySelector(".counter-value");
  const label = button.querySelector(".counter-label");

  if (remaining === 0) {
    value.textContent = "تم";
    label.textContent = "اكتمل الذكر";
    button.classList.add("done");
    card.classList.add("completed");
    button.setAttribute("aria-label", `اكتمل الذكر رقم ${index + 1}`);
  } else {
    value.textContent = arabicDigits.format(remaining);
    label.textContent = repetitionLabel(remaining);
    button.classList.remove("done");
    card.classList.remove("completed");
    button.setAttribute("aria-label", `إنقاص عداد الذكر رقم ${index + 1}. المتبقي ${remaining}`);
  }
}

function resetCounters() {
  state.morning = morningAzkar.map(item => item.count);
  state.evening = eveningAzkar.map(item => item.count);

  document.querySelectorAll(".zikr-card").forEach(card => {
    const section = card.dataset.section;
    const index = Number(card.dataset.index);
    const button = card.querySelector(".counter");
    updateCounter(section, index, card, button);
  });

  const toast = document.getElementById("toast");
  toast.classList.add("show");
  window.clearTimeout(resetCounters.toastTimer);
  resetCounters.toastTimer = window.setTimeout(() => toast.classList.remove("show"), 1800);
}

renderSection("morning", morningAzkar);
renderSection("evening", eveningAzkar);
document.getElementById("reset-counters").addEventListener("click", resetCounters);
