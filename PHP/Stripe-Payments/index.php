<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- CSS -->
    <link rel="stylesheet" href="assets/css/styles.css">
    
    <!-- Stripe JS -->
    <script src="https://js.stripe.com/v3/"></script>
    
    <title>Stripe</title>
</head>
<body>
    <!-- Form Card -->
    <form action="create_charge.php" method="post" id="payment-form">
        <div class="form-row">
            <label for="card-element">Credit or debit card</label>
            
            <div id="card-element">
                <!-- A Stripe Element will be inserted here. -->
            </div>
            
            <!-- Used to display form errors. -->
            <div id="card-errors" role="alert"></div>
        </div>

        <button>Submit Payment</button>
    </form>

    <!-- Scripts Js -->
    <script src="assets/js/scripts.js"></script>

</body>
</html>
