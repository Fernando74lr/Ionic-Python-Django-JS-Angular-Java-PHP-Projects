<?php
    include 'assets/inc/function/functions.php';
    include 'assets/inc/templates/header.php';
?>

    <div class="register-photo" style="height: 649px;">
        <div class="form-container" style="margin-top: 22px;">
            <!-- Image -->
            <div class="image-holder"></div>

            <!-- Form -->
            <form id="formulario" method="post">

                <!-- Title -->
                <h2 class="text-center">
                    <strong>Create</strong> an account.
                </h2>

                <!-- User -->
                <div class="form-group">
                    <input class="form-control" type="text" name="user" id="user" placeholder="User">
                </div>

                <!-- Email -->
                <div class="form-group">
                    <input class="form-control" type="email" name="email" id="email" placeholder="Email">
                </div>

                <!-- Description -->
                <div class="form-group">
                    <textarea class="form-control" type="text" name="description" id="description" placeholder="A little description of your profile" rows="5"></textarea>
                </div>                                

                <!-- Password -->
                <div class="form-group">
                    <input class="form-control" type="password" name="password" id="password" placeholder="Password">
                </div>

                <!-- Password repeat -->
                <div class="form-group">
                    <input class="form-control" type="password" name="password-repeat" id="password_repeat" placeholder="Password (repeat)">
                </div>

                <!-- Agree license terms -->
                <div class="form-group">
                    <div class="form-check">
                        <label class="form-check-label">
                            <input class="form-check-input" type="checkbox">
                            I agree to the license terms.
                        </label>
                    </div>
                </div>

                <!-- Sign Up button and send action 'create' -->
                <div class="form-group">
                    <input type="hidden" id="action" value="create">
                    <button class="btn btn-primary btn-block" type="submit">Sign Up</button>
                </div>
                
                <!-- Log in redirect -->
                <a class="already" href="login.php">You already have an account? Login here.</a>
            </form>
        </div>
    </div>

    <script src="assets/js/forms.js"></script>
<?php
    include 'assets/inc/templates/footer.php';
?>