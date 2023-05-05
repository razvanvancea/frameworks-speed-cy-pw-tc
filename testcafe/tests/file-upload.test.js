import { Selector } from 'testcafe';

fixture('File upload test suite')
    .page('http://localhost:9080');

test('file upload test', async t => {
    
    await t
        .click(Selector('#file-upload-item'))
        .setFilesToUpload('#file_upload', [
            '../picture.jpg'
        ])
        .click('button[type="submit"]')
    .expect(Selector('#file_upload_response').withText('You have successfully uploaded').exists).ok();
});
