(() => {
  const copy = {
    ar: {
      eyebrow: "وَاذْكُر رَّبَّكَ كَثِيرًا",
      title: "أذكار الصباح والمساء",
      intro: "صفحة هادئة للقراءة، مع عدّاد للأذكار التي تُكرَّر. اضغط زر العدّ بعد كل مرة حتى يصل العدد إلى صفر. الأعداد تعود كما كانت عند تحديث الصفحة.",
      morningNav: "أذكار الصباح",
      eveningNav: "أذكار المساء",
      reset: "إعادة ضبط العدادات",
      guideTitle: "بعد كل مرة تقرأ فيها الذكر",
      guideBody: "اضغط زر العدّاد لينقص الرقم تلقائيًا حتى يظهر لك «تم».",
      guideExample: "اضغط هنا",
      morningTitle: "أذكار الصباح",
      morningSubtitle: "ابدأ يومك بالذكر والطمأنينة",
      eveningTitle: "أذكار المساء",
      eveningSubtitle: "اختم يومك بسكينة وذكر",
      footerNote: "العدادات تعمل داخل الصفحة فقط ولا تُحفظ بعد تحديث الصفحة.",
      backToTop: "العودة إلى الأعلى ↑",
      resetToast: "تمت إعادة ضبط العدادات",
      navigationLabel: "التنقل بين أقسام الصفحة",
      guideLabel: "طريقة استخدام العدّاد"
    },
    en: {
      eyebrow: "REMEMBER YOUR LORD OFTEN",
      title: "Morning & Evening Adhkar",
      intro: "A calm space for daily remembrance. After each recitation, tap the counter so it decreases until it reaches zero. Counters reset when the page is refreshed.",
      morningNav: "Morning adhkar",
      eveningNav: "Evening adhkar",
      reset: "Reset counters",
      guideTitle: "After each recitation",
      guideBody: "Tap the counter once. It will decrease automatically until it shows “Done.”",
      guideExample: "Tap here",
      morningTitle: "Morning Adhkar",
      morningSubtitle: "Begin the day with remembrance and calm",
      eveningTitle: "Evening Adhkar",
      eveningSubtitle: "End the day with remembrance and peace",
      footerNote: "Counters are kept only on this page and reset when it is refreshed.",
      backToTop: "Back to top ↑",
      resetToast: "Counters reset",
      navigationLabel: "Navigate between page sections",
      guideLabel: "How to use the counter"
    }
  };

  const common = {
    tawhid: {
      transliteration: "La ilaha illallah, wahdahu la sharika lah. Lahul-mulku wa lahul-hamd, wa Huwa 'ala kulli shay'in qadir.",
      meaning: "There is no god worthy of worship except Allah alone, without partner. His is the dominion and all praise, and He has power over all things."
    },
    hasbi: {
      transliteration: "Hasbiyallahu la ilaha illa Huwa, 'alayhi tawakkaltu, wa Huwa Rabbul-'Arshil-'Azim.",
      meaning: "Allah is sufficient for me. There is no god worthy of worship except Him. In Him I place my trust, and He is Lord of the Mighty Throne."
    },
    bismillah: {
      transliteration: "Bismillahil-ladhi la yadurru ma'asmihi shay'un fil-ardi wa la fis-sama', wa Huwas-Sami'ul-'Alim.",
      meaning: "In the name of Allah, with whose name nothing on earth or in heaven can cause harm. He is the All-Hearing, the All-Knowing."
    },
    sayyidIstighfar: {
      transliteration: "Allahumma Anta Rabbi, la ilaha illa Anta. Khalaqtani wa ana 'abduk, wa ana 'ala 'ahdika wa wa'dika mastata't. A'udhu bika min sharri ma sana't. Abu'u laka bini'matika 'alayya, wa abu'u bidhanbi, faghfir li, fa innahu la yaghfirudh-dhunuba illa Anta.",
      meaning: "O Allah, You are my Lord. There is no god except You. You created me and I am Your servant. I remain faithful to Your covenant and promise as much as I am able. I seek refuge in You from the evil of what I have done. I acknowledge Your blessings upon me and admit my sin, so forgive me, for no one forgives sins except You."
    },
    fatir: {
      transliteration: "Allahumma Fatiras-samawati wal-ard, 'Alimal-ghaybi wash-shahadah, la ilaha illa Anta, Rabba kulli shay'in wa malikah. A'udhu bika min sharri nafsi, wa min sharrish-shaytani wa shirkih, wa an aqtarifa 'ala nafsi su'an aw ajurrahu ila Muslim.",
      meaning: "O Allah, Originator of the heavens and earth, Knower of the unseen and the seen, there is no god except You, Lord and Sovereign of all things. I seek refuge in You from the evil within myself, from Satan and his call to associate partners with You, and from committing evil against myself or bringing it upon another Muslim."
    },
    raditu: {
      transliteration: "Raditu billahi Rabba, wa bil-Islami dina, wa bi-Muhammadin sallallahu 'alayhi wa sallama Nabiyya.",
      meaning: "I am content with Allah as my Lord, Islam as my religion, and Muhammad ﷺ as my Prophet."
    },
    afiyah: {
      transliteration: "Allahumma inni as'alukal-'afiyata fid-dunya wal-akhirah. Allahumma inni as'alukal-'afwa wal-'afiyata fi dini wa dunyaya, wa ahli wa mali. Allahummastur 'awrati, wa amin raw'ati. Allahummahfazni min bayni yadayya, wa min khalfi, wa 'an yamini, wa 'an shimali, wa min fawqi, wa a'udhu bi'azamatika an ughtala min tahti.",
      meaning: "O Allah, I ask You for well-being in this world and the Hereafter. I ask You for forgiveness and well-being in my faith, worldly affairs, family, and wealth. Conceal my faults and calm my fears. Protect me from before me, behind me, on my right, on my left, and above me; and I seek refuge in Your greatness from unexpected harm from beneath me."
    },
    refuge: {
      transliteration: "A'udhu bikalimatillahit-tammati min sharri ma khalaq.",
      meaning: "I seek refuge in the perfect words of Allah from the evil of what He has created."
    },
    hayyu: {
      transliteration: "Ya Hayyu ya Qayyum, birahmatika astaghith. Aslih li sha'ni kullah, wa la takilni ila nafsi tarfata 'ayn.",
      meaning: "O Ever-Living, O Sustainer of all, by Your mercy I seek help. Set right all of my affairs and do not leave me to myself even for the blink of an eye."
    }
  };

  const morningSupport = [
    common.tawhid,
    common.hasbi,
    common.bismillah,
    {
      transliteration: "Asbahna wa asbahal-mulku lillah, wal-hamdu lillah. La ilaha illallahu wahdahu la sharika lah. Allahumma inni as'aluka khayra ma fi hadhal-yawmi wa khayra ma ba'dah, wa a'udhu bika min sharri ma fi hadhal-yawmi wa sharri ma ba'dah. Allahumma inni a'udhu bika minal-kasali wal-haram, wa su'il-kibar, wa fitnatid-dunya, wa 'adhabil-qabr.",
      meaning: "We have entered the morning, and all sovereignty belongs to Allah. All praise belongs to Allah. There is no god worthy of worship except Allah alone, without partner. O Allah, I ask You for the good of this day and the good that follows it, and I seek Your protection from the evil of this day and the evil that follows it. I seek Your protection from laziness, frailty and hardship in old age, the trials of this world, and the punishment of the grave."
    },
    common.sayyidIstighfar,
    {
      transliteration: "Allahumma bika asbahna, wa bika amsayna, wa bika nahya, wa bika namut, wa ilaykan-nushur.",
      meaning: "O Allah, by You we enter the morning and by You we enter the evening; by You we live and by You we die, and to You is the resurrection."
    },
    common.fatir,
    common.raditu,
    common.afiyah,
    common.refuge,
    {
      transliteration: "Asbahna 'ala fitratil-Islam, wa kalimatil-ikhlas, wa dini Nabiyyina Muhammadin sallallahu 'alayhi wa sallam, wa millati abina Ibrahima hanifan, wa ma kana minal-mushrikin.",
      meaning: "We have entered the morning upon the natural way of Islam, the word of sincere faith, the religion of our Prophet Muhammad ﷺ, and the way of our father Abraham, who was upright and was not among those who associate partners with Allah."
    },
    common.hayyu
  ];

  const eveningSupport = [
    common.tawhid,
    common.hasbi,
    common.bismillah,
    {
      transliteration: "Amsayna wa amsal-mulku lillah, wal-hamdu lillah. La ilaha illallahu wahdahu la sharika lah. Allahumma inni as'aluka khayra ma fi hadhihil-laylati wa khayra ma ba'daha, wa a'udhu bika min sharri ma fi hadhihil-laylati wa sharri ma ba'daha. Allahumma inni a'udhu bika minal-kasali wal-haram, wa su'il-kibar, wa fitnatid-dunya, wa 'adhabil-qabr.",
      meaning: "We have entered the evening, and all sovereignty belongs to Allah. All praise belongs to Allah. There is no god worthy of worship except Allah alone, without partner. O Allah, I ask You for the good of this night and the good that follows it, and I seek Your protection from the evil of this night and the evil that follows it. I seek Your protection from laziness, frailty and hardship in old age, the trials of this world, and the punishment of the grave."
    },
    common.sayyidIstighfar,
    {
      transliteration: "Allahumma bika amsayna, wa bika asbahna, wa bika nahya, wa bika namut, wa ilaykal-masir.",
      meaning: "O Allah, by You we enter the evening and by You we enter the morning; by You we live and by You we die, and to You is the final return."
    },
    common.fatir,
    common.raditu,
    common.afiyah,
    common.refuge,
    {
      transliteration: "Amsayna 'ala fitratil-Islam, wa kalimatil-ikhlas, wa dini Nabiyyina Muhammadin sallallahu 'alayhi wa sallam, wa millati abina Ibrahima hanifan, wa ma kana minal-mushrikin.",
      meaning: "We have entered the evening upon the natural way of Islam, the word of sincere faith, the religion of our Prophet Muhammad ﷺ, and the way of our father Abraham, who was upright and was not among those who associate partners with Allah."
    },
    common.hayyu
  ];

  const arabicDigits = new Intl.NumberFormat("ar-EG", { useGrouping: false });
  const root = document.documentElement;
  const languageToggle = document.getElementById("language-toggle");
  const languageToggleLabel = document.getElementById("language-toggle-label");
  const transliterationToggle = document.getElementById("transliteration-toggle");
  const readingNote = document.getElementById("english-reading-note");
  const guideNumber = document.getElementById("guide-number");
  const storage = {
    get(key) {
      try { return localStorage.getItem(key); } catch { return null; }
    },
    set(key, value) {
      try { localStorage.setItem(key, value); } catch { /* storage may be unavailable */ }
    }
  };

  let transliterationVisible = storage.get("adhkar-transliteration") !== "hidden";
  const requestedLanguage = new URLSearchParams(location.search).get("lang");
  let language = requestedLanguage === "en" || requestedLanguage === "ar"
    ? requestedLanguage
    : storage.get("adhkar-language") || "ar";

  function addSupport(sectionName, supportData) {
    const cards = document.querySelectorAll(`[data-section="${sectionName}"] .zikr-card`);
    cards.forEach((card, index) => {
      const item = supportData[index];
      if (!item) return;

      const support = document.createElement("div");
      support.className = "english-support";

      const transliteration = document.createElement("section");
      transliteration.className = "transliteration-block";
      transliteration.innerHTML = '<span class="support-label">Transliteration</span>';
      const transliterationText = document.createElement("p");
      transliterationText.className = "transliteration-text";
      transliterationText.textContent = item.transliteration;
      transliteration.appendChild(transliterationText);

      const meaning = document.createElement("section");
      meaning.className = "meaning-block";
      meaning.innerHTML = '<span class="support-label">Meaning</span>';
      const meaningText = document.createElement("p");
      meaningText.className = "meaning-text";
      meaningText.textContent = item.meaning;
      meaning.appendChild(meaningText);

      support.append(transliteration, meaning);
      card.querySelector(".zikr-content")?.appendChild(support);
    });
  }

  function westernNumber(value) {
    const normalized = String(value).replace(/[٠-٩]/g, digit => String("٠١٢٣٤٥٦٧٨٩".indexOf(digit)));
    const number = Number(normalized.replace(/[^0-9]/g, ""));
    return Number.isFinite(number) ? number : 0;
  }

  function repetitionLabel(value, locale) {
    if (locale === "en") return value === 1 ? "1 time" : `${value} times`;
    if (value === 1) return "مرة واحدة";
    if (value === 2) return "مرتان";
    if (value >= 3 && value <= 10) return `${arabicDigits.format(value)} مرات`;
    return `${arabicDigits.format(value)} مرة`;
  }

  function localizeCounter(button) {
    const value = button.querySelector(".counter-value");
    const label = button.querySelector(".counter-label");
    const heading = button.querySelector(".counter-heading");
    const action = button.querySelector(".counter-action");
    const cardIndex = Number(button.closest(".zikr-card")?.dataset.index || 0) + 1;
    const isDone = button.classList.contains("done");

    if (language === "en") {
      if (isDone) {
        value.textContent = "Done";
        label.textContent = "Recitation complete";
        heading.textContent = "Well done";
        action.innerHTML = '<span aria-hidden="true">✓</span> Completed';
        button.setAttribute("aria-label", `Recitation ${cardIndex} completed`);
      } else {
        const remaining = westernNumber(value.textContent);
        value.textContent = String(remaining);
        label.textContent = repetitionLabel(remaining, "en");
        heading.textContent = "Remaining";
        action.innerHTML = '<span aria-hidden="true">☝</span> Tap after each recitation';
        button.setAttribute("aria-label", `After reciting, tap to reduce the counter. ${remaining} remaining`);
      }
    } else if (isDone) {
      value.textContent = "تم";
      label.textContent = "اكتمل الذكر";
      heading.textContent = "أحسنت";
      action.innerHTML = '<span aria-hidden="true">✓</span> مكتمل';
      button.setAttribute("aria-label", `اكتمل الذكر رقم ${cardIndex}`);
    } else {
      const remaining = westernNumber(value.textContent);
      value.textContent = arabicDigits.format(remaining);
      label.textContent = repetitionLabel(remaining, "ar");
      heading.textContent = "المتبقي";
      action.innerHTML = '<span aria-hidden="true">☝</span> اضغط بعد كل مرة';
      button.setAttribute("aria-label", `بعد قراءة الذكر اضغط لإنقاص العداد. المتبقي ${remaining}`);
    }
  }

  function updateTransliterationControl() {
    root.classList.toggle("hide-transliteration", !transliterationVisible);
    transliterationToggle.textContent = transliterationVisible ? "Hide transliteration" : "Show transliteration";
    transliterationToggle.setAttribute("aria-pressed", String(transliterationVisible));
  }

  function applyLanguage(nextLanguage, updateUrl = false) {
    language = nextLanguage;
    const isEnglish = language === "en";
    const strings = copy[language];

    root.lang = language;
    root.dir = isEnglish ? "ltr" : "rtl";
    root.classList.toggle("lang-en", isEnglish);
    document.title = isEnglish ? "Morning & Evening Adhkar" : "أذكار الصباح والمساء";
    document.querySelector('meta[name="description"]')?.setAttribute(
      "content",
      isEnglish
        ? "Morning and evening adhkar with Arabic recitation, transliteration, English meaning, and interactive counters."
        : "أذكار الصباح والمساء مع عدّادات بسيطة للتكرار."
    );

    document.querySelectorAll("[data-i18n]").forEach(element => {
      const key = element.dataset.i18n;
      if (strings[key]) element.textContent = strings[key];
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(element => {
      const key = element.dataset.i18nAria;
      if (strings[key]) element.setAttribute("aria-label", strings[key]);
    });

    languageToggleLabel.textContent = isEnglish ? "العربية" : "English";
    languageToggle.setAttribute("aria-label", isEnglish ? "Switch to Arabic" : "Switch to English");
    transliterationToggle.hidden = !isEnglish;
    readingNote.hidden = !isEnglish;
    guideNumber.textContent = isEnglish ? "3" : "٣";
    document.querySelectorAll(".counter").forEach(localizeCounter);

    storage.set("adhkar-language", language);
    updateTransliterationControl();

    if (updateUrl) {
      const url = new URL(location.href);
      if (isEnglish) url.searchParams.set("lang", "en");
      else url.searchParams.delete("lang");
      history.replaceState({}, "", url);
    }
  }

  addSupport("morning", morningSupport);
  addSupport("evening", eveningSupport);

  languageToggle.addEventListener("click", () => {
    applyLanguage(language === "ar" ? "en" : "ar", true);
  });

  transliterationToggle.addEventListener("click", () => {
    transliterationVisible = !transliterationVisible;
    storage.set("adhkar-transliteration", transliterationVisible ? "visible" : "hidden");
    updateTransliterationControl();
  });

  document.querySelectorAll(".counter").forEach(button => {
    button.addEventListener("click", () => localizeCounter(button));
  });

  document.getElementById("reset-counters")?.addEventListener("click", () => {
    document.querySelectorAll(".counter").forEach(localizeCounter);
  });

  applyLanguage(language);
})();
