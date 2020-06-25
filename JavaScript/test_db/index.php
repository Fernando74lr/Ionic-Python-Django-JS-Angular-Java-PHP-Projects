<?php
    include 'assets/inc/functions/sessions.php';
    include 'assets/inc/functions/functions.php';
    include 'assets/inc/templates/header.php';
?>

    <nav class="navbar navbar-light navbar-expand-md" style="background-color: #31343a;"> <!-- #31343a -->
        <div class="container-fluid"><a class="navbar-brand" href="#" style="color: #ffffff;font-size: 30px;">Test_DB</a><button data-toggle="collapse" class="navbar-toggler text-center" data-target="#navcol-1"><span class="sr-only">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
            <div
                class="collapse navbar-collapse d-lg-flex justify-content-lg-end" id="navcol-1" style="font-size: 20px;">
                <ul class="nav navbar-nav">
                    <li class="nav-item" role="presentation"><a class="nav-link active" href="login.php" style="color: #ffffff;">Log in</a></li>
                    <li class="nav-item" role="presentation"><a class="nav-link" href="register.php" style="color: #ffffff;">Register</a></li>
                    <li class="nav-item" role="presentation"><a class="nav-link" href="login.php?logout=true" style="color: #ffffff;">Log out</a></li>
                </ul>
        </div>
        </div>
    </nav>

<?php
    include 'assets/inc/templates/footer.php';
?>