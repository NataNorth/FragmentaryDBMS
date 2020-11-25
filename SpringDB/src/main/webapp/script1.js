function generateTableHead(table, data) {
    var row = '<tr>';
    $.each(data, function (key, value) {
        row += '<th>' + value.name + '</th>';
    });
    $("#table thead").append(row);
}

function generateTable(table, data) {
    $("#table tr").remove();
    for (let element of data) {
        var row = '<tr>';
        for (cell of element['cells']) {
            row += '<td>' + cell + '</td>';
        }
        row += '</tr>';
        $("#table tbody").append(row);
    }
}

$(document).ready(function () {
    $(".btn-secondary").click(function (event) {
        let name = $(event.target).attr("name");
        let column = $(event.target).attr("column");
        if (name == 'sort') {
            $.ajax
            ({
                type: "GET",//Метод передачи
                url: `/api/table/Books/sort?column=${column}`,
                success: function (serverData)//Если запрос удачен
                {
                    generateTable($(event.target), serverData.rows);
                    generateTableHead($(event.target), serverData.columns);
                },
                error: function (e)//Если запрос не удачен
                {
                }
            });
        } else {
            $.ajax
            ({
                type: "GET",//Метод передачи
                url: `/api/table/${name}`,
                success: function (serverData)//Если запрос удачен
                {
                    console.log(serverData.columns);
                    generateTable($(event.target), serverData.rows);
                    generateTableHead($(event.target), serverData.columns);
                },
                error: function (e)//Если запрос не удачен
                {
                }
            });
        }
    });
});
