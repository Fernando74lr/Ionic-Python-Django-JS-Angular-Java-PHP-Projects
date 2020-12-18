<?php
    session_start();
    include 'assets/inc/functions/functions.php';
    include 'assets/inc/templates/header.php';

    if(isset($_GET['logout'])) {
        // Close session.
        $_SESSION = array();
    } 
?>

    <div class="login-clean" style="height: 649px;">
        <form id="formulario" method="post">
            <h2 class="sr-only">Login Form</h2>
            <div class="illustration">
                <i class="icon ion-ios-navigate"></i>
            </div>
            <div class="form-group">
                <input class="form-control" type="text" name="user" id="user" placeholder="User">
            </div>
            <div class="form-group">
                <input class="form-control" type="password" name="password" id="password" placeholder="Password">
            </div>
            <div class="form-group">
                <input type="hidden" id="action" value="login">
                <input type="hidden" id="password_repeat" value="null">
                <input type="hidden" id="email" value="null">
                <input type="hidden" id="description" value="null">
                <button class="btn btn-primary btn-block" type="submit">Log In</button>
            </div>
            <a class="forgot" href="#">Forgot your email or password?</a>
            <a class="forgot" href="register.php">I don't have a account</a>
        </form>
    </div>

<script src="assets/js/forms.js"></script>
<?php
    include 'assets/inc/templates/footer.php';
?>