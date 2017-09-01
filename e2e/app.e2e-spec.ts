// import { AppPage } from "./app.po";
import { browser, element, by } from "protractor";

describe("employee-portal-front App", () => {
  // let page: AppPage;

  // beforeEach(() => {
  //   page = new AppPage();
  // });

  // it("should display welcome message", () => {
  //   page.navigateTo();
  //   expect(page.getParagraphText()).toEqual("Welcome to app!");
  // });

  it("should show 'Hello, Employee!' inside homepage jumbotron", () => {
    browser.get("/");
    const hello = element(by.css(".jumbotron h1")).getText();
    expect(hello).toEqual("Hello, Employee!");
  });
});
