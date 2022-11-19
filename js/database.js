var db = openDatabase("dateDB", "1.0", "dateDB", 1000);

$(function(){
    $("#create").click(function(){
      db.transaction(function(transaction){
        var sql="CREATE TABLE dates" +
            "(id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
            "date DATE," +
            "description VARCHAR," +
            "lat INTEGER," +
            "long INTEGER," +
            "address VARCHAR," +
            "filepath VARCHAR)";
            transaction.executeSql(sql, undefined,
            function(){
                alert("Data is created successfully");
            }, 
            function(){
                alert("Table is already created");
            });
      });
    });
});

$("#remove").click(function(){
    // if(!confirm("Are you sure about this?", "")) return;
    db.transaction(function(transaction){
        var sql = "DROP TABLE dates";
        transaction.executeSql(sql, undefined,
        function(){
            alert("Successfully deleted");
        },
        function(){
            alert("Error occured while deleting");
        });
    });
});


$("#insert").click(function(){
    var date = $("#date").val();
    var desc = $("#desc").val();
    var lat = $("#lat").val();
    var long = $("#long").val();
    var add = $("#add").val();
    var path = $("#path").val();
    
    db.transaction(function(transaction){
        var sql = "INSERT INTO dates(date, description, lat, long, address, filepath) " +
        "VALUES(?,?,?,?,?,?)";
        transaction.executeSql(sql, [date, desc, lat, long, add, path], 
            function(){
                alert("New item is added successfully");
            }, function(transaction, err){
                alert(err.message);
            });
    });
});


$("#fetch").click(function(){
    $("#display").children().remove();

    db.transaction(function(transaction){
        var sql = "SELECT * FROM dates ORDER BY id DESC";
        transaction.executeSql(sql, undefined, 
            function(transaction, result){
                if(result.rows.item(0)){
                    // date, description, lat, long, address, filepath
                    for(var i = 0; i < result.rows.length; i++){
                        var row = result.rows.item(i);
                        var id = row.id;
                        var date = row.date;
                        var desc = row.desc;
                        var address = row.address;
                        $("#display").append('<tr><td>' + id + '</td><td>' + date + '</td><td>' + desc + '</td><td>' + address + '</td></tr>');
                    }
                } else {
                    $("#display").append('<tr><td colspan = "7" align="center">No Item Found</td></tr>');
                }
            }, function(transaction, err){
                alert(err.message);
            });
    });
});