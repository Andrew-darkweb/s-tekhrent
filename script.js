       // Данные о спецтехнике
        const equipmentData = [
            {
                id: 1,
                name: "Фронтальный Погрузчик XCMG",
                price: "3000₽/час",
                image: "imgs/XCMG.jpg",
                description: "Фронтальный погрузчик XCMG — мощная и надежная техника для выполнения различных погрузочно-разгрузочных работ. Идеально подходит для строительных площадок, складов и промышленных объектов.",
                detailedDescription: "Фронтальный погрузчик XCMG с объемом ковша 3,5 м³ и мощностью двигателя 162 л.с. Предназначен для погрузочно-разгрузочных работ с сыпучими материалами, грунтом, щебнем и другими материалами. Оснащен комфортабельной кабиной оператора с системой климат-контроля, обеспечивающей комфортную работу в любое время года.",
                specs: ["Грузоподъемность: 3000 кг", "Объем ковша: 2.6 м³", "Мощность двигателя: 162 л.с.", "Вес: 17,5 т", "Габариты: 8,2×2,8×3,5 м"],
                coordinates: [55.808374, 38.025784]
            },
            {
                id: 2,
                name: "Илосос DAF",
                price: "3600₽/час",
                image: "imgs/MAN1.jpg",
                description: "Илососная машина на базе DAF для очистки колодцев, отстойников и канализационных систем. Высокая производительность и эффективность.",
                detailedDescription: "Илососная машина на шасси MAN с цистерной объемом 12 м³ и вакуумным насосом. Предназначена для очистки колодцев, отстойников, канализационных систем, септиков и других емкостей от ила, шлама и жидких отходов. Оснащена системой гидравлического управления и дополнительным оборудованием для промывки.",
                specs: ["Объем цистерны: 12 м³", "Длина шланга: 30 м", "Глубина очистки: до 10 м", "Шасси: MAN TGS", "Мощность: 360 л.с."],
                coordinates: [55.805039, 38.024548] 
            },
            {
                id: 3,
                name: "Вакуумный погрузчик Wieland",
                price: "8500₽/час",
                image: "imgs/Volvo.jpg",
                description: "Вакуумный погрузчик Wieland для транспортировки сыпучих материалов. Современное оборудование с высокой производительностью.",
                detailedDescription: "Вакуумный немецкий погрузчик Wieland с системой загрузки сыпучих материалов методом всасывания. Идеально подходит для работы с цементом, песком, зерном и другими сыпучими материалами. Оснащен системой фильтрации, предотвращающей выброс пыли в окружающую среду.",
                specs: ["Объем загрузки: 20 м³/час", "Дальность всасывания: до 50 м", "Мощность: 280 л.с.", "Емкость бункера: 8 м³", "Тип загрузки: вакуумный"],
                coordinates: [55.807256, 38.025507]
            },
            {
                id: 4,
                name: "Буровая установка Klemm",
                price: "24000₽/сутки",
                image: "imgs/Klemm.png",
                description: "Буровая установка Klemm для бурения скважин различного назначения. Профессиональное оборудование для геологоразведки и строительства.",
                detailedDescription: "Буровая установка Klemm для бурения скважин различного диаметра и глубины. Используется для геологоразведки, устройства свайных фундаментов, водозаборных скважин и инженерных изысканий. Оснащена гидравлической системой управления и возможностью бурения под различными углами.",
                specs: ["Глубина бурения: до 50 м", "Диаметр бурения: до 300 мм", "Тип привода: гидравлический", "Мощность: 450 л.с.", "Вес: 15 т"],
                coordinates: [55.805242, 38.027009]
            },
            {
                id: 5,
                name: "Канало промывочная машина MAN",
                price: "6500₽/час",
                image: "imgs/MAN2.jpg",
                description: "Канало-промывочная машина на базе MAN для очистки канализационных систем и трубопроводов. Высокое давление и эффективная очистка.",
                detailedDescription: "Канало-промывочная машина на шасси MAN с цистерной для воды объемом 10 м³ и насосом высокого давления. Предназначена для прочистки и промывки канализационных систем, трубопроводов, ливневых стоков. Оснащена системой реверса и автоматической сматывания шланга.",
                specs: ["Объем цистерны: 10 м³", "Давление: 200 бар", "Длина шланга: 150 м", "Шасси: MAN TGL", "Мощность: 240 л.с."],
                coordinates: [55.80481, 38.022782]
            },
            {
                id: 6,
                name: "Низкорамный Трал Meusburger",
                price: "От 20000₽",
                image: "imgs/Meusburger.jpg",
                description: "Низкорамный трал для перевозки тяжелой и негабаритной техники. Различные грузоподъемности в зависимости от задачи.",
                detailedDescription: "Низкорамный трал для перевозки тяжелой и негабаритной техники: экскаваторов, бульдозеров, кранов и другой спецтехники. Оснащен гидравлической системой изменения высоты платформы, аппарелями для заезда и надежными креплениями. Доступны модели грузоподъемностью от 20 до 60 тонн.",
                specs: ["Грузоподъемность: от 20 до 60 т", "Длина платформы: 12 м", "Ширина: 3 м", "Высота погрузки: 0,9 м", "Тип: низкорамный"],
                coordinates: [55.807311, 38.027316]
            },
            {
                id: 7,
                name: "Мини погрузчик CASE",
                price: "2500₽/час",
                image: "imgs/CASE.jpg",
                description: "Мини-погрузчик CASE для работы в стесненных условиях. Компактные размеры и высокая маневренность.",
                detailedDescription: "Мини-погрузчик CASE с бортовым поворотом идеально подходит для работы в стесненных условиях: внутри помещений, на стройплощадках с ограниченным пространством, в складских комплексах. Оснащен различным навесным оборудованием: ковшом, вилами, щеткой, гидромолотом.",
                specs: ["Грузоподъемность: 1200 кг", "Объем ковша: 0,5 м³", "Мощность: 75 л.с.", "Вес: 3,2 т", "Габариты: 3,5×1,5×2,1 м"],
                coordinates: [55.80723, 38.02861]
            },
            {
                id: 8,
                name: "Экскаватор-погрузчик JCB 3CX",
                price: "3000₽/час",
                image: "imgs/JCB.jpg",
                description: "Используется на городских стройплощадках, в дорожных и коммунальных службах, на фермах и небольших строительных объектах.",
                detailedDescription: "Машина, которая объединяет функции экскаватора и погрузчика. Конструктивно состоит из ковша с гидравлическим цилиндром, стрелы и задней тяги ковша, заднего моста, трансмиссии и других узлов.",
                specs: ["Грузоподъемность: 3000 кг", "Объем ковша: 1.6 м³", "Мощность: 175 л.с.", "Вес: 5,2 т", "Габариты: 3,5×1,5×2,1 м"],
                coordinates: [55.809138, 38.027375]
            }
        ];

        // Инициализация карты на главной странице
