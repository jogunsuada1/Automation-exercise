import {test , expect} from '@playwright/test';

// test caeses for automation exercise website
test('Test case 1: Resgister user.', async ({page}) => {

    // to block ads and trackers.
    await page.route('**/*google*/**', route => route.abort());
    await page.route('**/*doubleclick*/**', route => route.abort());
    await page.route('**/*adservice*/**', route => route.abort());

    // Go to the automation exercise website
    await page.goto('https://automationexercise.com/');

    //verify that home page is visible successfully
    await expect(page).toHaveURL('https://automationexercise.com/');

    //click on 'Signup / Login' button
    await page.locator('a[href="/login"]').click();

    //verify 'New User Signup!' is visible
    await expect(page.locator('h2:has-text("New User Signup!")')).toBeVisible();

    //Enter name and email address
    await page.locator('input[data-qa="signup-name"]').fill('John Doe');
    await page.locator('input[data-qa="signup-email"]').fill('joseph@example.com');

    //click 'Signup' button
    await page.locator('button[data-qa="signup-button"]').click();

    //verify that 'ENTER ACCOUNT INFORMATION' is visible
    await expect(page.locator('h2:has-text("Enter Account Information")')).toBeVisible();

    //Fill details: Title, Name, Email, Password, Date of birth
    await page.locator('input[id="id_gender1"]').check();
    await page.locator('input[id="password"]').fill('Password123');
    await page.locator('select[id="days"]').selectOption('1');
    await page.locator('select[id="months"]').selectOption('January');
    await page.locator('select[id="years"]').selectOption('2000');

    //Slect checkbox 'Signup for our newsletter!'
    await page.locator('input[id="newsletter"]').check();

    //Select checkbox 'Receive special offers from our partners!'
    await page.locator('input[id="optin"]').check();

    //Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
    await page.locator('input[id="first_name"]').fill('John');
    await page.locator('input[id="last_name"]').fill('Doe');
    await page.locator('input[id="company"]').fill('Example Company');
    await page.locator('input[id="address1"]').fill('123 Main St');
    await page.locator('input[id="address2"]').fill('Apt 4B');
    await page.locator('select[id="country"]').selectOption('United States');
    await page.locator('input[id="state"]').fill('California');
    await page.locator('input[id="city"]').fill('Los Angeles');
    await page.locator('input[id="zipcode"]').fill('90001');
    await page.locator('input[id="mobile_number"]').fill('+1234567890');

    //click 'Create Account button'
    await page.locator('button[data-qa="create-account"]').click();

    //verify that 'ACCOUNT CREATED!' is visible
    await expect(page.locator('h2:has-text("Account Created!")')).toBeVisible();

    //click 'Continue' button
    await page.locator('a[data-qa="continue-button"]').click();

    //verify that 'Logged in as username' is visible
    await expect(page.locator('a:has-text("Logged in as John Doe")')).toBeVisible();

    //click 'Delete Account' button
    await page.locator('a[href="/delete_account"]').click(); 

    //verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
    await expect(page.locator('h2:has-text("Account Deleted!")')).toBeVisible();
    await page.locator('a[data-qa="continue-button"]').click();
});

   // Test case 2: Verify product quantity in cart
