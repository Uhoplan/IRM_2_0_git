var trashMap = {
  "Приложение№7": {
    type: "single"
  },
  "СВОДКАПОБУРОВОМУРАСТВОРУ№": {
    type: "single",
    cells: [1]
  },
  "Заказчик:": {
    type: "linear",
    cells: [5]
  },
  "Супервайзер:": {
    type: "linear",
    cells: [5]
  },
  "Скважина:": {
    type: "linear",
    cells: [5]
  },
  "Подрядчик:": {
    type: "linear",
    cells: [5]
  },
  "Бур.мастер:": {
    type: "linear",
    cells: [5]
  },
  "Месторождение:": {
    type: "linear",
    cells: [6]
  },
  "Назначение:": {
    type: "linear",
    cells: [6]
  },
  "Регион:": {
    type: "linear",
    cells: [6]
  },
  "Пласт:": {
    type: "linear",
    cells: [6]
  },
  "Номерскв.:": {
    type: "linear",
    cells: [6]
  },
  "Глубина/Поверт.:": {
    type: "linear",
    cells: [6]
  },
  "Дата:": {
    type: "linear",
    cells: [6]
  },
  "Датаначаласкв.:": {
    type: "linear",
    cells: [6]
  },
  "Типраствора:": {
    type: "linear",
    cells: [6]
  },
  "Текущиеработы:": {
    type: "linear",
    cells: [6]
  },
  // ""
  "БУРИЛЬНАЯКОЛОННА": {
    type: "column",
    cols: [0],
    cells: [1, 2, 3, 4, 5, 6, 7, 8]
  },
  "КОНСТРУКЦИЯСКВАЖИНЫ": {
    type: "column",
    cols: [0, 5],
    cells: [1, 2, 3, 4, 5, 6, 7, 8]
  },
  "ОБЪЕМЫРАСТВОРА(м3)": {
    type: "column",
    cols: [0, 5],
    cells: [1, 2, 3, 4, 5, 6, 7, 8]
  },
  "ДАННЫЕЦИРКУЛЯЦИИРАСТВОРА": {
    type: "column",
    cols: [0, 6, 10],
    cells: [1, 2, 3, 4, 5, 6, 7, 8]
  },
  "ПАРАМЕТРЫРАСТВОРА": {
    type: "column",
    subtype: "until",
    line: "ПРОЕКТНЫЕПАРАМЕТРЫРАСТВОРА",
    cols: [0, 6, 9, 14],
  },
  "РАСХОДИИНВЕНТАРИЗАЦИЯ": {
    type: "column",
    subtype: "until",
    line: "ОБОРУДОВАНИЕОЧИСТКИРАСТВОРА",
    from: 2,
    cols: [0, 7, 10, 12, 14, 16, 18, 20],
  },
  "ПРОЕКТНЫЕПАРАМЕТРЫРАСТВОРА": {
    type: "column",
    subtype: "until",
    line: "ОБОРУДОВАНИЕОЧИСТКИРАСТВОРА",
    // from: 1,
    cols: [0, 6, 12],
    // cells: [1, 2, 3, 4, 5, 6, 7, 8]
  },
  "ВИБРОСИТО№1": {
    type: "column",
    cols: [0],
    cells: [1, 2, 3, 4, 5]
  },
  "ВИБРОСИТО№2": {
    type: "column",
    cols: [0],
    cells: [1, 2, 3, 4, 5]
  },
  "ВИБРОСИТО№3": {
    type: "column",
    cols: [0],
    cells: [1, 2, 3, 4, 5]
  },
  "СИТОГИДРОЦИКЛОН": {
    type: "column",
    cols: [0],
    cells: [1, 2, 3, 4, 5]
  },
  "ИЛООТДЕЛИТЕЛЬ": {
    type: "column",
    cols: [0],
    cells: [1, 2, 3, 4, 5, 6, 7, 8]
  },
  "ПЕСКООТДЕЛИТЕЛЬ": {
    type: "column",
    cols: [0],
    cells: [1, 2, 3, 4, 5, 6, 7, 8]
  },
  "ЦЕНТРИФУГА№1": {
    type: "column",
    cols: [0],
    cells: [1, 2, 3, 4, 5, 6, 7, 8]
  },
  "ЦЕНТРИФУГА№2": {
    type: "column",
    cols: [0],
    cells: [1, 2, 3, 4, 5, 6, 7, 8]
  },
  "КОММЕНТАРИИПОРАСТВОРУ": {
    type: "column",
    cols: [0],
    cells: [1]
  },
  "КОММЕНТАРИИПОРАБОТАМ": {
    type: "column",
    cols: [0],
    cells: [1]
  },
  "КОММЕНТАРИИПООБОРУДОВАНИЮ": {
    type: "column",
    cols: [0],
    cells: [1]
  },
  // "ТЕХНИКАБЕЗОПАСНОСТИ ": {
  //   type: "column",
  //   cols: [0],
  //   cells: [1]
  // },
  "ТЕХНИКАБЕЗОПАСНОСТИ": {
    type: "column",
    cols: [0],
    cells: [1]
  },
  "БАЛАНСВРЕМЕНИ(24ч)": {
    type: "column",
    subtype: "until",
    line: "СТОИМОСТЬСТРОИТЕЛЬСТВАСКВАЖИНЫ",
    line2: "Объемыобразованияотходовбурения,потерьбуровогораствора,м3/сут",
    cols: [0, 7],
    //cells: [1, 2, 3, 4, 5, 6, 7]
  },
  "БАЛАНСОБЪЕМОВ(м3)": {
    type: "column",
    // from: 1,
    cols: [0, 5, 7, 9],
    cells: [1, 2, 3, 4]
  },
  "ПОТЕРИРАСТВОРА:": {
    type: "column",
    cols: [0, 5, 7, 9],
    cells: [1, 2, 3, 4]
  },
  "АНАЛИЗТВЕРДОЙФАЗЫ(%/кг/м3)": {
    type: "column",
    cols: [0, 6],
    cells: [1, 2, 3, 4, 5, 6, 7, 8, 9]
  },
  "РЕОЛОГИЯИГИДРАВЛИКА": {
    type: "column",
    cols: [0, 6],
    cells: [1, 2, 3, 4, 5, 6, 7, 8, 9]
  },
  "СТОИМОСТЬСТРОИТЕЛЬСТВАСКВАЖИНЫ": {
    type: "column",
    from: 2,
    cols: [0, 10, 15, 20, 25, 30, 35],
    cells: [1, 2, 3]
  },
  "ПРЕДСТАВИТЕЛИ": {
    type: "column",
    subtype: "until",
    line: "/ФИО/",
    line2: "/подпись/",
    cols: [0, 9, 10],
    // cells: [1, 2, 3]
  },
}