let mainMap, detailMap;

function initMainMap() {
    // Центрируем карту на координатах 55.812395, 38.02236
    mainMap = L.map('map').setView([55.812395, 38.02236], 13);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(mainMap);
    
    // Добавляем основной маркер для нашей базы
    L.marker([55.809515, 38.022439])
        .addTo(mainMap)
        .bindPopup('<b>Наша база</b><br>Основное местоположение техники')
        .openPopup();
    L.marker([55.805242, 38.027009])
        .addTo(mainMap)
        .bindPopup('<b>Буровая установка Klemm</b>')
    L.marker([55.805242, 38.027009])
        .addTo(mainMap)
        .bindPopup('<b>Фронт. погрузчик XCMG</b>')
    L.marker([55.808374, 38.025784])
        .addTo(mainMap)
        .bindPopup('<b>Илосос DAF</b>')
    L.marker([55.80481, 38.022782])
        .addTo(mainMap)
        .bindPopup('<b>Канало промывочная машина MAN</b>')
    L.marker([55.807311, 38.027316])
        .addTo(mainMap)
        .bindPopup('<b>Низкорамный Трал Meusburger</b>')
    L.marker([55.807256, 38.025507])
        .addTo(mainMap)
        .bindPopup('<b>Вакуумный погрузчик Wieland</b>')
    L.marker([55.80723, 38.02861])
        .addTo(mainMap)
        .bindPopup('<b>Мини погрузчик CASE</b>')
    L.marker([55.809138, 38.027375])
        .addTo(mainMap)
        .bindPopup('<b>Экскаватор-погрузчик JCB</b>')
}