test.only('Test case 2: Verify product quantity in cart', async ({page}) => {

     // to block ads and trackers.
    await page.route('**/*google*/**', route => route.abort());
    await page.route('**/*doubleclick*/**', route => route.abort());
    await page.route('**/*adservice*/**', route => route.abort());

    // Go to the automation exercise website
    await page.goto('https://automationexercise.com/');

    //verify that home page is visible successfully
    await expect(page).toHaveURL('https://automationexercise.com/');

    //click on 'Signup / Login' button
    await page.locator('a[href="/login"]').click();

    //verify 'New User Signup!' is visible
    await expect(page.locator('h2:has-text("New User Signup!")')).toBeVisible();

    //Enter name and email address
    await page.locator('input[data-qa="signup-name"]').fill('John Doe');
    await page.locator('input[data-qa="signup-email"]').fill('josephseven390@gmail.com');

     //click 'Signup' button
    await page.locator('button[data-qa="signup-button"]').click();

    //verify that 'ENTER ACCOUNT INFORMATION' is visible
    await expect(page.locator('h2:has-text("Enter Account Information")')).toBeVisible();

    //Fill details: Title, Name, Email, Password, Date of birth
    await page.locator('input[id="id_gender1"]').check();
    await page.locator('input[id="password"]').fill('Anuoluwa70@');
    await page.locator('select[id="days"]').selectOption('1');
    await page.locator('select[id="months"]').selectOption('January');
    await page.locator('select[id="years"]').selectOption('2000');

    //Slect checkbox 'Signup for our newsletter!'
    await page.locator('input[id="newsletter"]').check();

    //Select checkbox 'Receive special offers from our partners!'
    await page.locator('input[id="optin"]').check();

    //Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
    await page.locator('input[id="first_name"]').fill('John');
    await page.locator('input[id="last_name"]').fill('Doe');
    await page.locator('input[id="company"]').fill('Example Company');
    await page.locator('input[id="address1"]').fill('123 Main St');
    await page.locator('input[id="address2"]').fill('Apt 4B');
    await page.locator('select[id="country"]').selectOption('United States');
    await page.locator('input[id="state"]').fill('California');
    await page.locator('input[id="city"]').fill('Los Angeles');
    await page.locator('input[id="zipcode"]').fill('90001');
    await page.locator('input[id="mobile_number"]').fill('+1234567890');

    //click 'Create Account button'
    await page.locator('button[data-qa="create-account"]').click();


    //click on 'Signup / Login' button
    await page.locator('a[href="/login"]').click();

    //verify 'Login to your account' is visible
    await expect(page.locator('h2:has-text("Login to your account")')).toBeVisible();

    //enter correct email address and password
    await page.locator('input[data-qa="login-email"]').fill('josephseven390@gmail.com');
    await page.locator('input[data-qa="login-password"]').fill('Anuoluwa70@');

    //click 'login' button
    await page.locator('button[data-qa="login-button"]').click();

    //verify that 'Logged in as username' is visible
    await expect(page.locator('a:has-text("Logged in as joseph")')).toBeVisible();    

    //click 'Delete Account' button
    await page.locator('a[href="/delete_account"]').click();

    //verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
    await expect(page.locator('h2:has-text("Account Deleted!")')).toBeVisible();
    await page.locator('a[data-qa="continue-button"]').click();
})

    //Test case 3: Login user  with incorrect email and password
test('Test case 3: Login user with incorrect email and password', async ({page}) => {

     // to block ads and trackers.
    await page.route('**/*google*/**', route => route.abort());
    await page.route('**/*doubleclick*/**', route => route.abort());
    await page.route('**/*adservice*/**', route => route.abort());

    // Go to the automation exercise website
    await page.goto('https://automationexercise.com/');

    //verify that home page is visible successfully
    await expect(page).toHaveURL('https://automationexercise.com/');

    //click on 'Signup / Login' button
    await page.locator('a[href="/login"]').click();

    //verify 'Login to your account' is visible
    await expect(page.locator('h2:has-text("Login to your account")')).toBeVisible();

    //enter incorrect email address and password
    await page.locator('input[data-qa="login-email"]').fill('incorrect@gmail.com');
    await page.locator('input[data-qa="login-password"]').fill('incorrectpassword');

    //click 'login' button
    await page.locator('button[data-qa="login-button"]').click();

    //verify that 'Invalid email or password' error message is visible
    await expect(page.locator('p:has-text("Your email or password is incorrect!")')).toBeVisible();
});

    //Test case 4: Verify that user can logout successfully
test('Test case 4: Verify that user can logout successfully', async ({page}) => {

     // to block ads and trackers.
    await page.route('**/*google*/**', route => route.abort());
    await page.route('**/*doubleclick*/**', route => route.abort());
    await page.route('**/*adservice*/**', route => route.abort());

    // Go to the automation exercise website
    await page.goto('https://automationexercise.com/');

    //verify that home page is visible successfully
    await expect(page).toHaveURL('https://automationexercise.com/');

    //click on 'Signup / Login' button
    await page.locator('a[href="/login"]').click();

    //verify 'Login to your account' is visible
    await expect(page.locator('h2:has-text("Login to your account")')).toBeVisible();

    //enter correct email address and password
    await page.locator('input[data-qa="login-email"]').fill('josephseven390@gmail.com');
    await page.locator('input[data-qa="login-password"]').fill('Anuoluwa70@');

    //click 'login' button
    await page.locator('button[data-qa="login-button"]').click();

    //verify that 'Logged in as username' is visible
    await expect(page.locator('a:has-text("Logged in as joseph")')).toBeVisible();

    //click 'Logout' button
    await page.locator('a[href="/logout"]').click();

    //verify that user is navigated to login page
    await expect(page).toHaveURL('https://automationexercise.com/login');
});

  //Register user with existing email address
