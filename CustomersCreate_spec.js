"use strict";
exports.__esModule = true;
var frisby = require("frisby");
frisby.create("CustomersController.CreateCustomer() Test")
    .post("http://localhost:1936/api/customers", {
    "CustomerID": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    "CompanyName": "string",
    "ContactName": "string",
    "ContactTitle": "string",
    "Address": "string",
    "City": "string",
    "Region": "string",
    "PostalCode": "string",
    "Country": "string",
    "Phone": "string",
    "Fax": "string"
})
    .expectHeaderContains("Content-Type", "json")
    .expectJSON({
    "ModelState": {
        "customer.CustomerID": [
            "欄位 CustomerID 必須是最大長度為 5 的字串。"
        ]
    }
})
    .expectStatus(400)
    .toss();
