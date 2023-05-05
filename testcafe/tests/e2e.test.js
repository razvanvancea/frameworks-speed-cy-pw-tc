import { Selector } from 'testcafe';

fixture('E2e test suite')
    .page('http://localhost:9080');

test('login e2e', async t => {
    await t
    .click(Selector('#auth-shop'))
    .typeText(Selector('#email'), 'admin@admin.com')
    .typeText(Selector('#password'), 'admin123')
    .click(Selector('#submitLoginBtn'))
    .click(Selector('.shop-items > div.shop-item:first-child button'))
    .click(Selector('button.btn-purchase'))
    .typeText(Selector('#phone'), '0720322233')
    .typeText(Selector('input[name="street"]'), 'Ale. Florilor')
    .typeText(Selector('input[name="city"]'), 'Bucharest')
    .click(Selector('#countries_dropdown_menu'))
    .click(Selector('option[value="Romania"]'))
    .click(Selector('#submitOrderBtn'))
    .expect(Selector('#message').withText('Congrats!').exists).ok();
})