const DEFAULT_LISTS = {
  character: [
    'Чипиллино', 'Серафима Какашкина', 'Граф Пельмешкин', 'Баба Яга в отпуске', 'Капитан Пузырь',
    'Люся Турбина', 'Дон Кукурузон', 'Профессор Шлёп', 'Барон фон Бублик', 'Тётушка Хрюня',
    'Котлетыч', 'Зинаида Вжухова', 'Дед Морозовский', 'Пупс Великий', 'Мадам Хрум-Бум',
    'Сэр Огурец', 'Тимофей Космолапов', 'Принцесса Плюшка', 'Шурик Непобедимый', 'Робот Вася-3000',
    'Евлампий Подштанников', 'Мышь Галактическая', 'Аркадий Ухтышкин', 'Фея Табуреткина', 'Мистер Чебурек',
    'Валентина Кастрюлькина', 'Борис Борщев', 'Усатый Понедельник', 'Клеопатра из ЖЭКа', 'Пельмень в пальто',
    'Сеня Шнурков', 'Маркиз Тараканский', 'Леди Барабулька', 'Генерал Кнопкин', 'Кеша Вертолётов',
    'Дуняша Перепуткина', 'Супердедушка Гриша', 'Агент Носок', 'Римма Хлопушкина', 'Профессор Бульк',
    'Федот Самосвалов', 'Сонька Пончик', 'Владик Мегавилка', 'Королева Киселя', 'Тарас Кувырков',
    'Глаша Шумелкина', 'Баронесса Тыквина', 'Макс Шлёпкин', 'Нина Заварушкина', 'Суслик Михаил'
  ],
  place: [
    'в мусорке', 'в ресторане', 'в школе', 'на поле боя', 'в авиасимуляторе', 'на баскетбольном матче',
    'в очереди за гречкой', 'на крыше летающего автобуса', 'в подвале у хомяка', 'на дне суповой тарелки',
    'в кабинете главного кактуса', 'на репетиции оперы для пылесосов', 'в лифте между эпохами', 'на луне у киоска',
    'в парке деревянных уток', 'в холодильнике великана', 'на заседании сонных депутатов', 'в секретной кладовке',
    'на свадьбе двух табуреток', 'в очереди к говорящему принтеру', 'на острове потерянных тапок', 'в аквариуме с документами',
    'на вокзале для улиток', 'в кабинке колеса обозрения', 'на кухне у космического повара', 'в музее недосказанных шуток',
    'под столом переговоров', 'в замке из сырников', 'на балконе движущегося поезда', 'в планетарии после полуночи',
    'в спортзале для ленивых драконов', 'на дне бассейна с компотом', 'в штабе бумажных самолётиков', 'в очереди за справкой о бессмысленности',
    'на чердаке у привидения', 'в пустыне из попкорна', 'на репетиции школьного звонка', 'в троллейбусе, который забыл маршрут',
    'в кабинете межгалактического нотариуса', 'на пикнике у вулкана', 'в прачечной для рыцарских доспехов', 'на балу пыльных швабр',
    'в туннеле под ковром', 'на собрании ворчливых голубей', 'в лаборатории пузырчатой воды', 'на рыбалке в фонтане',
    'в очереди на Марс', 'на стадионе для шахматных фигур', 'в избушке с вай-фаем', 'на уроке географии для пингвинов'
  ],
  adverb: [
    'игриво', 'красиво', 'небрежно', 'витиевато', 'безучастно', 'торжественно', 'заговорщически', 'аккуратненько', 'задумчиво', 'пружинисто',
    'по-царски', 'таинственно', 'с энтузиазмом', 'вальяжно', 'космически', 'шепеляво', 'неотвратимо', 'звонко', 'аристократично', 'врассыпную',
    'с философским видом', 'на цыпочках', 'молниеносно', 'сонно', 'с достоинством', 'по секрету', 'с огоньком', 'вполоборота', 'самозабвенно', 'ехидно',
    'деловито', 'задом наперёд', 'плавно', 'истерически', 'вдохновенно', 'по инструкции', 'смущённо', 'на удивление ловко', 'гипнотически', 'вразвалочку',
    'чрезвычайно серьёзно', 'с размахом', 'мимолётно', 'шуршаще', 'не по уставу', 'ритмично', 'победоносно', 'с опаской', 'великолепно', 'весьма загадочно'
  ],
  verb: [
    'моет', 'роет', 'чинит', 'полирует', 'обнимает', 'изучает', 'прячет', 'перевоспитывает', 'раскручивает', 'торжественно вручает',
    'воспевает', 'дрессирует', 'собирает', 'разгадывает', 'кормит', 'гладит', 'переименовывает', 'катит', 'взвешивает', 'раскрашивает',
    'перепрятывает', 'насвистывает', 'обнюхивает', 'усыновляет', 'запускает', 'пришивает', 'успокаивает', 'взбивает', 'пересчитывает', 'обучает',
    'зарисовывает', 'наряжает', 'подписывает', 'запечатывает', 'переставляет', 'переворачивает', 'расчёсывает', 'подбрасывает', 'выгуливает', 'заполняет',
    'заворачивает', 'взращивает', 'проверяет', 'провожает', 'примеряет', 'будит', 'прокачивает', 'пересказывает', 'пережёвывает', 'копирует'
  ],
  object: [
    'свой нос', 'классный журнал', 'парту', 'салат оливье', 'арматуру', 'кирпич', 'горный экскаватор MPT PRO 3000 PLX', 'запасной понедельник', 'пять килограммов тишины', 'чужой бутерброд',
    'космический пельмень', 'парашют для кактуса', 'собственную тень', 'диплом по храпу', 'свадебный торт из гречки', 'секретный дневник хомяка', 'резиновую планету', 'стул на колёсиках', 'банку маринованных идей', 'последний носок во вселенной',
    'шапку-невидимку с помпоном', 'пакет важных облаков', 'большую красную кнопку', 'энциклопедию тараканов', 'сковородку с характером', 'летающий холодильник', 'бутылку лимонада для дракона', 'кусок лунного сыра', 'письмо самому себе', 'телевизор без новостей',
    'доску почёта для улиток', 'клавишу пробела', 'корону из макарон', 'валенок сорок шестого размера', 'чемодан с анекдотами', 'спасательный круг для чайника', 'лопату с дипломом', 'триумфальную арку из печенья', 'план побега для котлеты', 'будильник на пять минут позже',
    'глобус с секретным выходом', 'клетчатый диван', 'синюю гайку судьбы', 'пузырьковый пакет счастья', 'мегавилку для спагетти', 'мешок невыполненных обещаний', 'портрет усатого огурца', 'зонтик для рыбки', 'торжественный указ о чае', 'робота-пылесоса в отпуске'
  ]
};