test('Test case 5: Register user with existing email address', async ({page}) => {

     // to block ads and trackers.
    await page.route('**/*google*/**', route => route.abort());
    await page.route('**/*doubleclick*/**', route => route.abort());
    await page.route('**/*adservice*/**', route => route.abort());

    // Go to the automation exercise website
    await page.goto('https://automationexercise.com/');

    //verify that home page is visible successfully
    await expect(page).toHaveURL('https://automationexercise.com/');

    //click on 'Signup / Login' button
    await page.locator('a[href="/login"]').click();

    //verify 'New User Signup!' is visible
    await expect(page.locator('h2:has-text("New User Signup!")')).toBeVisible();

    //Enter name and existing email address
    await page.locator('input[data-qa="signup-name"]').fill('joseph');
    await page.locator('input[data-qa="signup-email"]').fill('josephseven390@gmail.com');

    //click 'Signup' button
    await page.locator('button[data-qa="signup-button"]').click();

    //verify that 'Email already exists!' error message is visible
    await expect(page.locator('p:has-text("Email Address already exist!")')).toBeVisible();
});

    //Test case 6: Contact us form
test('Test case 6: Contact us form' , async ({page}) => {
     // to block ads and trackers.
    await page.route('**/*google*/**', route => route.abort());
    await page.route('**/*doubleclick*/**', route => route.abort());
    await page.route('**/*adservice*/**', route => route.abort());

    //go to website
    await page.goto("https://automationexercise.com/");

    //verify that home page is visible successfully
    await expect(page).toHaveURL("https://automationexercise.com/");

    //click on 'Contact Us' button
    await page.locator('a[href="/contact_us"]').click();

    //verify 'GET IN TOUCH' is visible
    await expect(page.locator('h2:has-text("Get In Touch")')).toBeVisible();

    //fill all details in contact us form
    await page.locator('input[data-qa="name"]').fill("John Doe");
    await page.locator('input[data-qa="email"]').fill("johndoe@example.com");
    await page.locator('input[data-qa="subject"]').fill("Test Subject");
    await page.locator('textarea[data-qa="message"]').fill("Test Message");

    //upload file
    const filePath = "C:\\Users\\HomePC\\Downloads\\Joseph Ogunsuada - Manual QA Tester CV.pdf";
    const fileInput = page.locator('input[type="file"]');
    await fileInput.setInputFiles(filePath);

    //click 'Submit' button
    await page.locator('input[data-qa="submit-button"]').click();
   
    //click 'OK' button on alert
    page.on('dialog', async dialog => {
        await dialog.accept();
    });

    //click 'Submit' button
    await page.locator('input[data-qa="submit-button"]').click();

    //verify success message 'Success! Your details have been submitted successfully.' is visible
    await expect(page.locator('div:has-text("Success! Your details have been submitted successfully.")').nth(0)).toBeVisible();

    //click 'Home' button and verify that landed to home page successfully
    await page.locator('a[href="/"]').nth(2).click();
    await expect(page).toHaveURL("https://automationexercise.com/");
});


    //Test case 7:Verify Test cases page
test('Test case 7: Verify Test cases page', async ({page}) => {

    // Add this near the top of your test or in a beforeEach hook
    await page.route('**/*google*/**', route => route.abort());
    await page.route('**/*doubleclick*/**', route => route.abort());
    await page.route('**/*adservice*/**', route => route.abort());

    // Go to the automation exercise website
    await page.goto('https://automationexercise.com/');
    
    //verify that home page is visible successfully
    await expect(page).toHaveURL('https://automationexercise.com/');

    //click on 'Test Cases' button
    await page.locator('a[href="/test_cases"]').nth(0).click();

    //verify that user is navigated to test cases page successfully
    await expect(page).toHaveURL('https://automationexercise.com/test_cases');
});

    //Test case 8: Verify All Products and product detail page
