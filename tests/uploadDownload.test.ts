import { test } from "@playwright/test";

test("Download files", async ({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/generate-file-to-download-demo");
    
    await page.type("#textbox", "This is a test text to test the download function");
    await page.click("id=create");

    const download = await Promise.all([
        page.waitForEvent("download"),
        page.click("id=link-to-download")
    ])

    //const path = await download[0].path();
    //console.log(path);

    //OR use
    const fileName = download[0].suggestedFilename();
    await download[0].saveAs(fileName);

})

test("Upload files", async ({page}) => {
    await page.goto("https://blueimp.github.io/jQuery-File-Upload/");
    await page.setInputFiles("input[type='file']",["Lambdainfo.txt"]);
    
    await page.waitForTimeout(3000);

    //OR use
    /* const [uploadFiles] = await Promise.all([
        page.waitForEvent("filechooser"),
        page.click("input[type='file']")
    ])

    const isMultiple = uploadFiles.isMultiple();
    console.log(isMultiple);

    uploadFiles.setFiles(["Lambdainfo.txt"]); */
    
})