const LABELS = { character: 'Имя персонажа', place: 'Где', adverb: 'Как (наречие)', verb: 'Что делает (глагол)', object: 'Что (существительное)' };
const STORAGE_KEY = 'modenov-randomize-lists';
let lists = loadLists();
let storyNumber = 0;
let currentStory = '';

function loadLists() {
  try {
    const saved = sessionStorage.getItem(STORAGE_KEY);
    if (!saved) return structuredClone(DEFAULT_LISTS);
    const parsed = JSON.parse(saved);
    return Object.fromEntries(Object.keys(DEFAULT_LISTS).map(key => [key, Array.isArray(parsed[key]) && parsed[key].length ? parsed[key] : [...DEFAULT_LISTS[key]]]));
  } catch { return structuredClone(DEFAULT_LISTS); }
}

function pick(list) { return list[Math.floor(Math.random() * list.length)]; }

function generateStory() {
  const parts = Object.fromEntries(Object.keys(DEFAULT_LISTS).map(key => [key, pick(lists[key])]));
  const story = `${parts.character} ${parts.place} ${parts.adverb} ${parts.verb} ${parts.object}`;
  const storyElement = document.querySelector('#story');
  storyElement.classList.add('is-changing');
  window.setTimeout(() => {
    storyElement.innerHTML = `<span>${escapeHtml(parts.character)} <span class="highlight">${escapeHtml(parts.place)}</span> ${escapeHtml(parts.adverb)} ${escapeHtml(parts.verb)} ${escapeHtml(parts.object)}.</span>`;
    storyElement.classList.remove('is-changing');
  }, 130);
  storyNumber += 1;
  currentStory = story[0].toLocaleUpperCase('ru-RU') + story.slice(1) + '.';
  document.querySelector('#story-counter').textContent = `СКАЗКА № ${String(storyNumber).padStart(3, '0')}`;
  for (const [key, value] of Object.entries(parts)) document.querySelector(`[data-step="${key}"]`).textContent = value;
  document.querySelector('#copy-story').disabled = false;
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
}

function openSettings() {
  renderEditor();
  const modal = document.querySelector('#settings-modal');
  modal.hidden = false;
  document.body.style.overflow = 'hidden';
  document.querySelector('#close-settings').focus();
}

function closeSettings() {
  document.querySelector('#settings-modal').hidden = true;
  document.body.style.overflow = '';
  document.querySelector('#open-settings').focus();
}