var buff

var trashRes = {

}

function putTrash(key, value, col, row) {
  trashRes[key.replace(/\s+/g, "")] = {
    key: trashMap[key.replace(/\s+/g, "")],
    value: value,
    col: col,
    row: row
  }
}

function findTrash(str, row, col) {
  if (trashMap[str.replace(/\s+/g, "")]) {
    // it's on purpose
    var tm = trashMap[str.replace(/\s+/g, "")]
    var res = []

    if (tm.type == "single") {
      res.push(str)

      putTrash(str, res, col, row)

      return
    }

    if (tm.type == "linear") {

      tm.cells.map(function(num) {
        res.push([buff[row][col + num]])
      })

      putTrash(str, res, col, row)

      return
    }

    if (tm.type == "column") {
      if (tm.from) row = row + tm.from
      tm.cols.map(function(colNum) {
        // res.push(buff[row + num][col])
        var preres = []
        if (tm.subtype == "until") {
          var i = 1
          var mutatedBuff = buff[row + i].map(function(item) {

            return item.replace(/\s+/g, "")
          })
          console.log()
          var secondLine = tm.line2 ? !mutatedBuff.includes(tm.line2) : true
          
          while (!secondLine || (mutatedBuff && !mutatedBuff.includes(tm.line))) {
            if (buff[row + i]) {
              preres.push(buff[row + i][col + colNum])
              i++
              if (buff[row + i]) {
                mutatedBuff = buff[row + i].map(function(item) {

                  return item.replace(/\s+/g, "")
                })
                secondLine = tm.line2 ? !mutatedBuff.includes(tm.line2) : true

                if (!secondLine) break
              } 
              else break
            } else break
          } 
          res.push(preres)
          putTrash(str, res, col, row)

          return
        }
        if (tm.cells) {

          tm.cells.map(function(num) {
            preres.push(buff[row + num][col + colNum])
          })
          res.push(preres)
        } 
      })
      putTrash(str, res, col, row)

      return
    }

    if (res.length > 0) putTrash(str, res, col, row)
  }
}

function parse(payload) {
  var len = 0
  buff = payload
  // console.log(buff)
	payload.map(function(arr, row) {
    if (arr.length > len) len = arr.length
    arr.map(function(item, col) {
      findTrash(item, row, col)
    })
  })
  //toElement(trashRes)
  webMI.trigger.fire("renderDaily", trashRes)
}