function initDetailMap() {
    if (detailMap) {
        detailMap.remove();
    }
    detailMap = L.map('detailMap').setView(equipmentData.coordinates, 14);
    console.log(detailMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(detailMap);
    
    L.marker(equipmentData.coordinates)
        .addTo(detailMap)
        .bindPopup(`<b>${equipmentData.name}</b>`)
        .openPopup();
}

// Генерация карточек техники
function renderEquipmentCards() {
    const equipmentGrid = document.querySelector('.equipment-grid');
    equipmentGrid.innerHTML = '';
    
    equipmentData.forEach(item => {
        const card = document.createElement('div');
        card.className = 'equipment-card';
        card.dataset.id = item.id;
        
        card.innerHTML = `
            <div class="card-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="card-content">
                <h3>${item.name}</h3>
                <div class="card-price">${item.price}</div>
                <p class="card-description">${item.description}</p>
                <a href="#" class="card-button view-detail" data-id="${item.id}">Подробнее</a>
            </div>
        `;
        
        equipmentGrid.appendChild(card);
    });
    
    // Добавляем обработчики для кнопок "Подробнее"
    document.querySelectorAll('.view-detail').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const id = parseInt(this.dataset.id);
            showDetailPage(id);
        });
    });
}

// Показ детальной страницы
function showDetailPage(id) {
    const item = equipmentData.find(item => item.id === id);
    if (!item) return;
    
    // Заполняем данные на детальной странице
    document.getElementById('detailName').textContent = item.name;
    document.getElementById('detailPrice').textContent = item.price;
    document.getElementById('detailImage').src = item.image;
    document.getElementById('detailImage').alt = item.name;
    document.getElementById('detailDescription').textContent = item.detailedDescription;
    
    // Заполняем характеристики
    const specsList = document.getElementById('detailSpecs');
    specsList.innerHTML = '';
    item.specs.forEach(spec => {
        const li = document.createElement('li');
        li.textContent = spec;
        specsList.appendChild(li);
    });
    // Инициализируем карту для детальной страницы
    initDetailMap(item)
console.log(detailMap)
    // Убедимся, что контейнер карты видим
    const detailMapContainer = document.getElementById('map');
    if (detailMapContainer) {
        detailMapContainer.style.height = '600px';
        detailMapContainer.style.width = '100%';
        
        detailMap = L.map('map').setView(item.coordinates, 17);
        
        L.tileLayer({
            attribution: '© OpenStreetMap contributors'
        }).addTo(detailMap);
        
        L.marker()
            .addTo(detailMap)
            .bindPopup(`<b>Текущее местоположение техники</b>`)
            .openPopup();
        
        // Небольшая задержка для инициализации карты после отображения
        setTimeout(() => {
            detailMap.invalidateSize();
        }, 100);
    }

    
    // Переключаем видимость страниц
    document.querySelector('.main-page').style.display = 'none';
    document.querySelector('.detail-page').style.display = 'block';
    
    // Прокручиваем к верху страницы
    window.scrollTo(0, 0);
}

// Возврат к главной странице
document.getElementById('backButton').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('.main-page').style.display = 'block';
    document.querySelector('.detail-page').style.display = 'none';
});

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    renderEquipmentCards();
    initMainMap();
    
    // Плавная прокрутка для навигации
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Обработка кнопки CTA
    document.querySelector('.cta-button').addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('equipment').scrollIntoView({
            behavior: 'smooth'
        });
    });
});