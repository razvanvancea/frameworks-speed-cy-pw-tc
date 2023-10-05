import { Selector } from "testcafe";

fixture("Bugs form").page("http://localhost:9080");

test("spot the bugs test", async (t) => {
  await t
    .click(Selector("#bugs-form"))
    .typeText(Selector("#firstName"), "John")
    .typeText(Selector("#lastName"), "Smith")
    .typeText(Selector("#phone"), "0720322233")
    .click(Selector("#countries_dropdown_menu"))
    .click(Selector('option[value="Romania"]'))
    .typeText(Selector("#emailAddress"), "iamqarv@gmail.com")
    .typeText(Selector("#password"), "Qweqweqwe.123")
    .click(Selector("#registerBtn"))
    .expect(Selector("#message").exists)
    .ok();
});

test("submit empty form test", async (t) => {
  await t
    .click(Selector("#bugs-form"))
    .click(Selector("#registerBtn"))
    .expect(
      Selector("#message").withText(
        "The password should contain between [6,20] characters!",
      ).exists,
    )
    .ok();
});
