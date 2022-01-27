document.addEventListener("DOMContentLoaded", () => {

  let studentArr;
  let restoredSession = JSON.parse(localStorage.getItem('sessionKey'));
  studentArr = restoredSession;
  if (!studentArr) {
    studentArr = [];
  };

  initializeExistStudentArr()

  function initializeExistStudentArr() {
    let initStudentArr = [
      {
        FAC: "Minecraft Архитектура",
        birthDate: ["1988", "01", "14"],
        currentLearningCourse: null,
        display: true,
        endLearningDate: null,
        fullname: "ИванИвановичИванов",
        name: "Иван",
        nextName: "Иванович",
        startLearningDate: "2017",
        surname: "Иванов",
        yearOld: null,
      },
      {
        FAC: "Как прожить еще немного",
        birthDate: ["1900", "01", "14"],
        currentLearningCourse: null,
        display: true,
        endLearningDate: null,
        fullname: "ГюнтенДиеговичДимидьян",
        name: "Гюнтер",
        nextName: "Диегович",
        startLearningDate: "2017",
        surname: "Димидьян",
        yearOld: null,
      },
      {
        FAC: "Психология",
        birthDate: ["1961", "06", "17"],
        currentLearningCourse: null,
        display: true,
        endLearningDate: null,
        fullname: "МихаилЛабковскийАлександрович",
        name: "Михаил",
        nextName: "Александрович",
        startLearningDate: "1989",
        surname: "Лабковский",
        yearOld: null,
      },
      {
        FAC: "ФулСтак",
        birthDate: ["1998", "10", "14"],
        currentLearningCourse: null,
        display: true,
        endLearningDate: null,
        fullname: "НикитаКимАлександрович",
        name: "Никита",
        nextName: "Александрович",
        startLearningDate: "2019",
        surname: "Ким",
        yearOld: null,
      },
      {
        FAC: "Коллектор",
        birthDate: ["1984", "04", "28"],
        currentLearningCourse: null,
        display: true,
        endLearningDate: null,
        fullname: "ВладкаШмелюкСергеевич",
        name: "Владка",
        nextName: "Сергеевич",
        startLearningDate: "2020",
        surname: "Шмелюк",
        yearOld: null,
      },
      {
        FAC: "Старший окучиватель картошки",
        birthDate: ["2003", "01", "14"],
        currentLearningCourse: null,
        display: true,
        endLearningDate: null,
        fullname: "ДимонИвановичШелестинов",
        name: "Димон",
        nextName: "Иванович",
        startLearningDate: "2018",
        surname: "Шелестинов",
        yearOld: null,
      },


    ];
    let restoredBoolean = JSON.parse(localStorage.getItem('booleanKey'))

    if (restoredBoolean) {
      return;
    }
    else {
      localStorage.setItem('booleanKey', JSON.stringify(true))
      studentArr = studentArr.concat(initStudentArr)
    }
  }

  console.log(studentArr)

  function saveLocalStorage() {
    localStorage.setItem('sessionKey', JSON.stringify(studentArr));
  };

  function createStudentTagsArr() {

    let studentTagsArr = [];

    studentArr.forEach(function (item) {

      if (item.display) {
        let tdNameElement = document.createElement('td'),
          tdBirthDateElement = document.createElement('td'),
          tdStartLearningDateElement = document.createElement('td'),
          tdFAC = document.createElement('td'),
          trStudentElement = document.createElement('tr'),
          fullName = item.surname + ' ' + item.name + ' ' + item.nextName;


        tdNameElement.textContent = fullName;
        tdBirthDateElement.textContent = item.birthDate[2] + '.' + item.birthDate[1] + '.' + item.birthDate[0] + ` (${item.yearOld} лет)`;

        if (item.currentLearningCourse) {
          tdStartLearningDateElement.textContent = item.startLearningDate + '-' + String(item.endLearningDate) + ` (${item.currentLearningCourse} курс)`;
        }
        else {
          tdStartLearningDateElement.textContent = item.startLearningDate;
        };

        tdFAC.textContent = item.FAC;

        trStudentElement.append(tdNameElement, tdFAC, tdBirthDateElement, tdStartLearningDateElement);

        studentTagsArr.push(trStudentElement);
      }


    });

    function clearTbody() {
      document.getElementById('tableBody').textContent = '';
    };
    clearTbody();

    return studentTagsArr;
  };

  function appendStudentListToTab(studentTagsArr) {
    let tableBodyElement = document.getElementById('tableBody');

    studentTagsArr.forEach(function (item) {
      tableBodyElement.append(item);
    });
  };

  // Сортировочные функции
  function sortFIO(studentArr) {
    let collator = new Intl.Collator();
    studentArr.sort((a, b) => { return collator.compare(a.fullname.toLowerCase(), b.fullname.toLowerCase()) })
    let studentTagsArr = createStudentTagsArr();
    appendStudentListToTab(studentTagsArr)
  };

  function sortFAC(studentArr) {
    let collator = new Intl.Collator();
    studentArr.sort((a, b) => { return collator.compare(a.FAC.toLowerCase(), b.FAC.toLowerCase()) })
    let studentTagsArr = createStudentTagsArr();
    appendStudentListToTab(studentTagsArr)
  };

  function sortBirthDate(studentArr) {
    studentArr.sort((a, b) => {
      if (Number(a.birthDate[0]) > Number(b.birthDate[0])) {
        return 1
      }
      else if (Number(a.birthDate[0]) < Number(b.birthDate[0])) {
        return -1
      }
      else if (Number(a.birthDate[0]) === Number(b.birthDate[0])) {

        if (Number(a.birthDate[1]) > Number(b.birthDate[1])) {
          return 1
        }
        else if (Number(a.birthDate[1]) < Number(b.birthDate[1])) {
          return -1
        }
        else if (Number(a.birthDate[1]) === Number(b.birthDate[1])) {

          if (Number(a.birthDate[2]) > Number(b.birthDate[2])) {
            return 1
          }
          else if (Number(a.birthDate[2]) < Number(b.birthDate[2])) {
            return -1
          }

        }
      }


    })
    let studentTagsArr = createStudentTagsArr();
    appendStudentListToTab(studentTagsArr)
  };

  function sortStartLearning(studentArr) {
    studentArr.sort((a, b) => {
      if (Number(a.startLearningDate) > Number(b.startLearningDate)) {
        return 1
      }
      else if (Number(a.startLearningDate) <= Number(b.startLearningDate)) {
        return -1
      }
      else if (a.startLearningDate === "Закончил") {
        return -1
      }
    })
    let studentTagsArr = createStudentTagsArr();
    appendStudentListToTab(studentTagsArr)
  };

  // Сортировочные функции

  function calcYearsOldByDate(studentArr, currentDate) {
    studentArr.map((item) => {
      let calcYearOld;
      let [birthYear, birthMonth, birthDay] = item.birthDate;
      let [currentYear, currentMonth, currentDay] = currentDate;

      birthYear = Number(birthYear);
      birthMonth = Number(birthMonth);
      birthDay = Number(birthDay);

      calcYearOld = currentYear - birthYear;

      if (birthMonth > currentMonth || birthMonth === currentMonth && birthDay > currentDay) {
        calcYearOld -= 1;
      };

      return item.yearOld = calcYearOld;
    });
  };

  function createCurrentDateArr() {
    let date = new Date(),
      currentYear = date.getFullYear(),
      currentMonth = date.getMonth() + 1,
      currentDay = date.getDate();

    return [currentYear, currentMonth, currentDay];
  };

  function calcCurrentLearningCourse(studentArr, currentDate) {
    let [currentYear, currentMonth] = currentDate;
    currentYear = Number(currentYear);
    currentMonth = Number(currentMonth);

    studentArr.map((item) => {
      let currentCourse = currentYear - item.startLearningDate;

      if (currentCourse === 4 && currentMonth > 9 || currentCourse > 4) {
        item.endLearningDate = Number(item.startLearningDate) + 4
        item.startLearningDate = 'Закончил';
      }
      else if (currentMonth > 9) {
        item.currentLearningCourse = currentCourse + 1;
      }
      else if (item.startLearningDate !== 'Закончил') {
        item.endLearningDate = Number(item.startLearningDate) + 4;
        item.currentLearningCourse = currentCourse;
      };

    });


  };


  function createStudentTab() {
    let currentDateArr = createCurrentDateArr(); // Создаем актуальную дату
    calcYearsOldByDate(studentArr, currentDateArr); // Вычисляем возраст студента
    calcCurrentLearningCourse(studentArr, currentDateArr); // Вычисляем Курс студента
    let studentTagsArr = createStudentTagsArr();  // Создаем массив HTML тэгов из массива из локалсторидж. При создании массива тэгов - таблица в DOM очищается
    appendStudentListToTab(studentTagsArr); // Добавляем HTML тэги на веб страницу
  }
  createStudentTab();
  saveLocalStorage(); // Сохраняем все в локалсторидж


  document.getElementById('FIOthFilter').addEventListener('click', () => { sortFIO(studentArr) });
  document.getElementById('FACthFilter').addEventListener('click', () => { sortFAC(studentArr) });
  document.getElementById('BirthDatethFilter').addEventListener('click', () => { sortBirthDate(studentArr) });
  document.getElementById('startLearningthFilter').addEventListener('click', () => { sortStartLearning(studentArr) });


  document.getElementById('form').addEventListener('submit', function (e) {

    e.preventDefault();

    function getInputValue() {
      let name = document.getElementById('nameInp').value,
        surname = document.getElementById('surnameInp').value,
        nextName = document.getElementById('nextNameInp').value,
        birthDate = document.getElementById('birthDateInp').value.split('-'),
        startLearningDate = document.getElementById('startLearningInp').value,
        FAC = document.getElementById('endLearningInp').value;

      return [name, surname, nextName, birthDate, startLearningDate, FAC];
    };

    function createStudentObj(...valueInputArr) {
      let studentObj = {
        name,
        surname,
        nextName,
        fullname: name + surname + nextName,
        birthDate,
        yearOld: null,
        startLearningDate,
        currentLearningCourse: null,
        endLearningDate: null,
        FAC,
        display: true,
      };
      return studentObj;
    };

    function valueTrim(...valueInputArr) {
      name = name.trim(),
        surname = surname.trim(),
        nextName = nextName.trim(),
        FAC = FAC.trim();

      return [
        name,
        surname,
        nextName,
        birthDate,
        startLearningDate,
        FAC,
      ];

    };

    function pushStudentObjToArr(studentObj) {
      studentArr.push(studentObj);
    };

    function clearInputs() {
      document.getElementById('nameInp').value = '';
      document.getElementById('surnameInp').value = '';
      document.getElementById('nextNameInp').value = '';
      document.getElementById('birthDateInp').value = '';
      document.getElementById('startLearningInp').value = '';
      document.getElementById('endLearningInp').value = '';
    }

    // ВАЛИДАЦИЯ
    function formValidation(studentObj, currentDateArr) {
      let invalidDateArr = [];
      let [currentYear, currentMonth, currentDay] = currentDateArr;
      let isValid = true;

      function createInvalidDateArr() {
        if (!studentObj.name) {
          invalidDateArr.push('Имя не введено;');
          isValid = false;
        };

        if (!studentObj.surname) {
          invalidDateArr.push('Фамилия не введена;');
          isValid = false;
        };

        if (!studentObj.nextName) {
          invalidDateArr.push('Отчество не введено;');
          isValid = false;
        };

        if (!studentObj.birthDate[0] || !studentObj.birthDate[1] || !studentObj.birthDate[2]) {
          invalidDateArr.push('Не введена дата рождения;');
          isValid = false;
        }
        else if (Number(studentObj.birthDate[0]) < 1900 && Number(studentObj.birthDate[1]) < 1 && Number(studentObj[2] < 1)) {
          invalidDateArr.push('Минимальная дата рождения начинается от 01.01.1900 года;');
          isValid = false;
        };

        if (
          Number(studentObj.birthDate[0]) === currentYear && Number(studentObj.birthDate[1]) > currentMonth ||
          Number(studentObj.birthDate[0]) > currentYear ||
          Number(studentObj.birthDate[0]) === currentYear && Number(studentObj.birthDate[1]) === currentMonth && Number(studentObj.birthDate[2]) >= currentDay
        ) {
          invalidDateArr.push('Вы еще не родились;');
          isValid = false;
        };

        if (!studentObj.startLearningDate) {
          invalidDateArr.push('Не введена дата обучения;');
          isValid = false;
        }
        else if (Number(studentObj.startLearningDate) < 2000) {
          invalidDateArr.push('Минимальная дата обучения от 2000-го года;');
          isValid = false;
        };

        if (Number(studentObj.startLearningDate) > Number(currentYear)) {
          invalidDateArr.push('Вы ввели будущую дату обучения;');
          isValid = false;
        }

        if (Number(studentObj.startLearningDate) === Number(currentYear) && Number(currentMonth < 9)) {
          invalidDateArr.push('Учеба еще не началась;');
          isValid = false;
        }
      };

      function createHTMLInvalidErrors() {
        let divElementInvalidBlock = document.createElement('div');
        divElementInvalidBlock.id = 'invalidBlockId';
        document.querySelector(".section-form").append(divElementInvalidBlock);
        invalidDateArr.forEach((item) => {
          let spanElementInvalidDate = document.createElement('span');
          spanElementInvalidDate.textContent = item;
          spanElementInvalidDate.classList.add('invalidError')
          divElementInvalidBlock.append(spanElementInvalidDate)
        });
      };

      createInvalidDateArr();

      if (!isValid) {
        createHTMLInvalidErrors();
      }

      return isValid;
    }
    // ВАЛИДАЦИЯ

    let valueInputArr = [name, surname, nextName, birthDate, startLearningDate, FAC] = getInputValue(); // Забираем значения инпутов в массив
    valueInputArr = [name, surname, nextName, birthDate, startLearningDate, FAC] = valueTrim(valueInputArr); // Убираем лишние пробелы
    let studentObj = createStudentObj(valueInputArr); // создаем объект студента из значений valueInputArr
    let currentDateArr = createCurrentDateArr();


    if (document.getElementById('invalidBlockId') !== null) {
      document.getElementById('invalidBlockId').remove();
    };

    let isValid = formValidation(studentObj, currentDateArr);

    if (isValid) { // Успешное прохождение валидации
      if (document.getElementById('invalidBlockId') !== null) {
        document.getElementById('invalidBlockId').remove();
      };
      pushStudentObjToArr(studentObj); // Добавляем объект студента в массив
      createStudentTab(); //Переписываем таблицу
      clearInputs()
      saveLocalStorage(); // Сохраняем все в локалсторидж
    };

  });


  let filterObj = {
    name: '',
    FAC: '',
    startLearningDate: '',
    endLearningDate: '',
  };

  function filterStudentArr(filterIdString) {

    function getBooleanOfNameOrFAC(valueFromInput, valueFromObj) {

      valueFromInput = valueFromInput.trim();
      valueFromInput = valueFromInput.toLowerCase();
      valueFromInput = valueFromInput.split(' ');
      let bool = false;

      for (let i = 0; i < valueFromInput.length; i++) {
        bool = valueFromObj.includes(valueFromInput[i]) ? true : false;
        if (bool) {
          continue;
        }
        else {
          return bool;
        }
      }

      return bool;
    }

    let valueFromFilter = document.getElementById(filterIdString).value;
    let nameValue = document.getElementById('nameFilter').value;
    let FACValue = document.getElementById('facFilter').value;
    valueFromFilter = valueFromFilter.trim();

    switch (filterIdString) {
      case 'nameFilter': filterObj.name = valueFromFilter;
        break;

      case 'facFilter': filterObj.FAC = valueFromFilter;
        break;

      case 'startDateFilter': filterObj.startLearningDate = valueFromFilter;
        break;

      case 'endDateFilter': filterObj.endLearningDate = valueFromFilter;
        break;
    }

    studentArr.map(item => {
      const fullname = item.surname.toLowerCase() + ' ' + item.name.toLowerCase() + ' ' + item.nextName.toLowerCase();

      let startLearning = item.startLearningDate == filterObj.startLearningDate || filterObj.startLearningDate === '' ? true : false;
      let endLearning = item.endLearningDate == filterObj.endLearningDate || filterObj.endLearningDate === '' ? true : false;

      if (
        getBooleanOfNameOrFAC(nameValue, fullname) &&
        getBooleanOfNameOrFAC(FACValue, item.FAC.toLowerCase()) &&
        startLearning &&
        endLearning
      ) {
        item.display = true;
        createStudentTab();
      }
      else {
        item.display = false;
        createStudentTab();
      };
    })
  }
  // Фильтрация студентов
  document.getElementById('nameFilter').addEventListener('keyup', () => {
    filterStudentArr('nameFilter')
  })
  document.getElementById('facFilter').addEventListener('keyup', () => {
    filterStudentArr('facFilter')
  })
  document.getElementById('startDateFilter').addEventListener('keyup', () => {
    filterStudentArr('startDateFilter')
  })
  document.getElementById('endDateFilter').addEventListener('keyup', () => {
    filterStudentArr('endDateFilter')
  })

  document.getElementById('test').addEventListener('click', () => {
    studentArr.forEach(item => {
      console.log(item)
    })

  })

});
