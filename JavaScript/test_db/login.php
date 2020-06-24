<?php
    include 'assets/inc/templates/header.php';
?>

<div class="login-clean" style="height: 649px;">
    <form id="formulario" method="post">
        <h2 class="sr-only">Login Form</h2>
        <div class="illustration">
            <i class="icon ion-ios-navigate"></i>
        </div>
        <div class="form-group">
            <input class="form-control" type="text" name="user" placeholder="User">
        </div>
        <div class="form-group">
            <input class="form-control" type="password" name="password" placeholder="Password">
        </div>
        <div class="form-group">
            <input type="hidden" id="action" value="login">
            <button class="btn btn-primary btn-block" type="submit">Log In</button>
        </div>
        <a class="forgot" href="#">Forgot your email or password?</a>
    </form>
</div>

<?php
    include 'assets/inc/templates/footer.php';
?>