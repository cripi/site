([
    {
        block: 'b-page',
        js: true,
        title: 'Курсы разработки и проектирования интерфейсов',
        head: [
            {
                elem: 'css',
                url: '_index.css'
            },
            {
                elem: 'css',
                url: '_index.ie.css',
                ie: true
            },
            { block: 'i-jquery', elem: 'core' },
            {
                elem: 'js',
                url: '_index.js'
            },
            {
                elem: 'meta',
                attrs: {
                    property: 'og:title',
                    content: 'Курсы разработки и проектирования интерфейсов',
                }
            },
            {
                elem: 'meta',
                attrs: {
                    property: 'og:description',
                    content: 'Яндекс и СКБ Контур организуют в Екатеринбурге курсы проектировщиков и разработчиков интерфейсов.'
                }
            },
            {
                elem: 'meta',
                attrs: {
                    property: 'og:image',
                    content: '/images/ogimage.png',
                }
            }
        ],
        content: [
            {
                block: 'b-wrapper',
                content: [
                    {
                        block: 'b-head',
                        content: 'Курсы разработки и проектирования интерфейсов'
                    },
                    {
                        block: 'b-layout',
                        mix: [{ block: 'i-clearfix' }, { block: 'b-init', js: true }],
                        content: [
                            {
                                elem: 'left',
                                content: [
                                    {
                                        block: 'b-menu',
                                        content: [
                                            {
                                                elem: 'item',
                                                attrs: {'data-hash': 'index'},
                                                content: {
                                                    block: 'b-link',
                                                    url: '#index',
                                                    content: 'О проекте'
                                                }
                                            },
                                            {
                                                elem: 'item',
                                                attrs: {'data-hash': 'faq'},
                                                content: {
                                                    block: 'b-link',
                                                    url: '#faq',
                                                    content: 'Вопросы и ответы'
                                                }
                                                //mods: {'state': 'current'},
                                                //content: 'Вопросы и ответы'
                                            },
                                            {
                                                elem: 'title',
                                                content: 'Курсы'
                                            },
                                            {
                                                elem: 'item',
                                                attrs: {'data-hash': 'interface-design'},
                                                content: {
                                                    block: 'b-link',
                                                    url: '#interface-design',
                                                    content: 'Проектирование интерфейсов'
                                                }
                                            },
                                            {
                                                elem: 'item',
                                                attrs: {'data-hash': 'interface-development'},
                                                content: {
                                                    block: 'b-link',
                                                    url: '#interface-development',
                                                    content: 'Разработка интерфейсов'
                                                }
                                            },
                                            {
                                                elem: 'item',
                                                attrs: {'data-hash': 'javascript'},
                                                content: {
                                                    block: 'b-link',
                                                    url: '#javascript',
                                                    content: 'JavaScript'
                                                }
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                elem: 'right',
                                content: [
                                    {
                                        block: 'b-static-text',
                                        attrs: {'data-hash': 'index'},
                                        content: [
                                            {
                                                tag: 'p',
                                                content: 'Яндекс и СКБ Контур организуют в Екатеринбурге бесплатные курсы проектировщиков и разработчиков интерфейсов. Они рассчитаны на студентов и недавних выпускников вузов.'
                                            },
                                            {
                                                tag: 'p',
                                                content: 'До сих пор в нашем городе не было системы подготовки профессионалов в области проектирования и разработки интерфейсов. Всему приходилось учиться самостоятельно, совершая одни и те же банальные ошибки.'
                                            },
                                            {
                                                tag: 'p',
                                                content: 'На наших курсах специалисты Яндекса и СКБ Контур помогут вам продвинуться в выбранной области, дадут практические знания, научат всему необходимому и расскажут, как избежать традиционных ошибок.'
                                            },
                                            {
                                                tag: 'p',
                                                content: 'Лекции начались в октябре. Занятия по каждому курсу проходят в будние дни один раз в неделю.'
                                            },
                                            {
                                                tag: 'p',
                                                content: [
                                                    'Набор на курсы в 2012 году завершён. О новом наборе мы сообщим на сайте. Следите за изменениями или сообщите о желании посещать курсы по электронной почте ',
                                                    {
                                                        block: 'b-link',
                                                        url: 'mailto:mail@cripi.ru',
                                                        content: 'mail@cripi.ru.'
                                                    },
                                                    '.'
                                                ]
                                            },
                                            {
                                                tag: 'p',
                                                content: 'Дополнительную информацию ищите в разделе «Вопросы и ответы».'
                                            },
                                            {
                                                tag: 'p',
                                                content: 'Успехов!'
                                            }
                                        ]
                                    },
                                    {
                                        block: 'b-static-text',
                                        attrs: {'data-hash': 'faq'},
                                        content: [
                                            {
                                                tag: 'dl',
                                                content: [
                                                    {
                                                        tag: 'dt',
                                                        content: 'Могу я посещать сразу несколько курсов?'
                                                    },
                                                    {
                                                        tag: 'dd',
                                                        content: 'Да. Все зависит от желания, сил и времени.'
                                                    }
                                                ]
                                            },
                                            {
                                                tag: 'dl',
                                                content: [
                                                    {
                                                        tag: 'dt',
                                                        content: 'Когда проходят занятия?'
                                                    },
                                                    {
                                                        tag: 'dd',
                                                        content: 'Вечером в будни.'
                                                    }
                                                ]
                                            },
                                            {
                                                tag: 'dl',
                                                content: [
                                                    {
                                                        tag: 'dt',
                                                        content: 'Где проходят занятия?'
                                                    },
                                                    {
                                                        tag: 'dd',
                                                        content: 'В Институте математики и компьютерных наук УрФУ (Тургенева, 4) и в офисе СКБ Контур (Радищева, 28).'
                                                    }
                                                ]
                                            },
                                            {
                                                tag: 'dl',
                                                content: [
                                                    {
                                                        tag: 'dt',
                                                        content: 'Если я не студент и давно закончил вуз, я могу принять участие в курсах?'
                                                    },
                                                    {
                                                        tag: 'dd',
                                                        content: 'Заполните анкету, мы рассмотрим ее наравне с другими.'
                                                    }
                                                ]
                                            },
                                            {
                                                tag: 'dl',
                                                content: [
                                                    {
                                                        tag: 'dt',
                                                        content: 'Будет ли возможность посмотреть видеозаписи лекций?'
                                                    },
                                                    {
                                                        tag: 'dd',
                                                        content: 'Нет, лекции мы не записываем.'
                                                    }
                                                ]
                                            },
                                            {
                                                tag: 'dl',
                                                content: [
                                                    {
                                                        tag: 'dt',
                                                        content: 'Когда стартует новый набор?'
                                                    },
                                                    {
                                                        tag: 'dd',
                                                        content: [
                                                            'Решение о новом наборе мы примем после окончания текущих курсов в декабре 2012 года. Следите за изменениями на сайте или сообщите о желании посещать курсы по электронной почте ',
                                                            {
                                                                block: 'b-link',
                                                                url: 'mailto:mail@cripi.ru',
                                                                content: 'mail@cripi.ru'
                                                            },
                                                            '.'
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                tag: 'dl',
                                                content: [
                                                    {
                                                        tag: 'dt',
                                                        content: 'Я не нашел ответа на свой вопрос на сайте, что мне делать?'
                                                    },
                                                    {
                                                        tag: 'dd',
                                                        content: [
                                                            'Напишите нам на ',
                                                            {
                                                                block: 'b-link',
                                                                url: 'mailto:mail@cripi.ru',
                                                                content: 'mail@cripi.ru'
                                                            },
                                                            '. Мы постараемся ответить.'
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        block: 'b-static-text',
                                        attrs: {'data-hash': 'interface-development'},
                                        content: [
                                            {
                                                tag: 'h3',
                                                content: 'О курсе'
                                            },
                                            {
                                                tag: 'p',
                                                content: 'Невозможно стать профессиональным разработчиком интерфейсов, не владея в совершенстве основными знаниями и приёмами. Именно основам профессии и их применению на практике и посвящен наш курс. Мы изучим все «кирпичики», из которых в будущем вы сможете собрать любые крупные проекты.'
                                            },
                                            {
                                                tag: 'p',
                                                content: 'Расписание курса – два занятия (лекция+практика) один раз в неделю.'
                                            },
                                            {
                                                tag: 'h3',
                                                content: 'Преподаватели'
                                            },
                                            {
                                                tag: 'p',
                                                content: 'Олег Мохов (Яндекс) <br> Василий Аксёнов (СКБ Контур)'
                                            },
                                            {
                                                tag: 'h3',
                                                content: 'Программа'
                                            },
                                            {
                                                tag: 'ol',
                                                content: [
                                                    {
                                                        tag: 'li',
                                                        content: 'Введение'
                                                    },
                                                    {
                                                        tag: 'li',
                                                        content: 'HTML'
                                                    },
                                                    {
                                                        tag: 'li',
                                                        content: 'CSS'
                                                    },
                                                    {
                                                        tag: 'li',
                                                        content: 'Модель отображения'
                                                    },
                                                    {
                                                        tag: 'li',
                                                        content: 'JavaScript'
                                                    },
                                                    {
                                                        tag: 'li',
                                                        content: 'Шаблонизаторы'
                                                    },
                                                    {
                                                        tag: 'li',
                                                        content: 'БЭМ'
                                                    },
                                                    {
                                                        tag: 'li',
                                                        content: 'Адаптивность'
                                                    },
                                                    {
                                                        tag: 'li',
                                                        content: 'Подход к разработке интерфейсов в разных компаниях'
                                                    }
                                                ]
                                            },
                                            {
                                                tag: 'h3',
                                                content: 'Отбор'
                                            },
                                            {
                                                tag: 'p',
                                                content: [
                                                    'Набор на курс завершён. Занятия начались в октябре и проходят раз в неделю в Институте математики и компьютерных наук УрФУ (Тургенева,&nbsp;4). Все вопросы присылайте на ',
                                                    {
                                                        block: 'b-link',
                                                        url: 'mailto:mail@cripi.ru',
                                                        content: 'mail@cripi.ru'
                                                    },
                                                    '.'
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        block: 'b-static-text',
                                        attrs: {'data-hash': 'javascript'},
                                        content:[
                                            {
                                                tag: 'h3',
                                                content: 'О курсе'
                                            },
                                            {
                                                tag: 'p',
                                                content: 'Всё, что вы хотели знать о JavaScript, но боялись спросить. Мы расскажем, чем JavaScript отличается от обычных языков программирования, как с ним работать и какие прекрасные вещи можно сделать с его помощью.'
                                            },
                                            {
                                                tag: 'p',
                                                content: 'Занятия проходят раз в неделю в течение двух пар (лекция и практика).'
                                            },
                                            {
                                                tag: 'h3',
                                                content: 'Преподаватель'
                                            },
                                            {
                                                tag: 'p',
                                                content: 'Михаил Давыдов (Яндекс)'
                                            },
                                            {
                                                tag: 'h3',
                                                content: 'Программа'
                                            },
                                            {
                                                tag: 'ol',
                                                content: [
                                                    {
                                                        tag: 'li',
                                                        content: 'Введение'
                                                    },
                                                    {
                                                        tag: 'li',
                                                        content: 'Базовые типы и объекты, var'
                                                    },
                                                    {
                                                        tag: 'li',
                                                        content: 'Приведение типов: toString, valueOf'
                                                    },
                                                    {
                                                        tag: 'li',
                                                        content: 'Функции: типы функций, области видимости'
                                                    },
                                                    {
                                                        tag: 'li',
                                                        content: 'Циклы'
                                                    },
                                                    {
                                                        tag: 'li',
                                                        content: 'Базовое ООП'
                                                    },
                                                    {
                                                        tag: 'li',
                                                        content: 'Работа с DOM: база, получение данных, динамика и события'
                                                    },
                                                    {
                                                        tag: 'li',
                                                        content: 'Работа с формами'
                                                    },
                                                    {
                                                        tag: 'li',
                                                        content: 'Таймеры: база, анимации'
                                                    },
                                                    {
                                                        tag: 'li',
                                                        content: 'Мультимедиа: только основы'
                                                    },
                                                    {
                                                        tag: 'li',
                                                        content: 'Работа с сервером'
                                                    },
                                                    {
                                                        tag: 'li',
                                                        content: 'Обзор популярных фреймворков, хэлперов, веб-сервисов и утилит'
                                                    },
                                                    {
                                                        tag: 'li',
                                                        content: 'jQuery'
                                                    }
                                                ]
                                            },
                                            {
                                                tag: 'h3',
                                                content: 'Отбор'
                                            },
                                            {
                                                tag: 'p',
                                                content: [
                                                    'Набор на курс завершён. Курс стартовал в октябре в Институте математики и компьютерных наук УрФУ (Тургенева,&nbsp;4). Все вопросы присылайте на ',
                                                    {
                                                        block: 'b-link',
                                                        url: 'mailto:mail@cripi.ru',
                                                        content: 'mail@cripi.ru'
                                                    },
                                                    '.'
                                                ]
                                            }
                                        ] 
                                    },
                                    {
                                        block: 'b-static-text',
                                        attrs: {'data-hash': 'interface-design'},
                                        content: [
                                            {
                                                tag: 'h3',
                                                content: 'О курсе'
                                            },
                                            {
                                                tag: 'p',
                                                content: 'Какой интерфейс хороший, а какой &ndash; плохой? Как делать только хорошие интерфейсы?  Как зависит работоспособность проекта от интерфейса? И что же всё-таки является интерфейсом? Курс посвящён этим и многим другим загадкам мироздания.'
                                            },
                                            {
                                                tag: 'p',
                                                content: 'Расписание курса – одна пара в неделю. Каждое занятие совмещает лекцию и практику.'
                                            },
                                            {
                                                tag: 'h3',
                                                content: 'Преподаватели'
                                            },
                                            {
                                                tag: 'p',
                                                content: 'Сергей Соловьёв (СКБ Контур) <br> Мария Ковалёва (СКБ Контур) <br> Александр Кудымов (СКБ Контур) <br> Семён Молотков (СКБ Контур)'
                                            },
                                            {
                                                tag: 'h3',
                                                content: 'Программа'
                                            },
                                            {
                                                tag: 'ol',
                                                content: [
                                                    {
                                                        tag: 'li',
                                                        content: 'Введение. Что такое интерфейс?'
                                                    },
                                                    {
                                                        tag: 'li',
                                                        content: 'Исследование пользователей, персонажи, сценарии'
                                                    },
                                                    {
                                                        tag: 'li',
                                                        content: 'Обзор средств прототипирования'
                                                    },
                                                    {
                                                        tag: 'li',
                                                        content: 'Контролы и интерфейсные тексты'
                                                    },
                                                    {
                                                        tag: 'li',
                                                        content: 'Юзабилити-тестирование'
                                                    },
                                                    {
                                                        tag: 'li',
                                                        content: 'Практика'
                                                    },
                                                    {
                                                        tag: 'li',
                                                        content: 'Формальная композиция и структура страницы'
                                                    },
                                                    {
                                                        tag: 'li',
                                                        content: 'Вёрстка'
                                                    },
                                                ]
                                            },
                                            {
                                                tag: 'h3',
                                                content: 'Отбор'
                                            },
                                            {
                                                tag: 'p',
                                                content: [
                                                    'Набор на курс завершён. Занятия начались в сентябре и проходят в офисе СКБ Контур (Радищева,&nbsp;28). Все вопросы присылайте на ',
                                                    {
                                                        block: 'b-link',
                                                        url: 'mailto:mail@cripi.ru',
                                                        content: 'mail@cripi.ru'
                                                    },
                                                    '.'
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        elem: 'push'
                    }
                ]
            },
            {
                block: 'b-ffoot',
                content: [
                    {
                        elem: 'contacts',
                        content: [
                            {
                                elem: 'contact',
                                content: [
                                    'Контакты: ',
                                    {
                                        block: 'b-link',
                                        url: 'mailto:mail@cripi.ru',
                                        content: 'mail@cripi.ru'
                                    }
                                ]
                            },
                            {
                                elem: 'contact',
                                content: '© 2012'
                            }
                        ]
                    },
                    {
                        elem: 'copyright-logos',
                        content: [
                            {
                                block: 'b-link',
                                mods: {'logo': 'kontur'},
                                url: 'http://skbkontur.ru',
                                content: {
                                    block: 'b-icon',
                                    url: '/images/kontur-logo.png'
                                }
                            },
                            {
                                block: 'b-link',
                                mods: {'logo': 'yandex'},
                                url: 'http://yandex.ru',
                                content: {
                                    block: 'b-icon',
                                    url: '/images/yandex-small.png'
                                }
                            },
                        ]
                    }
                ]
            },
            {
                tag: 'div',
                content: '<!-- Yandex.Metrika counter --> <script type="text/javascript"> (function (d, w, c) { (w[c] = w[c] || []).push(function() { try { w.yaCounter16962850 = new Ya.Metrika({id:16962850, enableAll: true}); } catch(e) { } }); var n = d.getElementsByTagName("script")[0], s = d.createElement("script"), f = function () { n.parentNode.insertBefore(s, n); }; s.type = "text/javascript"; s.async = true; s.src = (d.location.protocol == "https:" ? "https:" : "http:") + "//mc.yandex.ru/metrika/watch.js"; if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f); } else { f(); } })(document, window, "yandex_metrika_callbacks"); </script> <noscript><div><img src="//mc.yandex.ru/watch/16962850" style="position:absolute; left:-9999px;" alt="" /></div></noscript> <!-- /Yandex.Metrika counter -->'
            }
        ]
    }
])

