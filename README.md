# **TravelTrucks**

Веб-додаток для оренди кемперів, що дозволяє користувачам переглядати каталог
транспортних засобів, застосовувати фільтри, переглядати деталі кожного кемпера
та залишати бронювання.

---

## **Особливості**

- **Головна сторінка**: заклик до дії та кнопка переходу до каталогу.
- **Каталог кемперів**:
  - Фільтри за локацією, типом кузова та обладнанням.
  - Можливість додавання кемперів до списку обраних.
  - Підтримка довантаження карток.
- **Деталі кемпера**:
  - Характеристики кемпера, галерея зображень, відгуки користувачів.
  - Форма бронювання з підтвердженням.
- **Стан додатка керується через Redux**.
- **API-запити** виконуються за допомогою Axios.
- **Список обраних кемперів зберігається між сесіями** завдяки Redux Persist.

---

## **Використані технології**

- **React** (з використанням Vite).
- **Redux Toolkit** для управління станом.
- **React Router** для маршрутизації.
- **Axios** для виконання запитів до API.
- **CSS-модулі** для стилізації.
- **React Hot Toast** для показу сповіщень.
- **Redux Persist** для збереження обраних кемперів.

---

## **API**

Дані кемперів отримуються з API:  
[https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers](https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers)

Основні ендпоінти:

- **`GET /campers`** — отримання списку кемперів.
- **`GET /campers/:id`** — отримання деталей конкретного кемпера.

---

## **Запуск проекту**

### **1. Клонування репозиторію**

```bash
git clone https://github.com/ваш-користувач/traveltrucks.git
cd traveltrucks
```

### **2. Встановлення залежностей**

Для встановлення всіх необхідних залежностей виконайте наступну команду:

```bash
npm install
```

Ця команда автоматично завантажить усі пакети, зазначені у файлі package.json, і
створить папку node_modules.

### **3. Запуск проекту**

Для запуску проекту у режимі розробки використовуйте команду:

```bash
npm run dev
```

### **4. Збірка проекту для продакшена**

Для створення оптимізованої збірки проекту виконайте команду:

```bash
npm run build
```

Ця команда створить папку dist, яка містить зібрані файли проекту, готові до
розгортання на сервері. Файли в dist є статичними й можуть бути використані для
розгортання на будь-якому сервері або CDN.

### **5. Перевірка збірки**

Для перевірки зібраного проекту перед продакшеном використовуйте команду:

```bash
npm run preview
```

Ця команда запускає локальний сервер, що відображає вміст зібраної папки dist.
За замовчуванням проект буде доступний за адресою: http://localhost:4173

Цей крок дозволяє переконатися, що проект працює коректно після збірки.

### **Маршрути**

- **`/`** — Головна сторінка:

  - Відображає банер із закликом до дії.
  - Кнопка "View Now" для переходу до сторінки каталогу.

- **`/catalog`** — Каталог кемперів:

  - Відображає список доступних кемперів.
  - Містить фільтри:
    - Локація (текстове поле).
    - Тип кузова (радіо-кнопки).
    - Обладнання (чекбокси для вибору кількох параметрів).
  - Кнопка "Load More" для довантаження карток кемперів.
  - Можливість додавання кемперів до обраного.

- **`/catalog/:id`** — Сторінка деталей кемпера:
  - Відображає детальну інформацію про обраний кемпер:
    - Характеристики: довжина, ширина, висота, бак, споживання тощо.
    - Обладнання: кондиціонер, кухня, телевізор, радіо, холодильник тощо.
  - Галерея зображень кемпера.
  - Відгуки користувачів із п'ятизірковою шкалою.
  - Форма для бронювання:
    - Ім'я.
    - Електронна пошта.
    - Дата бронювання.
    - Коментар.
  - Сповіщення про успішне бронювання після відправки форми.