test('Test case 8: Verify All Products and product detail page', async ({page}) => {

    // to block ads and trackers.
    await page.route('**/*google*/**', route => route.abort());
    await page.route('**/*doubleclick*/**', route => route.abort());
    await page.route('**/*adservice*/**', route => route.abort());

    // Go to the automation exercise website
    await page.goto('https://automationexercise.com/');

    //verify that home page is visible successfully
    await expect(page).toHaveURL('https://automationexercise.com/');

    //click on 'Products' button
    await page.locator('a[href="/products"]').click();

    //verify user is navigated to ALL PRODUCTS page successfully
    await expect(page).toHaveURL('https://automationexercise.com/products');

    //verify that the products list is visible
    await expect(page.locator('div[class="features_items"]')).toBeVisible();    

    //  click on 'View Product' of first product
    await page.locator('a[href="/product_details/1"]').click();

    //verify that user is navigated to product detail page
    await expect(page).toHaveURL('https://automationexercise.com/product_details/1');

    //verify that product details are visible: product name, category, price, availability, condition, brand
    await expect(page.locator('div[class="product-information"]')).toBeVisible();
    await expect(page.locator('h2:has-text("Blue Top")')).toBeVisible();
    await expect(page.locator('p:has-text("Category: Women > Tops")')).toBeVisible();  
    await expect(page.locator('span:has-text("Rs. 500")').nth(0)).toBeVisible();
    await expect(page.locator('span:has-text("Rs. 500")').nth(1)).toBeVisible();
    await expect(page.locator('p:has-text("Availability: In Stock")')).toBeVisible();
    await expect(page.locator('p:has-text("Condition: New")')).toBeVisible();
    await expect(page.locator('p:has-text("Brand: Polo")')).toBeVisible();
});

    //Test case 9: Search product
test('Test case 9: Search product', async ({page}) => {

    // to block ads and trackers.
    await page.route('**/*google*/**', route => route.abort());
    await page.route('**/*doubleclick*/**', route => route.abort());
    await page.route('**/*adservice*/**', route => route.abort());

    // Go to the automation exercise website
    await page.goto('https://automationexercise.com/');

    //verify that home page is visible successfully
    await expect(page).toHaveURL('https://automationexercise.com/');

    //click on 'Products' button
    await page.locator('a[href="/products"]').click();

    //verify user is navigated to ALL PRODUCTS page successfully
    await expect(page).toHaveURL('https://automationexercise.com/products');

    //enter product name in search input and click search button
    await page.locator('input[id="search_product"]').fill('Blue Top');
    await page.locator('button[id="submit_search"]').click();

    //verify 'SEARCHED PRODUCTS' is visible
    await expect(page.locator('h2:has-text("Searched Products")')).toBeVisible();

    //verify that all the products related to search are visible
    await expect(page.locator('div[class="features_items"]')).toBeVisible();
    const productNames = await page.locator('.productinfo p').allInnerTexts();
for (const name of productNames) {
  expect(name.toLowerCase()).toContain('top');
}
});

   //Test case 10: Verify Subscription in home page
test('Test case 10: Verify Subscription in home page', async ({page}) => {
    // to block ads and trackers.
    await page.route('**/*google*/**', route => route.abort());
    await page.route('**/*doubleclick*/**', route => route.abort());
    await page.route('**/*adservice*/**', route => route.abort());

    // Go to the automation exercise website
    await page.goto('https://automationexercise.com/');

    //verify that home page is visible successfully
    await expect(page).toHaveURL('https://automationexercise.com/');

    //scroll down to footer
    await page.locator('footer').scrollIntoViewIfNeeded();

    //verify 'SUBSCRIPTION' is visible
    await expect(page.locator('h2:has-text("Subscription")')).toBeVisible();

    //Enter email address in input and click arrow button
    await page.locator('input[id="susbscribe_email"]').fill('jostemi70@gmail.com');
    await page.locator('button[id="subscribe"]').click();

    //verify success message 'You have been successfully subscribed!' is visible
    await expect(page.locator('div[class="alert-success alert"]')).toBeVisible();
});