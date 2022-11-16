var db = openDatabase("dateDB", "1.0", "dateDB", 1000);

$(function(){
    $("#create").click(function(){
      db.transaction(function(transaction){
        var sql="CREATE TABLE dates" +
            "(id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
            "date DATE," +
            "description VARCHAR," +
            "lat INTEGER,"
            "long INTEGER"
            "address VARCHAR)";
            transaction.executeSql(sql, undefined, function(){
                alert("Data is created successfully");
            }, 
            function(){
                alert("Table is already created");
            });
      });
    });
});

$(function(){
    $("#remove").click(function(){
        if(!confirm("Are you sure about this?", "")) return;
        db.transaction(function(transaction){
            var sql = "DROP TABLE dates";
            transaction.executeSql(sql, undefined,
                function(){
                    alert("Table is deleted");
                }, 
                function(){
                    alert("Error occured");
                });
        });
    });
});

$(function(){
    $("#insert").click(function(){

    });
});