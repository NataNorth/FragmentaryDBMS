<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My DB</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
          integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
</head>
<body>
<div class="row">
    <div class="col-11">
        <table id="table" class="table">
            <thead class="thead-dark">
            <tr>
                <c:forEach var="column" items="${columns}">
                    <th scope="col">${column.getName()}</th>
                </c:forEach>
            </tr>
            </thead>
            <tbody>
            <c:forEach var="rows" items="${rows}">
                <tr>
                    <c:forEach var="cell" items="${rows.getCells()}">
                        <td>${cell}</td>
                    </c:forEach>
                </tr>
            </c:forEach>
            </tbody>
        </table>
    </div>
    <div class="col-1">
        <c:forEach var="table" items="${tables}">
            <a class="btn btn-secondary" name="${table}" role="button">${table}</a>
            <br>
        </c:forEach>
        <c:forEach var="column" items="${columns}">
            <a class="btn btn-secondary" name="sort" column="${column.getName()}" role="button">sort by ${column.getName()}</a>
            <br>
        </c:forEach>
    </div>
</div>

<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
        crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
        integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN"
        crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"
        integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV"
        crossorigin="anonymous"></script>
<script src="jquery-3.5.1.min.js"></script>
<script src="script1.js"></script>
</body>
</html>
