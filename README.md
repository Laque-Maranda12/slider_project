# Slider Project — Django 5.2 + Bootstrap 5

Веб-приложение с синхронизированным слайдером изображений, управляемым через Django Admin.

## Стек технологий

- **Backend:** Python 3.12, Django 5.2, MySQL
- **Frontend:** Bootstrap 5, Slick Slider (Slider Syncing), Fancybox 5
- **Пакеты:** django-filer (управление файлами), django-admin-sortable2 (drag&drop сортировка)

## Установка и запуск

### 1. Клонирование репозитория

```bash
git clone <URL_РЕПОЗИТОРИЯ>
cd slider_project
```

### 2. Создание виртуального окружения

```bash
python3.12 -m venv venv
source venv/bin/activate  # Linux/macOS
# или: venv\Scripts\activate  # Windows
```

### 3. Установка зависимостей

```bash
pip install -r req.pip
```

### 4. Настройка базы данных MySQL

Создайте базу данных:

```sql
CREATE DATABASE slider_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

Настройте переменные окружения (или отредактируйте `config/settings.py`):

```bash
export DB_NAME=slider_db
export DB_USER=root
export DB_PASSWORD=your_password
export DB_HOST=127.0.0.1
export DB_PORT=3306
```

### 5. Миграции и создание суперпользователя

```bash
python manage.py migrate
python manage.py createsuperuser
```

### 6. Сбор статических файлов

```bash
python manage.py collectstatic
```

### 7. Запуск сервера

```bash
python manage.py runserver
```

Откройте [http://127.0.0.1:8000](http://127.0.0.1:8000) в браузере.

## Управление слайдером

1. Перейдите в [админ-панель](http://127.0.0.1:8000/admin/).
2. В разделе **Слайдер → Слайды** добавьте изображения через django-filer.
3. Перетаскивайте записи для изменения порядка (drag&drop).
4. Изображения и названия отображаются в списке записей.

## Особенности

- **Slick Slider Syncing** — большой слайдер синхронизирован с миниатюрами.
- **Полноэкранная галерея** — клик по большому фото открывает Fancybox с навигацией.
- **Django-filer** — удобное управление файлами и изображениями.
- **Drag&Drop сортировка** — порядок слайдов меняется перетаскиванием в админке.
- **Русская локализация** — все модели и поля отображаются на русском языке.
