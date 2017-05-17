import frisby = require('frisby');

frisby.create("CustomersController.Get() Test")
    .get("http://localhost:1936/api/customers/BONAP")
    .expectHeaderContains("Content-Type", "json")
    .expectJSON({
        "CustomerID": "BONAP"
    })
    .expectJSONTypes({
        "CustomerID": String,
        "CompanyName": String,
        "ContactName": String
    })
    .expectMaxResponseTime(500)
    .expectStatus(200)
    .toss();

frisby.create("CustomersController.GetCustomersWithOrder() Test")
    .get("http://localhost:1936/api/customersWithOrder")
    .expectHeaderContains("Content-Type", "json")
    .expectJSONTypes("*", {
        "CustomerID": String,
        "CompanyName": String,
        "ContactName": String
    })
    .expectMaxResponseTime(500)
    .expectStatus(200)
    .toss();

frisby.create("CustomersController.GetCustomersCsv() Test")
    .get("http://localhost:1936/api/customersCsv")
    .expectHeader("Content-Type", "application/x-excel")
    .expectBodyContains("顧客ID,顧客名稱,ContactName,")
    .expectMaxResponseTime(500)
    .expectStatus(200)
    .toss();
