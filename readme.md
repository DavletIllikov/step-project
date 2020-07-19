## Задание

Сверстать макет [psd](./The_Ham_Step_project.psd). Подключить динамические элементы (см. ниже)

#### Технические требования к верстке:
- Нужно сделать верстку только под широкоформатные мониторы, с шириной экрана более 1200 пикселей или более (то есть ширина контента фиксированная в пикселях). Максимальная ширина контейнера с контентом - 1160 пикселей (кроме второго блока с квадратами) 
- Бекграунд изображение в хедере должно занимать всю доступную ширину экрана
- Адаптивная верстка под разные разрешения экрана НЕ требуется
- Карточки в секции `Breaking news` должны быть кликабельными ссылками
- Секция `Gallery of best images` не обязательная для выполнения

#### Динамические элементы на странице:
- Вкладки в секции `Our services` должны переключаться при нажатии мышью. Текст и картинки для других вкладок вставить любые
- Кнопка `Load more` в секции `Our amazing work` имитирует подгрузку с сервера новых картинок. При ее нажатии в секции снизу должно добавиться еще 12 картинок (изображения можно взять любые). После этого кнопка исчезает
- Кнопки на вкладке `Our amazing work` являются "фильтрами продукции". Предварительно каждой из картинок нужно присвоить одну из четырех категорий, на ваше усмотрение (на макете это `Graphic design`, `Web design`, `Landing pages`, `Wordpress`). При нажатии на кнопку категории необходимо показать только те картинки, которые относятся к данной категории. `All` показывает картинки из всех категорий. Категории можно переименовать, картинки для категорий взять любые
- Карусель на вкладке `What people say about theHam` должна быть рабочей, по клику как на иконку фотографии внизу, так и на стрелки вправо-влево. В карусели должна меняться как картинка, так и текст. Карусель обязательно должна быть с анимацией
- Для подключения динамических элементов можно использовать любые библиотеки - как jQuery/его плагины, так и чистый Javascript код
   
#### Не обязательные задания продвинутой сложности:
- Кнопку `Load more` в секции `Our amazing work` можно нажать два раза, каждое нажатие добавляет 12 картинок снизу. То есть максимум в этой секции может быть расположено 36 картинок. После второго нажатия кнопка исчезает
- Сверстать также секцию `Gallery of best images`, расположить картинки внутри блока с помощью плагина [Masonry](https://masonry.desandro.com/)
- Кнопка `Load more` в секции `Gallery of best images` также должна быть рабочей и добавлять порцию новых картинок на страницу
- При клике на каждую из кнопок `Load more` имитировать загрузку картинок с сервера. Показывать вместо кнопки или над ней две секунды CSS анимацию загрузки (можно написать самому или взять любой пример из интернета, например [здесь](https://freefrontend.com/css-loaders/) или [здесь](http://nisnom.com/preloadery-loader/)), и только после этого добавлять картинки на страницу.
- Разместить проект в интернете с помощью [Github pages](https://pages.github.com/) или [Gitlab pages](https://docs.gitlab.com/ee/user/project/pages/) (не забудьте потом добавить ссылку в резюме)

#### Удачи!