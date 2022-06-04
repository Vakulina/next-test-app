This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

Необходимо разработать приложение на Next.js. 

Приложение должно показывать список всех задач, со списка задач должна быть возможность перейти на конкретную задачу. 

Модель задачи состоит из заголовка, описания и даты создания.

На общем списке должно быть видно только название.

При выполнении задания, базу подключать не нужно, просто на сервере сделать список с тестовыми записями. 

Для получения данных на фронт, необходимо реализовать ендпоинты API средствами Next.js. 
Форму создания задачи так же делать не нужно.Вёрстка не важна.

В репозиторий приложите скрины двух страниц. 

Укажите ссылку на репозиторий при заполнение заявки



## Небольшое учебное приложение на [Next.js](https://nextjs.org/), созданное с помощью [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app)

- возможность разворачивания/сворачивания элементов древовидной структуры
- стилизован активный элемент списка 

Бэкенд расположен в директории `backend/`, а фронтенд - в `frontend/`.

### Используемые технологии:

#### Backend
Простой сервер для раздачи JSON-файла с данными для отображения
1. Node.js
2. Express
3. nginx

#### Frontend
1. React.js (Create React App)
2. Хуки, функциональные компоненты

####  Для запуска на локальной машине:
- скачать содержимое ветки main
- перейти в папку **frontend**, установить зависимости командой **npm install**, запустить локальный сервер командой **npm run start** (на порту 3000)

### Проект завершен

Проект задеплоен на [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)

#### :link: Деплой : https://next-test-app-theta.vercel.app/
