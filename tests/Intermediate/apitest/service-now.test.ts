import exp from "constants";
import { expect,test } from "playwright/test";

//Update baseURL on config file with the corret one
//https://dev110556.service-now.com/api/now/table/incident
//extraHTTPHeaders is set in config file

let _number: number;
let _sys_id: string;
const short_description = "Some text to test";
//create 
test("Create an inicident", async ({request, baseURL}) => {
    const _response = await request.post("https://dev110556.service-now.com/api/now/table/incident", {
        data: {
            "short_description": short_description,
            "category": "hardware"
        }, headers:{   //this is for line 28
            "Accept":"application/xml"
        }
    });

    expect(_response.status()).toBe(200);
    expect(_response.ok()).toBeTruthy();

    //need to comment these lines with .json function if you want to try line 30
    //also commment headers on the request
    console.log(await _response.json());
    const res = await _response.json();
    _number = res.result.task_effective_number

    //output as xml
    //console.log((await _response.body()).toString());
})

//get
test("Get an inicident", async ({request, baseURL}) => {
    const _response = await request.get("https://dev110556.service-now.com/api/now/table/incident", {
        params: {
            task_effective_number: _number, //"INC0010038",
            sysparam_fields: "Short_description, category"
        }
    });

    console.log(await _response.json());
    expect(_response.status()).toBe(200);
    expect(await _response.json()).toMatchObject({
        result: [{short_description: short_description, category: 'hardware'}]
    });
})

// Uppdate
test("Put(Modify) an Incident", async ({ request, baseURL }) => {
    const _response = await request.put(`${baseURL}/${_sys_id}`, {
        data: {
            "short_description": "Very boring tutorial",
            "category": "Software"
        }
    });
    console.log(await _response.json());
    expect(_response.status()).toBe(200);
    expect(_response.ok()).toBeTruthy();
})

// Delete
test("Delete an Incident", async ({ request, baseURL }) => {
    const _response = await request.delete(`${baseURL}/${_sys_id}`);
    // console.log(await _response.json());
    expect(_response.status()).toBe(204);
    expect(_response.ok()).toBeTruthy();
})