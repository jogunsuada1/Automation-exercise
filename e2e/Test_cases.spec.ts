import {test , expect} from '@playwright/test';
import { text } from 'stream/iter';

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
test('Test case 2: Verify product quantity in cart', async ({page}) => {

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

    //Test case 11: Verify Subscription in cart page
test('Test case 11: Verify Subscription in cart page', async ({page}) => {
    // to block ads and trackers.
    await page.route('**/*google*/**', route => route.abort());
    await page.route('**/*doubleclick*/**', route => route.abort());
    await page.route('**/*adservice*/**', route => route.abort());

    // Go to the automation exercise website
    await page.goto('https://automationexercise.com/');

    //verify that home page is visible successfully
    await expect(page).toHaveURL('https://automationexercise.com/');

    //click on 'Cart' button
    await page.locator('a[href="/view_cart"]').nth(0).click();

    //verify user is navigated to CART page successfully
    await expect(page).toHaveURL('https://automationexercise.com/view_cart');

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

    //Test case 12: Add product in cart
test('Test case 12: Add product in cart', async ({page}) => {
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

    //verify user is navigated to PRODUCTS page successfully
    await expect(page).toHaveURL('https://automationexercise.com/products');

    //click on the first product
    await page.locator('a[href="/product_details/1"]').first().click();

    //verify user is navigated to PRODUCT DETAILS page successfully
    await expect(page).toHaveURL('https://automationexercise.com/product_details/1');

    //increase quantity
    await page.locator('a[onclick="changeQuantity(1)"]').click();

    //click on 'Add to cart' button
    await page.locator('button:has-text("Add to cart")').click();

    //verify success message 'Product added to cart' is visible
    await expect(page.locator('div[class="alert-success alert"]')).toBeVisible();
})

    // Test Case 13: Verify product quantity in cart
test('Test case 13: Verify product quantity in cart', async ({page}) => {
    // to block ads and trackers.
    await page.route('**/*google*/**', route => route.abort());
    await page.route('**/*doubleclick*/**', route => route.abort());
    await page.route('**/*adservice*/**', route => route.abort());

    // Go to the automation exercise website
    await page.goto('https://automationexercise.com/');

    //verify that home page is visible successfully
    await expect(page).toHaveURL('https://automationexercise.com/');

    //click view product on any product on home page
    await page.locator('a[href="/product_details/1"]').click();

    //verify product detail is opened   
    await expect(page.locator('div[class="product-information"]')).toBeVisible();

    //increase quantity to 4
    await page.locator('a[onclick="changeQuantity(1)"]').click();
    await page.locator('a[onclick="changeQuantity(1)"]').click();
    await page.locator('a[onclick="changeQuantity(1)"]').click();

    //click 'Add to cart' button
    await page.locator('button:has-text("Add to cart")').click();

    //click 'View Cart' button
    await page.locator('a:has-text("View Cart")').click();

    //verify that product displayed in cart page with exact quantity
    await expect(page.locator('td.cart_quantity')).toHaveText('4');
});

    //Test Case 14: Place Order: Register while checkout.
test('Test Case 14: Place Order: Register while checkout.' , async ({page}) =>{
    //To block ads and trackers
    await page.route('**/*google*/**/' , route => route.abort());
    await page.route('**/*doubleclick*/**' , route => route.abort());
    await page.route('**/*adservice*/**' , route => route.abort());

    //Go to website
    await page.goto('https://automationexercise.com/');

    //Verify that home page is visible successfully
    await expect(page).toHaveURL('https://automationexercise.com');

    // Add products to cart
    await page.locator('a[data-product-id="1"]').nth(0).click();
    //click continue shopping button
    await page.locator('button:has-text("Continue Shopping")').click();
    //add product 2 to cart
    await page.locator('a[data-product-id="2"]').nth(0).click();
    //click continue shopping button
    await page.locator('button:has-text("Continue Shopping")').click();

    //click 'Cart' button
    await page.locator('a[href="/view_cart"]').nth(0).click();

    //verify that the cart page is visible
    await expect(page.locator('div.cart_info')).toBeVisible();

    //click 'Proceed To Checkout' button
    await page.locator('a:has-text("Proceed To Checkout")').click();

    //click 'Register / Login' button
    await page.locator('a[href="/login"]').nth(1).click();

    //fill in all the details in signup form and create account
    await page.locator('input[data-qa="signup-name"]').fill('Joseph Seven');
    await page.locator('input[data-qa="signup-email"]').fill('joseph.temitope@example.com');
    await page.locator('button[data-qa="signup-button"]').click();

    await page.locator('input[id="id_gender1"]').check();
    await page.locator('input[id="password"]').fill('Password123');
    await page.locator('select[id="days"]').selectOption('1');
    await page.locator('select[id="months"]').selectOption('January');
    await page.locator('select[id="years"]').selectOption('2000');
    
    //fill in address details
    await page.locator('input[id="first_name"]').fill('Joseph');
    await page.locator('input[id="last_name"]').fill('Seven');
    await page.locator('input[id="company"]').fill('Example Company');
    await page.locator('input[id="address1"]').fill('123 Main St');
    await page.locator('input[id="address2"]').fill('Apt 4B');
    await page.locator('select[id="country"]').selectOption('United States');
    await page.locator('input[id="state"]').fill('California');
    await page.locator('input[id="city"]').fill('Los Angeles');
    await page.locator('input[id="zipcode"]').fill('90001');
    await page.locator('input[id="mobile_number"]').fill('+1234567890');

    //click 'Create Account' button
    await page.locator('button[data-qa="create-account"]').click();

    //verify that 'ACCOUNT CREATED!' is visible and click 'Continue' button
    await expect(page.locator('h2:has-text("Account Created!")')).toBeVisible();
    await page.locator('a:has-text("Continue")').click();

    //verify that 'Logged in as username' is visible
    await expect(page.locator('a:has-text("Logged in as Joseph Seven")')).toBeVisible();

    //click 'Cart' button
    await page.locator('a[href="/view_cart"]').nth(0).click();

    //click proceed to checkout button
    await page.locator('a:has-text("Proceed To Checkout")').click();

    //Verify address details and review your order
    await page.locator('div[class="checkout-information"]').scrollIntoViewIfNeeded();

    //Enter description in comment text area and click 'Place Order'
    await page.locator('textarea[name="message"]').fill('Please deliver between 9 AM and 5 PM.');
    await page.locator('a:has-text("Place Order")').click();

    //enter payment details: Name on Card, Card Number, CVC, Expiration date
    await page.locator('input[name="name_on_card"]').fill('Joseph Seven');
    await page.locator('input[name="card_number"]').fill('4111111111111111');
    await page.locator('input[name="cvc"]').fill('123');
    await page.locator('input[name="expiry_month"]').fill('12');
    await page.locator('input[name="expiry_year"]').fill('2025');

    //click 'Pay and Confirm Order' button
    await page.locator('button:has-text("Pay and Confirm Order")').click();

    //verify success message 'Your order has been placed successfully!' is visible
    //await expect(page.locator('p:has-text("Your order has been placed successfully!")')).toBeVisible();

    //click 'Delete Account' button
    await page.locator('a[href="/delete_account"]').nth(0).click();

    //verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
    await expect(page.locator('h2:has-text("ACCOUNT DELETED!")')).toBeVisible();
    await page.locator('a:has-text("Continue")').click();
});

    //Test case 15:Place Order: Register before checkout
test('Test case 15:Place Order: Register before checkout' , async ({page}) => {
    //to block ads and trackers
    await page.route('**/*google*/**' , route => route.abort());
    await page.route('**/*doubleclick*/**' , route => route.abort());
    await page.route('**/*adservice*/**' , route => route.abort());

    //Navigate to website
    await page.goto('https://automationexercise.com/');

    //Verify that home page is visible
    await expect(page).toHaveURL('https://automationexercise.com/');

    //click signup/login button
    await page.locator('a[href="/login"]').nth(0).click();

    //5.Fill all details in signup and create account

    // Generate a random email
const randomEmail = `testuser_${Date.now()}@example.com`;

    await page.locator('input[data-qa="signup-name"]').fill('Joseph Ogunsuada');
    await page.locator('input[data-qa="signup-email"]').fill(randomEmail)
    await page.locator('button:has-text("Signup")').click();

    //enter account information
    await page.locator('input[id="id_gender1"]').check();
    await page.locator('input[id="password"]').fill('Password123');
    await page.locator('select[id="days"]').selectOption('1');
    await page.locator('select[id="months"]').selectOption('January');
    await page.locator('select[id="years"]').selectOption('2004')

    //Enter address information
    await page.locator('input[id="first_name"]').fill('Joseph');
    await page.locator('input[id="last_name"]').fill('Joseph');
    await page.locator('input[id="company"]').fill('Seven');
    await page.locator('input[id="address1"]').fill('77 apata street');
    await page.locator('input[id="address2"]').fill('Lasu Epe');
    await page.locator('select[id="country"]').selectOption('Canada');
    await page.locator('input[id="state"]').fill('Toronto');
    await page.locator('input[id="city"]').fill('Toronto');
    await page.locator('input[id="zipcode"]').fill('100011');
    await page.locator('input[id="mobile_number"]').fill('09018150913');
    //click create account
    await page.locator('button:has-text("Create Account")').click();

    // 6. Verify 'ACCOUNT CREATED!' and click 'Continue' button
    await expect(page.locator('h2:has-text("Account Created!")')).toBeVisible();
    await page.locator('a:has-text("Continue")').click();

    // 7. Verify ' Logged in as username' at top
    await page.locator('a:has-text("Logged in as Joseph Ogunsuada")')

    // 8. Add products to cart
    await page.locator('a[data-product-id="1"]').nth(0).click();
    await page.locator('button:has-text("Continue Shopping")').click();
    await page.locator('a[data-product-id="2"]').nth(0).click();
    await page.locator('button:has-text("Continue Shopping")').click();
    await page.locator('a[data-product-id="3"]').nth(0).click();
    await page.locator('button:has-text("Continue Shopping")').click();

    // 9. Click 'Cart' button
    await page.locator('a[href="/view_cart"]').nth(0).click();

    // 10. Verify that cart page is displayed
    //await expect(page.locator('div[id="cart_info"]')).toBeVisible();

    // 11. Click Proceed To Checkout
    await page.locator('a:has-text("Proceed To Checkout")').click();

    // 12. Verify Address Details and Review Your Order
    await page.locator('div[class="checkout-information"]').scrollIntoViewIfNeeded();

    // 13. Enter description in comment text area and click 'Place Order'
    await page.locator('textarea[name="message"]').fill('please be be quick with the delivery');
    await page.locator('a:has-text("Place Order")').click();

    // 14. Enter payment details: Name on Card, Card Number, CVC, Expiration date
    await page.locator('input[data-qa="name-on-card"]').fill('Joseph Seven');
    await page.locator('input[data-qa="card-number"]').fill('411111111111111');
    await page.locator('input[data-qa="cvc"]').fill('311');
    await page.locator('input[data-qa="expiry-month"]').fill('07');
    await page.locator('input[data-qa="expiry-year"]').fill('2028');

    // 15. Click 'Pay and Confirm Order' button
    await page.locator('button[data-qa="pay-button"]').click();

    //16. Verify success message 'Your order has been placed successfully!'
    //await expect(page.locator('p:has-text("Your order has been placed successfully!")')).toBeVisible();
    
    // 17. Click 'Delete Account' button
    await page.locator('a[href="/delete_account"]').click();

    //18. Verify 'ACCOUNT DELETED!' and click 'Continue' button
    await expect(page.locator('h2:has-text("Account Deleted!")')).toBeVisible();
    await page.locator('a:has-text("Continue")').click();
});

    //Test case 16: Place Order: Login before Checkout
test('Test case 16: Place Order: Login before Checkout' , async ({page}) => {
    // To block all ads
    await page.route('**/*google*/**' , route => route.abort());
    await page.route('**/*doubleclick*/**' ,route => route.abort());
    await page.route('**/*adservice*/**' , route => route.abort());

    // Go to website
    await page.goto('https://automationexercise.com/')

    // Verify that home page is visible
    await expect(page).toHaveURL('https://automationexercise.com/')

    // Click signup and login button
    await page.locator('a[href="/login"]').nth(0).click();

    //  Fill email, password and click 'Login' button
    await page.locator('input[data-qa="login-email"]').fill('jostemi70@gmail.com');
    await page.locator('input[data-qa="login-password"]').fill('12345678');
    await page.locator('button[data-qa="login-button"]').click();

    //  Verify 'Logged in as username' at top
    await expect(page.getByText(/Logged in as/i)).toBeVisible();

    // 7. Add products to cart
    await page.locator('a[data-product-id="1"]').nth(0).click();
    await page.locator('button:has-text("Continue Shopping")').click();
    await page.locator('a[data-product-id="2"]').nth(0).click();
    await page.locator('button:has-text("Continue Shopping")').click();
    await page.locator('a[data-product-id="3"]').nth(0).click();
    await page.locator('button:has-text("Continue Shopping")').click();

    // 8. Click 'Cart' button
    await page.locator('a[href="/view_cart"]').nth(0).click();

    // 9. Verify that cart page is displayed
    await expect(page).toHaveURL('https://automationexercise.com/view_cart');
    await page.locator('div[id="cart_info"]').scrollIntoViewIfNeeded();

    // 10. Click Proceed To Checkout
    await page.locator('a:has-text("Proceed To Checkout")').click();

    // 11. Verify Address Details and Review Your Order
    await page.locator('div[class="checkout-information"]').scrollIntoViewIfNeeded();
    await page.locator('div[id="cart_info"]').scrollIntoViewIfNeeded();

    // 12. Enter description in comment text area and click 'Place Order'
    await page.locator('textarea[name="message"]').fill('I need quick delivery');
    await page.locator('a[href="/payment"]').click();

    //13. Enter payment details: Name on Card, Card Number, CVC, Expiration date
    await page.locator('input[data-qa="name-on-card"]').fill('Joseph Ogunsuada');
    await page.locator('input[data-qa="card-number"]').fill('12345678987654567');
    await page.locator('input[data-qa="cvc"]').fill('123');
    await page.locator('input[data-qa="expiry-month"]').fill('12');
    await page.locator('input[data-qa="expiry-year"]').fill('2034');

    //14. Click 'Pay and Confirm Order' button
    await page.locator('button[data-qa="pay-button"]').click();

    //15. Verify success message 'Your order has been placed successfully!'
    //await expect(page.locator('p:has-text("Your order has been placed successfully!")')).toBeVisible();


});

    //Test case 17: Remove Products From Cart
test('Test case 17: Remove Products From Cart' , async ({page}) => {
    // To block all ads
    await page.route('**/*google*/**' , route => route.abort());
    await page.route('**/*doubleclick*/**' ,route => route.abort());
    await page.route('**/*adservice*/**' , route => route.abort());

    // Go to website
    await page.goto('https://automationexercise.com/');

    // Verify that home page is visible
    await expect(page).toHaveURL('https://automationexercise.com/');

    // 7. Add products to cart
    await page.locator('a[data-product-id="1"]').nth(0).click();
    await page.locator('button:has-text("Continue Shopping")').click();
    await page.locator('a[data-product-id="2"]').nth(0).click();
    await page.locator('button:has-text("Continue Shopping")').click();
    await page.locator('a[data-product-id="3"]').nth(0).click();
    await page.locator('button:has-text("Continue Shopping")').click();

    // 8. Click 'Cart' button
    await page.locator('a[href="/view_cart"]').nth(0).click();

    // 9. Verify that cart page is displayed    
    await expect(page).toHaveURL('https://automationexercise.com/view_cart');
    await page.locator('div[id="cart_info"]').scrollIntoViewIfNeeded();

    // 10. Click 'X' button corresponding to particular product 
    await page.locator('a.cart_quantity_delete[data-product-id="1"]').click();

     await page.waitForLoadState('networkidle'); 

    // 11. Verify that product is removed from the cart
    await expect(page.locator('tr[id="product-1"]')).toHaveCount(0);
});

    // Test Case 18: View Category Products
test('Test Case 18: View Category Products', async ({page}) => {
    // To block all ads
    await page.route('**/*google*/**' , route => route.abort());
    await page.route('**/*doubleclick*/**' ,route => route.abort());
    await page.route('**/*adservice*/**' , route => route.abort());

    //Go to website
    await page.goto('https://automationexercise.com/');

    //Verify that home page is visible
    await expect(page).toHaveURL('https://automationexercise.com/');

    //Click on 'Women' category
    await page.locator('a[href="#Women"]').click();

    //click on any category link under 'Women' category, for example: Dress
    await page.locator('a[href="/category_products/2"]').nth(0).click();

    // Verify that category page is displayed and confirm text 'WOMEN - TOPS PRODUCTS'
    await expect(page).toHaveURL('https://automationexercise.com/category_products/2');
    await expect(page.locator('h2:has-text("Women - Tops Products")')).toBeVisible();

    //On left side bar, click on any sub-category link of category, for example: T-shirts
    await page.locator('a[href="#Men"]').click();
    await page.locator('a[href="/category_products/3"]').nth(0).click();

    // Verify that user is navigated to that category page
    await expect(page).toHaveURL('https://automationexercise.com/category_products/3');
});

    // Test Case 19: View & Cart Brand Products
test('Test Case 19: View & Cart Brand Products', async ({page}) => {
    // To block all ads
    await page.route('**/*google*/**' , route => route.abort());
    await page.route('**/*doubleclick*/**' ,route => route.abort());
    await page.route('**/*adservice*/**' , route => route.abort());

    //Go to website
    await page.goto('https://automationexercise.com/');

    //Verify that home page is visible
    await expect(page).toHaveURL('https://automationexercise.com/');

    // Click on Products button
    await page.locator('a[href="/products"]').click();

    //verify that brands are visible on left side bar
    await expect(page.locator('div[class="brands_products"]')).toBeVisible();

    // Click on any brand name, for example: Polo
    await page.locator('a[href="/brand_products/Polo"]').click();

    // Verify that user is navigated to brand page and brand products are displayed
    await expect(page).toHaveURL('https://automationexercise.com/brand_products/Polo');
    await expect(page.locator('h2:has-text("Brand - Polo Products")')).toBeVisible();

    // On the left side bar, click on any other brand link, for example: BABYHUG
    await page.locator('a[href="/brand_products/Babyhug"]').click();

    // Verify that user is navigated to that brand page and can see products
    await expect(page).toHaveURL('https://automationexercise.com/brand_products/Babyhug');
    await expect(page.locator('h2:has-text("Brand - BABYHUG Products")')).toBeVisible();
})

    // Test Case 20: Search Products and Verify Cart After Login
test('Test Case 20: Search Products and Verify Cart After Login', async ({page}) => {
    // To block all ads
    await page.route('**/*google*/**' , route => route.abort());
    await page.route('**/*doubleclick*/**' ,route => route.abort());
    await page.route('**/*adservice*/**' , route => route.abort());

    //Go to website
    await page.goto('https://automationexercise.com/');

    // Click on Products button
    await page.locator('a[href="/products"]').click();

    // Verify that user is navigated to ALL PRODUCTS page successfully
    await expect(page).toHaveURL('https://automationexercise.com/products');

    //  Enter product name in search input and click search button
    await page.locator('input[id="search_product"]').fill('Top');
    await page.locator('button[id="submit_search"]').click();

    // Verify 'SEARCHED PRODUCTS' is visible
    await expect(page.locator('h2:has-text("Searched Products")')).toBeVisible();

    // Verify that all the products related to search are visible
    const searchRESULTS = page.locator('div.features_items');
    await expect(searchRESULTS).toBeVisible();

    // the search result has products more than 0
    await expect(searchRESULTS).not.toHaveCount(0);

    // all  the items have Top in their name
    const productNames = await page.locator('.productinfo p').allInnerTexts();

    for (const name of productNames) {
        expect(name.toLowerCase()).toContain('top');
    }
    //test fails heree 
});

    // Test case 21: Add review on product
test('Test case 21: Add review on product', async ({page}) => {
    // To block all ads
    await page.route('**/*google*/**' , route => route.abort());
    await page.route('**/*doubleclick*/**' ,route => route.abort());
    await page.route('**/*adservice*/**' , route => route.abort());

    //Go to website
    await page.goto('https://automationexercise.com/');

    // Click on Products button
    await page.locator('a[href="/products"]').click();

    // Verify that user is navigated to ALL PRODUCTS page successfully
    await expect(page).toHaveURL('https://automationexercise.com/products');
    await expect(page.locator('h2:has-text("All Products")')).toBeVisible();

    // Click on 'View Product' of first product
    await page.locator('a[href="/product_details/1"]').click();

    // Verify write your review is visible
    await expect(page.locator('a:has-text("Write Your Review")')).toBeVisible();

    //Enter name, email and review
    await page.locator('input[id="name"]').fill('Joseph Ogunsuada');
    await page.locator('input[id="email"]').fill('jostemi70@gmail');
    await page.locator('textarea[id="review"]').fill('This is a great product!');

    // click 'Submit' button
    await page.locator('button[id="button-review"]').click();

    // Verify success message 'Thank you for your review.' is visible
    await expect(page.locator('div.alert-success:has-text("Thank you for your review.")').nth(0)).toBeVisible();
});

    // Test Case 22: Add to cart from Recommended items
test('Test Case 22: Add to cart from Recommended items', async ({page}) => {
    // To block all ads
    await page.route('**/*google*/**' , route => route.abort());
    await page.route('**/*doubleclick*/**' ,route => route.abort());
    await page.route('**/*adservice*/**' , route => route.abort());

    //Go to website
    await page.goto('https://automationexercise.com/');

    // Scroll down to footer
    await page.locator('footer').scrollIntoViewIfNeeded();

    //verify 'RECOMMENDED ITEMS' is visible
    await expect(page.locator('h2:has-text("Recommended Items")')).toBeVisible();

    // Click on 'Add to cart' button on Recommended product
    await page.locator('a[data-product-id="1"]').nth(2).click();

    // Click on 'Continue Shopping' button
    await page.locator('button[data-dismiss="modal"]').click();

    // Click on 'View Cart' button
    await page.locator('a[href="/view_cart"]').nth(0).click();

    // Verify that product is displayed in cart page    
    await expect(page.locator('tr[id="product-1"]')).toBeVisible();
});

    //Test Case 23: Verify address details in checkout page
test('Test Case 23: Verify address details in checkout page', async ({page}) => {
    // To block all ads
    await page.route('**/*google*/**' , route => route.abort());
    await page.route('**/*doubleclick*/**' ,route => route.abort());
    await page.route('**/*adservice*/**' , route => route.abort());

    //Go to website
    await page.goto('https://automationexercise.com/');

    // Verify that home page is visible
    await expect(page).toHaveURL('https://automationexercise.com/');

    // Click on 'Signup / Login' button
    await page.locator('a[href="/login"]').nth(0).click();

     // Generate a random email
const randomEmail = `testuser_${Date.now()}@example.com`;

    await page.locator('input[data-qa="signup-name"]').fill('Joseph Ogunsuada');
    await page.locator('input[data-qa="signup-email"]').fill(randomEmail)
    await page.locator('button:has-text("Signup")').click();

    //enter account information
    await page.locator('input[id="id_gender1"]').check();
    await page.locator('input[id="password"]').fill('Password123');
    await page.locator('select[id="days"]').selectOption('1');
    await page.locator('select[id="months"]').selectOption('January');
    await page.locator('select[id="years"]').selectOption('2004')

    //Enter address information
    await page.locator('input[id="first_name"]').fill('Joseph');
    await page.locator('input[id="last_name"]').fill('Ogunsuada');
    await page.locator('input[id="company"]').fill('Seven');
    await page.locator('input[id="address1"]').fill('77 apata street');
    await page.locator('input[id="address2"]').fill('Lasu Epe');
    await page.locator('select[id="country"]').selectOption('Canada');
    await page.locator('input[id="state"]').fill('Toronto');
    await page.locator('input[id="city"]').fill('Toronto');
    await page.locator('input[id="zipcode"]').fill('100011');
    await page.locator('input[id="mobile_number"]').fill('09018150913');
    //click create account
    await page.locator('button:has-text("Create Account")').click();

    // 6. Verify 'ACCOUNT CREATED!' and click 'Continue' button
    await expect(page.locator('h2:has-text("Account Created!")')).toBeVisible();
    await page.locator('a:has-text("Continue")').click();

    // Verify ' Logged in as username' at top
    await expect(page.locator('a:has-text("Logged in as Joseph Ogunsuada")')).toBeVisible();

    // Add products to cart
    await page.locator('a[data-product-id="1"]').nth(0).click();
    await page.locator('button[data-dismiss="modal"]').click();
    await page.locator('a[data-product-id="2"]').nth(0).click();
    await page.locator('button[data-dismiss="modal"]').click();
    await page.locator('a[data-product-id="3"]').nth(0).click();
    await page.locator('button[data-dismiss="modal"]').click();

    // Click 'Cart' button
    await page.locator('a[href="/view_cart"]').nth(0).click();

    // Verify that cart page is displayed
    await expect(page).toHaveURL('https://automationexercise.com/view_cart');
    await page.locator('div[id="cart_info"]').scrollIntoViewIfNeeded();

    // Click 'Proceed To Checkout' button
    await page.locator('a.check_out').click();

    // Verify That the delivery address is same address filled at the time registration of account
    const deliveryAddress = await page.locator('ul[id="address_delivery"]').innerText();
    expect(deliveryAddress).toContain('Joseph Ogunsuada');
    expect(deliveryAddress).toContain('77 apata street');
    expect(deliveryAddress).toContain('Lasu Epe');
    expect(deliveryAddress).toContain('Toronto');
    expect(deliveryAddress).toContain('Canada');
    expect(deliveryAddress).toContain('100011');
    expect(deliveryAddress).toContain('09018150913');

    // Verify That the billing address is same address filled at the time registration of account
    const billingAddress = await page.locator('ul[id="address_invoice"]').innerText();
    expect(billingAddress).toContain('Joseph Ogunsuada');
    expect(billingAddress).toContain('77 apata street');
    expect(billingAddress).toContain('Lasu Epe');
    expect(billingAddress).toContain('Toronto');
    expect(billingAddress).toContain('Canada');
    expect(billingAddress).toContain('100011');
    expect(billingAddress).toContain('09018150913');

    // click 'Delete Account' button
    await page.locator('a[href="/delete_account"]').click();

    // Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
    await expect(page.locator('h2:has-text("Account Deleted!")')).toBeVisible();
    await page.locator('a:has-text("Continue")').click();
});

    //Test Case 24: Download Invoice after purchase order
test('Test Case 24: Download Invoice after purchase order', async ({page}) => {
    // To block all ads
    await page.route('**/*google*/**' , route => route.abort());
    await page.route('**/*doubleclick*/**' ,route => route.abort());
    await page.route('**/*adservice*/**' , route => route.abort());

    //Go to website
    await page.goto('https://automationexercise.com/');

    // Verify that home page is visible
    await expect(page).toHaveURL('https://automationexercise.com/');

    // Add products to cart
    await page.locator('a[data-product-id="1"]').nth(0).click();
    await page.locator('button[data-dismiss="modal"]').click();
    await page.locator('a[data-product-id="2"]').nth(0).click();
    await page.locator('button[data-dismiss="modal"]').click();
    await page.locator('a[data-product-id="3"]').nth(0).click();
    await page.locator('button[data-dismiss="modal"]').click();

    // Click 'Cart' button
    await page.locator('a[href="/view_cart"]').nth(0).click();

    // Verify that cart page is displayed
    await expect(page).toHaveURL('https://automationexercise.com/view_cart');
    await page.locator('div[id="cart_info"]').scrollIntoViewIfNeeded();

    // Click 'Proceed To Checkout' button
    await page.locator('a.check_out').click();

    // click 'Register / Login' button
    await page.locator('a[href="/login"]').nth(1).click();

    // fill all details in signup and create account
    const randomEmail = `testuser_${Date.now()}@example.com`
    await page.locator('input[data-qa="signup-name"]').fill('Joseph Ogunsuada');
    await page.locator('input[data-qa="signup-email"]').fill(randomEmail);
    await page.locator('button[data-qa="signup-button"]').click();

    //enter account information
    await page.locator('input[id="id_gender1"]').check();
    await page.locator('input[id="password"]').fill('Password123');
    await page.locator('select[id="days"]').selectOption('1');
    await page.locator('select[id="months"]').selectOption('January');
    await page.locator('select[id="years"]').selectOption('2004');
    await page.locator('input[id="first_name"]').fill('Joseph');
    await page.locator('input[id="last_name"]').fill('Ogunsuada');
    await page.locator('input[id="company"]').fill('Seven');
    await page.locator('input[id="address1"]').fill('77 apata street');
    await page.locator('input[id="address2"]').fill('Lasu Epe');
    await page.locator('select[id="country"]').selectOption('Canada');
    await page.locator('input[id="state"]').fill('Toronto');
    await page.locator('input[id="city"]').fill('Toronto');
    await page.locator('input[id="zipcode"]').fill('100011');
    await page.locator('input[id="mobile_number"]').fill('09018150913');
    //click 'Create Account' button
    await page.locator('button[data-qa="create-account"]').click();

    //verify that 'ACCOUNT CREATED!' is visible and click 'Continue' button
    await expect(page.locator('h2:has-text("Account Created!")')).toBeVisible();
    await page.locator('a:has-text("Continue")').click();

    // click 'Cart' button
    await page.locator('a[href="/view_cart"]').nth(0).click();

    // click 'Proceed To Checkout' button
    await page.locator('a.check_out').click();

    //verify address details and review your order
    await page.locator('div[class="checkout-information"]').scrollIntoViewIfNeeded();
    // Verify That the delivery address is same address filled at the time registration of account
    const deliveryAddress = await page.locator('ul[id="address_delivery"]').innerText();
    expect(deliveryAddress).toContain('Joseph Ogunsuada');
    expect(deliveryAddress).toContain('77 apata street');
    expect(deliveryAddress).toContain('Lasu Epe');
    expect(deliveryAddress).toContain('Toronto');
    expect(deliveryAddress).toContain('Canada');
    expect(deliveryAddress).toContain('100011');
    expect(deliveryAddress).toContain('09018150913');

    // Verify That the billing address is same address filled at the time registration of account
    const billingAddress = await page.locator('ul[id="address_invoice"]').innerText();
    expect(billingAddress).toContain('Joseph Ogunsuada');
    expect(billingAddress).toContain('77 apata street');
    expect(billingAddress).toContain('Lasu Epe');
    expect(billingAddress).toContain('Toronto');
    expect(billingAddress).toContain('Canada');
    expect(billingAddress).toContain('100011');
    expect(billingAddress).toContain('09018150913');

    //enter description in comment text area and click 'Place Order'
    await page.locator('textarea[name="message"]').fill('Please deliver between 9 AM and 5 PM.');
    await page.locator('a[href="/payment"]').click(); //click 'Place Order' button

    //enter payment details: Name on Card, Card Number, CVC, Expiration date
    await page.locator('input[data-qa="name-on-card"]').fill('Joseph Ogunsuada');
    await page.locator('input[data-qa="card-number"]').fill('4111111111111111');
    await page.locator('input[data-qa="cvc"]').fill('123');
    await page.locator('input[data-qa="expiry-month"]').fill('12');
    await page.locator('input[data-qa="expiry-year"]').fill('2025');

    //click 'Pay and Confirm Order' button
    await page.locator('button[data-qa="pay-button"]').click();

    //verify success message 'Your order has been placed successfully!' is visible
    await expect(page.locator('div.alert-success')).toBeVisible();

    //click 'Download Invoice' button and verify invoice is downloaded successfully.
    const [download] = await Promise.all([
        page.waitForEvent('download'), // Wait for the download to start
        page.locator('a[href="/download_invoice/900"]').click() // Click the download button
    ]);

    // Save the downloaded file to a specific path
    const downloadPath = await download.path();
    console.log(`Invoice downloaded to: ${downloadPath}`);

    //click 'Delete Account' button
    await page.locator('a[href="/delete_account"]').click();

    //verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
    await expect(page.locator('h2:has-text("Account Deleted!")')).toBeVisible();
    await page.locator('a:has-text("Continue")').click();
}
);

    // Test Case 25: Verify Scroll Up using 'Arrow' button and Scroll Down functionality
test('Test Case 25: Verify Scroll Up using Arrow button and Scroll Down functionality', async ({page}) => {
    // To block all ads
    await page.route('**/*google*/**' , route => route.abort());
    await page.route('**/*doubleclick*/**' ,route => route.abort());
    await page.route('**/*adservice*/**' , route => route.abort());

    //Go to website 
    await page.goto('https://automationexercise.com/');

    //verify that home page is visible
    await expect(page).toHaveURL('https://automationexercise.com/');

    // Scroll down page to bottom
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(2000); // Wait for 2 seconds

    // Verify that 'SUBSCRIPTION' is visible
    await expect(page.locator('h2:has-text("Subscription")')).toBeVisible();

    // Click on arrow at bottom right side to move upward
    await page.locator('a[id="scrollUp"]').click();

    // Verify that page is scrolled up and 'Full-Fledged practice website for Automation Engineers' text is visible on screen
    await expect(page.locator('h2:has-text("Full-Fledged practice website for Automation Engineers")').nth(0)).toBeVisible();
});

    // Test Case 26: Verify Scroll Up without 'Arrow' button and Scroll Down functionality
test.only('Test Case 26: Verify Scroll Up without Arrow button and Scroll Down functionality', async ({page}) => {
    // To block all ads
    await page.route('**/*google*/**' , route => route.abort());
    await page.route('**/*doubleclick*/**' ,route => route.abort());
    await page.route('**/*adservice*/**' , route => route.abort());

    //Go to website
    await page.goto('https://automationexercise.com/');

    //  verify that home page is visible
    await expect(page).toHaveURL('https://automationexercise.com/');

    // Scroll down page to bottom
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(2000); // Wait for 2 seconds

    // Verify that 'SUBSCRIPTION' is visible
    await expect(page.locator('h2:has-text("Subscription")')).toBeVisible();

    // Scroll up page to top without clicking on arrow button
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(2000); // Wait for 2 seconds

    // Verify that page is scrolled up and 'Full-Fledged practice website for Automation Engineers' text is visible on screen
    await expect(page.locator('h2:has-text("Full-Fledged practice website for Automation Engineers")').nth(0)).toBeVisible();
});