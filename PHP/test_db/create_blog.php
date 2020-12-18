<?php
    // Move all this mini project to its own php folder
    include 'assets/inc/functions/sessions.php';
    include 'assets/inc/functions/functions.php';
    include 'assets/inc/templates/header.php';
?>

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

    <div class="container" id="formBlog">
        <form id="formCreateBlog" method="post">
            <h1>Create a new blog!</h1><br>

            <!-- Title -->
            <div class="form-group">
                <input class="form-control" type="text" name="title" id="title" placeholder="Title">
            </div>

            <!-- Description -->
            <div class="form-group">
                <textarea class="form-control" type="text" name="description" id="description" placeholder="Write all about your blog!" rows="3"></textarea>
            </div>

            <!-- Cover Image -->
            <div class="form-group">
                <label for="exampleFormControlFile1"><i>Cover Image</i></label>
                <input type="file" class="form-control-file" id="image">
            </div>

            <!-- User ID -->
            <!-- Save button and send action 'createBlog' -->
            <div class="form-group">
                <?php $user = getUserProfile(); ?>
                <input type="hidden" id="action" value="createBlog">
                <input type="hidden" id="id_user" value="<?php echo $user['id'] ?>">
                <button class="btn btn-primary btn-block" type="submit">Save</button>
            </div>
        </form>
    </div>

<?php
    include 'assets/inc/templates/footer.php';
?>
