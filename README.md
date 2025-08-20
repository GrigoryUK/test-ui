# AdTarget-Components


## Документация
Документация проекта: http://youtrack.eastwind.ru:8080/articles/ATBD-A-33/Dokumentaciya-UI-biblioteki

## Getting started
Библиотека UI компонентов AdTarget.

Пакеты доступны здесь: https://gitlab.eastwind.ru/CMS/adtargetbusiness/adtarget-components/-/packages

## CI и версионирование

### Обзор пайплайна
Процесс включает 5 последовательных стадий:

- dependency - Установка зависимостей
- sonarqube - Статический анализ кода
- build - Сборка проекта
- versioning - Управление версиями (ручной запуск)
- publish - Публикация пакетов (запуск по тегам)

dependency → sonarqube → build → versioning → publish

### Когда запускается пайплайн

Автоматический запуск:
- При коммитах в ветку main (кроме изменений в .gitlab-ci.yml, .gitignore, README.md, и кроме тегов) 
  - Стадии:
    - dependency
    - sonarqube
    - build

Ручной запуск:
  - Вручную необходимо выбрать одну из трех стадий версионирования (versioning-patch, versioning-minor или versioning-major)
    - Стадии версионирования (versioning)

Публикация пакета:
  - Автоматически после стадии версионирования (на этой стадии происходит создание тега vX.X.X (например v1.2.3))
    - Стадия публикации пакета (publish)

### Этапы пайплайна:
**Dependency (Зависимости)**
- Цель: Установка зависимостей.
- Скрипт: npm ci (устанавливает зависимости строго по package-lock.json).
- Кэширование: node_modules/ и package-lock.json для ускорения последующих сборок.
- Триггер: Запускается при изменениях в main (кроме тегов) или через веб-интерфейс GitLab.

**SonarQube (Анализ кода)**
- Цель: Проверка качества кода и поиск уязвимостей.
- Инструмент: Sonar Scanner CLI.
- Отчеты: Генерирует SAST-отчет в формате JSON для GitLab.
- Особенность: Выполняется асинхронно (allow_failure: true), чтобы не блокировать пайплайн.

**Build (Сборка)**
- Цель: Компиляция проекта.
- Скрипт: npm run build.
- Триггер: Запускается при изменениях в main (кроме тегов) или через веб-интерфейс.

**Versioning (Версионирование)**
- Цель: Обновление версии пакета.
- Скрипт: npm version <patch|minor|major> с комментарием "ci - bump version to %s".
- Пуш: Обновленный package.json и тег пушатся в репозиторий с флагом -o ci.skip для избежания циклического запуска пайплайна.
- Триггер: Ручной запуск через кнопки в GitLab (patch/minor/major).

**Publish (Публикация)**
- Цель: Публикация пакета в GitLab Package Registry.
- Скрипт: npm publish.
- Условие: Запускается только при пуше тега в формате vX.Y.Z.

### Версионирование

Автоматическое обновление:

Версия в package.json обновляется через `npm version`

Создаются Git-теги формата vX.X.X

**Типы версий**
- **Patch** Исправления багов, мелкие правки v1.0.1 → v1.0.2
- **Minor** Добавление новых фич без брейка v1.0.2 → v1.1.0
- **Major** Обратные несовместимые изменения v1.1.0 → v2.0.0

**Процесс обновления версии**
- В GitLab, в pipelines нажмите кнопку versioning-patch, versioning-minor или versioning-major.
- Обновляется версия в package.json.
- Создается коммит и тег (например, v1.0.2).
- Коммит и тег пушатся в репозиторий с флагом -o ci.skip для избежания циклического запуска пайплайна.

Результат:

Пайплайн запускается только для публикации пакета (rules в job publish).

### Публикация пакета
**Условия публикации**

Пакет публикуется только при **автоматическом** пуше тега в формате vX.Y.Z.

Используется токен CI_JOB_TOKEN для авторизации в GitLab Registry.

**Как публикуется пакет**

Настройка NPM-регистра:
- npm config set @adtarget:registry https://gitlab.eastwind.ru/api/v4/projects/PROJECT_ID/packages/npm/ 
- npm config set "//gitlab.eastwind.ru/api/v4/projects/PROJECT_ID/packages/npm/:_authToken" "$CI_JOB_TOKEN"

Публикация:
- npm publish

### Как откатить версию?
Важно! npm не умеет перезаписывать существующие пакеты. Необходимо ручное удаление.

Удалите тег в GitLab через CLI или 

- `git tag -d v1.0.0`
- `git push origin :refs/tags/v1.0.`0`

Удалите пакет из Package Registry.

Обновите версию вручную через CLI или через UI в файле package.json:
- `npm version 1.0.0 --force`
