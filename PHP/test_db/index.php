<?php
    include 'assets/inc/functions/sessions.php';
    include 'assets/inc/functions/functions.php';
    include 'assets/inc/templates/header.php';
?>

    <!-- Navigation bar -->
    <nav class="navbar navbar-light navbar-expand-md" style="background-color: #31343a;"> <!-- #31343a -->
        <div class="container-fluid"><a class="navbar-brand" href="#" style="color: #ffffff;font-size: 30px;">Blog Space</a><button data-toggle="collapse" class="navbar-toggler text-center" data-target="#navcol-1"><span class="sr-only">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
            <div
                class="collapse navbar-collapse d-lg-flex justify-content-lg-end" id="navcol-1" style="font-size: 20px;">
                <ul class="nav navbar-nav">
                    <!-- <li class="nav-item" role="presentation"><a class="nav-link active" href="login.php" style="color: #ffffff;">Log in</a></li> -->
                    <li class="nav-item" role="presentation"><a class="nav-link" href="create_blog.php" style="color: #ffffff;">Create Blog</a></li>
                    <li class="nav-item" role="presentation"><a class="nav-link" href="login.php?logout=true" style="color: #ffffff;">Log out</a></li>
                </ul>
        </div>
        </div>
    </nav>

    <!-- Get user data -->
    <?php
        $user = getUserProfile();
        $id = $user['id'];
    ?>

    <!-- Welcome and info user -->
    <div class="jumbotron">
        <h1 class="display-4"><span id="greet"></span>, <?php echo $user['name'] ?>!</h1>
        <p class="lead"><?php echo $user['description'] ?></p>
        <hr class="my-4">
        <p><?php echo $user['email'] ?></p>
    </div>


    <!-- Get the blogs of the user -->
    <?php
        try {
            require_once('assets/inc/functions/connection.php');
            $sql = "SELECT * FROM blogs WHERE id_user = {$id} ORDER BY id_blog DESC";
            $result = $conn->query($sql);
        } catch (\Exception $e) {
            echo $e->getMessage();
        }
    ?>

    <!-- Display blogs -->
    <div class="container">

        <h1>My blogs</h1><br>

        <?php while($blogs = $result->fetch_assoc()) { ?>
            <div class="card">
                <div class="card-header">
                    <?php echo $blogs['title_blog'] ?>
                </div>
                <div class="card-body">
                    <blockquote class="blockquote mb-0">
                    <p><?php echo $blogs['description_blog'] ?></p>
                    </blockquote>
                </div>
            </div>
            <br>
        <?php } // End while ?>
    </div>

<?php
    include 'assets/inc/templates/footer.php';
?>
