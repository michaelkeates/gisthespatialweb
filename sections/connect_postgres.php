<div class="cardalert">
    <div class="card-info">
        <?php
        ini_set('display_errors', 0);
        //include 'src/ChromePhp.php';

        $host = '192.168.0.89';
        $port = '5432';
        $dnmame = 'gis';
        $user = 'docker';
        $password = 'xWIqbr1Gyji4vwd4rCSm';

        //establish connection to database
        $conn = pg_connect("host=$host port=$port dbname=$dnmame user=$user password=$password");

        //if connection fail update displaymessage to alert user
        if (!$conn) {
            echo '<p>Connection Failed!</p>';
            exit;
        }
        //if connection is successful update displaymessage to alert user
        else {
            echo '<p>Connection Succeeded for Tutorial 16 Task 2!</p>';
        }
        ?>
    </div>
</div>