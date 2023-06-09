<!--== include css etc. for website once ==-->
<?php
include_once 'sections/head.php';
?>
<!DOCTYPE html>
<html lang="en">
<!--=============== HEAD ===============-->

<!--=============== END ===============-->

<body>
  <main>
    <section class="glass">
      <div id="dashboard" class="dashboard">
        <!--=============== MENU ===============-->
        <!--== Using php to load the side menu links from another php so i can make edits once instead of coutnless times ==-->
        <?php
        include_once 'sections/sidemenu.php';
        ?>
        <!--=============== END ===============-->
      </div>
      <div class="mainbody">
        <!--=============== HEADER ===============-->
        <!--== include toggle button for side menu ==-->
        <?php
        include_once 'sections/header.php';
        ?>
        <!--=============== END ===============-->
        <!--=============== MAIN ===============-->
        <!--== load in main section for index ==-->
        <div id="DIVID">
          <?php
          include('sections/main.php');
          ?>
          <?php
          include('sections/connect_postgres.php');
          ?>
        </div>
        <!--=============== END ===============-->
    </section>
  </main>
</body>

</html>