function renderEditor() {
  const editor = document.querySelector('#list-editor');
  editor.innerHTML = '';
  for (const key of Object.keys(DEFAULT_LISTS)) {
    const field = document.createElement('div');
    field.className = 'list-field';
    const head = document.createElement('div');
    head.className = 'list-field-head';
    const label = document.createElement('label');
    label.htmlFor = `list-${key}`;
    label.textContent = LABELS[key];
    const tools = document.createElement('div');
    tools.style.display = 'flex';
    tools.style.alignItems = 'center';
    tools.style.gap = '10px';
    const count = document.createElement('span');
    count.className = 'word-count';
    count.textContent = `${lists[key].length} вариантов`;
    const fileLabel = document.createElement('label');
    fileLabel.className = 'file-label';
    fileLabel.innerHTML = '<span aria-hidden="true">↑</span> .txt';
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.txt,text/plain';
    input.setAttribute('aria-label', `Загрузить список: ${LABELS[key]}`);
    input.addEventListener('change', () => importList(key, input.files[0]));
    fileLabel.append(input);
    tools.append(count, fileLabel);
    head.append(label, tools);
    const textarea = document.createElement('textarea');
    textarea.id = `list-${key}`;
    textarea.spellcheck = false;
    textarea.value = lists[key].join('\n');
    textarea.addEventListener('input', () => { count.textContent = `${getLines(textarea.value).length} вариантов`; });
    field.append(head, textarea);
    editor.append(field);
  }
}

function getLines(text) { return text.split(/\r?\n/).map(line => line.trim()).filter(Boolean); }

async function importList(key, file) {
  if (!file) return;
  const feedback = document.querySelector('#settings-feedback');
  try {
    const content = await file.text();
    const values = getLines(content);
    if (!values.length) throw new Error('В файле не нашлось строк со словами.');
    document.querySelector(`#list-${key}`).value = values.join('\n');
    document.querySelector(`#list-${key}`).dispatchEvent(new Event('input'));
    feedback.textContent = `«${file.name}»: загружено вариантов — ${values.length}. Не забудьте сохранить.`;
  } catch (error) { feedback.textContent = error.message; }
}

function saveLists() {
  const next = {};
  for (const key of Object.keys(DEFAULT_LISTS)) next[key] = getLines(document.querySelector(`#list-${key}`).value);
  const empty = Object.keys(next).find(key => next[key].length === 0);
  const feedback = document.querySelector('#settings-feedback');
  if (empty) { feedback.textContent = `В списке «${LABELS[empty]}» нужен хотя бы один вариант.`; return; }
  lists = next;
  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(lists));
  feedback.textContent = 'Списки сохранены для этой вкладки. Можно генерировать!';
  if (currentStory) generateStory();
}

function resetLists() {
  lists = structuredClone(DEFAULT_LISTS);
  sessionStorage.removeItem(STORAGE_KEY);
  renderEditor();
  document.querySelector('#settings-feedback').textContent = 'Исходные списки восстановлены.';
}

document.querySelector('#generate').addEventListener('click', generateStory);
document.querySelector('#open-settings').addEventListener('click', openSettings);
document.querySelector('#close-settings').addEventListener('click', closeSettings);
document.querySelector('#settings-modal').addEventListener('click', event => { if (event.target.id === 'settings-modal') closeSettings(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape' && !document.querySelector('#settings-modal').hidden) closeSettings(); });
document.querySelector('#save-lists').addEventListener('click', saveLists);
document.querySelector('#reset-lists').addEventListener('click', resetLists);
document.querySelector('#theme-toggle').addEventListener('click', () => {
  const theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
  sessionStorage.setItem('modenov-randomize-theme', theme);
  document.querySelector('#theme-toggle').setAttribute('aria-label', theme === 'dark' ? 'Включить светлую тему' : 'Включить тёмную тему');
});
document.querySelector('#copy-story').addEventListener('click', async event => {
  try {
    await navigator.clipboard.writeText(currentStory);
    const button = event.currentTarget;
    button.innerHTML = '<span aria-hidden="true">✓</span> Скопировано';
    window.setTimeout(() => { button.innerHTML = '<span aria-hidden="true">▢</span> Скопировать'; }, 1400);
  } catch { document.querySelector('#settings-feedback').textContent = 'Не получилось скопировать автоматически — выделите сказку и скопируйте её вручную.'; }
});

const savedTheme = sessionStorage.getItem('modenov-randomize-theme');
if (savedTheme) {
  document.documentElement.dataset.theme = savedTheme;
  document.documentElement.style.colorScheme = savedTheme;
  document.querySelector('#theme-toggle').setAttribute('aria-label', savedTheme === 'dark' ? 'Включить светлую тему' : 'Включить тёмную тему');
}
